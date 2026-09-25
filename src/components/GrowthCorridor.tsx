import React, { useState } from 'react';
import { INFRASTRUCTURE_CORRIDORS } from '../data/mockData';
import { TrendingUp, Navigation, Plane, Hospital, Building, Factory, ArrowUpRight } from 'lucide-react';

export const GrowthCorridor: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Expressway':
        return <Navigation className="w-4 h-4 text-amber-400" />;
      case 'Healthcare':
        return <Hospital className="w-4 h-4 text-emerald-400" />;
      case 'Aviation':
        return <Plane className="w-4 h-4 text-sky-400" />;
      case 'Tourism':
        return <Building className="w-4 h-4 text-indigo-400" />;
      case 'Industry':
        return <Factory className="w-4 h-4 text-yellow-400" />;
      default:
        return <Navigation className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="gorakhpur-corridor" className="py-20 bg-[#070c18] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Investment Thesis</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>The Gorakhpur Urban Transformation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Invest in Gorakhpur Right Now?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Eastern Uttar Pradesh's commercial capital has received over ₹50,000 Crores in landmark infrastructure investments: expressways, AIIMS, airport expansion, and industrial parks. Plotted land values along these arterial routes have consistently delivered 18%–24% annualized capital appreciation.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Historical CAGR (2020-2026)</span>
              <span className="text-xl font-bold font-mono text-emerald-400">+22.4% p.a.</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Average plotted land values along AIIMS & Expressway corridor rose from ₹750/sqft to ₹1,650/sqft.
            </p>
          </div>
        </div>

        {/* Interactive Corridor Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Tab / List Selector */}
          <div className="lg:col-span-5 space-y-3">
            {INFRASTRUCTURE_CORRIDORS.map((item, index) => {
              const isSelected = selectedHighlight === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setSelectedHighlight(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400 shadow-lg text-white'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(item.category)}
                      <span className="font-semibold text-sm text-white">{item.title}</span>
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400">
                      {item.impact}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
                    <span>Proximity: {item.distance}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Featured Deep-Dive Card */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                <span>Infrastructure Project #{selectedHighlight + 1}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{INFRASTRUCTURE_CORRIDORS[selectedHighlight].category}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {INFRASTRUCTURE_CORRIDORS[selectedHighlight].title}
              </h3>

              <div className="inline-block bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono px-3 py-1 rounded-md mb-5">
                Market Impact: {INFRASTRUCTURE_CORRIDORS[selectedHighlight].impact}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {INFRASTRUCTURE_CORRIDORS[selectedHighlight].description}
              </p>

              {/* Proximity Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Distance to Site</span>
                  <span className="text-sm font-semibold font-mono text-white">
                    {INFRASTRUCTURE_CORRIDORS[selectedHighlight].distance}
                  </span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Investment Type</span>
                  <span className="text-sm font-semibold font-mono text-amber-300">
                    High Appreciation
                  </span>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Legal Status</span>
                  <span className="text-sm font-semibold font-mono text-emerald-400">
                    143 Clear Registry
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Advice Note */}
            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
              <strong>Advisory Tip from Siddhi Vinayak:</strong> Plot investments along expressways and medical institutions historically yield peak returns during the pre-operational and initial 36 months of master infrastructure commissioning.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
