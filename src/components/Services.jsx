import React, { useState, useRef } from 'react';

// 6 Luxury Practice Services (Mapped to 6 True 3D Cube Faces)
const SERVICES_DATA = [
  {
    id: '01',
    faceName: 'FRONT',
    faceClass: 'cube-face-front',
    targetRx: 0,
    targetRy: 0,
    name: 'PRIVATE CURATION & ADVISORY',
    subtitle: 'BESPOKE ART ACQUISITIONS',
    category: 'COLLECTION STRATEGY',
    image: '/assets/about_studio.jpg',
    lead: 'Tailored acquisition portfolios curated for architectural residences, private family offices, and distinguished international collectors.',
    specs: [
      { label: 'PROVENANCE', val: 'Direct Museum & Primary Studio' },
      { label: 'AUTHENTICATION', val: 'Forensic Archival Certification' },
      { label: 'DISCRETION', val: 'Private Salon Confidentiality' }
    ],
    tag: 'PRIVATE SALON'
  },
  {
    id: '02',
    faceName: 'RIGHT',
    faceClass: 'cube-face-right',
    targetRx: 0,
    targetRy: -90,
    name: 'MUSEUM & BIENNALE LOANS',
    subtitle: 'INSTITUTIONAL CURATION',
    category: 'GLOBAL EXHIBITIONS',
    image: '/assets/slider_eagle.jpg',
    lead: 'Facilitating museum-grade masterwork loans, traveling retrospective exhibitions, and partner bienniales in Zurich, London, and Paris.',
    specs: [
      { label: 'COURIER', val: 'White-Glove International Escort' },
      { label: 'CLIMATE', val: 'Archival Microclimate Crating' },
      { label: 'CATALOG', val: 'Monographic Curatorial Essays' }
    ],
    tag: 'INSTITUTIONAL'
  },
  {
    id: '03',
    faceName: 'BACK',
    faceClass: 'cube-face-back',
    targetRx: 0,
    targetRy: -180,
    name: 'SITE-SPECIFIC COMMISSIONS',
    subtitle: 'ARCHITECTURAL ANCHORS',
    category: 'BESPOKE INSTALLATIONS',
    image: '/assets/slider_cyber.jpg',
    lead: 'Monumental canvas masterworks, tactile reliefs, and structural sculptures engineered in direct dialogue with architectural spatial volumes.',
    specs: [
      { label: 'SCALE', val: 'Up to 12-Metre Wall Canvases' },
      { label: 'ENGINEERING', val: 'Seismic Structural Anchorage' },
      { label: 'LIGHT STUDY', val: 'Natural & Luminaire Ray Simulation' }
    ],
    tag: 'ARCHITECTURAL'
  },
  {
    id: '04',
    faceName: 'LEFT',
    faceClass: 'cube-face-left',
    targetRx: 0,
    targetRy: -270,
    name: 'KINETIC & DIGITAL SUITES',
    subtitle: 'AVANT-GARDE NEW MEDIA',
    category: 'SYNCHRONIZED TECH',
    image: '/assets/slider_aurora.jpg',
    lead: 'Ultra-resolution dynamic video suites, kinetic light refractions, and sensory canvas displays bridging traditional mastery with digital eternity.',
    specs: [
      { label: 'RESOLUTION', val: 'Native 8K Synchronized Panels' },
      { label: 'ILLUMINATION', val: 'Adaptive Calibrated Lux' },
      { label: 'DURABILITY', val: '100,000-Hour Laser Longevity' }
    ],
    tag: 'NEW MEDIA'
  },
  {
    id: '05',
    faceName: 'TOP',
    faceClass: 'cube-face-top',
    targetRx: -90,
    targetRy: 0,
    name: 'CONSERVATION & RESTORATION',
    subtitle: 'ARCHIVAL PRESERVATION',
    category: 'LABORATORY FORENSICS',
    image: '/assets/slider_forest.jpg',
    lead: 'Scientific conservation, multi-spectral pigment forensics, and reversible restoration for high-calibre historical and contemporary masterworks.',
    specs: [
      { label: 'DIAGNOSTICS', val: 'Infrared & UV Reflectography' },
      { label: 'INTERVENTION', val: '100% Reversible Museum Chemistry' },
      { label: 'ENVIRONMENT', val: 'Hermetic Museum Micro-Chambers' }
    ],
    tag: 'ARCHIVAL LAB'
  },
  {
    id: '06',
    faceName: 'BOTTOM',
    faceClass: 'cube-face-bottom',
    targetRx: 90,
    targetRy: 0,
    name: 'EXCLUSIVE SALON & VAULT',
    subtitle: 'CONFIDENTIAL ACQUISITIONS',
    category: 'MASTER ARCHIVE ACCESS',
    image: '/assets/about_studio.jpg',
    lead: 'Intimate after-hours access to our Zurich Master Vault, private collector evenings, and preliminary access to seasonal masterworks.',
    specs: [
      { label: 'ACCESS', val: 'Private Invitation Only' },
      { label: 'ACQUISITION', val: 'First-Look Salon Exclusivity' },
      { label: 'LOCATION', val: 'Zurich Master Archive' }
    ],
    tag: 'CONFIDENTIAL'
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  const activeService = SERVICES_DATA[activeIdx];

  // Mouse drag handlers for free 3D cube rotation & tilt
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setDragOffset({
      x: -dy * 0.35, // vertical drag tilts around X axis
      y: dx * 0.35   // horizontal drag pans around Y axis
    });
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });

    // Directional swipe detection to step to adjacent cube face
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx < -45) {
        // Swipe Left -> next horizontal face
        setActiveIdx((prev) => (prev + 1) % 4);
      } else if (dx > 45) {
        // Swipe Right -> previous horizontal face
        setActiveIdx((prev) => (prev - 1 + 4) % 4);
      }
    } else {
      if (dy < -45) {
        // Swipe Up -> Top face (index 4)
        setActiveIdx(4);
      } else if (dy > 45) {
        // Swipe Down -> Bottom face (index 5)
        setActiveIdx(5);
      }
    }
  };

  // Touch handlers for mobile devices
  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    setDragOffset({
      x: -dy * 0.35,
      y: dx * 0.35
    });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  };

  const nextService = () => setActiveIdx((prev) => (prev + 1) % SERVICES_DATA.length);
  const prevService = () => setActiveIdx((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);

  // Exact target orientation for the active cube face
  const currentRotX = activeService.targetRx + dragOffset.x;
  const currentRotY = activeService.targetRy + dragOffset.y;

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#fafafa] text-black py-24 px-6 sm:px-10 lg:px-16 border-t border-b border-neutral-200 overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Architectural Grid Pattern */}
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
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-4xl mx-auto mb-16 border-b border-neutral-200 pb-8 px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="text-[11px] font-mono tracking-[0.38em] text-neutral-500 uppercase font-semibold">
              SERVICES & PRACTICE • KALF ART GALLERY
            </span>
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>

          <h2 className="font-editorial-headline text-3xl sm:text-5xl lg:text-[54px] text-black font-bold tracking-tight uppercase leading-[1.08] mb-4">
            ARCHITECTURAL CURATION <br />
            <span className="text-neutral-500 font-normal italic">& BESPOKE PRACTICE</span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto font-mono tracking-wider leading-relaxed">
            Six disciplined practices engineered for the acquisition, conservation, and architectural alignment of museum-calibre masterpieces.
          </p>
        </div>

        {/* 6 Quick Selector Buttons (Tabs with Face Orientation Indicators) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-20">
          {SERVICES_DATA.map((srv, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative group px-4 py-3.5 text-left transition-all duration-300 border cursor-pointer ${
                  isActive 
                    ? 'bg-black text-white border-black shadow-[0_4px_20px_rgba(0,0,0,0.18)]' 
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black hover:bg-neutral-50'
                }`}
              >
                {/* Active Face Corner Brackets */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white pointer-events-none" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white pointer-events-none" />
                  </>
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-white' : 'text-black'}`}>
                    {srv.id} • {srv.faceName}
                  </span>
                  <span className={`text-[8px] font-mono tracking-widest uppercase ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {srv.tag}
                  </span>
                </div>
                <div className="text-[11px] font-bold tracking-wider uppercase truncate leading-tight">
                  {srv.name.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN STAGE: 3D CUBE SHOWCASE (LEFT) + EDITORIAL CARD (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: TRUE 3D ROTATING 6-FACE CUBE (LUIS LESSRAN STYLE) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Interactive Cue */}
            <div className="text-[10px] font-mono tracking-[0.28em] text-neutral-500 uppercase mb-8 flex items-center gap-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              DRAG OR CLICK CUBE FACES TO ROTATE • {activeService.faceName} FACE ({activeService.id}/06)
            </div>

            {/* 3D Cube Scene */}
            <div 
              className="cube-scene py-4 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div 
                className="cube-3d-box"
                style={{
                  transform: `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.75s cubic-bezier(0.25, 1, 0.35, 1)'
                }}
              >
                {/* 6 Square Cube Faces */}
                {SERVICES_DATA.map((item, idx) => {
                  const isCurrent = idx === activeIdx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`cube-face ${item.faceClass} p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden cursor-pointer bg-white ${
                        isCurrent 
                          ? 'border-2 border-black shadow-[0_15px_40px_rgba(0,0,0,0.18)] z-20' 
                          : 'border border-neutral-300 opacity-85 hover:opacity-100 hover:border-black'
                      }`}
                    >
                      {/* Corner Accent Brackets */}
                      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-black pointer-events-none z-20" />
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-black pointer-events-none z-20" />
                      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-black pointer-events-none z-20" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-black pointer-events-none z-20" />

                      {/* Face Header Bar */}
                      <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-neutral-200 bg-neutral-100 px-2 py-1">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-black">
                          DISCIPLINE {item.id}
                        </span>
                        <span className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase font-semibold">
                          {item.faceName}
                        </span>
                      </div>

                      {/* Face Monochromatic Artwork Center */}
                      <div className="relative my-2 w-full h-[180px] sm:h-[190px] overflow-hidden border border-neutral-200 bg-neutral-100">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="text-[8px] font-mono tracking-[0.25em] text-neutral-300 uppercase mb-0.5 font-medium">
                            {item.subtitle}
                          </div>
                          <h4 className="font-editorial-headline text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-tight line-clamp-1">
                            {item.name}
                          </h4>
                        </div>
                      </div>

                      {/* Face Footer Bar */}
                      <div className="relative z-10 flex items-center justify-between pt-1.5 border-t border-neutral-200 bg-neutral-100 px-2 py-1">
                        <span className="text-[9px] font-mono tracking-widest text-neutral-600">
                          KALF ART GALLERY
                        </span>
                        <span className="text-[9px] font-mono tracking-widest text-black uppercase font-bold">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Pedestal Floor Shadow */}
              <div className="cube-floor-shadow" />
            </div>

            {/* Rotation Controls */}
            <div className="flex items-center gap-5 mt-10">
              <button
                onClick={prevService}
                className="w-11 h-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-sm"
                aria-label="Previous Service Face"
              >
                ←
              </button>

              <div className="text-[11px] font-mono tracking-[0.28em] text-neutral-500 font-medium">
                <span className="text-black font-bold text-sm">{activeService.id}</span> / 06 • {activeService.faceName}
              </div>

              <button
                onClick={nextService}
                className="w-11 h-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-sm"
                aria-label="Next Service Face"
              >
                →
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: ACTIVE SERVICE EDITORIAL SPECIFICATION CARD */}
          <div className="lg:col-span-6">
            <div className="relative border border-neutral-300 p-7 sm:p-10 bg-white shadow-xl">
              
              {/* Corner Frame Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black pointer-events-none" />

              {/* Eyebrow Line */}
              <div className="flex items-center justify-between mb-5 border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase font-semibold">
                    PRACTICE DISCIPLINE {activeService.id} • {activeService.faceName} FACE
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full border border-neutral-300 text-[9px] font-mono tracking-widest text-neutral-700 bg-neutral-100 uppercase font-semibold">
                  {activeService.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-editorial-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-tight leading-tight mb-2">
                {activeService.name}
              </h3>

              <div className="text-xs font-mono tracking-[0.2em] text-neutral-500 uppercase mb-6 font-semibold">
                {activeService.subtitle} • {activeService.category}
              </div>

              {/* Description Paragraph */}
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light mb-8">
                {activeService.lead}
              </p>

              {/* 3 Specifications / Highlights Row */}
              <div className="space-y-3.5 mb-8 border-t border-b border-neutral-200 py-5">
                {activeService.specs.map((sp, i) => (
                  <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-mono tracking-[0.2em] text-neutral-500 uppercase text-[10px] sm:text-xs font-medium">
                      {sp.label}
                    </span>
                    <span className="text-black font-semibold tracking-wide">
                      {sp.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Curator Consultation Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      const select = contactSection.querySelector('select[name="serviceType"]');
                      if (select) {
                        const targetOption = Array.from(select.options).find(opt => 
                           opt.text.toLowerCase().includes(activeService.id) || 
                           opt.value.toLowerCase().includes(activeService.name.slice(0, 10).toLowerCase())
                        );
                        if (targetOption) {
                          select.value = targetOption.value;
                          select.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }
                    }
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black text-white font-mono text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-800 transition-all text-center cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
                >
                  INQUIRE SERVICE {activeService.id} →
                </a>

                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-medium">
                  DIRECT ACCESS TO ARCHIVE CURATOR
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
