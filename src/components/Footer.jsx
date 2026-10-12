import React from 'react';

// Self-contained SVG Icons for maximum reliability
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XTwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#fbfbfb] text-black pt-24 pb-12 px-6 sm:px-10 lg:px-16 border-t border-neutral-200 overflow-hidden">
      
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* TOP SECTION: Massive Brand Header & Logo Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-neutral-200">

          {/* LEFT SIDE: Big Brand Logo Name & Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.38em] text-neutral-500 uppercase font-semibold">
                  ARCHITECTURAL MASTER ARCHIVE • EST. 2023
                </span>
              </div>

              {/* MASSIVE BRAND LOGO IN HUGE LUXURY TYPOGRAPHY */}
              <h2 className="font-editorial-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black tracking-[0.16em] uppercase leading-none mb-6">
                KALF ART GALLERY
              </h2>

              <p className="text-sm sm:text-base font-light text-neutral-700 max-w-xl leading-relaxed mb-6 font-sans">
                An international fine art salon bridging monumental architectural scale with raw human emotion. Curating museum-calibre monochrome canvases, kinetic digital video suites, and bespoke private acquisitions for architectural residences worldwide.
              </p>

              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase font-semibold">
                <span>ZÜRICH SALON</span>
                <span>•</span>
                <span>LONDON DESK</span>
                <span>•</span>
                <span>PARIS BIENNALE</span>
              </div>
            </div>

            {/* Social Media Pill Links Bar */}
            <div className="mt-10">
              <span className="text-[10px] font-mono tracking-[0.28em] text-neutral-500 uppercase block mb-3 font-semibold">
                CONNECT & VERIFY SOCIAL CHANNELS
              </span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <InstagramIcon />
                  <span>INSTAGRAM</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <XTwitterIcon />
                  <span>TWITTER / X</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <YoutubeIcon />
                  <span>YOUTUBE</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black transition-all text-neutral-800 text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <LinkedinIcon />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-black bg-black text-white hover:bg-neutral-800 transition-all text-[10px] font-mono tracking-widest uppercase cursor-pointer shadow-sm"
                >
                  <MailIcon />
                  <span>CURATOR INQUIRY</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Quick Links & Contact Us Columns with Generous Spacing */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">

            {/* Quick Links Column */}
            <div>
              <span className="text-[11px] font-mono tracking-[0.35em] text-black uppercase font-bold block mb-8 pb-3 border-b border-neutral-200">
                01 / QUICK ARCHIVE LINKS
              </span>
              <ul className="space-y-3 font-mono text-xs tracking-wider">
                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">01.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">HOME SHOWCASE</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">02.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">ABOUT US • OUR VISION</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">03.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">PRACTICE & 3D CUBE</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('portfolio')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">04.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">DIAMOND GALLERY MOSAIC</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">05.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">COMMISSION INQUIRY FORM</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="border-b border-neutral-100 pb-3">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">06.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">ZURICH MASTER ARCHIVE</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>

                <li className="pb-1">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-neutral-600 hover:text-black transition-all flex items-center justify-between w-full cursor-pointer group py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-neutral-400 group-hover:text-black transition-colors font-medium">07.</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-medium">PRIVATE VAULT ACCESS</span>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-black text-xs">→</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Us Column ("conet us all") with Luxury Spacing & Clear Visual Structure */}
            <div>
              <span className="text-[11px] font-mono tracking-[0.35em] text-black uppercase font-bold block mb-8 pb-3 border-b border-neutral-200">
                02 / CONTACT US & SALONS
              </span>
              
              <div className="space-y-7 text-xs">
                {/* Block 1: Location */}
                <div className="border-b border-neutral-100 pb-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase flex items-center gap-2 mb-2.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    PRIMARY SALON LOCATION
                  </span>
                  <p className="text-neutral-800 font-sans text-sm leading-relaxed pl-3.5 border-l border-neutral-300">
                    Bahnhofstrasse 48 & Limmatquai<br />
                    8001 Zürich, Switzerland
                  </p>
                </div>

                {/* Block 2: Phone */}
                <div className="border-b border-neutral-100 pb-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase flex items-center gap-2 mb-2.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    DIRECT SALON PHONE
                  </span>
                  <div className="pl-3.5 border-l border-neutral-300">
                    <a 
                      href="tel:+41442148800" 
                      className="text-black font-mono text-sm sm:text-base font-bold tracking-wider hover:underline inline-block"
                    >
                      +41 (0)44 214 88 00
                    </a>
                  </div>
                </div>

                {/* Block 3: Email */}
                <div className="border-b border-neutral-100 pb-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase flex items-center gap-2 mb-2.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    CURATORIAL CORRESPONDENCE
                  </span>
                  <div className="space-y-1.5 pl-3.5 border-l border-neutral-300">
                    <a 
                      href="mailto:curator@kalfartgallery.com" 
                      className="text-black font-mono text-xs sm:text-sm font-semibold tracking-wide hover:underline block"
                    >
                      curator@kalfartgallery.com
                    </a>
                    <a 
                      href="mailto:contact@kalfartgallery.com" 
                      className="text-neutral-600 font-mono text-[11px] sm:text-xs tracking-wide hover:underline block"
                    >
                      contact@kalfartgallery.com
                    </a>
                  </div>
                </div>

                {/* Block 4: Hours */}
                <div className="pt-1">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase flex items-center gap-2 mb-2.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    CURATORIAL INVITATION HOURS
                  </span>
                  <div className="text-neutral-700 font-mono text-xs leading-relaxed space-y-1 pl-3.5 border-l border-neutral-300">
                    <p className="font-semibold text-black">TUE — SAT: 11:00 — 19:00 CEST</p>
                    <p className="text-neutral-500 text-[11px]">PRIVATE VAULT: BY CONFIDENTIAL APPOINTMENT</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: Reserved Copyright Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
          
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="font-semibold text-black">© 2026 KALF ART GALLERY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-black transition-colors cursor-pointer">
              TERMS OF PROVENANCE
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="hover:text-black transition-colors cursor-pointer">
              FORENSIC ARCHIVAL CERTIFICATION
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <button
              onClick={scrollToTop}
              className="text-black hover:text-neutral-600 transition-colors flex items-center gap-1.5 cursor-pointer font-bold"
              aria-label="Back to Top"
            >
              <span>BACK TO TOP</span>
              <span className="text-sm">↑</span>
            </button>
          </div>

        </div>

        {/* MONUMENTAL OUTLINE BRAND WATERMARK */}
        <div className="mt-16 text-center select-none pointer-events-none opacity-[0.04] text-black">
          <div className="text-[18vw] font-black tracking-[0.2em] uppercase leading-none font-editorial-headline">
            KALF
          </div>
        </div>

      </div>
    </footer>
  );
}
