import React from 'react';
import { TRUST_PILLARS, COMPANY_DETAILS } from '../data/mockData';
import { ShieldCheck, FileCheck, Award, CheckCircle2, Phone } from 'lucide-react';

interface TrustAndLegalProps {
  onOpenSiteVisit: () => void;
}

export const TrustAndLegal: React.FC<TrustAndLegalProps> = ({ onOpenSiteVisit }) => {
  return (
    <section id="legal-trust" className="py-20 bg-[#070c18] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Compromise Legal Security</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>100% Peace of Mind</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Siddhi Vinayak Legal Guarantee
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            We understand that purchasing land in Gorakhpur is often a family’s life savings. That is why every square foot offered by Siddhi Vinayak City Infra GKP is verified across six uncompromising institutional standards before being offered to clients.
          </p>
        </div>

        {/* 6 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-600/40">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Tehsil Records</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Paperwork Inspection Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0E1B38] to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Want to inspect chain-of-title or Section 143 papers before booking?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              We welcome your family advocate to visit our Gorakhpur corporate office, examine 30-year search report, Khatauni revenue documents, and bank NOC certificates with full transparency.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenSiteVisit}
              className="py-3 px-5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              Request Document Verification Dossier
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="py-3 px-5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Legal Helpdesk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
