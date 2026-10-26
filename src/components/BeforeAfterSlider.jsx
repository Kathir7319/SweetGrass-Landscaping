import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before SweetGrass",
  afterLabel = "After SweetGrass Transformation",
  title,
  subtitle,
  location
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-8">
          {location && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              {location}
            </span>
          )}
          {title && <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-slate-600 mt-2 text-sm sm:text-base">{subtitle}</p>}
        </div>
      )}

      {/* Slider Container */}
      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={handleEnd}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[540px] rounded-2xl overflow-hidden shadow-elevated select-none cursor-ew-resize border border-slate-200"
      >
        {/* AFTER IMAGE (Background / Full Width) */}
        <img 
          src={afterImage} 
          alt="After landscaping transformation" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER LABEL */}
        <div className="absolute top-4 right-4 bg-brand-800/90 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow backdrop-blur-sm flex items-center gap-1.5 pointer-events-none z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE IMAGE (Clipped by sliderPosition) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before landscaping work" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ 
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
          {/* BEFORE LABEL */}
          <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow backdrop-blur-sm pointer-events-none z-10">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-brand-600 text-white rounded-full shadow-xl border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Drag Hint at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/75 text-white/90 text-[11px] sm:text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none z-10 flex items-center gap-1.5">
          <MoveHorizontal className="w-3.5 h-3.5" />
          <span>Drag or swipe left/right to compare</span>
        </div>
      </div>
    </div>
  );
}
