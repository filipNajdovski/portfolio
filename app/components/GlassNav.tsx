// components/GlassNav.tsx
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface NavItem {
  id: string;
  label: string;
}

// Module scope: a new array each render would invalidate every callback that
// depends on it, which is what made the effect dependencies unsatisfiable.
const NAV_ITEMS: NavItem[] = [
  { id: 'intro', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'keypoints', label: 'Technologies' },
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Testimonials' },
  { id: 'reviews', label: 'Feedback' },
  { id: 'contact', label: 'Contact' }
];

/**
 * The mobile picker repeats the item list so there is always content on both
 * sides of centre. Scroll position is kept inside the middle copy and
 * teleported by exactly one set width whenever it drifts out — because the
 * content repeats, the jump is invisible and the strip reads as an endless
 * loop. The repeats are also what let the first and last items reach the
 * centre, which a single set cannot do.
 */
const REPEATS = 3;
const MIDDLE_SET = 1;
/** How long after the last scroll event we treat the strip as settled. */
const SETTLE_MS = 140;

const GlassNav = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const observer = useRef<IntersectionObserver | null>(null);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const setWidthRef = useRef(0);
  /** Suppresses settle handling while we are the ones moving the strip. */
  const programmatic = useRef(false);
  const settleTimer = useRef<number | null>(null);
  const releaseTimer = useRef<number | null>(null);

  const setupIntersectionObserver = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Adjust these values to change when the section becomes active
      threshold: 0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    NAV_ITEMS.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.current?.observe(section);
      }
    });
  }, []);

  const updateSliderPosition = useCallback(() => {
    const activeElement = document.querySelector(
      `.glass-nav-desktop [data-nav-item][data-id="${activeSection}"]`
    );
    if (activeElement) {
      const { offsetWidth, offsetTop } = activeElement as HTMLElement;
      setSliderStyle({ width: offsetWidth, left: offsetTop });
    }
  }, [activeSection]);

  const measureSet = useCallback(() => {
    const strip = trackRef.current?.querySelector<HTMLElement>('.nav-items');
    if (strip) setWidthRef.current = strip.scrollWidth / REPEATS;
  }, []);

  /** Keep the scroll offset inside the middle copy so there is always slack either side. */
  const wrap = useCallback(() => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!track || !setWidth) return;

    if (track.scrollLeft < setWidth * 0.5) {
      track.scrollLeft += setWidth;
    } else if (track.scrollLeft > setWidth * 1.5) {
      track.scrollLeft -= setWidth;
    }
  }, []);

  /**
   * Scroll the copy of `id` nearest the current position to dead centre.
   *
   * `preferMiddle` targets the middle copy regardless of proximity, which is
   * required on first paint: at scrollLeft 0 the nearest copy is in the first
   * set, its centred target computes negative, the browser clamps it to 0, and
   * every later centring near the left edge then clamps too.
   */
  const centreOn = useCallback((
    id: string,
    behavior: ScrollBehavior = 'smooth',
    preferMiddle = false
  ) => {
    const track = trackRef.current;
    if (!track) return;

    const copies = Array.from(
      track.querySelectorAll<HTMLElement>(`[data-nav-item][data-id="${id}"]`)
    );
    if (!copies.length) return;

    const viewCentre = track.scrollLeft + track.clientWidth / 2;
    const nearest = preferMiddle
      ? copies.find((c) => c.dataset.set === String(MIDDLE_SET)) ?? copies[0]
      : copies.reduce((a, b) => {
          const ca = Math.abs(a.offsetLeft + a.offsetWidth / 2 - viewCentre);
          const cb = Math.abs(b.offsetLeft + b.offsetWidth / 2 - viewCentre);
          return ca <= cb ? a : b;
        });

    programmatic.current = true;
    if (releaseTimer.current) window.clearTimeout(releaseTimer.current);

    track.scrollTo({
      left: nearest.offsetLeft + nearest.offsetWidth / 2 - track.clientWidth / 2,
      behavior,
    });

    releaseTimer.current = window.setTimeout(
      () => { programmatic.current = false; },
      behavior === 'smooth' ? 520 : 60
    );
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Temporarily disconnect observer to prevent conflict
    observer.current?.disconnect();
    setActiveSection(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Reconnect observer after a delay
    window.setTimeout(() => setupIntersectionObserver(), 1000);
  }, [setupIntersectionObserver]);

  /** Free-drag then settle: whichever item lands nearest centre becomes selected. */
  const handleTrackScroll = useCallback(() => {
    // Never wrap mid-animation: assigning scrollLeft while a smooth scroll is
    // in flight cancels it and leaves the strip off-target.
    if (programmatic.current) return;
    wrap();

    if (settleTimer.current) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;

      const viewCentre = track.scrollLeft + track.clientWidth / 2;
      const items = Array.from(
        track.querySelectorAll<HTMLElement>('[data-nav-item]')
      );
      if (!items.length) return;

      const nearest = items.reduce((a, b) => {
        const ca = Math.abs(a.offsetLeft + a.offsetWidth / 2 - viewCentre);
        const cb = Math.abs(b.offsetLeft + b.offsetWidth / 2 - viewCentre);
        return ca <= cb ? a : b;
      });

      const id = nearest.dataset.id;
      if (!id) return;

      if (id === activeSection) centreOn(id);
      else scrollToSection(id); // the activeSection effect re-centres
    }, SETTLE_MS);
  }, [wrap, activeSection, centreOn, scrollToSection]);

  useEffect(() => {
    setupIntersectionObserver();
    return () => observer.current?.disconnect();
  }, [setupIntersectionObserver]);

  // Initial measure + jump the active item to centre with no animation. Waits a
  // frame so the strip has been laid out and clientWidth is real.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      measureSet();
      centreOn(activeSection, 'auto', true);
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measureSet, centreOn]);

  useEffect(() => {
    updateSliderPosition();
    centreOn(activeSection);
  }, [activeSection, updateSliderPosition, centreOn]);

  useEffect(() => {
    const onResize = () => {
      updateSliderPosition();
      measureSet();
      centreOn(activeSection, 'auto');
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
    };
  }, [updateSliderPosition, measureSet, centreOn, activeSection]);

  return (
    <>
      {/* Desktop version - fixed to the right edge, vertical */}
      <nav className="glass-nav-desktop" aria-label="Sections">
        <div className="nav-container glass">
          <div className="slider" style={{ height: 40, top: sliderStyle.left }} />
          <div className="nav-items">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                data-nav-item
                data-id={item.id}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile version - looping picker at the bottom, selection always centred */}
      <nav className="glass-nav-mobile" aria-label="Sections">
        <div
          className="nav-container glass"
          ref={trackRef}
          onScroll={handleTrackScroll}
        >
          <div className="nav-items">
            {Array.from({ length: REPEATS }).flatMap((_, set) =>
              NAV_ITEMS.map((item) => {
                const isClone = set !== MIDDLE_SET;
                return (
                  <button
                    key={`${set}-${item.id}`}
                    type="button"
                    data-nav-item
                    data-id={item.id}
                    data-set={set}
                    // clones exist only to make the strip loop; keep them out of
                    // the accessibility tree and the tab order
                    aria-hidden={isClone || undefined}
                    tabIndex={isClone ? -1 : 0}
                    aria-current={
                      !isClone && activeSection === item.id ? 'true' : undefined
                    }
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Desktop styles - positioned on the right */
        .glass-nav-desktop {
          position: fixed;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          z-index: 1000;
          display: none;
        }

        /* Mobile styles - positioned at bottom center */
        .glass-nav-mobile {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          justify-content: center;
          width: auto;
          max-width: 100vw;
        }

        /* surface comes from the shared .glass class in globals.css */
        .nav-container {
          padding: 6px;
          position: relative;
          overflow: hidden;
        }

        .nav-items {
          display: flex;
          position: relative;
          z-index: 2;
        }

        .nav-item {
          padding: 10px 16px;
          cursor: pointer;
          font: inherit;
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 0.9rem;
          color: rgba(255, 255, 255, 0.72);
          background: transparent;
          /* transparent border on the base state so going active cannot change
             the item's box size — the strip's geometry has to stay stable for
             the centring maths, and a resizing pill was getting clipped */
          border: 1px solid transparent;
          border-radius: 12px;
          transition: color 0.25s ease, background-color 0.25s ease,
            border-color 0.25s ease;
          position: relative;
          z-index: 2;
          text-align: center;
          white-space: nowrap;
          -webkit-appearance: none;
          appearance: none;
        }

        .nav-item.active {
          color: #e5bb89;
          font-weight: 600;
          background: rgba(229, 187, 137, 0.12);
          border-color: rgba(229, 187, 137, 0.4);
        }

        .slider {
          position: absolute;
          left: 6px;
          right: 6px;
          border-radius: 12px;
          z-index: 1;
          transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Show desktop version on larger screens */
        @media (min-width: 1024px) {
          .glass-nav-desktop {
            display: block;
          }
          .glass-nav-mobile {
            display: none;
          }

          /* Vertical layout for desktop */
          .glass-nav-desktop .nav-items {
            flex-direction: column;
          }
        }

        @media (max-width: 1023px) {
          .glass-nav-desktop .slider {
            display: none;
          }

          /* Looping mode picker. Snapping is done in JS on settle rather than
             with scroll-snap, because assigning scrollLeft to wrap the loop
             fights CSS snapping and produces visible stutter. */
          .nav-container {
            max-width: 94vw;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
            overscroll-behavior-x: contain;
            -webkit-overflow-scrolling: touch;
            /* fade the ends so the strip reads as continuous */
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 18%,
              #000 82%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 18%,
              #000 82%,
              transparent 100%
            );
          }

          .nav-container::-webkit-scrollbar {
            display: none;
          }

          .nav-items {
            width: max-content;
          }
        }

        @media (max-width: 640px) {
          .nav-item {
            padding: 8px 12px;
            font-size: 0.8rem;
            line-height: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default GlassNav;
