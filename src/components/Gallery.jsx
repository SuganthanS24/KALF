import React, { useState, useEffect } from 'react';

const GALLERY_ITEMS = [
  // ROW 1 (3 items)
  {
    id: 1,
    title: 'CHIAROSCURO SYMPHONY I',
    year: '2026',
    category: 'MONOCHROME CANVAS',
    medium: 'Oil & Layered Charcoal on Belgian Linen',
    dimensions: '180 × 140 cm (70.8 × 55.1 in)',
    image: '/assets/hero_painting.jpg',
    description: 'A monumental exploration of dramatic light and total opacity. Karley Fenix employs custom gesso layering combined with raw charcoal dust to generate atmospheric depth shifting under ambient spotlights.',
    provenance: 'Direct from Primary Zurich Studio Archive, 2026 Premiere.'
  },
  {
    id: 2,
    title: 'THE KINETIC FALCON',
    year: '2025',
    category: 'MONOGRAPHIC STUDY',
    medium: 'Architectural Oil & Titanium Pigment on Heavy Canvas',
    dimensions: '210 × 160 cm (82.6 × 63.0 in)',
    image: '/assets/slider_eagle.jpg',
    description: 'Bold monochromatic stroke execution capturing fluid predatory motion suspended in eternal stillness. The impasto texture bridges sculptural relief with traditional abstract mastery.',
    provenance: 'Exhibited at London Partner Salon 2025.'
  },
  {
    id: 3,
    title: 'KINETIC CYBER MATRIX',
    year: '2026',
    category: 'SYNCHRONIZED TECH',
    medium: 'Ultra-Resolution 8K Synchronized Dynamic Video Suite',
    dimensions: 'Architectural Scale Wall Installation (4 × 2.4 m)',
    image: '/assets/slider_cyber.jpg',
    description: 'Ultra-resolution dynamic video suite bridging traditional painterly mastery with digital eternity. Features algorithmic light pulses calibrated to circadian lux cycles.',
    provenance: 'Zurich Vault Special Commission 2026.'
  },

  // ROW 2 (2 items, staggered interlocking in gaps)
  {
    id: 4,
    title: 'COSMIC AURORA DISPERSION',
    year: '2025',
    category: 'AVANT-GARDE MEDIA',
    medium: 'Refracted Kinetic Light & Mineral Luminaire Ray',
    dimensions: '240 × 180 cm (94.4 × 70.8 in)',
    image: '/assets/slider_aurora.jpg',
    description: 'Prismatic light dispersion captured through layered glass prisms and iridescent acrylic glazes. Interacts directly with ambient natural daylight to produce shifting chromatic refractions.',
    provenance: 'Private Swiss Family Office Collection.'
  },
  {
    id: 5,
    title: 'ENCHANTED VERIDIAN VEIL',
    year: '2024',
    category: 'ORGANIC RELIEF',
    medium: 'Raw Forest Pigment, Crushed Minerals & Linen',
    dimensions: '190 × 150 cm (74.8 × 59.0 in)',
    image: '/assets/slider_forest.jpg',
    description: 'An organic exploration of forest floor decay and emerald light filtration. Heavy mineral textures yield a tactile surface resembling volcanic moss and petrified foliage.',
    provenance: 'Paris Biennale Master Showcase 2024.'
  },

  // ROW 3 (3 items)
  {
    id: 6,
    title: 'RESONANCE IN GESSO III',
    year: '2026',
    category: 'TACTILE IMPASTO',
    medium: 'Layered Gesso & Pure Black Mineral Powder on Canvas',
    dimensions: '200 × 160 cm (78.7 × 63.0 in)',
    image: '/assets/art1.jpg',
    description: 'Sculptural monochromatic canvas exploring brutalist architecture and quiet solitude. Deep crevices and stark relief create dramatic chiaroscuro shadow play.',
    provenance: 'Direct Studio Reserve 2026.'
  },
  {
    id: 7,
    title: 'ZURICH MASTER ARCHIVE STUDIO',
    year: '2024',
    category: 'ARCHITECTURAL SPACE',
    medium: 'Archival Photography of Zurich Private Salon & Curators',
    dimensions: 'Permanent Salon Space • Zurich Historic Cultural District',
    image: '/assets/about_studio.jpg',
    description: 'The monumental physical exhibition space of KALF Art Gallery in Zurich, where collectors experience large-scale canvases in double-height concrete galleries.',
    provenance: 'Official Gallery Archival Documentation.'
  },
  {
    id: 8,
    title: 'MONOLITH & SILENCE',
    year: '2025',
    category: 'BRUTALIST CANVAS',
    medium: 'Architectural Pitch Black & Chalk Gesso on Canvas',
    dimensions: '220 × 180 cm (86.6 × 70.8 in)',
    image: '/assets/art2.jpg',
    description: 'Sweeping linear black structures intersect with raw canvas textures, invoking architectural weight and absolute serenity in expansive interior volumes.',
    provenance: 'Basel Contemporary Masters Salon 2025.'
  }
];

