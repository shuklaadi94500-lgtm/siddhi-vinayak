import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeroProps {
  onOpenSiteVisit: () => void;
  onSelectSectorFilter: (sector: 'ALL' | 'A' | 'B' | 'C' | 'D') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSiteVisit, onSelectSectorFilter }) => {
  const [selectedSize, setSelectedSize] = useState('ALL');
  const [selectedSector, setSelectedSector] = useState<'ALL' | 'A' | 'B' | 'C' | 'D'>('ALL');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectSectorFilter(selectedSector);
    const element = document.getElementById('master-plan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B1325] pt-4 pb-12">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-500/10 via-blue-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Direct Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker (Anti-slop zero pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>{COMPANY_DETAILS.name}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Gorakhpur Development Zone</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Section 143 Approved</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Your Land. Your Future. <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Invest in Gorakhpur’s
              </span> <br />
              High-Growth Corridors.
            </h1>

            {/* Subtitle / Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans font-light">
              Secure fully-demarcated residential and commercial plots along the Gorakhpur Link Expressway, AIIMS Medical Corridor, and NH-28 Kushinagar Highway. 100% transparent mutation, immediate registry, and planned 40-foot wide asphalt boulevards.
            </p>

            {/* Concrete Key Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>143 Converted Land</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Immediate 14-Day Registry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dakhil-Kharij Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>40ft & 30ft Wide Roads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SBI / HDFC Bank Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>0% Middleman Brokerage</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Free VIP Cab Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#master-plan"
                className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Explore Live Master Plan</span>
              </a>
            </div>

            {/* Inline Search / Filter Form */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-sm shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Plot Availability Finder</span>
              </div>

              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                    Sector / Zone
                  </label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value as any)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="ALL">All Township Sectors</option>
                    <option value="A">Sector A (Boulevard 40ft)</option>
                    <option value="B">Sector B (Garden Green)</option>
                    <option value="C">Sector C (Park Avenue)</option>
                    <option value="D">Sector D (Commercial & Mixed)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                    Plot Size (Sq. Ft.)
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="ALL">Any Dimensions</option>
                    <option value="800">800 Sq. Ft. (Compact)</option>
                    <option value="1000">1,000 Sq. Ft. (Standard)</option>
                    <option value="1200">1,200 Sq. Ft. (Family Duplex)</option>
                    <option value="1500">1,500 Sq. Ft. (Spacious)</option>
                    <option value="2000">2,000+ Sq. Ft. (Luxury Villa / Comm)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2 px-3 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Matching Plots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Column: High-Impact Photorealistic Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/80 bg-slate-900 group">
              
              <img
                src="/src/assets/images/hero_businessman_plotted_dev_1790309129121.jpg"
                alt="Siddhi Vinayak City Infra GKP - Managing Director at Plotted Township Site in Gorakhpur"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Scrim with Company Signboard branding as specified in prompt */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1325] via-[#0B1325]/85 to-transparent p-5 sm:p-6">
                <div className="border-l-2 border-amber-400 pl-3">
                  <p className="font-display font-bold text-sm sm:text-base text-white tracking-wider uppercase">
                    SIDDHI VINAYAK CITY INFRA GKP PVT. LTD.
                  </p>
                  <p className="text-xs text-amber-300 font-medium">
                    Premium Real Estate & Property Solutions
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-300">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Gorakhpur Link Expressway & Medical Corridor, Gorakhpur</span>
                  </div>
                </div>
              </div>

              {/* Top floating verification stamp */}
              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-amber-400/40 rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs text-amber-300 font-medium shadow-lg">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% Mutation Verified</span>
              </div>
            </div>

            {/* Quick stats under image with tabular nums */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-2 border-t border-slate-800 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">1,450+</p>
                <p className="text-[11px] text-slate-400">Happy Plot Owners</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-amber-400">18.5 L+</p>
                <p className="text-[11px] text-slate-400">Sq.Ft. Land Delivered</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-emerald-400">100%</p>
                <p className="text-[11px] text-slate-400">Clean Registry Record</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
