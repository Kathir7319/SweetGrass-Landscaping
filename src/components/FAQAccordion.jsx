import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'border-brand-500/50 bg-white shadow-soft ring-1 ring-brand-500/20' 
                : 'border-slate-200 bg-white/80 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-display font-semibold text-slate-900 hover:text-brand-700 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 hidden sm:inline" />
                <span>{faq.question}</span>
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : ''
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                <p>{faq.answer}</p>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md">
                    Category: {faq.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
