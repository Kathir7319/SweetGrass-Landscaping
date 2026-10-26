import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Compass,
  Trophy
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO BANNER */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80" 
            alt="Landscaping work in Cary" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30">
            About SweetGrass Landscaping LLC
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Rooted in Cary, Dedicated to Craftsmanship
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the passion, values, and local commitment behind North Carolina's premier residential landscaping team.
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Simple Promise to Cary Homeowners
            </h2>

            {/* Exact Story text from prompt */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Founded in 2022</strong>, SweetGrass Landscaping LLC was built on a simple promise: to provide Cary homeowners with reliable, transparent, and top-tier landscaping services.
              </p>
              <p>
                We understand that your time is valuable, which is why we focus on clear communication, punctuality, and exceptional attention to detail on every single property.
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether preparing a home for spring curb appeal, reviving tired fescue grass after humid North Carolina summers, or laying interlocking paver patios for family cookouts, our team approaches every yard as an extension of our client's living space.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-2xl font-black text-brand-700 font-display">2022</div>
                <div className="text-xs text-slate-500 font-medium">Proudly Founded</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-2xl font-black text-amber-500 font-display">4.9 ★</div>
                <div className="text-xs text-slate-500 font-medium">140+ Cary Reviews</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-2xl font-black text-brand-700 font-display">$2M</div>
                <div className="text-xs text-slate-500 font-medium">Liability Insured</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1000&q=80" 
                alt="SweetGrass team working on landscape in Cary" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-brand-900 text-white p-6 rounded-2xl shadow-xl max-w-xs border border-brand-700 hidden sm:block">
              <div className="flex items-center gap-2 font-bold text-base mb-1">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
                <span>The SweetGrass Pledge</span>
              </div>
              <p className="text-xs text-brand-200">
                Clean equipment, secure backyard gates, polite crews, and 100% spotless blow-off after every visit.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR CORE COMMITMENTS SECTION */}
      <section className="bg-brand-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-300 uppercase tracking-widest bg-brand-900/80 px-3 py-1 rounded-full border border-brand-700">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-display">
              Our Core Commitments
            </h2>
            <p className="text-brand-200 mt-2 text-sm sm:text-base">
              The foundational values that drive our team every day across Cary, North Carolina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Commitment 1 (Requested by prompt) */}
            <div className="bg-brand-900/50 backdrop-blur-sm rounded-3xl p-8 border border-brand-800/80 hover:border-brand-600 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-brand-300 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quality Materials
                </h3>
                <p className="text-brand-200 text-sm leading-relaxed">
                  We use premium sod, seed, pavers, and topsoil to ensure lasting results. From Blue Tag certified fescue to durable interlocking pavers, we never compromise on durability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-800/60 text-xs text-brand-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Long-term landscape vitality</span>
              </div>
            </div>

            {/* Commitment 2 (Requested by prompt) */}
            <div className="bg-brand-900/50 backdrop-blur-sm rounded-3xl p-8 border border-brand-800/80 hover:border-brand-600 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-brand-300 mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Community First
                </h3>
                <p className="text-brand-200 text-sm leading-relaxed">
                  We live and work in the Cary area, and we treat every yard as if it were our own. Our neighbors are our clients, and our reputation is our most valuable asset.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-800/60 text-xs text-brand-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Local Cary, NC ownership</span>
              </div>
            </div>

            {/* Commitment 3 (Requested by prompt) */}
            <div className="bg-brand-900/50 backdrop-blur-sm rounded-3xl p-8 border border-brand-800/80 hover:border-brand-600 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-brand-300 mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Eco-Friendly Practices
                </h3>
                <p className="text-brand-200 text-sm leading-relaxed">
                  Utilizing smart fertilization and lawn care techniques that protect local soil and water. We safeguard local Carolina watersheds and minimize unnecessary runoff.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-800/60 text-xs text-brand-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Responsible stewardship</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY OUR CLIENTS LOVE OUR TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              The SweetGrass Difference on Your Property
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Here's how we back up our promises every single day in Cary:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-stoneBg border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Razor-Sharp Blades</span>
              </div>
              <p className="text-xs text-slate-600">
                We sharpen mower blades twice a week to guarantee clean cuts that prevent brown grass leaf tips.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stoneBg border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Pet & Gate Security</span>
              </div>
              <p className="text-xs text-slate-600">
                Double-checked gate latches and photo confirmations so your pets stay safe in the yard.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stoneBg border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Transparent Billing</span>
              </div>
              <p className="text-xs text-slate-600">
                Simple online payments, itemized invoices, and easy auto-pay with no confusing surcharges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stoneBg border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Dedicated Local Crew</span>
              </div>
              <p className="text-xs text-slate-600">
                Familiar uniformed professionals who know your property's specific nuances week after week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <h3 className="text-2xl font-bold text-white">Experience the SweetGrass standard for yourself</h3>
            <p className="text-brand-100 text-sm mt-1">
              Reach out today for your complimentary on-site yard review in Cary, NC.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-950 hover:bg-brand-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-transform hover:scale-105"
          >
            <span>Meet Our Team & Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
