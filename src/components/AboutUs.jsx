import React, { useState, useEffect } from 'react';

// Self-contained SVG Icons
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XTwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const ANIMATED_WORDS = [
  'KINETIC LIGHT & SHADOW',
  'MONOCHROMATIC ESSENCE',
  'ARCHITECTURAL DEPTH',
  'CONTEMPORARY MASTERPIECES',
  'AVANT-GARDE SOUL'
];

export default function AboutUs() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
        setFadeState('in');
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      className="relative w-full bg-white text-black py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-b border-neutral-200"
    >
      {/* Background Subtle Ambient Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '90px 90px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* 2-COLUMN MAIN CONTENT: EXACT HORIZONTAL & VERTICAL ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* LEFT SIDE: EDITORIAL CONTENTS & ANIMATED TEXT */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            
            <div>
              {/* Top Section Tag Line (Directly aligns with top of right frame) */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-neutral-500 uppercase font-semibold">
                  ABOUT US • KALF ART GALLERY
                </span>
                <div className="h-[1px] w-28 bg-neutral-300 hidden sm:block" />
              </div>

              {/* Main Headline in 3 Distinct Lines with Authentic Editorial Bodoni Font */}
              <h2 className="font-editorial-headline text-4xl sm:text-6xl lg:text-[68px] text-black font-bold tracking-tight uppercase leading-[1.04] mb-6">
                WHERE VISION <br />
                MEETS <br />
                <span className="text-neutral-500 font-normal italic">IMMERSIVE FORM</span>
              </h2>

              {/* DYNAMIC ANIMATED TEXT DISPLAY BAR */}
              <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-neutral-100 border border-neutral-300 mb-6 max-w-xl">
                <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase font-semibold">
                  WE CELEBRATE:
                </span>
                <div className="overflow-hidden inline-flex items-center">
                  <span 
                    className={`font-mono text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-350 ${
                      fadeState === 'in' 
                        ? 'opacity-100 translate-y-0 filter blur-0 text-black' 
                        : 'opacity-0 translate-y-2 filter blur-[3px] text-neutral-400'
                    }`}
                  >
                    {ANIMATED_WORDS[currentWordIndex]}
                  </span>
                </div>
                <SparklesIcon className="w-3.5 h-3.5 text-black ml-2 animate-spin" style={{ animationDuration: '7s' }} />
              </div>

              {/* Editorial Paragraphs */}
              <div className="space-y-3.5 text-neutral-700 text-sm leading-relaxed font-light max-w-xl mb-7">
                <p>
                  Founded in 2023, <strong className="text-black font-semibold">KALF ART GALLERY</strong> bridges 
                  architectural monumentality with raw emotional expression. We curate museum-calibre paintings, kinetic digital video suites, 
                  and tactile canvas masterworks that challenge conventional visual boundaries.
                </p>
                <p>
                  From our private exhibition salon in Zurich to premier partner fairs in London and Paris, our mission is to present art not as mere decor, 
                  but as an architectural anchor that transforms spaces through monumental scale, dramatic light, and profound texture.
                </p>
              </div>

              {/* Stats Row with Vertical Dividers (Exact Match to Reference Mockup) */}
              <div className="grid grid-cols-4 gap-0 py-4 mb-7 max-w-xl border-t border-b border-neutral-200">
                {/* Stat 1 */}
                <div className="pr-4">
                  <div className="font-editorial-stat text-3xl sm:text-4xl font-bold text-black tracking-tight">
                    45+
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.18em] text-neutral-500 uppercase mt-1 leading-tight font-semibold">
                    CURATED<br />MASTERWORKS
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="border-l border-neutral-200 pl-4 sm:pl-5 pr-4">
                  <div className="font-editorial-stat text-3xl sm:text-4xl font-bold text-black tracking-tight">
                    12
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.18em] text-neutral-500 uppercase mt-1 leading-tight font-semibold">
                    GLOBAL<br />BIENNALES
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="border-l border-neutral-200 pl-4 sm:pl-5 pr-4">
                  <div className="font-editorial-stat text-3xl sm:text-4xl font-bold text-black tracking-tight">
                    100%
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.18em] text-neutral-500 uppercase mt-1 leading-tight font-semibold">
                    ORIGINAL<br />PROVENANCE
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="border-l border-neutral-200 pl-4 sm:pl-5">
                  <div className="font-editorial-stat text-2xl sm:text-3xl font-bold text-black tracking-tight">
                    ZURICH
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.18em] text-neutral-500 uppercase mt-1 leading-tight font-semibold">
                    MAIN SALON &<br />STUDIO
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA LINE (Exact Match to Reference Mockup) */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase whitespace-nowrap mr-2 font-semibold">
                  FOLLOW OUR JOURNEY:
                </span>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <XTwitterIcon className="w-3.5 h-3.5" />
                  <span>TWITTER / X</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YOUTUBE</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>

              {/* Second row: Curator Inquiry (aligned directly below Instagram) */}
              <div className="flex items-center gap-3 pl-0 sm:pl-[172px]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black bg-black text-white hover:bg-neutral-800 transition-all text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>CURATOR INQUIRY</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: GALLERY STUDIO MASTERPIECE IMAGE WITH CORNER BRACKETS */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[480px] h-full min-h-[500px] border border-neutral-300 p-2 sm:p-2.5 bg-neutral-100 flex flex-col justify-between shadow-xl">
              
              {/* Outer Corner Frame Brackets (Sitting directly on the frame boundary) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black pointer-events-none" />

              {/* Inside Image Container (Fills the entire height of the frame) */}
              <div className="relative w-full h-full min-h-[460px] overflow-hidden bg-neutral-200">
                <img 
                  src="/assets/about_studio.jpg" 
                  alt="KALF Art Gallery Studio and Curators"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle Bottom Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Floating Info Overlay (Exact Match to Mockup) */}
                <div className="absolute bottom-5 inset-x-5 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-[0.28em] text-neutral-300 block uppercase mb-1">
                      PRIVATE SALON & EXHIBITION
                    </span>
                    <h3 className="font-editorial-headline text-base sm:text-xl font-bold tracking-wider text-white uppercase leading-tight">
                      ZURICH MASTER ARCHIVE
                    </h3>
                  </div>

                  <div className="px-3 py-1 rounded-full border border-white/40 bg-black/70 backdrop-blur-md text-[9px] font-mono tracking-widest text-white whitespace-nowrap">
                    EST. 2023
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
