import React from 'react';

export default function Logo({ 
  variant = 'default', // 'default' | 'white' | 'icon' | 'icon-white'
  className = '',
  size = 'md' // 'sm' | 'md' | 'lg'
}) {
  const isWhite = variant === 'white' || variant === 'icon-white';
  const isIconOnly = variant === 'icon' || variant === 'icon-white';

  // Dimension presets
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const fullSizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-14'
  };

  // Standalone Icon SVG
  const IconElement = (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      className={`${iconSizes[size] || iconSizes.md} ${className} shrink-0 drop-shadow-sm`}
      aria-label="SweetGrass Landscaping LLC Logo"
    >
      <defs>
        <linearGradient id={`lShield-${variant}`} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#15803d" />
          <stop offset="60%" stop-color="#166534" />
          <stop offset="100%" stop-color="#052e16" />
        </linearGradient>

        <linearGradient id={`lGrass1-${variant}`} x1="32" y1="52" x2="18" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#22c55e" />
          <stop offset="50%" stop-color="#4ade80" />
          <stop offset="100%" stop-color="#86efac" />
        </linearGradient>

        <linearGradient id={`lGrass2-${variant}`} x1="32" y1="52" x2="32" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#16a34a" />
          <stop offset="60%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#a7f3d0" />
        </linearGradient>

        <linearGradient id={`lGrass3-${variant}`} x1="32" y1="52" x2="48" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#15803d" />
          <stop offset="55%" stop-color="#22c55e" />
          <stop offset="100%" stop-color="#86efac" />
        </linearGradient>

        <linearGradient id={`lSun-${variant}`} x1="38" y1="12" x2="50" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>

        <linearGradient id={`lStone-${variant}`} x1="16" y1="46" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#lShield-${variant})`} />
      <rect x="4.5" y="4.5" width="55" height="55" rx="15.5" stroke="#4ade80" stroke-opacity="0.3" stroke-width="1" />

      {/* Sun glow */}
      <circle cx="43" cy="18" r="7" fill={`url(#lSun-${variant})`} opacity="0.9" />
      <circle cx="43" cy="18" r="11" stroke="#fbbf24" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="2 3" />

      {/* Stone Foundation */}
      <path d="M14 50 C22 45, 42 45, 50 50" stroke={`url(#lStone-${variant})`} stroke-width="3.5" stroke-linecap="round" />
      <path d="M18 53 C26 49, 38 49, 46 53" stroke={`url(#lStone-${variant})`} stroke-width="2" stroke-linecap="round" opacity="0.6" />

      {/* Grass Blades */}
      <path d="M32 50 C26 42, 17 32, 18 16 C22 28, 28 39, 32 50 Z" fill={`url(#lGrass1-${variant})`} />
      <path d="M32 50 C36 41, 46 31, 46 17 C42 27, 36 38, 32 50 Z" fill={`url(#lGrass3-${variant})`} />
      <path d="M30.5 50 C30.5 35, 29.5 22, 32 9 C34.5 22, 33.5 35, 33.5 50 Z" fill={`url(#lGrass2-${variant})`} />

      <circle cx="21" cy="22" r="1.5" fill="#ffffff" opacity="0.8" />
    </svg>
  );

  if (isIconOnly) {
    return IconElement;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {IconElement}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            Sweet<span className={isWhite ? 'text-brand-400' : 'text-brand-600'}>Grass</span>
          </span>
          <span className={`text-[9.5px] font-bold tracking-wider px-1.5 py-0.5 rounded uppercase ${
            isWhite 
              ? 'bg-brand-900/80 text-brand-300 border border-brand-700/60' 
              : 'bg-brand-50 text-brand-700 border border-brand-200/80'
          }`}>
            LLC
          </span>
        </div>
        <p className={`text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.18em] mt-1 ${isWhite ? 'text-slate-400' : 'text-slate-500'}`}>
          Landscaping • Cary, NC
        </p>
      </div>
    </div>
  );
}
