import { Plot, Project, InfrastructureHighlight, CustomerStory, Lead } from '../types';

export const COMPANY_DETAILS = {
  name: "Siddhi Vinayak City Infra GKP Pvt. Ltd.",
  shortName: "Siddhi Vinayak Infra",
  tagline: "Premium Real Estate & Property Solutions",
  motto: "Your Land. Your Future. Invest in the Right Location.",
  city: "Gorakhpur, Uttar Pradesh",
  address: "Corporate Suite 402, Royal Park Plaza, Medical College Road / AIIMS Corridor, Gorakhpur - 273013 (U.P.)",
  phone: "+91 94500 87123",
  altPhone: "+91 88081 23450",
  email: "info@siddhivinayakgkp.in",
  cin: "U45201UP2021PTC148920",
  officeHours: "9:30 AM – 7:30 PM (Mon – Sun)",
  directorName: "Er. Aditya Shukla & Associates",
  establishedYear: "2018",
  totalClientsServed: "1,450+",
  sqftDelivered: "18.5+ Lakhs",
  registryHandoverSuccess: "100%",
};

export const INITIAL_PLOTS: Plot[] = [
  // Sector A - Premium Boulevard (40ft road, front sector)
  {
    id: "plt-a1",
    plotNumber: "A-01",
    sector: "A",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "North-East",
    roadWidthFt: 40,
    ratePerSqFt: 1650,
    totalPrice: 2475000,
    status: "available",
    isCorner: true,
    isParkFacing: true,
    coordinates: { x: 30, y: 30, width: 80, height: 60 },
    description: "Marquee corner plot right at 40-foot main boulevard with dual-side road frontage and direct view of central landscaped park."
  },
  {
    id: "plt-a2",
    plotNumber: "A-02",
    sector: "A",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "North",
    roadWidthFt: 40,
    ratePerSqFt: 1550,
    totalPrice: 1860000,
    status: "available",
    isCorner: false,
    isParkFacing: true,
    coordinates: { x: 120, y: 30, width: 70, height: 60 },
    description: "North-facing vastu-compliant residential plot directly facing lush green park, excellent ventilation."
  },
  {
    id: "plt-a3",
    plotNumber: "A-03",
    sector: "A",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "North",
    roadWidthFt: 40,
    ratePerSqFt: 1550,
    totalPrice: 1860000,
    status: "reserved",
    isCorner: false,
    isParkFacing: true,
    coordinates: { x: 200, y: 30, width: 70, height: 60 },
    description: "Park-facing premium plot under token reservation by BRD Medical College doctor family."
  },
  {
    id: "plt-a4",
    plotNumber: "A-04",
    sector: "A",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "North-East",
    roadWidthFt: 40,
    ratePerSqFt: 1650,
    totalPrice: 2475000,
    status: "sold",
    isCorner: true,
    isParkFacing: true,
    coordinates: { x: 280, y: 30, width: 80, height: 60 },
    description: "Registry completed with mutation certificate handed over to client."
  },
  {
    id: "plt-a5",
    plotNumber: "A-05",
    sector: "A",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "East",
    roadWidthFt: 40,
    ratePerSqFt: 1500,
    totalPrice: 1500000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 370, y: 30, width: 65, height: 60 },
    description: "Highly sought after 1000 sq ft East-facing plot, ideal for immediate duplex construction."
  },
  {
    id: "plt-a6",
    plotNumber: "A-06",
    sector: "A",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "East",
    roadWidthFt: 40,
    ratePerSqFt: 1500,
    totalPrice: 1500000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 445, y: 30, width: 65, height: 60 },
    description: "East-facing residential plot on 40-foot main sector road with water and electric supply ready."
  },
  {
    id: "plt-a7",
    plotNumber: "A-07",
    sector: "A",
    sizeSqFt: 2000,
    dimensions: "40 x 50 ft",
    facing: "North",
    roadWidthFt: 40,
    ratePerSqFt: 1600,
    totalPrice: 3200000,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 520, y: 30, width: 95, height: 60 },
    description: "Grand 2000 sq ft luxury bungalow plot with corner advantage, wide frontage."
  },

  // Sector B - Garden Greenery Sector (30ft road, tranquil area)
  {
    id: "plt-b1",
    plotNumber: "B-01",
    sector: "B",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1450000,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 30, y: 130, width: 70, height: 55 },
    description: "Corner residential plot on 30ft paved road, quiet residential avenue."
  },
  {
    id: "plt-b2",
    plotNumber: "B-02",
    sector: "B",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1425,
    totalPrice: 1425000,
    status: "sold",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 110, y: 130, width: 65, height: 55 },
    description: "Sold to railway official family; construction boundary complete."
  },
  {
    id: "plt-b3",
    plotNumber: "B-03",
    sector: "B",
    sizeSqFt: 800,
    dimensions: "20 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1160000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 185, y: 130, width: 55, height: 55 },
    description: "Affordable 800 sq ft starter plot, pocket-friendly investment with immediate registry."
  },
  {
    id: "plt-b4",
    plotNumber: "B-04",
    sector: "B",
    sizeSqFt: 800,
    dimensions: "20 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1160000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 250, y: 130, width: 55, height: 55 },
    description: "Compact plot with high rental ROI potential, 2 mins from local market."
  },
  {
    id: "plt-b5",
    plotNumber: "B-05",
    sector: "B",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "West",
    roadWidthFt: 30,
    ratePerSqFt: 1425,
    totalPrice: 1710000,
    status: "reserved",
    isCorner: false,
    isParkFacing: true,
    coordinates: { x: 315, y: 130, width: 75, height: 55 },
    description: "Adjacent to children's park area, reserved by local business merchant."
  },
  {
    id: "plt-b6",
    plotNumber: "B-06",
    sector: "B",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "West",
    roadWidthFt: 30,
    ratePerSqFt: 1425,
    totalPrice: 1710000,
    status: "available",
    isCorner: false,
    isParkFacing: true,
    coordinates: { x: 400, y: 130, width: 75, height: 55 },
    description: "Clean rectangular plot, direct road access, ready for immediate possession."
  },
  {
    id: "plt-b7",
    plotNumber: "B-07",
    sector: "B",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1475,
    totalPrice: 2212500,
    status: "available",
    isCorner: true,
    isParkFacing: true,
    coordinates: { x: 485, y: 130, width: 85, height: 55 },
    description: "Spacious family plot with green lawn frontage and double access lane."
  },

  // Sector C - Central Park Avenue
  {
    id: "plt-c1",
    plotNumber: "C-01",
    sector: "C",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1450000,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 30, y: 220, width: 65, height: 55 },
    description: "Prime North-facing plot near internal community clubhouse plaza."
  },
  {
    id: "plt-c2",
    plotNumber: "C-02",
    sector: "C",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1450000,
    status: "sold",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 105, y: 220, width: 65, height: 55 },
    description: "Sold to NRI family from Gorakhpur based in Dubai."
  },
  {
    id: "plt-c3",
    plotNumber: "C-03",
    sector: "C",
    sizeSqFt: 1250,
    dimensions: "25 x 50 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1475,
    totalPrice: 1843750,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 180, y: 220, width: 75, height: 55 },
    description: "Extended depth plot (50 ft depth), ideal for front garden and car garage."
  },
  {
    id: "plt-c4",
    plotNumber: "C-04",
    sector: "C",
    sizeSqFt: 1250,
    dimensions: "25 x 50 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1475,
    totalPrice: 1843750,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 265, y: 220, width: 75, height: 55 },
    description: "Solid high-elevation ground, zero waterlogging risk with dedicated storm drainage."
  },
  {
    id: "plt-c5",
    plotNumber: "C-05",
    sector: "C",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1500,
    totalPrice: 2250000,
    status: "available",
    isCorner: true,
    isParkFacing: true,
    coordinates: { x: 350, y: 220, width: 85, height: 55 },
    description: "Corner plot facing east with unobstructed morning sunshine and green view."
  },
  {
    id: "plt-c6",
    plotNumber: "C-06",
    sector: "C",
    sizeSqFt: 1000,
    dimensions: "25 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1450,
    totalPrice: 1450000,
    status: "sold",
    isCorner: false,
    isParkFacing: true,
    coordinates: { x: 445, y: 220, width: 65, height: 55 },
    description: "Sold to educational institute professor."
  },
  {
    id: "plt-c7",
    plotNumber: "C-07",
    sector: "C",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "East",
    roadWidthFt: 30,
    ratePerSqFt: 1475,
    totalPrice: 1770000,
    status: "reserved",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 520, y: 220, width: 75, height: 55 },
    description: "Reserved with token advance for banker customer."
  },

  // Sector D - Commercial & Mixed Development Corridor
  {
    id: "plt-d1",
    plotNumber: "D-COMM-01",
    sector: "D",
    sizeSqFt: 2400,
    dimensions: "40 x 60 ft",
    facing: "East",
    roadWidthFt: 50,
    ratePerSqFt: 2200,
    totalPrice: 5280000,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 30, y: 310, width: 110, height: 70 },
    description: "Main road high-visibility commercial plot approved for shops, healthcare clinic, or coaching centre."
  },
  {
    id: "plt-d2",
    plotNumber: "D-COMM-02",
    sector: "D",
    sizeSqFt: 1800,
    dimensions: "30 x 60 ft",
    facing: "East",
    roadWidthFt: 50,
    ratePerSqFt: 2150,
    totalPrice: 3870000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 150, y: 310, width: 90, height: 70 },
    description: "Commercial frontage on 50ft outer connector road directly linking to Gorakhpur Highway."
  },
  {
    id: "plt-d3",
    plotNumber: "D-COMM-03",
    sector: "D",
    sizeSqFt: 1800,
    dimensions: "30 x 60 ft",
    facing: "East",
    roadWidthFt: 50,
    ratePerSqFt: 2150,
    totalPrice: 3870000,
    status: "sold",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 250, y: 310, width: 90, height: 70 },
    description: "Sold to pharmaceutical distribution franchise."
  },
  {
    id: "plt-d4",
    plotNumber: "D-RES-04",
    sector: "D",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1475,
    totalPrice: 2212500,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 350, y: 310, width: 80, height: 70 },
    description: "Residential plot situated peacefully behind commercial buffer, best of convenience and tranquility."
  },
  {
    id: "plt-d5",
    plotNumber: "D-RES-05",
    sector: "D",
    sizeSqFt: 1200,
    dimensions: "30 x 40 ft",
    facing: "North",
    roadWidthFt: 30,
    ratePerSqFt: 1425,
    totalPrice: 1710000,
    status: "available",
    isCorner: false,
    isParkFacing: false,
    coordinates: { x: 440, y: 310, width: 70, height: 70 },
    description: "Vastu compliant North facing plot with spot possession boundary."
  },
  {
    id: "plt-d6",
    plotNumber: "D-RES-06",
    sector: "D",
    sizeSqFt: 1500,
    dimensions: "30 x 50 ft",
    facing: "North-East",
    roadWidthFt: 30,
    ratePerSqFt: 1495,
    totalPrice: 2242500,
    status: "available",
    isCorner: true,
    isParkFacing: false,
    coordinates: { x: 520, y: 310, width: 85, height: 70 },
    description: "Corner residential plot on east boundary with wide access and open surrounding."
  },
];

