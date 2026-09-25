import React, { useState } from 'react';
import { X, Calendar, Car, ShieldCheck, CheckCircle2, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_DETAILS, PROJECTS } from '../data/mockData';
import { Lead } from '../types';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: (lead: Lead) => void;
  prefilledProject?: string;
  prefilledNotes?: string;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted,
  prefilledProject,
  prefilledNotes,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProject, setSelectedProject] = useState(prefilledProject || PROJECTS[0]?.title);
  const [visitDate, setVisitDate] = useState('');
  const [pickupRequired, setPickupRequired] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('Gorakhpur City / Railway Station');
  const [budget, setBudget] = useState('₹ 15 - 25 Lakhs');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newLead: Lead = {
      id: `lead-site-${Date.now()}`,
      name,
      phone,
      email: email || undefined,
      budget,
      interestedPlot: selectedProject,
      preferredDate: visitDate || 'Next 48 Hours',
      status: 'Site Visit Scheduled',
      createdDate: new Date().toISOString().split('T')[0],
      notes: `${pickupRequired ? `Pickup: ${pickupLocation}. ` : 'Self-drive. '}${prefilledNotes || ''}`,
    };

    onLeadSubmitted(newLead);
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const text = `Hello Siddhi Vinayak City Infra GKP, I would like to schedule a site visit for ${selectedProject}. Name: ${name || 'Prospective Buyer'}, Phone: ${phone || 'N/A'}.`;
    window.open(`https://wa.me/919450087123?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B1325] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white">
              VIP Site Inspection Scheduled!
            </h3>
            
            <p className="text-sm text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
              Thank you, <strong>{name}</strong>. Our senior site manager in Gorakhpur has received your visit request for <strong>{selectedProject}</strong>.
            </p>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 text-left space-y-1.5 font-mono">
              <p>Confirmed Phone: {phone}</p>
              <p>Scheduled Slot: {visitDate || 'Executive will coordinate exact hour'}</p>
              {pickupRequired && <p className="text-amber-400">Complimentary AC Cab Pickup: {pickupLocation}</p>}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Executive on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                <Car className="w-3.5 h-3.5" />
                <span>Complimentary VIP Cab Service</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book a Free Site Inspection
              </h3>
              <p className="text-xs text-slate-300 font-light mt-1">
                Experience the township on-ground. Our air-conditioned executive vehicle will pick you up and drop you back anywhere in Gorakhpur at zero cost.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Arvind Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94500 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Project of Interest
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {PROJECTS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.location})
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Option */}
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pickupRequired}
                    onChange={(e) => setPickupRequired(e.target.checked)}
                    className="accent-amber-400"
                  />
                  <span>Yes, send complimentary AC cab for pickup & drop in Gorakhpur</span>
                </label>

                {pickupRequired && (
                  <div className="pt-1">
                    <input
                      type="text"
                      placeholder="Pickup address / landmark (e.g. Golghar, Mohaddipur, AIIMS gate)"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Free & No-Obligation
                </span>
                <span>Direct Company Vehicle</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Free Site Visit Reservation</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
