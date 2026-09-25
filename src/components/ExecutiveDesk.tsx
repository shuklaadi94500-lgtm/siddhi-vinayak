import React, { useState } from 'react';
import { Plot, Lead, PlotStatus } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';
import { 
  Briefcase, 
  Users, 
  Layers, 
  IndianRupee, 
  PlusCircle, 
  FileText, 
  CheckCircle, 
  Clock, 
  PhoneCall, 
  Printer, 
  Share2, 
  RefreshCw,
  Search,
  Eye,
  Check
} from 'lucide-react';

interface ExecutiveDeskProps {
  plots: Plot[];
  leads: Lead[];
  onUpdatePlotStatus: (plotId: string, newStatus: PlotStatus) => void;
  onAddLead: (newLead: Lead) => void;
  onUpdateLeadStatus: (leadId: string, newStatus: Lead['status']) => void;
  onSwitchToClientView: () => void;
}

export const ExecutiveDesk: React.FC<ExecutiveDeskProps> = ({
  plots,
  leads,
  onUpdatePlotStatus,
  onAddLead,
  onUpdateLeadStatus,
  onSwitchToClientView,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'inventory' | 'quotation'>('overview');
  
  // Lead creation state
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadBudget, setNewLeadBudget] = useState('₹ 15 - 20 Lakhs');
  const [newLeadPlot, setNewLeadPlot] = useState('');
  const [newLeadNotes, setNewLeadNotes] = useState('');

  // Quotation state
  const [quoteClientName, setQuoteClientName] = useState('Shri Anand Prakash');
  const [quoteClientPhone, setQuoteClientPhone] = useState('+91 94500 12345');
  const [quotePlotId, setQuotePlotId] = useState(plots[0]?.id || '');
  const [quoteDiscountPercent, setQuoteDiscountPercent] = useState(2); // 2% director privilege discount
  const [quoteTokenAmount, setQuoteTokenAmount] = useState(51000);
  const [quoteCopied, setQuoteCopied] = useState(false);

  // Search & filter
  const [inventorySearch, setInventorySearch] = useState('');

  // Financial calculations
  const totalPlots = plots.length;
  const availablePlots = plots.filter((p) => p.status === 'available');
  const reservedPlots = plots.filter((p) => p.status === 'reserved');
  const soldPlots = plots.filter((p) => p.status === 'sold');

  const totalInventoryValue = plots.reduce((acc, p) => acc + p.totalPrice, 0);
  const soldValue = soldPlots.reduce((acc, p) => acc + p.totalPrice, 0);
  const reservedValue = reservedPlots.reduce((acc, p) => acc + p.totalPrice, 0);
  const availableValue = availablePlots.reduce((acc, p) => acc + p.totalPrice, 0);

  // Selected plot for quotation
  const selectedQuotePlot = plots.find((p) => p.id === quotePlotId) || plots[0];
  const quoteBasePrice = selectedQuotePlot ? selectedQuotePlot.totalPrice : 0;
  const quoteDiscountAmount = (quoteBasePrice * quoteDiscountPercent) / 100;
  const quoteNetPrice = quoteBasePrice - quoteDiscountAmount;

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadPhone) return;

    const lead: Lead = {
      id: `lead-${Date.now()}`,
      name: newLeadName,
      phone: newLeadPhone,
      budget: newLeadBudget,
      interestedPlot: newLeadPlot || 'Sector A Boulevard',
      status: 'New Inquiry',
      createdDate: new Date().toISOString().split('T')[0],
      notes: newLeadNotes || 'Captured via Executive Desk',
    };

    onAddLead(lead);
    setNewLeadName('');
    setNewLeadPhone('');
    setNewLeadNotes('');
    setShowLeadModal(false);
  };

  const handlePrintQuotation = () => {
    window.print();
  };

  const handleShareQuoteWhatsApp = () => {
    const message = `*SIDDHI VINAYAK CITY INFRA GKP PVT. LTD.*%0A*Official Booking Memorandum*%0A------------------------------%0A*Client:* ${quoteClientName}%0A*Plot:* ${selectedQuotePlot?.plotNumber} (Sector ${selectedQuotePlot?.sector})%0A*Area:* ${selectedQuotePlot?.sizeSqFt} sq.ft (${selectedQuotePlot?.facing} facing)%0A*Road:* ${selectedQuotePlot?.roadWidthFt} Ft Wide Asphalt%0A*Base Cost:* ₹${(quoteBasePrice / 100000).toFixed(2)} Lakhs%0A*Director Privilege Concession:* ₹${(quoteDiscountAmount / 100000).toFixed(2)} Lakhs (${quoteDiscountPercent}%)%0A*Net Payable:* ₹${(quoteNetPrice / 100000).toFixed(2)} Lakhs%0A*Token Amount:* ₹${quoteTokenAmount.toLocaleString()}%0A*Registry:* Immediate 143 Dakhil-Kharij Guarantee%0A------------------------------%0A*Corporate Office:* Medical College Road / AIIMS Corridor, Gorakhpur. Call: ${COMPANY_DETAILS.phone}`;
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Executive Banner & Top Controls */}
        <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Director's Operational Hub</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Siddhi Vinayak City Infra GKP Pvt. Ltd.</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Executive Management & Sales Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
              Township inventory monitoring, client lead pipeline, and official booking letter generator.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onSwitchToClientView}
              className="py-2.5 px-4 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Return to Client Presentation</span>
            </button>
            <button
              onClick={() => setShowLeadModal(true)}
              className="py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Record New Walk-in Lead</span>
            </button>
          </div>
        </div>

        {/* Executive Segmented Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
          {[
            { id: 'overview', label: 'Commercial Overview & Stats', icon: Layers },
            { id: 'leads', label: `Lead Pipeline (${leads.length})`, icon: Users },
            { id: 'inventory', label: `Plot Inventory Controller (${totalPlots})`, icon: FileText },
            { id: 'quotation', label: 'Instant Booking Memorandum Generator', icon: Printer },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Commercial Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Gross Township Inventory
                </span>
                <span className="text-2xl font-bold font-mono text-white">
                  ₹{(totalInventoryValue / 10000000).toFixed(2)} Cr
                </span>
                <span className="text-[11px] text-slate-500 block mt-1 font-mono">
                  {totalPlots} Total Plotted Units
                </span>
              </div>

              <div className="bg-slate-900/90 border border-emerald-900/40 p-5 rounded-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Available for Booking
                </span>
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  ₹{(availableValue / 10000000).toFixed(2)} Cr
                </span>
                <span className="text-[11px] text-emerald-300/80 block mt-1 font-mono">
                  {availablePlots.length} Units Ready to Register
                </span>
              </div>

              <div className="bg-slate-900/90 border border-amber-900/40 p-5 rounded-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  Under Token / In Negotiation
                </span>
                <span className="text-2xl font-bold font-mono text-amber-400">
                  ₹{(reservedValue / 10000000).toFixed(2)} Cr
                </span>
                <span className="text-[11px] text-amber-300/80 block mt-1 font-mono">
                  {reservedPlots.length} Units In Pipeline
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Registry Handover Realized
                </span>
                <span className="text-2xl font-bold font-mono text-slate-300">
                  ₹{(soldValue / 10000000).toFixed(2)} Cr
                </span>
                <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                  {soldPlots.length} Units Deed Delivered
                </span>
              </div>
            </div>

            {/* Quick Actions & Recent Lead Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg text-white">
                    Active High-Value Buyer Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs text-amber-400 hover:underline"
                  >
                    View All ({leads.length})
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.slice(0, 4).map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-semibold text-white text-sm">{lead.name}</p>
                        <p className="text-slate-400 font-mono mt-0.5">
                          {lead.phone} · Budget: <strong className="text-amber-300">{lead.budget}</strong>
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Interested: {lead.interestedPlot}
                        </p>
                      </div>

                      <div className="text-right space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded font-mono text-[10px] font-semibold uppercase bg-amber-950 text-amber-300 border border-amber-800">
                          {lead.status}
                        </span>
                        <p className="text-[10px] text-slate-500 font-mono">
                          {lead.createdDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector-wise Breakdown */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-white mb-4">
                  Township Sector Allocation
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Sector A (Boulevard 40ft)</span>
                      <span className="font-mono font-bold text-white">7 Plots · ₹1.47 Cr</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-amber-400 h-2 rounded-full" style={{ width: '70%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Sector B (Garden Green 30ft)</span>
                      <span className="font-mono font-bold text-white">7 Plots · ₹1.08 Cr</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Sector C (Park Avenue 30ft)</span>
                      <span className="font-mono font-bold text-white">7 Plots · ₹1.25 Cr</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-sky-400 h-2 rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Sector D (Commercial & Mixed)</span>
                      <span className="font-mono font-bold text-white">6 Plots · ₹1.91 Cr</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <p className="font-semibold text-amber-400 mb-1">Tehsil Registry Status Notice:</p>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    Next bulk registry session scheduled at Sadar Tehsil Gorakhpur on Tuesday & Thursday. Ensure all mutation documents and bank draft copies are pre-verified.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Lead Pipeline */}
        {activeTab === 'leads' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-white">
                  Prospective Client Pipeline & Site Visits
                </h2>
                <p className="text-xs text-slate-400">
                  Manage inquiries, assign follow-ups, and track site visit dates.
                </p>
              </div>

              <button
                onClick={() => setShowLeadModal(true)}
                className="py-2 px-3 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Client Record</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                    <th className="py-3 px-4">Client Name</th>
                    <th className="py-3 px-4">Phone / Contact</th>
                    <th className="py-3 px-4">Budget</th>
                    <th className="py-3 px-4">Preferred Plot / Sector</th>
                    <th className="py-3 px-4">Current Pipeline Stage</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">
                        {lead.name}
                        {lead.notes && (
                          <span className="block text-[11px] text-slate-400 font-normal mt-0.5 font-sans">
                            {lead.notes}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono tabular-nums text-slate-300">
                        {lead.phone}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-semibold text-amber-300">
                        {lead.budget}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {lead.interestedPlot || 'Township Choice'}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={lead.status}
                          onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as any)}
                          className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="New Inquiry">New Inquiry</option>
                          <option value="Site Visit Scheduled">Site Visit Scheduled</option>
                          <option value="Token Received">Token Received</option>
                          <option value="Registry Scheduled">Registry Scheduled</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4">
                        <a
                          href={`tel:${lead.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Plot Inventory Controller */}
        {activeTab === 'inventory' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-white">
                  Township Plot Status & Pricing Manager
                </h2>
                <p className="text-xs text-slate-400">
                  Directly toggle plot statuses between Available, Token Reserved, and Registry Sold.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search plot (e.g. A-01, COMM)..."
                  value={inventorySearch}
                  onChange={(e) => setInventorySearch(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                    <th className="py-3 px-4">Plot #</th>
                    <th className="py-3 px-4">Sector</th>
                    <th className="py-3 px-4">Size (Sq.Ft)</th>
                    <th className="py-3 px-4">Facing</th>
                    <th className="py-3 px-4">Road Width</th>
                    <th className="py-3 px-4">Rate / sqft</th>
                    <th className="py-3 px-4">Total Cost</th>
                    <th className="py-3 px-4">Availability State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {plots
                    .filter((p) =>
                      inventorySearch
                        ? p.plotNumber.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                          p.sector.toLowerCase().includes(inventorySearch.toLowerCase())
                        : true
                    )
                    .map((plot) => (
                      <tr key={plot.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-white">
                          {plot.plotNumber}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          Sector {plot.sector}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-200">
                          {plot.sizeSqFt} sq.ft
                        </td>
                        <td className="py-3 px-4 text-slate-300">
                          {plot.facing}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          {plot.roadWidthFt} Ft
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          ₹{plot.ratePerSqFt}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-300">
                          ₹{(plot.totalPrice / 100000).toFixed(2)} L
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={plot.status}
                            onChange={(e) => onUpdatePlotStatus(plot.id, e.target.value as PlotStatus)}
                            className={`text-xs px-2 py-1 rounded font-mono font-medium focus:outline-none ${
                              plot.status === 'available'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                                : plot.status === 'reserved'
                                ? 'bg-amber-950 text-amber-300 border border-amber-600'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            <option value="available">Available</option>
                            <option value="reserved">In Token / Hold</option>
                            <option value="sold">Sold & Registered</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Instant Booking Memorandum Generator */}
        {activeTab === 'quotation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Controls */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">
                Configure Client Booking Memorandum
              </h3>
              <p className="text-xs text-slate-400 font-light">
                Generate an official branded quotation for in-office or site visitors with custom token terms.
              </p>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Client Full Name
                </label>
                <input
                  type="text"
                  value={quoteClientName}
                  onChange={(e) => setQuoteClientName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Client Contact Number
                </label>
                <input
                  type="text"
                  value={quoteClientPhone}
                  onChange={(e) => setQuoteClientPhone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Select Plot for Allotment
                </label>
                <select
                  value={quotePlotId}
                  onChange={(e) => setQuotePlotId(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {plots.map((p) => (
                    <option key={p.id} value={p.id}>
                      Plot {p.plotNumber} · Sector {p.sector} · {p.sizeSqFt} sq.ft · (₹{(p.totalPrice / 100000).toFixed(2)} Lakhs)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Director Privilege (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    value={quoteDiscountPercent}
                    onChange={(e) => setQuoteDiscountPercent(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Token Advance (₹)
                  </label>
                  <input
                    type="number"
                    step="5000"
                    value={quoteTokenAmount}
                    onChange={(e) => setQuoteTokenAmount(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 space-y-2">
                <button
                  onClick={handleShareQuoteWhatsApp}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Send Quotation to WhatsApp</span>
                </button>

                <button
                  onClick={handlePrintQuotation}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-amber-400" />
                  <span>Print Formal Allotment Letter</span>
                </button>
              </div>

            </div>

            {/* Letterhead Preview */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-amber-300 print:m-0 print:border-none">
              
              {/* Letterhead Header */}
              <div className="border-b-2 border-amber-600 pb-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-slate-900 uppercase">
                      SIDDHI VINAYAK CITY INFRA GKP
                    </h2>
                    <p className="text-xs uppercase font-semibold tracking-wider text-amber-700">
                      Private Limited · CIN: {COMPANY_DETAILS.cin}
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1 max-w-sm">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
                  <div className="text-right text-[11px] font-mono text-slate-600">
                    <p className="font-semibold text-slate-800">Phone: {COMPANY_DETAILS.phone}</p>
                    <p>Ref: SVC/GKP/{new Date().getFullYear()}/Q-{selectedQuotePlot?.plotNumber}</p>
                    <p>Date: {new Date().toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <span className="inline-block bg-slate-100 text-slate-900 font-mono font-bold text-xs uppercase px-4 py-1 rounded tracking-wider border border-slate-300">
                  OFFICIAL PLOT BOOKING & VALUATION MEMORANDUM
                </span>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-6 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <div>
                  <span className="text-slate-500 block">Prospective Allottee:</span>
                  <span className="font-bold text-slate-900 text-sm">{quoteClientName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Number:</span>
                  <span className="font-mono font-semibold text-slate-800">{quoteClientPhone}</span>
                </div>
              </div>

              {/* Plot Specs Table */}
              <div className="text-xs mb-6">
                <table className="w-full border-collapse border border-slate-300">
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold w-1/3">Allotted Plot Number</td>
                      <td className="p-2.5 font-bold font-mono text-slate-900">{selectedQuotePlot?.plotNumber} (Sector {selectedQuotePlot?.sector})</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold">Dimensions & Total Area</td>
                      <td className="p-2.5 font-mono">{selectedQuotePlot?.dimensions} ({selectedQuotePlot?.sizeSqFt} Sq. Ft.)</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold">Directional Facing</td>
                      <td className="p-2.5">{selectedQuotePlot?.facing} Facing</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold">Internal Road Width</td>
                      <td className="p-2.5 font-mono">{selectedQuotePlot?.roadWidthFt} Feet Wide Metalled Road</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold">Base Rate</td>
                      <td className="p-2.5 font-mono">₹{selectedQuotePlot?.ratePerSqFt.toLocaleString()} / Sq. Ft.</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2.5 bg-slate-100 font-semibold">Gross Plot Value</td>
                      <td className="p-2.5 font-mono font-bold">₹{quoteBasePrice.toLocaleString()}</td>
                    </tr>
                    {quoteDiscountPercent > 0 && (
                      <tr className="border-b border-slate-300 text-emerald-700">
                        <td className="p-2.5 bg-emerald-50 font-semibold">Director Privilege Concession ({quoteDiscountPercent}%)</td>
                        <td className="p-2.5 font-mono font-bold">- ₹{quoteDiscountAmount.toLocaleString()}</td>
                      </tr>
                    )}
                    <tr className="bg-amber-50">
                      <td className="p-2.5 font-bold text-amber-950">Net Payable Consideration</td>
                      <td className="p-2.5 font-mono font-bold text-base text-amber-950">
                        ₹{quoteNetPrice.toLocaleString()} (₹{(quoteNetPrice / 100000).toFixed(2)} Lakhs)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Guarantees */}
              <div className="text-[11px] text-slate-700 mb-6 space-y-1">
                <p><strong>1. Section 143 Certification:</strong> The land is legally converted for residential/commercial use.</p>
                <p><strong>2. Immediate Mutation (Dakhil Kharij):</strong> Company guarantees mutation assistance within 14 working days of registry.</p>
                <p><strong>3. Spot Demarcation:</strong> Physical boundary pillars installed upon token deposit.</p>
              </div>

              {/* Signature Footer */}
              <div className="pt-8 border-t border-slate-300 flex justify-between items-end text-xs">
                <div>
                  <p className="text-[11px] text-slate-500">Applicant / Buyer Acknowledgement</p>
                  <div className="mt-8 border-t border-slate-400 w-44 text-center text-[10px] text-slate-600">
                    Client Signature
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-slate-900">For Siddhi Vinayak City Infra GKP Pvt. Ltd.</p>
                  <p className="text-[11px] text-slate-500">Gorakhpur Corporate Office</p>
                  <div className="mt-8 border-t border-slate-400 w-48 text-center text-[10px] text-slate-600">
                    Authorized Signatory / MD
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Modal for Recording New Walk-in Lead */}
        {showLeadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-white">
                Record New Buyer Lead
              </h3>
              <p className="text-xs text-slate-400">
                Capture details of customer walking into Gorakhpur office or calling directly.
              </p>

              <form onSubmit={handleCreateLead} className="space-y-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Verma"
                    value={newLeadName}
                    onChange={(e) => setNewLeadName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94500 00000"
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Budget Bracket
                  </label>
                  <select
                    value={newLeadBudget}
                    onChange={(e) => setNewLeadBudget(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="₹ 10 - 15 Lakhs">₹ 10 - 15 Lakhs</option>
                    <option value="₹ 15 - 25 Lakhs">₹ 15 - 25 Lakhs</option>
                    <option value="₹ 25 - 40 Lakhs">₹ 25 - 40 Lakhs</option>
                    <option value="₹ 40+ Lakhs (Commercial)">₹ 40+ Lakhs (Commercial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Interested Sector / Plot
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sector A 1200 sqft or Corner plot"
                    value={newLeadPlot}
                    onChange={(e) => setNewLeadPlot(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Notes / Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Wants loan from SBI, looking for North facing"
                    value={newLeadNotes}
                    onChange={(e) => setNewLeadNotes(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLeadModal(false)}
                    className="py-2 px-3 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg"
                  >
                    Save Client Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
