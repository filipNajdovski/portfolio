"use client"
import { useEffect, useState } from 'react';
import Script from 'next/script';
import globeScript from './../../hyper-globe.min.js'


const HyperGlobe = () => {
  const [dataState, setDataState] = useState('complete');

  useEffect(() => {
    // Update to client-side state after mount
    setDataState('complete');
  }, []);

  return (
    <>
    <Script 
        src={globeScript}
      />
        <hyper-globe
            id="my-globe"
            style={{
              "--preview-color": "#111111",
              margin: "auto",
              maxWidth: "100vw",
              maxHeight: "100vh",
              "--globe-scale": "0.73",
              "--map-density": "0.90",
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
    </>
  )
}
export default HyperGlobe