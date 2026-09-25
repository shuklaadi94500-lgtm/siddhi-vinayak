import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Briefcase } from 'lucide-react';

interface FooterProps {
  onSwitchView: (view: 'client' | 'executive') => void;
  onOpenSiteVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSwitchView, onOpenSiteVisit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060a14] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <p className="font-display font-bold text-lg text-white tracking-wider">
                SIDDHI VINAYAK CITY INFRA
              </p>
              <p className="text-[11px] uppercase tracking-wider text-amber-400 font-medium">
                GKP Pvt. Ltd. · Real Estate & Plotted Solutions
              </p>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed font-light">
              Transforming Gorakhpur’s plotted residential and commercial development landscape with total legal transparency, 100% Section 143 certification, wide metalled roads, and guaranteed prompt mutation.
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Corporate CIN: {COMPANY_DETAILS.cin}
            </div>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Township Links
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#master-plan" className="hover:text-amber-400 transition-colors">
                  Interactive Master Plan
                </a>
              </li>
              <li>
                <a href="#gorakhpur-corridor" className="hover:text-amber-400 transition-colors">
                  Growth Corridor Thesis
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Plot EMI Calculator
                </a>
              </li>
              <li>
                <a href="#legal-trust" className="hover:text-amber-400 transition-colors">
                  143 Legal Guarantees
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Headquarters in Gorakhpur */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Corporate Office
            </p>
            
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="font-mono hover:text-amber-400">
                {COMPANY_DETAILS.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </div>

            <p className="text-[11px] text-slate-400">
              Visiting Hours: {COMPANY_DETAILS.officeHours}
            </p>
          </div>

          {/* Column 4: Quick Action & Businessman Portal Switcher */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Site Inspection & Management
            </p>
            
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Complimentary AC cab service available for outstation buyers, NRIs, and Gorakhpur families.
            </p>

            <button
              onClick={onOpenSiteVisit}
              className="w-full py-2.5 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center cursor-pointer"
            >
              Book Free Site Cab Pickup
            </button>

            <button
              onClick={() => onSwitchView('executive')}
              className="w-full py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Director's Sales Portal</span>
            </button>
          </div>

        </div>

        {/* Quiet Sub-Footer with Legal Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>RERA & Revenue Section 143 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Zero Brokerage Direct Sales</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