export default function Gallery() {
  const [fullscreenItem, setFullscreenItem] = useState(null);

  // Close fullscreen on Escape key and navigate with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullscreenItem) return;
      if (e.key === 'Escape') {
        setFullscreenItem(null);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (GALLERY_ITEMS.findIndex(i => i.id === fullscreenItem.id) + 1) % GALLERY_ITEMS.length;
        setFullscreenItem(GALLERY_ITEMS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (GALLERY_ITEMS.findIndex(i => i.id === fullscreenItem.id) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        setFullscreenItem(GALLERY_ITEMS[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenItem]);

  const openFullscreen = (item) => {
    setFullscreenItem(item);
  };

  const nextFullscreen = () => {
    if (!fullscreenItem) return;
    const nextIdx = (GALLERY_ITEMS.findIndex(i => i.id === fullscreenItem.id) + 1) % GALLERY_ITEMS.length;
    setFullscreenItem(GALLERY_ITEMS[nextIdx]);
  };

  const prevFullscreen = () => {
    if (!fullscreenItem) return;
    const prevIdx = (GALLERY_ITEMS.findIndex(i => i.id === fullscreenItem.id) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setFullscreenItem(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <section 
      id="portfolio" 
      className="relative w-full bg-[#fdfdfd] text-black py-24 sm:py-28 px-4 sm:px-8 border-t border-b border-neutral-200 overflow-hidden select-none"
    >
      {/* Background Clean Gallery Architectural Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* =========================================================================
            SECTION HEADER: PERFECTLY CENTERED TITLE & TEXT (BLACK ON WHITE THEME)
            ========================================================================= */}
        <div className="w-full max-w-3xl mx-auto mb-16 sm:mb-20 text-center flex flex-col items-center justify-center px-4">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-[11px] font-mono tracking-[0.4em] text-neutral-500 uppercase font-semibold">
              CURATED MASTERWORKS ARCHIVE • KALF ART GALLERY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
          </div>

          {/* Main Huge Centered Title in Deep Black */}
          <h2 className="font-editorial-headline text-5xl sm:text-7xl lg:text-8xl text-black font-extrabold tracking-tight uppercase leading-none my-3 text-center">
            GALLERY
          </h2>

          {/* Centered Descriptive Text */}
          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-lg mx-auto text-center leading-relaxed font-sans mt-2">
            Signature interlocking collection of museum-calibre paintings, kinetic suites, and tactile canvas reliefs. Hover or click any diamond to inspect in full screen.
          </p>

        </div>

        {/* =========================================================================
            DIAMOND CLUSTER (3 - 2 - 3 INTERLOCKING MOSAIC WITH CALIBRATED GAPS)
            ========================================================================= */}
        <div className="relative py-6 sm:py-10 w-full flex flex-col items-center justify-center overflow-x-visible">
          
          {/* ROW 1: 3 Diamonds */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 z-10">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => openFullscreen(item)}
                className="group relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rotate-45 overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-white bg-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.14)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.28)] hover:scale-105 hover:z-30 transition-all duration-500 cursor-pointer"
              >
                {/* Inner Counter-Rotated Image (Upright view) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full -rotate-45 scale-[1.46] object-cover filter contrast-105 group-hover:scale-[1.58] transition-all duration-700 ease-out"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />
                  
                  {/* Floating Expand Cue on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-3.5 py-1.5 rounded-full bg-white text-black text-[9px] font-mono tracking-widest uppercase font-bold shadow-xl flex items-center gap-1.5">
                      <span>EXPAND</span>
                      <span>⤢</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: 2 Diamonds (Interlocked cleanly into gaps between Row 1 and Row 3) */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 z-20">
            {GALLERY_ITEMS.slice(3, 5).map((item) => (
              <div
                key={item.id}
                onClick={() => openFullscreen(item)}
                className="group relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rotate-45 overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-white bg-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.14)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.28)] hover:scale-105 hover:z-30 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full -rotate-45 scale-[1.46] object-cover filter contrast-105 group-hover:scale-[1.58] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-3.5 py-1.5 rounded-full bg-white text-black text-[9px] font-mono tracking-widest uppercase font-bold shadow-xl flex items-center gap-1.5">
                      <span>EXPAND</span>
                      <span>⤢</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 3: 3 Diamonds */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 z-10">
            {GALLERY_ITEMS.slice(5, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => openFullscreen(item)}
                className="group relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rotate-45 overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-white bg-neutral-900 shadow-[0_15px_35px_rgba(0,0,0,0.14)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.28)] hover:scale-105 hover:z-30 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full -rotate-45 scale-[1.46] object-cover filter contrast-105 group-hover:scale-[1.58] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-3.5 py-1.5 rounded-full bg-white text-black text-[9px] font-mono tracking-widest uppercase font-bold shadow-xl flex items-center gap-1.5">
                      <span>EXPAND</span>
                      <span>⤢</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* =========================================================================
          FULL-SCREEN CINEMATIC LIGHTBOX MODAL (100VW × 100VH)
          ========================================================================= */}
      {fullscreenItem && (
        <div 
          className="fixed inset-0 z-[99999] w-screen h-screen bg-black/98 backdrop-blur-3xl flex flex-col justify-between p-4 sm:p-8 md:p-12 animate-fadeIn select-none text-white"
          onClick={() => setFullscreenItem(null)}
        >
          {/* Top Bar: Centered Title & Archive Record */}
          <div 
            className="relative z-50 flex items-center justify-between border-b border-white/15 pb-4 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-24 hidden sm:block" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <span className="text-[10px] font-mono tracking-[0.35em] text-neutral-400 uppercase">
                ARCHIVE RECORD #{fullscreenItem.id.toString().padStart(2, '0')}
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="font-editorial-headline text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                {fullscreenItem.title}
              </span>
            </div>

            <button
              onClick={() => setFullscreenItem(null)}
              className="px-5 py-2 rounded-full border border-white/30 bg-black/80 flex items-center gap-2 text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
              aria-label="Close Fullscreen"
            >
              <span>CLOSE</span>
              <span className="text-sm">✕</span>
            </button>
          </div>

          {/* Center Stage: True Full-Screen Image Display */}
          <div 
            className="relative flex-1 my-4 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow Navigation */}
            <button
              onClick={prevFullscreen}
              className="absolute left-2 sm:left-6 z-50 w-14 h-14 rounded-full border border-white/30 bg-black/80 flex items-center justify-center text-white text-xl font-mono hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl"
              aria-label="Previous Artwork"
            >
              ←
            </button>

            {/* Right Arrow Navigation */}
            <button
              onClick={nextFullscreen}
              className="absolute right-2 sm:right-6 z-50 w-14 h-14 rounded-full border border-white/30 bg-black/80 flex items-center justify-center text-white text-xl font-mono hover:bg-white hover:text-black transition-all cursor-pointer shadow-2xl"
              aria-label="Next Artwork"
            >
              →
            </button>

            {/* Main Full-Size Image Container */}
            <div className="relative max-w-full max-h-full flex items-center justify-center p-2">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white pointer-events-none z-20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white pointer-events-none z-20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white pointer-events-none z-20" />

              <img
                src={fullscreenItem.image}
                alt={fullscreenItem.title}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-[90vw] object-contain filter contrast-105 shadow-[0_0_70px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Bottom Bar: Centered Curatorial Metadata & Inquire Action */}
          <div 
            className="relative z-50 border-t border-white/15 pt-4 px-2 flex flex-col items-center justify-center text-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-neutral-300 max-w-4xl mx-auto">
              <span className="text-white font-bold">{fullscreenItem.title}</span>
              <span>•</span>
              <span>{fullscreenItem.medium}</span>
              <span>•</span>
              <span>{fullscreenItem.dimensions}</span>
              <span>•</span>
              <span className="text-neutral-400">{fullscreenItem.provenance}</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setFullscreenItem(null);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  const notesArea = contactSection.querySelector('textarea[name="notes"]');
                  if (notesArea) {
                    notesArea.value = `Inquiry regarding Masterwork #${fullscreenItem.id.toString().padStart(2, '0')}: "${fullscreenItem.title}" (${fullscreenItem.year}).`;
                    notesArea.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                }
              }}
              className="px-8 py-3 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-200 transition-all text-center whitespace-nowrap shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              INQUIRE THIS MASTERWORK →
            </a>
          </div>

        </div>
      )}

    </section>
  );
}
