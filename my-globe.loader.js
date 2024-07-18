{
	
	let html = `
<hyper-globe id="my-globe" style="--preview-color:#111111; max-width: 1000px; --globe-scale:0.73; --map-density:0.75; --map-height:0.68; --point-size:0.5; --backside-opacity:0.24; --backside-transition:1; --marker-size:1; --title-position:0 -1; --title-padding:1.2; --text-size:1; --text-height:1.1; --text-padding:0; --line-color:#999999; --line-thickness:1.3; --line-offset:3; --antarctica:true; --text-position:-1 -1; --islands:true; --globe-damping:0.65; --overlay-offset:3; --overlay-position:1 0; --globe-latitude-limit:30.5; --autorotate:true; --autorotate-speed:0.3; --autorotate-delay:1.5; --animation:position; --animation-intensity:0.1; --animation-scale:0.08; --animation-speed:0.76; --marker-offset:-0.6; --text-color:#999999; --point-color:#00c0f0;" data-location="27 17.5813" data-version="21">
<div slot="overlays" class="mkd" style="opacity: 0.24; transform: translate(390.442px, 308.884px) translate(0%, -50%); z-index: 1; border-radius: 3px; pointer-events: none;" data-location="1 46" id="mkdmarker"><div class="typewriter2">
  <h1>Opportunities don't happen, you create them.</h1>
</div>
</div>
<div slot="overlays" class="mkd" style="opacity: 0.450237; transform: translate(-13.2678px, 301.127px) translate(0%, -50%); z-index: 4; font-weight: bold; pointer-events: none;" data-location="13 103"><div class="typewriter">
  <h1>Talent wins games, but teamwork and intelligence win championships.</h1>
</div>
</div>
<div slot="overlays" class="mkd" style="opacity: 0.281288; transform: translate(251.645px, 61.8871px) translate(0%, -50%); z-index: 3;" data-location="32 65"><div class="typewriter3">
  <h1>Nothing is impossible.The word itself says 'I'M POSSIBLE!'</h1>
</div>
</div>
<a slot="texts" class="globe-text" data-location="0 0"></a>
<div slot="overlays" class="globe-overlay" data-location="41 -130" style="opacity: 1; transform: translate(611.724px, 253.682px) translate(0%, -50%); z-index: 102;"><div class="typewriter4">
  <h1>Either you run the day or the day runs you.</h1>
</div></div>
<div slot="overlays" class="globe-overlay" data-location="25 55" style="opacity: 0.24; transform: translate(322.706px, 111.13px) translate(0%, -50%); z-index: 2;"><div class="typewriter5">
  <h1>If you can dream it, you can do it.</h1>
</div></div>
<span slot="lines" class="globe-line" data-location="1 46"></span>
<span slot="lines" class="globe-line" data-location="13 103"></span>
<span slot="lines" class="globe-line" data-location="32 65"></span>
<span slot="lines" class="globe-line" data-location="41 -130"></span>
<span slot="lines" class="globe-line" data-location="25 55"></span>
</hyper-globe>
	`;
	
	let css = `
.mkd {
 display:grid; padding:1rem; color:#1AA1FF; font-weight:bold;}
 .globe-line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
  -webkit-animation: drop 7s 0s infinite;
          animation: drop 7s 0s infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}


.glob-line::after {
  -webkit-animation-delay: 2.5s;
          animation-delay: 2.5s;
}

@-webkit-keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}

@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}

.typewriter h1 {
  color: #fff;
  font-size:16px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 4s steps(30, end) infinite,
    blink-caret .5s step-end infinite;
}

.typewriter2 h1 {
  color: #fff;
  font-size:16px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 5s steps(30, end) infinite,
    blink-caret .5s step-end infinite;
}

.typewriter3 h1 {
  color: #fff;
  font-size:16px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 6s steps(30, end) infinite,
    blink-caret .5s step-end infinite;
}

.typewriter4 h1 {
  color: #fff;
  font-size:16px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 7s steps(30, end) infinite,
    blink-caret .5s step-end infinite;
}

.typewriter5 h1 {
  color: #fff;
  font-size:16px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 8s steps(30, end) infinite,
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  70%,to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #fff }
}
`;
	
	let script = `
let globe = document.getElementById("my-globe")
let animated = false;

globe.onpointerdown = () => {
	if ( animated ) return;
	
	animated = true;
	
	// animate intensity
	globe.ani(
		{ '--animation-intensity': 1 },
		{
			duration: 300,
			onfinish: () => {
			
				// slowly back to normal
				globe.ani(
					{ '--animation-intensity': 0.1 },
					{
						duration: 1400,
						onfinish: () => {
							animated = false;						
						}
					}
				);
			
			}
		}
	);

};
`;
	
	
	if ( ! self.confGlobe ) {
		// get the script element
		let elem = document.currentScript;
		if ( elem && elem.isConnected && elem.closest('body') && elem.getAttribute('src') ) {
			
			// get baseurl from script src
			let url = new URL( elem.getAttribute('src'), self.location.href ).href;
			if ( url.startsWith('http') ) {		
				let baseurl = url.substr(0, url.lastIndexOf('/')+1);		
				
				// import hyper globe module once
				if ( ! self.hyperGlobe ) {
					self.hyperGlobe = true;
					import( baseurl + 'hyper-globe.min.js' );
				}			
				
				// inject html
				html = html.replace('<hyper-globe ', `<hyper-globe data-baseurl="${baseurl}" `);
				elem.insertAdjacentHTML('afterend', html);
				if (css)	elem.nextElementSibling.insertAdjacentHTML('afterend', `<style>${css}</style>`);
				if (script) elem.nextElementSibling.addEventListener('complete', new Function(script));
				
			} else {
				console.error('This script was used in the wrong way. It must be loaded via the https: or http: protocol.');
			}
			
		} else {
			console.error('This script was used in the wrong way. It must be a non-module script inside the body element.');
		}
	}	
	
}