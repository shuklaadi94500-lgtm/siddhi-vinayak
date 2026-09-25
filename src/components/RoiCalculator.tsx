import React, { useState, useId } from 'react';
import { Calculator, TrendingUp, IndianRupee, Download, Sparkles, Check, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenSiteVisit: (customNotes?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenSiteVisit }) => {
  const [plotArea, setPlotArea] = useState<number>(1200);
  const [ratePerSqFt, setRatePerSqFt] = useState<number>(1500);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(10);
  const [interestRate, setInterestRate] = useState<number>(8.5); // Bank loan rate %
  const [expectedGrowthRate, setExpectedGrowthRate] = useState<number>(18); // Gorakhpur 18% annual growth

  const plotAreaId = useId();
  const rateId = useId();
  const downPaymentId = useId();
  const tenureId = useId();

  // Calculations
  const totalCost = plotArea * ratePerSqFt;
  const downPaymentAmount = totalCost * (downPaymentPercent / 100);
  const loanPrincipal = totalCost - downPaymentAmount;

  // Monthly EMI calculation formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;
  const monthlyEmi =
    monthlyRate > 0
      ? (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : loanPrincipal / totalMonths;

  // Future capital appreciation projections
  const value3Years = totalCost * Math.pow(1 + expectedGrowthRate / 100, 3);
  const value5Years = totalCost * Math.pow(1 + expectedGrowthRate / 100, 5);
  const profit5Years = value5Years - totalCost;

  return (
    <section id="calculator" className="py-20 bg-[#0B1325] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Tool</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Estate Valuation & EMI</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Plot Investment & EMI Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Plan your land acquisition with institutional precision. Model plot sizes, bank finance installments, and 5-year capital appreciation along Gorakhpur’s prime infrastructure corridors.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Sliders */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Plot Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={plotAreaId} className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Plot Area (Sq. Ft.)
                </label>
                <span className="font-mono text-base font-bold text-amber-400">
                  {plotArea.toLocaleString()} Sq. Ft.
                </span>
              </div>
              <input
                id={plotAreaId}
                type="range"
                min="800"
                max="3000"
                step="50"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>800 sqft (Starter)</span>
                <span>1,200 sqft</span>
                <span>2,000 sqft</span>
                <span>3,000 sqft (Estate)</span>
              </div>
            </div>

            {/* Base Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={rateId} className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Base Rate per Sq. Ft. (₹)
                </label>
                <span className="font-mono text-base font-bold text-white">
                  ₹{ratePerSqFt.toLocaleString()} / sq.ft
                </span>
              </div>
              <input
                id={rateId}
                type="range"
                min="1200"
                max="2500"
                step="25"
                value={ratePerSqFt}
                onChange={(e) => setRatePerSqFt(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>₹1,200 (Suburban)</span>
                <span>₹1,500 (Gated Enclave)</span>
                <span>₹2,500 (Main Highway Comm)</span>
              </div>
            </div>

            {/* Down Payment % Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={downPaymentId} className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-mono text-base font-bold text-emerald-400">
                  ₹{(downPaymentAmount / 100000).toFixed(2)} Lakhs
                </span>
              </div>
              <input
                id={downPaymentId}
                type="range"
                min="20"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>20% (Minimum)</span>
                <span>30%</span>
                <span>50%</span>
                <span>60%</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={tenureId} className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Bank Loan Tenure
                </label>
                <span className="font-mono text-base font-bold text-white">
                  {loanTenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <input
                id={tenureId}
                type="range"
                min="3"
                max="20"
                step="1"
                value={loanTenureYears}
                onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>3 Years</span>
                <span>5 Years</span>
                <span>10 Years</span>
                <span>20 Years</span>
              </div>
            </div>

            {/* Assumptions pill */}
            <div className="text-[11px] text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span>Assumed Bank Interest Rate: <strong className="text-white">8.5% p.a.</strong></span>
              <span>Projected Appreciation: <strong className="text-emerald-400">18% p.a.</strong></span>
            </div>

          </div>

          {/* Right: Results Card & ROI Growth Projection */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Core Figures Breakdown */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Total Plot Valuation
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    ₹{(totalCost / 100000).toFixed(2)} L
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    (₹{totalCost.toLocaleString()})
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 block mb-1">
                    Monthly Loan Installment
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                    ₹{Math.round(monthlyEmi).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    / month for {loanTenureYears} years
                  </span>
                </div>
              </div>

              {/* Loan Breakdown Details */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Initial Down Payment ({downPaymentPercent}%):</span>
                  <span className="font-mono font-semibold text-emerald-400">
                    ₹{Math.round(downPaymentAmount).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Bank Loan Principal:</span>
                  <span className="font-mono font-semibold text-white">
                    ₹{Math.round(loanPrincipal).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Immediate Token Advance:</span>
                  <span className="font-mono font-semibold text-amber-400">₹51,000 (Adjusted in DP)</span>
                </div>
              </div>

              {/* Capital Appreciation Forecast */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/90">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Projected Capital Appreciation (At 18% CAGR)</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Estimated 3-Year Value:</span>
                    <span className="text-lg font-bold font-mono text-white">
                      ₹{(value3Years / 100000).toFixed(2)} Lakhs
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Estimated 5-Year Value:</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">
                      ₹{(value5Years / 100000).toFixed(2)} Lakhs
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400">
                  Projected 5-Year Net Wealth Gain: <strong className="text-emerald-400 font-mono">+₹{(profit5Years / 100000).toFixed(2)} Lakhs</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenSiteVisit(`Interested in ${plotArea} sq.ft plot. Calculated budget ₹${(totalCost / 100000).toFixed(2)} Lakhs.`)}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Custom Payment Plan on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
