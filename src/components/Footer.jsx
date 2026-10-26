import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star, Heart, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group hover:opacity-95 transition-opacity">
              <Logo variant="white" size="md" className="group-hover:scale-[1.02] transition-transform duration-200" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              At SweetGrass Landscaping LLC, we believe your outdoor space should be an extension of your home. Premium residential lawn care and custom hardscaping in Cary, NC.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center bg-brand-950/80 border border-brand-800/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-400 gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold">{COMPANY_INFO.rating} Rating</span>
                <span className="text-brand-300">({COMPANY_INFO.reviewCount}+ Reviews)</span>
              </div>
              <div className="flex items-center bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-300 gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-4 tracking-normal">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>Services & Pricing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>About Our Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>Our Portfolio & Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>Request Free Estimate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-4 tracking-normal">
              Featured Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Lawn Mowing & Edging
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Core Aeration & Seeding
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Paver Patios & Walkways
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Retaining Walls & Steps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Seasonal Cleanups & Mulch
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-300 transition-colors">
                  Yard Grading & Resloping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-base mb-4 tracking-normal">
              Cary, NC Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.serviceArea}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-medium hover:text-brand-300 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-300 transition-colors truncate">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{COMPANY_INFO.hours.weekdays}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{COMPANY_INFO.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Cary, North Carolina</span>
            <span>•</span>
            <span>Licensed & Insured</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-400 transition-colors">
              Online Consultation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
