import React from 'react';
import { Project } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';
import { X, Download, Printer, CheckCircle, MapPin, ShieldCheck, IndianRupee } from 'lucide-react';

interface BrochureModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSiteVisit: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenSiteVisit,
}) => {
  if (!isOpen || !project) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0B1325] border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto print:max-h-none print:m-0 print:border-none print:bg-white print:text-black">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors print:hidden"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brochure Header */}
        <div className="border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Township Prospectus & Specification Sheet</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h2>
          <p className="text-xs text-amber-300 font-medium mt-1">
            {project.tagline}
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{project.location} ({project.proximity})</span>
          </div>
        </div>

        {/* Hero image preview */}
        <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Key Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 text-xs">
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Total Land Area</span>
            <span className="font-mono font-bold text-white text-sm">{project.totalAcres}</span>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Available Plot Cuts</span>
            <span className="font-mono font-bold text-white text-sm">{project.plotSizes}</span>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Starting Budget</span>
            <span className="font-mono font-bold text-amber-400 text-sm">{project.startingPrice}</span>
          </div>
        </div>

        {/* Standard Infrastructure Inclusions */}
        <div className="space-y-3 mb-6">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            Township Infrastructure & Legal Deliverables:
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Certification */}
        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1 mb-6">
          <p className="font-semibold text-white">Developed & Delivered By:</p>
          <p className="text-amber-300 font-display">{COMPANY_DETAILS.name}</p>
          <p>{COMPANY_DETAILS.address}</p>
          <p className="font-mono">Direct Desk: {COMPANY_DETAILS.phone} · CIN: {COMPANY_DETAILS.cin}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 print:hidden">
          <button
            onClick={() => {
              onClose();
              onOpenSiteVisit();
            }}
            className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center cursor-pointer"
          >
            Book Free VIP Site Inspection
          </button>

          <button
            onClick={handlePrint}
            className="py-3 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
