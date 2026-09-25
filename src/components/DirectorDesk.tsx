import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { Quote, CheckCircle, Award, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface DirectorDeskProps {
  onOpenSiteVisit: () => void;
}

export const DirectorDesk: React.FC<DirectorDeskProps> = ({ onOpenSiteVisit }) => {
  return (
    <section id="director" className="py-20 bg-[#0B1325] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Corporate Consultation Lounge Photography */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/executive_consultation_lounge_1790309155737.jpg"
                alt="Siddhi Vinayak City Infra GKP - Executive Customer Consultation Lounge in Gorakhpur"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-slate-950/90 border-t border-slate-800">
                <p className="text-xs font-semibold text-white">
                  Corporate Sales Gallery & Architectural Consultation Suite
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Medical College Road / AIIMS Corridor, Gorakhpur
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 border border-slate-700/80 rounded-xl p-4 shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold font-mono">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Direct Management Access</p>
                  <p className="text-[11px] text-slate-400">Sit across the table with leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Managing Director's Philosophy & Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>Leadership & Stewardship</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Founder's Desk</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              “Building Trust in Gorakhpur One Honest Registry at a Time.”
            </h2>

            <div className="relative pl-6 border-l-2 border-amber-500/80 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Welcome to <strong>Siddhi Vinayak City Infra GKP Pvt. Ltd.</strong> When we founded this enterprise in Gorakhpur, we set out with a clear moral mandate: to eliminate the ambiguity, middleman gouging, and endless delays that have plagued real estate buyers for decades.
              </p>
              <p>
                Whether you are a resident family building your forever home, an NRI investing back in your roots, or an entrepreneur securing commercial frontage near the Gorakhpur Link Expressway, our commitment remains uncompromising: <em>every plot has Section 143 certification, on-ground boundary markers, and immediate registrar transfer within days of agreement.</em>
              </p>
              <p className="italic text-slate-400 text-sm">
                “Your land is the bedrock of your family's future wealth. We treat that responsibility with the highest standard of institutional integrity.”
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <p className="font-display font-bold text-lg text-white">
                  Managing Director & Board of Directors
                </p>
                <p className="text-xs text-amber-400 font-medium">
                  Siddhi Vinayak City Infra GKP Pvt. Ltd.
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Civil Engineering & Infrastructure Development Specialists
                </p>
              </div>

              <button
                onClick={onOpenSiteVisit}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer self-start sm:self-auto"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book 1-on-1 Director Meeting</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
