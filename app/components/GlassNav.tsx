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

const GlassNav = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const observer = useRef<IntersectionObserver | null>(null);

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
    const activeElement = document.querySelector(`[data-nav-item][data-id="${activeSection}"]`);
    if (activeElement) {
      const { offsetWidth, offsetLeft } = activeElement as HTMLElement;
      setSliderStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeSection]);

  // The mobile nav is a swipeable mode picker (like the iPhone camera's
  // photo/video selector). It overflows its 90vw container, so the active item
  // has to be scrolled to the centre or the later sections sit off-screen with
  // nothing hinting they exist.
  const centreActiveItem = useCallback(() => {
    const items = document.querySelectorAll<HTMLElement>(
      `.glass-nav-mobile [data-nav-item][data-id="${activeSection}"]`
    );
    items.forEach((item) => {
      const track = item.parentElement?.parentElement; // .nav-items -> .nav-container
      if (!track || track.scrollWidth <= track.clientWidth) return;
      const target = item.offsetLeft + item.offsetWidth / 2 - track.clientWidth / 2;
      track.scrollTo({
        left: Math.max(0, Math.min(target, track.scrollWidth - track.clientWidth)),
        behavior: 'smooth',
      });
    });
  }, [activeSection]);

  useEffect(() => {
    setupIntersectionObserver();

    return () => {
      observer.current?.disconnect();
    };
  }, [setupIntersectionObserver]);

  useEffect(() => {
    updateSliderPosition();
    centreActiveItem();

    window.addEventListener('resize', updateSliderPosition);
    return () => window.removeEventListener('resize', updateSliderPosition);
  }, [updateSliderPosition, centreActiveItem]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Temporarily disconnect observer to prevent conflict
      if (observer.current) {
        observer.current.disconnect();
      }
      
      setActiveSection(sectionId);
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Reconnect observer after a delay
      setTimeout(() => {
        setupIntersectionObserver();
      }, 1000);
    }
  };

  return (
    <>
      {/* Desktop version - positioned on the left */}
      <nav className="glass-nav-desktop">
        <div className="nav-container glass">
          <div className="slider" style={sliderStyle} />
          <div className="nav-items">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                data-nav-item
                data-id={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile version - positioned at bottom center */}
      <nav className="glass-nav-mobile">
        <div className="nav-container glass">
          <div className="slider" style={sliderStyle} />
          <div className="nav-items">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                data-nav-item
                data-id={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Desktop styles - positioned on the left */
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
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
          position: relative;
          z-index: 2;
          text-align: center;
          border-radius: 12px;
          white-space: nowrap;
        }

        .nav-item.active {
          color: #e5bb89;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 6px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .slider {
          position: absolute;
          top: 6px;
          bottom: 6px;
          border-radius: 12px;
          z-index: 1;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
          
          .glass-nav-desktop .slider {
            width: 100%;
            height: 40px;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          }
        }

        @media (max-width: 1023px) {
          /* iPhone-camera-style mode picker: swipeable, snapping, with the
             clipped items fading at the edges so it reads as scrollable. */
          .nav-container {
            max-width: 90vw;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-snap-type: x mandatory;
            scroll-padding: 0 50%;
            overscroll-behavior-x: contain;
            -webkit-overflow-scrolling: touch;
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 14%,
              #000 86%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 14%,
              #000 86%,
              transparent 100%
            );
          }

          .nav-container::-webkit-scrollbar {
            display: none;
          }

          .nav-items {
            width: max-content;
          }

          .nav-item {
            scroll-snap-align: center;
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