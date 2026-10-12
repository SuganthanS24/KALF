import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Video } from 'lucide-react';

const INITIAL_SLIDES = [
  {
    id: 'slide-1',
    type: 'image',
    mediaUrl: '/assets/slider_eagle.jpg',
    author: 'CREATIVE CODER',
    title: 'VIBRANT WILDLIFE',
    topic: 'GOLDEN EAGLE',
    accentColor: '#f59e0b', // Amber Gold
    des: 'Witness the magnificent golden eagle soaring gracefully across majestic alpine peaks bathed in glowing golden sunset light and crisp mountain breezes.',
    category: 'NATURE CINEMA',
    ctaText: 'SEE MORE',
    subText: 'EXPLORE'
  },
  {
    id: 'slide-2',
    type: 'image',
    mediaUrl: '/assets/slider_cyber.jpg',
    author: 'NEO KYOTO',
    title: 'FUTURISTIC REALM',
    topic: 'CYBER METROPOLIS',
    accentColor: '#00f2fe', // Neon Cyan
    des: 'Dive into a breathtaking cyberpunk skyline illuminated by glowing holographic billboards, futuristic transit lanes, and vibrant reflective neon architecture.',
    category: 'CYBERPUNK ARTS',
    ctaText: 'SEE MORE',
    subText: 'EXPLORE'
  },
  {
    id: 'slide-3',
    type: 'image',
    mediaUrl: '/assets/slider_aurora.jpg',
    author: 'ARCTIC EXPEDITION',
    title: 'COSMIC PHENOMENON',
    topic: 'AURORA BOREALIS',
    accentColor: '#10b981', // Emerald Aurora
    des: 'Spectacular curtains of luminous green, magenta and purple aurora borealis undulating across starry night skies reflected in pristine glacial waters.',
    category: 'ASTRONOMY',
    ctaText: 'SEE MORE',
    subText: 'EXPLORE'
  },
  {
    id: 'slide-4',
    type: 'image',
    mediaUrl: '/assets/slider_forest.jpg',
    author: 'FANTASY LANDSCAPE',
    title: 'MYSTICAL REALM',
    topic: 'ENCHANTED FOREST',
    accentColor: '#38bdf8', // Bioluminescent Cyan
    des: 'Step into an ethereal fairy forest with cascading bioluminescent waterfalls, glowing mystical flora, and dancing golden fireflies in tranquil harmony.',
    category: 'ENCHANTED ECOSYSTEM',
    ctaText: 'SEE MORE',
    subText: 'EXPLORE'
  },
  {
    id: 'slide-5',
    type: 'video',
    mediaUrl: 'https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-43340-large.mp4',
    posterUrl: '/assets/slider_cyber.jpg',
    author: 'KINETIC MOTION',
    title: 'CHROMATIC FLUID',
    topic: 'PRISMATIC INK',
    accentColor: '#ec4899', // Hot Pink
    des: 'Hypnotic fluid simulations blending prismatic pigments and shimmering light streams into an unforgettable kinetic visual journey.',
    category: 'MOTION DESIGN',
    ctaText: 'WATCH VIDEO',
    subText: 'COLLECTION'
  }
];

const AUTOPLAY_TIME = 7000;

