import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Calendar, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyInfo';

const SERVICE_DROPDOWN_OPTIONS = [
  "Lawn Maintenance",
  "Aeration & Seeding",
  "Paver Patio & Hardscaping",
  "Mulch & Cleanup",
  "Grading & Drainage"
];

const CARY_NEIGHBORHOODS = [
  "Prestonwood & Preston Village",
  "Lochmere & Lochmere Highlands",
  "Amberly & Village Square",
  "Carpenter Village",
  "MacGregor Downs",
  "Highcroft & Highcroft Village",
  "Wellsley",
  "Cary Park & West Cary",
  "Apex & Morrisville border"
];

export default function ContactPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    serviceNeeded: SERVICE_DROPDOWN_OPTIONS[0],
    timeframe: 'Within 2 weeks',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Populate from pre-filled state if user navigated from Instant Quote Calculator or a specific service
  useEffect(() => {
    if (location.state) {
      if (location.state.service) {
        // match closest option
        const matched = SERVICE_DROPDOWN_OPTIONS.find(opt => 
          location.state.service.toLowerCase().includes(opt.toLowerCase().split(' ')[0])
        );
        if (matched) {
          setFormData(prev => ({ ...prev, serviceNeeded: matched }));
        }
      }
      if (location.state.notes) {
        setFormData(prev => ({ 
          ...prev, 
          projectDetails: location.state.notes + (prev.projectDetails ? `\n\n${prev.projectDetails}` : '') 
        }));
      }
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter a valid phone number.";
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = "Please enter at least 10 digits for your phone number.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.propertyAddress.trim()) {
      errs.propertyAddress = "Please enter your Cary, NC area property address.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate immediate, polished API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // silent fallback if confetti disabled
      }
    }, 800);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=2000&q=80" 
            alt="Landscape Consultation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30">
            Free On-Site Consultation
          </span>
          {/* Requested Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Let's Build Your Dream Yard
          </h1>
          {/* Requested Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to get started? Fill out the form below, and a member of our team will get back to you within 24 hours to schedule your free, on-site consultation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: CONTACT INFORMATION & SERVICE AREA */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="space-y-5 text-sm">
                
                {/* Service Area (Requested) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Service Area</h3>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.serviceArea}
                    </p>
                  </div>
                </div>

                {/* Business Hours (Requested) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Business Hours</h3>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {COMPANY_INFO.hours.weekdays}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {COMPANY_INFO.hours.saturday}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {COMPANY_INFO.hours.sunday}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Direct Phone</h3>
                    <a 
                      href={`tel:${COMPANY_INFO.phoneRaw}`} 
                      className="text-brand-700 hover:text-brand-800 font-semibold block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Call or text our local team</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-brand-700 hover:text-brand-800 font-semibold block mt-0.5 break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-2xl bg-stoneBg border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-brand-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>Licensed & Insured Local Pros</span>
                </div>
                <p className="text-xs text-slate-600">
                  {COMPANY_INFO.insurance}. Every estimate includes a transparent, written contract with no hidden costs.
                </p>
              </div>
            </div>

            {/* Neighborhoods served in Cary */}
            <div className="bg-brand-900 text-white rounded-3xl p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="font-bold text-lg text-white">
                Cary Neighborhoods We Service Weekly
              </h3>
              <p className="text-brand-200 text-xs">
                Our crews are actively working throughout these Cary communities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                {CARY_NEIGHBORHOODS.map((hood, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-brand-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{hood}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: REQUEST AN ESTIMATE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-elevated">
              
              {submitted ? (
                /* Success Message */
                <div className="text-center py-12 px-4 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Estimate Request Received!
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. We have logged your request for <strong>{formData.serviceNeeded}</strong> at <strong>{formData.propertyAddress}</strong>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-stoneBg border border-slate-200 text-left max-w-md mx-auto text-xs sm:text-sm space-y-2">
                    <div className="font-bold text-slate-900 mb-1">What happens next?</div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-brand-200 text-brand-800 text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                      <span>We review your property via satellite GIS imagery within 4 hours.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-brand-200 text-brand-800 text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                      <span>A SweetGrass specialist will call/text you at <strong>{formData.phone}</strong>.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-brand-200 text-brand-800 text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                      <span>We schedule an on-site consultation at your convenience.</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        propertyAddress: '',
                        serviceNeeded: SERVICE_DROPDOWN_OPTIONS[0],
                        timeframe: 'Within 2 weeks',
                        projectDetails: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* Actual Form with all requested fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Request an Estimate
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      Fill out the form below for your free on-site quote in Cary, NC.
                    </p>
                  </div>

                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Miller"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-stoneBg/50'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2 & 3: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(919) 555-0123"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-stoneBg/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-stoneBg/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Field 4: Property Address (Cary, NC area) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Address (Cary, NC area) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      placeholder="e.g. 104 Willow Lake Way, Cary, NC 27513"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                        errors.propertyAddress
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100 bg-stoneBg/50'
                      }`}
                    />
                    {errors.propertyAddress && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.propertyAddress}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 5: Service Needed [Dropdown Menu requested by prompt] */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 bg-stoneBg/50 text-sm text-slate-800 transition-colors cursor-pointer"
                    >
                      {SERVICE_DROPDOWN_OPTIONS.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Target Timeframe */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['ASAP (This week)', 'Within 2 weeks', 'Next 1–2 months'].map((tf) => (
                        <button
                          key={tf}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeframe: tf }))}
                          className={`py-2 px-2 text-xs rounded-lg border font-medium transition-colors ${
                            formData.timeframe === tf
                              ? 'border-brand-600 bg-brand-50 text-brand-800 font-semibold'
                              : 'border-slate-200 bg-stoneBg/30 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 6: Project Details / Message Box */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details / Message Box
                    </label>
                    <textarea
                      rows={4}
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your yard: current grass type, standing water spots, patio size ideas, gates/fences, or specific goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 bg-stoneBg/50 text-sm transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/40 transition-all duration-200 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Free Estimate Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    <span>Your information is 100% confidential. No spam or sharing ever.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
