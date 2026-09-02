"use client";
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import logo from "./../../images/filip-logo.png"

// --animation: position makes the vertex shader jitter every point by
// noise()*--animation-intensity. The library has no interaction hook, so the
// shake is driven from here; the renderer re-reads the property every frame.
//
// Intensity is very sensitive: anything held above ~0.15 scatters the points
// far enough that the globe stops reading as a globe. So a touch fires a
// transient impulse that decays straight back to rest rather than being held
// while the pointer is down — it lands as a jolt and never sits in the mushy
// dissolved state.
const REST_INTENSITY = 0.1;
const IMPULSE_PEAK = 0.34;
const DECAY_MS = 450;

// Champagne gold — the accent already used on every section heading. Warm gold
// reads clearly against both the navy ground and the cyan background mesh,
// where white would disappear into the white dot cloud.
const ACCENT = '#e5bb89';

// The library has no glow variable. The fragment shader multiplies each point's
// alpha by a sampled sprite (`c.a *= t.a`), so a soft radial-gradient sprite in
// --point-image is what produces the glow. public/globe-point.png is a 64x64
// RGBA radial falloff; untextured points fall back to hard squares.
//
// NOTE: url-type vars are parsed with /^url\(\s*(["']?)([^"'].+)\1\s*\)$/ and a
// value that doesn't match silently reverts to the default. The url(...) wrapper
// is required — a bare path or data URI is discarded with no error.
const GLOW_POINT = "url('/globe-point.png')";

// Gold marker with a soft halo, replacing the library's default grey circle.
const GOLD_MARKER =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Im0iIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U1YmI4OSIgc3RvcC1vcGFjaXR5PSIwLjU1Ii8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNlNWJiODkiIHN0b3Atb3BhY2l0eT0iMC4xNCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2U1YmI4OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9InVybCgjbSkiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiBmaWxsPSIjZTViYjg5Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmM2UyIiBzdHJva2Utb3BhY2l0eT0iMC45IiBzdHJva2Utd2lkdGg9IjEuMSIvPjwvc3ZnPg==')";

// The hyper-globe element builds one Marker/Text per slotted child, reading
// `data-location` ("lat lon") and `title` off each. A `data-locations` attribute
// on the host is not part of its API and is ignored.
// Six of the seven cities sit in Europe/the Med and their labels collide at this
// globe scale, so each text gets its own --text-position / --text-offset to fan
// it clear of its neighbours. Both vars are read per text element, not just off
// the host. position is [x, y] direction; x === 0 centres the label.
const LOCATIONS = [
  { name: 'Hannover', lat: 52.3759, lon: 9.7320, pos: '-1 -1', off: 0.9 },
  { name: 'Berlin', lat: 52.5200, lon: 13.4050, pos: '1 -1', off: 0.9 },
  { name: 'Zurich', lat: 47.3769, lon: 8.5417, pos: '-1 0', off: 0.6 },
  { name: 'Bitola', lat: 41.0314, lon: 21.3347, pos: '1 0', off: 0.6 },
  { name: 'Malta', lat: 35.8997, lon: 14.5147, pos: '-1 1', off: 0.7 },
  { name: 'Nicosia', lat: 35.1856, lon: 33.3823, pos: '1 1', off: 0.7 },
  { name: 'Melbourne', lat: -37.8136, lon: 144.9631, pos: '0 1', off: 0.5 },
];

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const el = globeRef.current;
    if (!el) return;

    let raf = null;
    let startedAt = 0;

    const tick = () => {
      const t = (performance.now() - startedAt) / DECAY_MS;
      if (t >= 1) {
        el.style.setProperty('--animation-intensity', String(REST_INTENSITY));
        raf = null;
        return;
      }
      // ease-out cubic back down to rest
      const fade = (1 - t) ** 3;
      const value = REST_INTENSITY + (IMPULSE_PEAK - REST_INTENSITY) * fade;
      el.style.setProperty('--animation-intensity', value.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    // a fresh touch restarts the impulse rather than stacking
    const shake = () => {
      startedAt = performance.now();
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    el.addEventListener('pointerdown', shake);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', shake);
    };
  }, []);

  return (
    <>
      {/*
        public/hyper-globe-2.js is the upstream library plus a locally appended
        customElements.define('hyper-globe', HyperGlobe) — keep that tail if the
        library is ever updated, or the element never upgrades.
        crossOrigin matches the credentials mode Next.js uses for its preload;
        without it the preload is discarded and the module is fetched twice.
      */}
      <Script
        src="/hyper-globe-2.js"
        strategy="afterInteractive"
        type="module"
        crossOrigin="anonymous"
      />
      <Image
            src={logo} // Path to your image
            alt="logo"
            width={150} // Desired width
            height={150} // Desired height
            className="absolute left-1/2 translate-x-[-75px] top-1/2 translate-y-[-75px]"
          />
      <hyper-globe
        id="my-globe"
        ref={globeRef}
        style={{
          "--preview-color": "#111111",
          margin: "auto",
          width: "100vw",
          height: "85vh",
          position: "relative",
          "--globe-scale": "0.85",
          "--map-density": "0.85",
          "--map-height": "0.75",
          "--backside-opacity": "0.25",
          "--backside-transition": "1",
          "--marker-size": "0.75",
          "--marker-image": GOLD_MARKER,
          "--title-position": "0 -1",
          "--title-padding": "1.2",
          "--text-size": "0.8",
          "--text-height": "1.1",
          "--text-padding": "0",
          // x===0 makes the library centre-align the label over the marker.
          // --text-offset pushes radially outward from the globe surface, so
          // keep it small or markers near the limb fling their labels to the edge.
          "--text-offset": "0.3",
          "--text-outline": "#001028",
          "--line-color": "#999999",
          "--line-thickness": "1.3",
          "--line-offset": "3",
          "--antarctica": "true",
          "--text-position": "0 -1",
          "--islands": "true",
          "--globe-damping": "0.65",
          "--overlay-offset": "3",
          "--overlay-position": "1 0",
          "--globe-latitude-limit": "30.5",
          "--autorotate": "true",
          "--autorotate-speed": "0.6",
          "--autorotate-delay": "0.5",
          "--animation": "position",
          "--animation-intensity": String(REST_INTENSITY),
          "--animation-scale": "0.08",
          "--animation-speed": "0.80",
          "--marker-offset": "-0.6",
          "--text-color": ACCENT,
          "--point-color": "#ffffff",
          // glow sprite needs a larger point to have room to fall off
          "--point-image": GLOW_POINT,
          "--point-size": "1.6"
        }}
        data-version="21"
        data-state="complete"
        className="complete"
      >
        {LOCATIONS.map((l) => (
          <div
            key={`marker-${l.name}`}
            slot="markers"
            data-location={`${l.lat} ${l.lon}`}
            title={l.name}
          />
        ))}

        {LOCATIONS.map((l) => (
          <div
            key={`text-${l.name}`}
            slot="texts"
            data-location={`${l.lat} ${l.lon}`}
            title={l.name}
            style={{ '--text-position': l.pos, '--text-offset': String(l.off) }}
          />
        ))}
      </hyper-globe>
    </>
  );
}

export default GlobeComponent;
