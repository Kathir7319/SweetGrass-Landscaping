import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Compass, 
  PhoneCall, 
  Trophy, 
  Users, 
  Leaf, 
  ChevronRight,
  Hammer,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { BEFORE_AFTER_SHOWCASE } from '../data/projectsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator';

export default function HomePage() {
  const featuredTestimonial = TESTIMONIALS.find(t => t.featured) || TESTIMONIALS[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image with Dark Lush Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=85" 
            alt="Lush green residential landscaping in Cary, NC"
            className="w-full h-full object-cover object-center brightness-[0.4] contrast-[1.1] scale-105 animate-pulse duration-1000"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/80 text-brand-200 border border-brand-500/30 backdrop-blur-md mb-6 shadow-lg animate-fadeIn">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">
              4.9 Stars Rated • Cary's Trusted Lawn & Hardscape Specialists
            </span>
          </div>

          {/* Headline (exact user requested headline) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            Beautiful Landscapes, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-emerald-200 bg-clip-text text-transparent">
              Handcrafted for Your Cary Home.
            </span>
          </h1>

          {/* Subheadline (exact user requested subheadline) */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Premium residential lawn maintenance, hardscaping, and yard transformations in Cary, North Carolina.
          </p>

          {/* CTAs (Buttons requested) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-brand-700/40 hover:shadow-brand-600/60 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-5 h-5 text-brand-200" />
            </Link>

            <Link
              to="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-base px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-200"
            >
              <span>View Our Work</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Key Value Badges */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Free On-Site Consultations</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-brand-400 shrink-0" />
              <span>24-Hour Estimate Guarantee</span>
            </div>
          </div>

        </div>
      </section>


      {/* WELCOME / ABOUT INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-800 border border-brand-200">
              <Leaf className="w-3.5 h-3.5 text-brand-600" />
              <span>Welcome to SweetGrass</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Crafting Outdoor Living Spaces That Feel Like Home
            </h2>

            {/* Exact Welcome Text from prompt */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              At <strong className="text-slate-900 font-semibold">SweetGrass Landscaping LLC</strong>, we believe your outdoor space should be an extension of your home. We combine reliable, high-quality lawn care with custom landscape installations to boost your curb appeal and create the perfect backyard retreat. Whether you need a seasonal cleanup or a complete yard makeover, our local team is here to bring your vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stoneBg border border-slate-200/80">
                <div className="font-display font-bold text-slate-900 text-base">Local Cary Expertise</div>
                <p className="text-xs text-slate-600 mt-1">Deep understanding of Wake County soils, grass cultivars, and HOA guidelines.</p>
              </div>
              <div className="p-4 rounded-2xl bg-stoneBg border border-slate-200/80">
                <div className="font-display font-bold text-slate-900 text-base">Clear, Transparent Pricing</div>
                <p className="text-xs text-slate-600 mt-1">Detailed written proposals with zero surprise fees or hidden surcharges.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-800 transition-colors"
              >
                <span>Read our full story & commitments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=900&q=80" 
                alt="Manicured lawn in Cary North Carolina" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Overlay mini card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-800 hidden sm:block">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <Star className="w-5 h-5 fill-amber-400" />
                <span>4.9 / 5.0 Rating</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Trusted by hundreds of families in Prestonwood, Lochmere, Amberly, and Cary neighborhoods.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US? SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            The SweetGrass Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Why Choose Us?
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            We hold ourselves to higher standards of communication, punctuality, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 (Requested by prompt) */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-105 transition-transform">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Highly Rated Local Pros
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proudly holding a <strong className="text-slate-900">4.9-star rating</strong> from your neighbors in Cary. We show up on time, communicate before arrival, and treat your property with meticulous care.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Over 140+ verified local 5-star reviews</span>
            </div>
          </div>

          {/* Card 2 (Requested by prompt) */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-105 transition-transform">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Comprehensive Services
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From weekly mowing and aeration to custom paver patios, retaining walls, and complete drainage corrections. One reliable team for your entire yard.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>Full-service lawn care & hardscape design</span>
            </div>
          </div>

          {/* Card 3 (Requested by prompt) */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Reliable & Insured
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional, on-time service with full liability coverage for your peace of mind. We protect your family, property, and investment with $2M coverage.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Commercial liability & workers' comp</span>
            </div>
          </div>

        </div>
      </section>


      {/* FEATURED CLIENT TESTIMONIAL SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-900 via-brand-950 to-slate-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden border border-brand-800/40">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </span>
                <span className="text-brand-300 text-xs font-semibold uppercase tracking-wider ml-2">
                  Featured Client Review
                </span>
              </div>

              {/* Exact user requested quote */}
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white leading-snug">
                "{featuredTestimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-400/50">
                  <img 
                    src={featuredTestimonial.avatar} 
                    alt={featuredTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-base sm:text-lg">
                    {featuredTestimonial.name}
                  </div>
                  <div className="text-brand-300 text-xs sm:text-sm">
                    {featuredTestimonial.location} • Verified Cary Homeowner
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <h4 className="font-bold text-white text-base">Transform Your Yard Next</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Join Sarah and over 140+ happy Cary families who trust SweetGrass for their lawn and hardscaping needs.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-brand-950 hover:bg-brand-50 font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* INTERACTIVE BEFORE & AFTER COMPARISON SLIDER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider 
          title={BEFORE_AFTER_SHOWCASE.title}
          subtitle={BEFORE_AFTER_SHOWCASE.subtitle}
          location={BEFORE_AFTER_SHOWCASE.location}
          beforeImage={BEFORE_AFTER_SHOWCASE.beforeImage}
          afterImage={BEFORE_AFTER_SHOWCASE.afterImage}
          beforeLabel={BEFORE_AFTER_SHOWCASE.beforeLabel}
          afterLabel={BEFORE_AFTER_SHOWCASE.afterLabel}
        />
      </section>


      {/* SERVICES OVERVIEW QUICK PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Our Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Specialized Landscaping Services
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              Engineered specifically for North Carolina clay soils and outdoor living aesthetics.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-800 transition-colors text-sm"
          >
            <span>Explore all services & pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-500 text-white">
                    {cat.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {cat.subtitle}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {cat.services.map((srv) => (
                      <li key={srv.id} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-slate-900">{srv.name}:</strong>{' '}
                          <span className="text-slate-600 text-xs sm:text-sm">{srv.shortDesc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Cary, NC residential coverage
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* INTERACTIVE ESTIMATOR WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstantQuoteCalculator />
      </section>


      {/* OUR SIMPLE 3-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Hassle-Free from Estimate to Enjoyment
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            No complicated contracts or unreturned calls. Just honest Cary landscaping done right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft relative">
            <div className="text-4xl font-black text-brand-200 font-display mb-4">01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Request Your Free Estimate</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Submit your property address and desired service through our form or phone. We will respond within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft relative">
            <div className="text-4xl font-black text-brand-200 font-display mb-4">02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">On-Site Walkthrough & Proposal</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We inspect your yard's slope, soil, and sunlight conditions, then provide an itemized, transparent quote.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft relative">
            <div className="text-4xl font-black text-brand-200 font-display mb-4">03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Craftsmanship & Final Walkthrough</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our uniformed crew executes on time, cleans up meticulously, and ensures 100% satisfaction before closing the gate.
            </p>
          </div>
        </div>
      </section>


      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl border border-brand-700/50 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready for a Yard You'll Love Coming Home To?
            </h2>
            <p className="text-brand-200 text-sm sm:text-base">
              Contact SweetGrass today for a free on-site consultation anywhere in Cary, NC.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-950 hover:bg-brand-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-5 h-5 text-brand-800" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-800/80 hover:bg-brand-800 text-white font-semibold px-8 py-4 rounded-xl border border-brand-600/60 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-300" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