export default function Hero() {
  const [slides, setSlides] = useState(INITIAL_SLIDES);
  const [animationClass, setAnimationClass] = useState(''); // 'next' | 'prev' | ''
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeNav, setActiveNav] = useState('Home');

  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const videoRef = useRef(null);

  // Transition handler
  const triggerSlide = useCallback((direction, customItems = null) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass(direction);
    setProgressWidth(0);

    setTimeout(() => {
      setSlides((prev) => {
        if (customItems) return customItems;
        if (direction === 'next') {
          return [...prev.slice(1), prev[0]];
        } else {
          return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
        }
      });
      setAnimationClass('');
      setIsAnimating(false);
    }, 550);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    triggerSlide('next');
  }, [triggerSlide]);

  const handlePrev = useCallback(() => {
    triggerSlide('prev');
  }, [triggerSlide]);

  // Click on thumbnail jump
  const handleThumbnailClick = (targetId) => {
    if (isAnimating) return;
    const targetIndex = slides.findIndex((s) => s.id === targetId);
    if (targetIndex === 0) return; // already active

    // Shift items so clicked item becomes index 0
    const reordered = [...slides.slice(targetIndex), ...slides.slice(0, targetIndex)];
    triggerSlide('next', reordered);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isAutoplay) {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    progressIntervalRef.current = setInterval(() => {
      setProgressWidth((prev) => {
        const next = prev + (stepMs / AUTOPLAY_TIME) * 100;
        return next >= 100 ? 100 : next;
      });
    }, stepMs);

    timerRef.current = setTimeout(() => {
      handleNext();
    }, AUTOPLAY_TIME);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [slides, isAutoplay, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev]);

  const currentSlide = slides[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white select-none">
      
      {/* Running Time Bar at top with Active Slide Accent Color */}
      <div 
        className="timeRunning"
        style={{
          width: `${progressWidth}%`,
          backgroundColor: currentSlide.accentColor || '#14ff72cb',
          boxShadow: `0 0 16px ${currentSlide.accentColor || '#14ff72cb'}`
        }}
      />

      {/* Floating Header Navigation with Stylized KALF ART GALLERY Title */}
      <header className="slider-header">
        <div className="flex flex-col group cursor-pointer">
          <span className="brand-kalf-title text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.24em] font-extrabold leading-none">
            KALF ART GALLERY
          </span>
          <span className="text-[9px] sm:text-[11px] tracking-[0.4em] text-neutral-400 font-mono uppercase mt-1.5 font-medium">
            CONTEMPORARY FINE ART
          </span>
        </div>

        <nav className="flex items-center">
          {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                setActiveNav(item);
                if (item === 'About') {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                } else if (item === 'Portfolio') {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                } else if (item === 'Services') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                } else if (item === 'Contact') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else if (item === 'Home') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={activeNav === item ? 'active' : ''}
              style={activeNav === item ? {
                background: currentSlide.accentColor,
                color: '#000',
                boxShadow: `0 0 15px ${currentSlide.accentColor}`
              } : {}}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>



      {/* Main Carousel Stage */}
      <div className={`carousel ${animationClass}`}>
        
        {/* List of full-screen Slides */}
        <div className="list">
          {slides.map((slide, idx) => {
            const isFirst = idx === 0;
            return (
              <div 
                key={slide.id} 
                className="item"
                style={{
                  zIndex: isFirst ? 1 : 0
                }}
              >
                {/* Media Element: Video or Image */}
                {slide.type === 'video' ? (
                  <video
                    ref={isFirst ? videoRef : null}
                    src={slide.mediaUrl}
                    poster={slide.posterUrl || slide.mediaUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.mediaUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Dark Vignette Overlay for Readability */}
                <div className="media-overlay" />

                {/* Content Overlay */}
                <div className="content">
                  <span 
                    className="author"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.author}
                  </span>

                  <div className="title">
                    {slide.title}
                  </div>

                  <div 
                    className="topic"
                    style={{ 
                      color: slide.accentColor,
                      textShadow: `0 0 30px ${slide.accentColor}88`
                    }}
                  >
                    {slide.topic}
                  </div>

                  <p className="des">
                    {slide.des}
                  </p>

                  <div className="buttons">
                    <button 
                      className="btn-primary"
                      style={{
                        backgroundColor: '#fff',
                        color: '#000'
                      }}
                    >
                      {slide.ctaText}
                    </button>
                    
                    <button 
                      className="btn-outline"
                      style={{
                        borderColor: 'rgba(255,255,255,0.6)'
                      }}
                    >
                      {slide.subText}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Thumbnail Preview Cards on Bottom Right (CreativeCoder111 signature) */}
        <div className="thumbnail">
          {slides.slice(1).map((slide) => (
            <div
              key={slide.id}
              className="item group"
              onClick={() => handleThumbnailClick(slide.id)}
            >
              {slide.type === 'video' ? (
                <img
                  src={slide.posterUrl || '/assets/slider_cyber.jpg'}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.mediaUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Video Badge indicator if slide is video */}
              {slide.type === 'video' && (
                <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-black/70 border border-white/30 text-[9px] font-bold tracking-widest text-white flex items-center gap-1">
                  <Video className="w-2.5 h-2.5" />
                  <span>VIDEO</span>
                </div>
              )}

              {/* Gradient Darkener */}
              <div className="thumbnail-overlay" />

              {/* Thumbnail Content */}
              <div className="content">
                <div 
                  className="title truncate"
                  style={{ color: slide.accentColor }}
                >
                  {slide.topic}
                </div>
                <div className="description">
                  {slide.category}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

    </div>
  );
}
