import React from 'react';
import { Project } from '../types';
import { MapPin, ArrowRight, Download, CheckCircle2, Building2 } from 'lucide-react';

interface ProjectsShowcaseProps {
  projects: Project[];
  onOpenSiteVisit: (projectTitle?: string) => void;
  onDownloadBrochure: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  onOpenSiteVisit,
  onDownloadBrochure,
}) => {
  return (
    <section id="projects" className="py-20 bg-[#0B1325] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Township Portfolio</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Prime Gorakhpur Locations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship Plotted Developments
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Every project developed by Siddhi Vinayak City Infra GKP is vetted with 100% Section 143 conversion, clear title documentation, and on-ground delivery of asphalt roads, streetlights, and gated security.
          </p>
        </div>

        {/* Project Cards (Anti-slop bento-like presentation with hairline borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden flex flex-col group hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Status chip (functional text indicator) */}
                <div className="absolute top-3 left-3 bg-[#0B1325]/90 backdrop-blur-md border border-slate-700 rounded-md px-2.5 py-1 text-xs font-mono font-medium text-amber-300">
                  {project.status}
                </div>

                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md rounded-md px-2.5 py-1 text-xs font-mono text-white">
                  {project.totalAcres}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    {project.tagline}
                  </p>

                  <div className="flex items-start gap-1.5 text-xs text-slate-400 mt-3">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 font-mono mt-1 pl-5">
                    {project.proximity}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs and Pricing */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Plot Sizes
                      </span>
                      <span className="text-xs font-mono text-slate-200">
                        {project.plotSizes}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                        Starting From
                      </span>
                      <span className="text-lg font-bold font-mono text-amber-400">
                        {project.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenSiteVisit(project.title)}
                      className="py-2.5 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Visit Site</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onDownloadBrochure(project)}
                      className="py-2.5 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-amber-400" />
                      <span>Brochure</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
