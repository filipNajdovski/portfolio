"use client";
import Script from 'next/script';
import Image from 'next/image';
import logo from "./../../images/filip-logo.png"

// The hyper-globe element builds one Marker/Text per slotted child, reading
// `data-location` ("lat lon") and `title` off each. A `data-locations` attribute
// on the host is not part of its API and is ignored.
const LOCATIONS = [
  { name: 'Bitola', lat: 41.0314, lon: 21.3347 },
  { name: 'Zurich', lat: 47.3769, lon: 8.5417 },
  { name: 'Melbourne', lat: -37.8136, lon: 144.9631 },
  { name: 'Hannover', lat: 52.3759, lon: 9.7320 },
  { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
  { name: 'Nicosia', lat: 35.1856, lon: 33.3823 },
  { name: 'Malta', lat: 35.8997, lon: 14.5147 },
];

const GlobeComponent = () => {
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
        style={{
          "--preview-color": "#111111",
          margin: "auto",
          width: "100vw",
          height: "85vh",
          position: "relative",
          "--globe-scale": "0.85",
          "--map-density": "0.85",
          "--map-height": "0.75",
          "--point-size": "0.5",
          "--backside-opacity": "0.25",
          "--backside-transition": "1",
          "--marker-size": "0.55",
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
          "--animation-intensity": "0.1",
          "--animation-scale": "0.08",
          "--animation-speed": "0.80",
          "--marker-offset": "-0.6",
          "--text-color": "#ffffff",
          "--point-color": "#ffffff"
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
          />
        ))}
      </hyper-globe>
    </>
  );
}

export default GlobeComponent;
