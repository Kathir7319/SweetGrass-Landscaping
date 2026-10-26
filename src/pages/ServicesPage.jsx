import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Sprout, 
  Sparkles, 
  Layers, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Droplet,
  Layers3,
  Maximize2
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator';
import FAQAccordion from '../components/FAQAccordion';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all' 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=2000&q=80" 
            alt="Lawn maintenance" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30">
            Professional Landscape Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Tailored Lawn Care & Hardscaping in Cary, NC
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From precision weekly mowing and deep core aeration to custom paver patios and drainage grading.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('lawn-maintenance')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'lawn-maintenance'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Residential Lawn Maintenance
            </button>
            <button
              onClick={() => setActiveCategory('hardscaping-design')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'hardscaping-design'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Hardscaping & Landscape Design
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED CATEGORIES & SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {filteredCategories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-24 space-y-10">
            
            {/* Category Header */}
            <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  {category.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                  {category.title}
                </h2>
                <p className="text-slate-600 text-base mt-1 max-w-2xl">
                  {category.subtitle}
                </p>
              </div>
              <div className="text-xs text-slate-500 font-medium md:text-right">
                {category.tagline}
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Title and Starting Price */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {service.name}
                        </h3>
                        <p className="text-xs font-semibold text-brand-700 mt-0.5">
                          {service.frequency}
                        </p>
                      </div>
                      <span className="text-xs font-bold bg-stoneBg border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 whitespace-nowrap">
                        {service.startingPrice}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 bg-stoneBg p-4 rounded-xl border border-slate-100">
                      {service.fullDesc}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Service Inclusions:
                      </div>
                      <ul className="space-y-2">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 italic text-center sm:text-left">
                      Ideal for: {service.idealFor}
                    </span>
                    <Link
                      to="/contact"
                      state={{ service: service.name }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-800 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-brand-200 transition-colors whitespace-nowrap"
                    >
                      <span>Book Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* INTERACTIVE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstantQuoteCalculator />
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Services & Pricing FAQ
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Learn more about scheduling, soil preparation, and our guarantees.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h3 className="text-2xl font-bold text-white">Need a custom landscape package in Cary?</h3>
            <p className="text-slate-400 text-sm mt-1">
              We create personalized yard care plans tailored to your specific lot size and HOA guidelines.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