export const PROJECTS: Project[] = [
  {
    id: "siddhi-vinayak-green-enclave",
    title: "Siddhi Vinayak Green Enclave",
    tagline: "Gated Plotted Township on NH-28 Highway Corridor",
    location: "Kushinagar Road / Gorakhpur AIIMS Expansion Belt",
    proximity: "8 Mins from AIIMS Gorakhpur · 12 Mins from Airport",
    image: "/src/assets/images/township_aerial_view_1790309144073.jpg",
    plotSizes: "800, 1000, 1200, 1500 & 2000 Sq. Ft.",
    startingPrice: "₹ 11.60 Lakhs",
    totalAcres: "22 Acres (Phase 1 & 2)",
    features: [
      "40 Ft Wide Central Asphalt Boulevard & 30 Ft Branch Roads",
      "Immediate 143 Converted Land with Dakhil-Kharij Guarantee",
      "Gated Security Entry Arch with 24x7 Guard Post & CCTV",
      "Underground Drainage Lines & Dedicated Electric Transformer",
      "Landscaped Central Park & Children's Play Zone"
    ],
    status: "Immediate Registry"
  },
  {
    id: "siddhi-vinayak-royal-city",
    title: "Siddhi Vinayak Royal City",
    tagline: "Ultra-Premium Villa Plotted Community",
    location: "Medical College Road / Asuran Ext., Gorakhpur",
    proximity: "5 Mins from BRD Medical College · 10 Mins from Railway Station",
    image: "/src/assets/images/contemporary_villas_community_1790309168054.jpg",
    plotSizes: "1200, 1500, 2400 & 3200 Sq. Ft.",
    startingPrice: "₹ 17.50 Lakhs",
    totalAcres: "15 Acres",
    features: [
      "Signature Contemporary Architectural Entry Gate",
      "Interlocking Paver Roads with Plantation on Both Sides",
      "Street Lighting on Every Electric Pole",
      "Approved for Immediate Housing Loans from Leading Public Banks",
      "High Growth Appreciation Zone near Established City Centers"
    ],
    status: "Phase 1 Ready"
  },
  {
    id: "expressway-commercial-corridor",
    title: "Expressway Commercial Boulevard",
    tagline: "High-Yield Commercial & Warehouse Plots",
    location: "Gorakhpur Link Expressway Interchange / GIDA Sector",
    proximity: "Direct Expressway Frontage · 15 Mins from Ramgarh Taal",
    image: "/src/assets/images/executive_consultation_lounge_1790309155737.jpg",
    plotSizes: "1800, 2400, 5000 & 10000 Sq. Ft.",
    startingPrice: "₹ 38.70 Lakhs",
    totalAcres: "30 Acres",
    features: [
      "Direct 50-Foot & 60-Foot Heavy Vehicle Feeder Access",
      "Dual Approval for Commercial Showrooms, Offices & Warehouses",
      "Dedicated High-Tension Power Substation Line",
      "Tremendous Inbound Logistics Traffic Appreciation Potential",
      "Bank Finance Assistance for Business Enterprises"
    ],
    status: "Rapid Construction"
  }
];

