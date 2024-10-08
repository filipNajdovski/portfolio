"use client";
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import logo from "./../../images/filip-logo.png"

const GlobeComponent = () => {
  const [dataState, setDataState] = useState('complete');

  useEffect(() => {
    // Update to client-side state after mount
    setDataState('complete');
  }, []);

  return (
    <>
      <Script
        src="/hyper-globe-2.js"
        strategy="afterInteractive"
        type="module"
      //   onLoad={() => {
      //     if (typeof window !== 'undefined' && !customElements.get('hyper-globe')) {
      //       // Ensure custom element is defined after the script loads
      //       customElements.define('hyper-globe', window.HyperGlobe);
      //     }
      //   }
      // }
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
          "--marker-size": "1",
          "--title-position": "0 -1",
          "--title-padding": "1.2",
          "--text-size": "1",
          "--text-height": "1.1",
          "--text-padding": "0",
          "--line-color": "#999999",
          "--line-thickness": "1.3",
          "--line-offset": "3",
          "--antarctica": "true",
          "--text-position": "-1 -1",
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
          "--text-color": "#999999",
          "--point-color": "#ffffff"
        }}
        data-location="27 17.5813"
        data-version="21"
        data-state={dataState} 
        className={dataState === 'complete' ? 'complete' : ''}
      >
      </hyper-globe>
      <style jsx>{`
        @media (max-width: 768px) {
          #my-globe {
            height: "50vh"
          }
        }

        @media (max-width: 480px) {
          #my-globe {
            height: "50vh"
          }
        }
      `}</style>
    </>
  );
}

export default GlobeComponent;
