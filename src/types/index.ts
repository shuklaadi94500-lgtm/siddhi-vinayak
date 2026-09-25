export type PlotStatus = 'available' | 'reserved' | 'sold';
export type FacingType = 'East' | 'North' | 'North-East' | 'West' | 'Corner';

export interface Plot {
  id: string;
  plotNumber: string;
  sector: 'A' | 'B' | 'C' | 'D';
  sizeSqFt: number;
  dimensions: string; // e.g. "25 x 40 ft"
  facing: FacingType;
  roadWidthFt: number; // e.g. 40 or 30
  ratePerSqFt: number; // in INR
  totalPrice: number; // in INR
  status: PlotStatus;
  isCorner: boolean;
  isParkFacing: boolean;
  coordinates: { x: number; y: number; width: number; height: number };
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  location: string;
  proximity: string;
  image: string;
  plotSizes: string;
  startingPrice: string;
  totalAcres: string;
  features: string[];
  status: 'Pre-Launch' | 'Phase 1 Ready' | 'Rapid Construction' | 'Immediate Registry';
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  budget: string;
  interestedPlot?: string;
  preferredDate?: string;
  status: 'New Inquiry' | 'Site Visit Scheduled' | 'Token Received' | 'Registry Scheduled' | 'Closed';
  createdDate: string;
  notes?: string;
}

export interface InfrastructureHighlight {
  title: string;
  distance: string;
  impact: string;
  category: 'Expressway' | 'Healthcare' | 'Aviation' | 'Tourism' | 'Industry';
  description: string;
}

export interface CustomerStory {
  id: string;
  clientName: string;
  profession: string;
  plotAllocated: string;
  project: string;
  year: string;
  quote: string;
  registryVerified: boolean;
}
