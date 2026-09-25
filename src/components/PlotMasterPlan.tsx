import React, { useState } from 'react';
import { Plot, PlotStatus, FacingType } from '../types';
import { 
  CheckCircle, 
  Clock, 
  Lock, 
  Compass, 
  Layers, 
  IndianRupee, 
  MapPin, 
  Share2, 
  Calendar, 
  Check, 
  Info,
  Maximize2
} from 'lucide-react';

interface PlotMasterPlanProps {
  plots: Plot[];
  selectedSectorFilter: 'ALL' | 'A' | 'B' | 'C' | 'D';
  onSectorFilterChange: (sector: 'ALL' | 'A' | 'B' | 'C' | 'D') => void;
  onSelectPlotForBooking: (plot: Plot) => void;
}

export const PlotMasterPlan: React.FC<PlotMasterPlanProps> = ({
  plots,
  selectedSectorFilter,
  onSectorFilterChange,
  onSelectPlotForBooking
}) => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'ALL' | PlotStatus>('ALL');
  const [selectedFacingFilter, setSelectedFacingFilter] = useState<'ALL' | FacingType>('ALL');
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(plots[0] || null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered plots
  const filteredPlots = plots.filter(plot => {
    if (selectedSectorFilter !== 'ALL' && plot.sector !== selectedSectorFilter) return false;
    if (selectedStatusFilter !== 'ALL' && plot.status !== selectedStatusFilter) return false;
    if (selectedFacingFilter !== 'ALL' && !plot.facing.includes(selectedFacingFilter)) return false;
    return true;
  });

  // Plot counters
  const totalCount = plots.length;
  const availableCount = plots.filter(p => p.status === 'available').length;
  const reservedCount = plots.filter(p => p.status === 'reserved').length;
  const soldCount = plots.filter(p => p.status === 'sold').length;

  const handleSharePlot = (plot: Plot) => {
    const text = `Siddhi Vinayak City Infra GKP: Interested in Plot ${plot.plotNumber} (${plot.sizeSqFt} sq.ft, ${plot.facing} facing) in Sector ${plot.sector}. Total Price: ₹${(plot.totalPrice / 100000).toFixed(2)} Lakhs.`;
    navigator.clipboard?.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getStatusColor = (status: PlotStatus) => {
    switch (status) {
      case 'available':
        return 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200 hover:border-emerald-300 hover:bg-emerald-900/90';
      case 'reserved':
        return 'bg-amber-950/70 border-amber-500/80 text-amber-200 hover:border-amber-300 hover:bg-amber-900/90';
      case 'sold':
        return 'bg-slate-900/90 border-slate-700/80 text-slate-400 opacity-60 cursor-not-allowed';
    }
  };

  return (
    <section id="master-plan" className="py-20 bg-[#070c18] border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Township Layout</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Siddhi Vinayak Enclave Phase 1 & 2</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Master Plan & Plot Selector
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-light">
              Select any plot on the planned grid to view authentic ground dimensions, road clearance, directional facing, and spot booking value.
            </p>
          </div>

          {/* Real-time Inventory Status Badges (Clean functional tabs) */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 px-2 py-1 font-mono tabular-nums">
              Total Plots: <strong className="text-white font-semibold">{totalCount}</strong>
            </span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 px-2 py-1 text-emerald-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {availableCount} Available
            </span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 px-2 py-1 text-amber-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              {reservedCount} In Token
            </span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 px-2 py-1 text-slate-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              {soldCount} Registered
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          
          {/* Sector Segmented Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">Sector:</span>
            {(['ALL', 'A', 'B', 'C', 'D'] as const).map(sec => (
              <button
                key={sec}
                onClick={() => onSectorFilterChange(sec)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedSectorFilter === sec
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {sec === 'ALL' ? 'All Sectors' : `Sector ${sec}`}
              </button>
            ))}
          </div>

          {/* Status and Facing Selectors */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold">Status:</span>
              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value as any)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="ALL">All Status</option>
                <option value="available">Available Only</option>
                <option value="reserved">Reserved / In Token</option>
                <option value="sold">Sold & Registered</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold">Facing:</span>
              <select
                value={selectedFacingFilter}
                onChange={(e) => setSelectedFacingFilter(e.target.value as any)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="ALL">All Facings</option>
                <option value="East">East (Morning Sun)</option>
                <option value="North">North (Vastu Favorite)</option>
                <option value="North-East">North-East (Ishan Corner)</option>
                <option value="West">West</option>
              </select>
            </div>
          </div>

        </div>

        {/* Master Plan Visual Grid & Selected Plot Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Plot Map Area */}
          <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 relative">
            
            {/* Legend & North Compass */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500/80 border border-emerald-400" />
                  Available
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded-sm bg-amber-500/80 border border-amber-400" />
                  Token Hold
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded-sm bg-slate-700 border border-slate-600" />
                  Sold
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>NORTH FACING LAYOUT</span>
              </div>
            </div>

            {/* Central Boulevard Marker */}
            <div className="w-full bg-slate-800/80 border border-dashed border-slate-700 py-1.5 px-4 mb-6 rounded text-center text-[11px] font-mono tracking-wider text-slate-400">
              ════ 40-FOOT MAIN ENTRANCE BOULEVARD (ASPHALT BLACKTOP WITH LED STREETLIGHTS) ════
            </div>

            {/* Interactive Grid of Plots */}
            {filteredPlots.length === 0 ? (
              <div className="py-16 text-center text-slate-400">
                <Info className="w-8 h-8 mx-auto text-amber-400/60 mb-2" />
                <p>No plots match the selected filters.</p>
                <button
                  onClick={() => {
                    onSectorFilterChange('ALL');
                    setSelectedStatusFilter('ALL');
                    setSelectedFacingFilter('ALL');
                  }}
                  className="mt-3 text-xs text-amber-400 underline underline-offset-4 hover:text-amber-300"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredPlots.map((plot) => {
                  const isSelected = selectedPlot?.id === plot.id;
                  return (
                    <button
                      key={plot.id}
                      onClick={() => setSelectedPlot(plot)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative group cursor-pointer ${getStatusColor(
                        plot.status
                      )} ${
                        isSelected ? 'ring-2 ring-amber-400 shadow-lg scale-[1.02]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono font-bold text-sm text-white">
                          {plot.plotNumber}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/40 text-slate-300">
                          {plot.sector}
                        </span>
                      </div>

                      <div className="text-xs font-mono font-semibold text-slate-200">
                        {plot.sizeSqFt.toLocaleString()} sq.ft
                      </div>
                      
                      <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                        <span>{plot.facing}</span>
                        {plot.isCorner && (
                          <span className="text-[10px] text-amber-400 font-semibold uppercase">Corner</span>
                        )}
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                        <span className="font-mono tabular-nums font-bold text-amber-300">
                          ₹{(plot.totalPrice / 100000).toFixed(2)} L
                        </span>
                        {plot.status === 'available' && (
                          <span className="text-[10px] text-emerald-400 font-medium">Ready</span>
                        )}
                        {plot.status === 'reserved' && (
                          <span className="text-[10px] text-amber-400 font-medium">Hold</span>
                        )}
                        {plot.status === 'sold' && (
                          <span className="text-[10px] text-slate-400 font-medium">Sold</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 30ft Internal branch road indicator */}
            <div className="w-full bg-slate-800/80 border border-dashed border-slate-700 py-1.5 px-4 mt-6 rounded text-center text-[11px] font-mono tracking-wider text-slate-400">
              ════ 30-FOOT RESIDENTIAL ACCESS ROADS & COVERED STORMWATER DRAINS ════
            </div>

            {/* Township Infrastructure Perks Strip */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-slate-400">
              <div>
                <span className="text-white font-medium block">24/7 Security</span>
                <span className="text-[11px] text-slate-400">Gated Entry Arch</span>
              </div>
              <div>
                <span className="text-white font-medium block">Dedicated Power</span>
                <span className="text-[11px] text-slate-400">Transformer Installed</span>
              </div>
              <div>
                <span className="text-white font-medium block">Deep Drainage</span>
                <span className="text-[11px] text-slate-400">Zero Waterlogging</span>
              </div>
              <div>
                <span className="text-white font-medium block">Park Facing</span>
                <span className="text-[11px] text-slate-400">18,000 sqft Green Area</span>
              </div>
            </div>

          </div>

          {/* Right Column: Selected Plot Details & Booking Action Card */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative sticky top-28">
            {selectedPlot ? (
              <div className="space-y-5">
                
                {/* Header */}
                <div className="border-b border-slate-800 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 font-mono">
                      Sector {selectedPlot.sector} · Residential Plot
                    </span>
                    <span
                      className={`text-xs uppercase px-2 py-0.5 rounded font-mono font-medium ${
                        selectedPlot.status === 'available'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                          : selectedPlot.status === 'reserved'
                          ? 'bg-amber-950 text-amber-300 border border-amber-600'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {selectedPlot.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    Plot {selectedPlot.plotNumber}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Siddhi Vinayak City Infra GKP Plotted Township
                  </p>
                </div>

                {/* Core Specifications */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Dimensions:</span>
                    <span className="font-mono font-semibold text-white">{selectedPlot.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Total Plot Area:</span>
                    <span className="font-mono font-semibold text-amber-300">{selectedPlot.sizeSqFt} Sq. Ft.</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Facing Direction:</span>
                    <span className="font-medium text-white">{selectedPlot.facing} Facing</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Road Width:</span>
                    <span className="font-mono font-medium text-white">{selectedPlot.roadWidthFt} Feet Wide Asphalt</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Corner Advantage:</span>
                    <span className="font-medium text-white">{selectedPlot.isCorner ? 'Yes (Dual Road Frontage)' : 'Standard Mid-Row'}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Park View:</span>
                    <span className="font-medium text-white">{selectedPlot.isParkFacing ? 'Direct Park Facing' : 'Near Green Belt'}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Rate / Sq. Ft.:</span>
                    <span className="font-mono font-semibold text-white">₹{selectedPlot.ratePerSqFt.toLocaleString()}</span>
                  </div>
                </div>

                {/* Valuation & Pricing Highlight */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                    Total Plot Valuation
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold font-mono text-amber-400">
                      ₹{(selectedPlot.totalPrice / 100000).toFixed(2)} Lakhs
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      (₹{selectedPlot.totalPrice.toLocaleString()})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Estimated Booking Token: <strong className="text-white">₹51,000</strong> · Easy SBI/HDFC Bank Loan Eligible
                  </p>
                </div>

                {/* Plot Description */}
                {selectedPlot.description && (
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    {selectedPlot.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  {selectedPlot.status === 'available' ? (
                    <button
                      onClick={() => onSelectPlotForBooking(selectedPlot)}
                      className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Site Visit for Plot {selectedPlot.plotNumber}</span>
                    </button>
                  ) : selectedPlot.status === 'reserved' ? (
                    <button
                      onClick={() => onSelectPlotForBooking(selectedPlot)}
                      className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-700/60 hover:bg-amber-900/60 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Request Backup Token / Queue</span>
                    </button>
                  ) : (
                    <div className="w-full py-2.5 text-center text-xs font-mono text-slate-400 bg-slate-800/50 rounded-lg border border-slate-700">
                      Plot Registered & Handed Over
                    </div>
                  )}

                  <button
                    onClick={() => handleSharePlot(selectedPlot)}
                    className="w-full py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Plot Details Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Plot Details (WhatsApp / SMS)</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            ) : (
              <div className="text-center py-16 text-slate-400">
                <Info className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                <p>Click on any plot in the layout to view detailed ground specs and pricing.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
