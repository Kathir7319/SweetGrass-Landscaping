import React from 'react';
import { Phone, Star, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-950 text-brand-100 text-xs sm:text-sm py-2 px-4 border-b border-brand-800/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Star rating and location */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-amber-400 font-semibold gap-1">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-white ml-1 font-bold">{COMPANY_INFO.rating}</span>
            <span className="text-brand-300 font-normal hidden md:inline">({COMPANY_INFO.reviewCount}+ Cary Reviews)</span>
          </div>
          <span className="text-brand-700 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 text-brand-200">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>Serving Cary, NC & Surrounding Areas</span>
          </div>
        </div>

        {/* Right: Hours and quick call */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-brand-300">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span>Mon–Fri: 8AM–5PM</span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-brand-700">|</span>
            <Link 
              to="/contact" 
              className="text-amber-300 hover:text-amber-200 font-medium underline underline-offset-2"
            >
              Free Estimate &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