export const INFRASTRUCTURE_CORRIDORS: InfrastructureHighlight[] = [
  {
    title: "Gorakhpur Link Expressway",
    distance: "Direct 4-Lane Connectivity",
    category: "Expressway",
    impact: "+35% Land Value Surge",
    description: "Seamless 91-km expressway connecting Gorakhpur directly to Purvanchal Expressway and Lucknow/Delhi, transforming our project belt into high-demand regional logistics & residential corridors."
  },
  {
    title: "AIIMS Gorakhpur Super-Speciality",
    distance: "6 to 8 Mins Drive",
    category: "Healthcare",
    impact: "+40% Rental Demand",
    description: "Operational 750-bed AIIMS hospital and medical college creating continuous demand for doctor housing, staff accommodation, pharmacy hubs, and premium residential land."
  },
  {
    title: "Mahayogi Gorakhnath Airport Upgrade",
    distance: "12 Mins Direct Drive",
    category: "Aviation",
    impact: "Metro City Connectivity",
    description: "Expanded new civil terminal handling flights to Delhi, Mumbai, Bengaluru, Hyderabad, and Kolkata, attracting NRI and non-resident Purvanchal investors back to their hometown."
  },
  {
    title: "Ramgarh Taal & Taramandal Tourism Hub",
    distance: "14 Mins via Ring Road",
    category: "Tourism",
    impact: "High-End Lifestyle Hub",
    description: "International standard waterfront promenade, luxury hotels, floating restaurants, and water sports making Gorakhpur the tourism gateway of Eastern Uttar Pradesh."
  },
  {
    title: "GIDA Industrial & Textile City Expansion",
    distance: "18 Mins via NH-28",
    category: "Industry",
    impact: "50,000+ New Industrial Jobs",
    description: "Massive state government industrial park bringing FMCG giants, beverage plants, plastic parks, and IT/logistics warehousing, driving relentless residential plot requirements."
  }
];

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: "story-1",
    clientName: "Dr. Arvind Kumar Pandey",
    profession: "Senior Consultant, BRD Medical College",
    plotAllocated: "Plot A-04 (1,500 Sq. Ft.)",
    project: "Siddhi Vinayak Green Enclave",
    year: "2024",
    quote: "As a doctor, transparency and clear title were my top criteria. Siddhi Vinayak City Infra delivered on every single promise: the registry and dakhil-kharij (mutation) were completed within 14 days without any bureaucratic hassle. The 40ft wide blacktop road and peaceful environment made it our family's proudest decision.",
    registryVerified: true
  },
  {
    id: "story-2",
    clientName: "Mr. Rajeev N. Srivastava",
    profession: "Executive Engineer, Indian Railways (NER)",
    plotAllocated: "Plot B-02 (1,000 Sq. Ft.)",
    project: "Siddhi Vinayak Royal City",
    year: "2024",
    quote: "Er. Aditya Shukla and his team operate with complete corporate discipline. No hidden fees, clear 143 conversion documents shown upfront, and spot possession with boundary markers. My plot has already appreciated over 28% in 18 months.",
    registryVerified: true
  },
  {
    id: "story-3",
    clientName: "Sunita & Manoj Tripathi",
    profession: "NRI Investor (Dubai / Native of Deoria-Gorakhpur)",
    plotAllocated: "Plot D-COMM-03 (1,800 Sq. Ft.)",
    project: "Expressway Commercial Corridor",
    year: "2025",
    quote: "Living overseas, you always worry about land security back home. Siddhi Vinayak provided end-to-end video documentation, legal verification, and bank loan clearance. I was able to complete the registry during my annual vacation with total peace of mind.",
    registryVerified: true
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-101",
    name: "Vikramaditya Rai",
    phone: "+91 98390 41289",
    email: "vikram.rai@gmail.com",
    budget: "₹ 18 - 25 Lakhs",
    interestedPlot: "A-01 (Corner Boulevard)",
    preferredDate: "Upcoming Sunday, 11:00 AM",
    status: "Site Visit Scheduled",
    createdDate: "2026-09-22",
    notes: "Requires corner plot facing North/East, looking for immediate boundary wall."
  },
  {
    id: "lead-102",
    name: "Dr. Meenakshi Singh",
    phone: "+91 94152 78901",
    email: "dr.meenakshi.gkp@yahoo.com",
    budget: "₹ 15 - 20 Lakhs",
    interestedPlot: "B-06 (Park Facing)",
    preferredDate: "Friday, 4:00 PM",
    status: "New Inquiry",
    createdDate: "2026-09-24",
    notes: "Interested in SBI land loan option. Inquired through website."
  },
  {
    id: "lead-103",
    name: "Anand Prakash Tiwari",
    phone: "+91 87654 32190",
    email: "anand.tiwari.busi@outlook.com",
    budget: "₹ 40 - 55 Lakhs",
    interestedPlot: "D-COMM-01 (Commercial 2400 sqft)",
    preferredDate: "Saturday, 2:30 PM",
    status: "Token Received",
    createdDate: "2026-09-20",
    notes: "Token ₹1,00,000 paid. Legal agreement drafting in progress."
  },
  {
    id: "lead-104",
    name: "Subhash Chandra Maurya",
    phone: "+91 99182 65432",
    email: "scmaurya.upsrtc@gmail.com",
    budget: "₹ 12 - 15 Lakhs",
    interestedPlot: "B-03 (800 sqft residential)",
    preferredDate: "Monday, 10:00 AM",
    status: "Registry Scheduled",
    createdDate: "2026-09-18",
    notes: "Registry slot booked at Sadar Tehsil Gorakhpur."
  }
];

