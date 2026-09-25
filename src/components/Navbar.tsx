import React, { useState } from 'react';
import { Phone, Calendar, ShieldCheck, Briefcase, UserCheck, Menu, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface NavbarProps {
  currentView: 'client' | 'executive';
  onViewChange: (view: 'client' | 'executive') => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  onOpenSiteVisit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1325]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Top micro bar for direct contact & trust */}
      <div className="bg-[#070c18] border-b border-slate-800/60 px-4 sm:px-8 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Mutation & 143 Clear-Title Guarantee
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">Gorakhpur, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-mono tabular-nums"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">CIN: {COMPANY_DETAILS.cin}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex flex-col">
          <a href="#" className="font-display font-bold text-lg sm:text-xl tracking-wider text-white hover:text-amber-300 transition-colors">
            SIDDHI VINAYAK CITY INFRA
          </a>
          <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium">
            GKP Pvt. Ltd. · Property & Plotted Solutions
          </span>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-amber-400 transition-colors">
            Townships
          </a>
          <a href="#master-plan" className="hover:text-amber-400 transition-colors">
            Master Layout
          </a>
          <a href="#gorakhpur-corridor" className="hover:text-amber-400 transition-colors">
            Growth Corridor
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">
            ROI & EMI
          </a>
          <a href="#legal-trust" className="hover:text-amber-400 transition-colors">
            Legal Guarantee
          </a>
          <a href="#director" className="hover:text-amber-400 transition-colors">
            Director's Desk
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions + Mode Switcher */}
        <div className="flex items-center gap-3">
          {/* Dual Persona Switcher (Client View vs Executive Desk for the Businessman) */}
          <button
            onClick={() => onViewChange(currentView === 'client' ? 'executive' : 'client')}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
              currentView === 'executive'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold shadow-md'
                : 'bg-slate-800/80 hover:bg-slate-700/80 text-amber-300 border-slate-700'
            }`}
            title="Switch between Client Presentation Mode and Businessman Management Portal"
          >
            {currentView === 'executive' ? (
              <>
                <UserCheck className="w-3.5 h-3.5" />
                <span>Executive Hub Active</span>
              </>
            ) : (
              <>
                <Briefcase className="w-3.5 h-3.5" />
                <span>Executive Desk</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenSiteVisit}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free Site Visit</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070c18] border-b border-slate-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Townships & Projects
            </a>
            <a
              href="#master-plan"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Interactive Master Layout
            </a>
            <a
              href="#gorakhpur-corridor"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Gorakhpur Growth Corridor
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              ROI & EMI Calculator
            </a>
            <a
              href="#legal-trust"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Legal & 143 Guarantee
            </a>
            <a
              href="#director"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Director's Vision
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onViewChange(currentView === 'client' ? 'executive' : 'client');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-lg border border-slate-700 bg-slate-800 text-amber-300"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{currentView === 'executive' ? 'Switch to Client View' : 'Open Businessman Executive Desk'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
