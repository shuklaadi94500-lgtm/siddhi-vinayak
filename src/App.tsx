/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlotMasterPlan } from './components/PlotMasterPlan';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { GrowthCorridor } from './components/GrowthCorridor';
import { RoiCalculator } from './components/RoiCalculator';
import { TrustAndLegal } from './components/TrustAndLegal';
import { DirectorDesk } from './components/DirectorDesk';
import { Testimonials } from './components/Testimonials';
import { ExecutiveDesk } from './components/ExecutiveDesk';
import { SiteVisitModal } from './components/SiteVisitModal';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';

import { Plot, Project, Lead, PlotStatus } from './types';
import { INITIAL_PLOTS, PROJECTS, INITIAL_LEADS, COMPANY_DETAILS } from './data/mockData';
import { MessageSquare, Phone, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'client' | 'executive'>('client');
  const [plots, setPlots] = useState<Plot[]>(() => {
    try {
      const saved = localStorage.getItem('siddhi_vinayak_plots');
      return saved ? JSON.parse(saved) : INITIAL_PLOTS;
    } catch {
      return INITIAL_PLOTS;
    }
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem('siddhi_vinayak_leads');
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Modals state
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [siteVisitPrefillProject, setSiteVisitPrefillProject] = useState<string | undefined>();
  const [siteVisitPrefillNotes, setSiteVisitPrefillNotes] = useState<string | undefined>();

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedBrochureProject, setSelectedBrochureProject] = useState<Project | null>(null);

  // Sector filter sync between Hero search and Master Plan
  const [masterPlanSectorFilter, setMasterPlanSectorFilter] = useState<'ALL' | 'A' | 'B' | 'C' | 'D'>('ALL');

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('siddhi_vinayak_plots', JSON.stringify(plots));
    } catch (e) {
      console.error('Error saving plots to localStorage', e);
    }
  }, [plots]);

  useEffect(() => {
    try {
      localStorage.setItem('siddhi_vinayak_leads', JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads to localStorage', e);
    }
  }, [leads]);

  // Handlers for executive mode
  const handleUpdatePlotStatus = (plotId: string, newStatus: PlotStatus) => {
    setPlots((prev) =>
      prev.map((plot) => (plot.id === plotId ? { ...plot, status: newStatus } : plot))
    );
  };

  const handleAddLead = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (leadId: string, newStatus: Lead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const handleOpenSiteVisit = (projectTitle?: string, notes?: string) => {
    setSiteVisitPrefillProject(projectTitle);
    setSiteVisitPrefillNotes(notes);
    setIsSiteVisitOpen(true);
  };

  const handleSelectPlotForBooking = (plot: Plot) => {
    handleOpenSiteVisit(
      `Plot ${plot.plotNumber} in Sector ${plot.sector}`,
      `Selected Plot: ${plot.plotNumber} (${plot.sizeSqFt} sq.ft, ${plot.facing} facing). Total Price: ₹${(plot.totalPrice / 100000).toFixed(2)} Lakhs.`
    );
  };

  const handleDownloadBrochure = (project: Project) => {
    setSelectedBrochureProject(project);
    setIsBrochureOpen(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Siddhi Vinayak City Infra GKP, I am inquiring from your website regarding available residential/commercial plots in Gorakhpur.`;
    window.open(`https://wa.me/919450087123?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B1325] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      {/* Main Content Area: Toggle between Client Presentation View & Executive Desk */}
      <main className="flex-1">
        {currentView === 'executive' ? (
          <ExecutiveDesk
            plots={plots}
            leads={leads}
            onUpdatePlotStatus={handleUpdatePlotStatus}
            onAddLead={handleAddLead}
            onUpdateLeadStatus={handleUpdateLeadStatus}
            onSwitchToClientView={() => setCurrentView('client')}
          />
        ) : (
          <div className="space-y-0">
            {/* 1. Cinematic Hero Section */}
            <Hero
              onOpenSiteVisit={() => handleOpenSiteVisit()}
              onSelectSectorFilter={(sector) => setMasterPlanSectorFilter(sector)}
            />

            {/* 2. Flagship Townships Showcase */}
            <ProjectsShowcase
              projects={PROJECTS}
              onOpenSiteVisit={(title) => handleOpenSiteVisit(title)}
              onDownloadBrochure={handleDownloadBrochure}
            />

            {/* 3. Interactive Master Plan & Plot Inventory Selector */}
            <PlotMasterPlan
              plots={plots}
              selectedSectorFilter={masterPlanSectorFilter}
              onSectorFilterChange={setMasterPlanSectorFilter}
              onSelectPlotForBooking={handleSelectPlotForBooking}
            />

            {/* 4. Gorakhpur Growth Corridor & Investment Thesis */}
            <GrowthCorridor />

            {/* 5. Plot Investment & EMI Calculator */}
            <RoiCalculator
              onOpenSiteVisit={(notes) => handleOpenSiteVisit(undefined, notes)}
            />

            {/* 6. Legal Guarantee & Section 143 Security */}
            <TrustAndLegal
              onOpenSiteVisit={() => handleOpenSiteVisit()}
            />

            {/* 7. Director's Vision & Sales Gallery */}
            <DirectorDesk
              onOpenSiteVisit={() => handleOpenSiteVisit()}
            />

            {/* 8. Customer Registry Handover Proof */}
            <Testimonials />
          </div>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onSwitchView={setCurrentView}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      {/* Floating Fast Action Speed-Dial for Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
        {/* Direct WhatsApp Action */}
        <button
          onClick={handleWhatsAppDirect}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
          title="Direct WhatsApp with Sales Desk"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-slate-950" />
        </button>

        {/* Schedule Visit Floating Pill */}
        <button
          onClick={() => handleOpenSiteVisit()}
          className="hidden sm:flex items-center gap-2 py-2.5 px-4 rounded-full bg-slate-900/95 hover:bg-slate-800 text-amber-400 border border-amber-500/50 shadow-2xl text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Free AC Cab</span>
        </button>
      </div>

      {/* VIP Site Visit Booking Modal */}
      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        onLeadSubmitted={handleAddLead}
        prefilledProject={siteVisitPrefillProject}
        prefilledNotes={siteVisitPrefillNotes}
      />

      {/* Project Brochure Prospectus Modal */}
      <BrochureModal
        project={selectedBrochureProject}
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenSiteVisit={() => handleOpenSiteVisit(selectedBrochureProject?.title)}
      />
    </div>
  );
}
