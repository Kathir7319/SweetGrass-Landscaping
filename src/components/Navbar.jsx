import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle sticky navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/gallery' },
    { name: 'Contact & Estimate', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group hover:opacity-95 transition-opacity">
            <Logo variant="default" size="md" className="group-hover:scale-[1.02] transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-brand-700 bg-brand-50/80 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-slate-700 hover:text-brand-700 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-brand-50/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Call Us</span>
                <span className="text-sm font-bold text-slate-800">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-brand-200" />
              <span>Get a Free Estimate</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label="Call SweetGrass Landscaping"
              className="p-2 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors text-center"
            >
              <Sparkles className="w-4 h-4 text-brand-200" />
              <span>Get a Free Estimate</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>Licensed & Insured in Cary, NC • 4.9★ Rated</span>
          </div>
        </div>
      )}
    </header>
  );
}
