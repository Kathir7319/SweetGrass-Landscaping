import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from './data/companyInfo';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Main Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* Mobile Sticky CTA Bar at bottom */}
        <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-slate-900/95 backdrop-blur-md text-white p-2.5 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center justify-between gap-2">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Call Now</span>
          </a>

          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-bold text-white shadow-md transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-200" />
            <span>Free Estimate</span>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
