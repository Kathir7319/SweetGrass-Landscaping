import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'mowing', name: 'Lawn Mowing & Edging', basePrice: 55, unit: 'per visit' },
  { id: 'aeration', name: 'Core Aeration & Seeding', basePrice: 240, unit: 'one-time' },
  { id: 'patio', name: 'Paver Patio & Walkway', basePrice: 3200, unit: 'project base' },
  { id: 'cleanup', name: 'Mulch & Seasonal Cleanup', basePrice: 290, unit: 'seasonal' },
  { id: 'drainage', name: 'Yard Grading & French Drain', basePrice: 1400, unit: 'project base' },
];

const LOT_SIZES = [
  { id: 'small', label: 'Townhome / Patio Lot', sublabel: 'Under 3,500 sq ft', multiplier: 0.85 },
  { id: 'medium', label: 'Standard Cary Lot', sublabel: '1/4 to 1/3 Acre (Typical Cary home)', multiplier: 1.0 },
  { id: 'large', label: 'Large Lot', sublabel: '1/2 to 3/4 Acre', multiplier: 1.45 },
  { id: 'estate', label: 'Estate / Acreage', sublabel: '1+ Acre', multiplier: 2.1 },
];

const ADDONS = [
  { id: 'shrub', name: 'Shrub & Bush Precision Trimming', price: 95 },
  { id: 'mulch_refresh', name: 'Triple-Shredded Hardwood Mulch Layer', price: 175 },
  { id: 'weed_barrier', name: 'Pre-Emergent Weed Preventer Application', price: 65 },
  { id: 'fire_pit', name: 'Custom Stone Fire Pit Provision (Hardscape)', price: 850, hardscapeOnly: true },
];

export default function InstantQuoteCalculator() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);
  const [selectedLotSize, setSelectedLotSize] = useState(LOT_SIZES[1]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculatedEstimate = useMemo(() => {
    let base = selectedService.basePrice * selectedLotSize.multiplier;

    // Addons
    const activeAddonsCost = selectedAddons.reduce((sum, addonId) => {
      const match = ADDONS.find((a) => a.id === addonId);
      return sum + (match ? match.price : 0);
    }, 0);

    const totalMin = Math.round(base + activeAddonsCost * 0.9);
    const totalMax = Math.round((base + activeAddonsCost) * 1.25);

    return { min: totalMin, max: totalMax, unit: selectedService.unit };
  }, [selectedService, selectedLotSize, selectedAddons]);

  const handleProceedToEstimate = () => {
    navigate('/contact', {
      state: {
        service: selectedService.name,
        lotSize: selectedLotSize.label,
        notes: `Instant Estimator details: Selected service: ${selectedService.name}, Lot size: ${selectedLotSize.label}, Est. Range: $${calculatedEstimate.min} - $${calculatedEstimate.max} ${calculatedEstimate.unit}.`
      }
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-brand-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Cost Estimator
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Get An Instant Ballpark Estimate
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          Select your Cary property size and service to view an instant transparent estimate range.
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1: Service Selection */}
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span>1. Choose Your Primary Service</span>
            <span className="text-xs font-normal text-slate-500">Step 1 of 3</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {SERVICE_OPTIONS.map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => setSelectedService(srv)}
                className={`p-3.5 text-left rounded-xl border text-sm transition-all duration-150 flex flex-col justify-between ${
                  selectedService.id === srv.id
                    ? 'border-brand-600 bg-brand-50/60 font-semibold text-brand-900 ring-2 ring-brand-500/30'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{srv.name}</span>
                <span className="text-xs text-brand-700 font-medium mt-1">
                  Starting ~ ${srv.basePrice} {srv.unit}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Lot Size Selection */}
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span>2. Select Approximate Lot Size in Cary</span>
            <span className="text-xs font-normal text-slate-500">Step 2 of 3</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {LOT_SIZES.map((lot) => (
              <button
                key={lot.id}
                type="button"
                onClick={() => setSelectedLotSize(lot)}
                className={`p-3 text-left rounded-xl border text-xs sm:text-sm transition-all duration-150 ${
                  selectedLotSize.id === lot.id
                    ? 'border-brand-600 bg-brand-50/60 font-semibold text-brand-900 ring-2 ring-brand-500/30'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="font-semibold text-slate-900">{lot.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{lot.sublabel}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Add-on services */}
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span>3. Optional Add-ons & Upgrades</span>
            <span className="text-xs font-normal text-slate-500">Custom touch</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ADDONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-colors ${
                    isChecked
                      ? 'border-brand-600 bg-brand-50/40 text-brand-900 font-medium'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // handled by wrapper
                      className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
                    />
                    <span>{addon.name}</span>
                  </div>
                  <span className="text-xs font-bold text-brand-700 shrink-0 ml-2">
                    +${addon.price}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time Calculation Result Box */}
        <div className="bg-gradient-to-br from-brand-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Estimated Cary Project Range</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              ${calculatedEstimate.min.toLocaleString()} – ${calculatedEstimate.max.toLocaleString()}
              <span className="text-sm font-normal text-brand-200 ml-2">
                ({calculatedEstimate.unit})
              </span>
            </div>
            <p className="text-slate-300 text-xs">
              Includes labor, materials, cleanup & 100% satisfaction guarantee.
            </p>
          </div>

          <button
            type="button"
            onClick={handleProceedToEstimate}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <span>Lock In Free On-Site Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fine-print disclaimer */}
        <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <span>Final price confirmed during your free, no-obligation on-site consultation in Cary.</span>
        </div>
      </div>
    </div>
  );
}
