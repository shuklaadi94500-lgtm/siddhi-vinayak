import React from 'react';
import { CUSTOMER_STORIES } from '../data/mockData';
import { Quote, ShieldCheck, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#070c18] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Documented Handover Proof</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Buyers, Real Registries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by Gorakhpur’s Doctors, Officers & Families
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Read unedited experiences from clients who completed their registry, dakhil-kharij, and boundary possession with Siddhi Vinayak City Infra GKP.
          </p>
        </div>

        {/* Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-slate-900/90 border border-slate-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl relative"
            >
              <div>
                {/* Top Badge: Verified Registry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-600/40">
                    <ShieldCheck className="w-3 h-3" />
                    Registry Done ({story.year})
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6 font-light">
                  "{story.quote}"
                </p>
              </div>

              {/* Author & Plot Details */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="font-display font-bold text-sm text-white">
                  {story.clientName}
                </p>
                <p className="text-xs text-amber-400/90 font-medium">
                  {story.profession}
                </p>
                <div className="mt-2 text-[11px] text-slate-400 font-mono">
                  {story.plotAllocated} · {story.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