export const TRUST_PILLARS = [
  {
    title: "143 Land Revenue Conversion",
    badge: "100% Legal Clear-Title",
    description: "All land parcels are formally converted under Section 143 (Aabaadi Non-Agricultural status), guaranteeing zero future agricultural encumbrances or government claims."
  },
  {
    title: "Immediate Registry & Dakhil-Kharij",
    badge: "Tehsil Registered",
    description: "Same-day sale deed registration at the Gorakhpur Sub-Registrar office with dedicated company legal counsel assisting until official mutation (Dakhil Kharij) in your name."
  },
  {
    title: "Spot Physical Possession",
    badge: "Boundary Demarcated",
    description: "Receive your plot with concrete corner pillars and physical boundary wall demarcation on the very day token agreement is finalized."
  },
  {
    title: "40 Ft & 30 Ft Blacktop Roads",
    badge: "Wide Infrastructure",
    description: "Generous wide internal boulevards designed for two SUVs to easily cross, complete with curbs, covered underground stormwater drainage, and street poles."
  },
  {
    title: "Nationalized Bank Loan Approved",
    badge: "SBI · HDFC · PNB",
    description: "Pre-screened and approved by leading banks for plot-purchase and construction home loans up to 75%–80% of project valuation."
  },
  {
    title: "Direct Developer Transparency",
    badge: "0% Brokerage",
    description: "Deal directly with Siddhi Vinayak City Infra GKP Pvt. Ltd. executive management. No middleman, no undisclosed brokerage fees, and fixed transparent pricing."
  }
];
