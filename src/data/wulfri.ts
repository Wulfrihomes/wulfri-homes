export type ProjectType = "Land" | "Housing" | "Commercial";
export type ProjectStatus = "Available" | "Sold Out" | "Upcoming" | "Selling Fast";

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  type: ProjectType;
  category?: string;
  priceFrom: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  amenities: string[];
  plotSizes?: string[];
  paymentPlans: { label: string; value: string }[];
  featured?: boolean;
  mapEmbed?: string;
  mapLink?: string;
}

export const projects: Project[] = [
  {
    id: "emirates-parks-gardens",
    slug: "emirates-parks-gardens",
    name: "Emirates Parks & Gardens",
    location: "Ewu-Ode before Interchange, Mowe-Ofada",
    state: "Ogun",
    type: "Land",
    priceFrom: "₦8.25M",
    status: "Selling Fast",
    tagline: "Premium residential estate with high ROI",
    description:
      "A meticulously master-planned residential estate strategically located along the Lagos-Ibadan corridor. Emirates Parks & Gardens offers verified C of O titles, world-class infrastructure and flexible payment plans engineered for long-term wealth creation.",
    heroImage: "https://res.cloudinary.com/vxtwsudt/image/upload/v1783607231/Emirates_Entrance_r8me9l.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    ],
    amenities: [
      "24/7 Security",
      "Perimeter Fencing",
      "Interlocked Road Network",
      "Underground Drainage",
      "Street Lighting",
      "Recreational Park",
      "Green Areas",
      "Estate Gate House",
    ],
    plotSizes: ["300 sqm", "600 sqm", "Commercial"],
    paymentPlans: [
      { label: "Outright (300sqm)", value: "₦8.25M" },
      { label: "Outright (600sqm)", value: "₦14.5M" },
      { label: "Outright (Commercial)", value: "₦20M" },
    ],

    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "lushville-estate",
    slug: "lushville-estate",
    name: "Lushville Estate",
    location: "Lamini-Apete, Ibadan",
    state: "Oyo",
    type: "Land",
    priceFrom: "₦5.1M",
    status: "Selling Fast",
    tagline: "Now selling in Ibadan — developed by Lexshield Properties",
    description:
      "A master-planned residential estate designed to offer a blend of modern living and serene environments, with state-of-the-art amenities and green spaces. This project focuses on providing premium lifestyle for residents and subscribers.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    amenities: [
      "24/7 Security",
      "Perimeter Fencing",
      "Interlocked Roads",
      "Underground Drainage",
      "Street Lighting",
      "Estate Gate House",
    ],
    plotSizes: ["300 sqm", "500 sqm", "Commercial"],
    paymentPlans: [
      { label: "Instant (300sqm)", value: "₦5.1M" },
      { label: "Instant (500sqm)", value: "₦7.3M" },
      { label: "Instant (Commercial)", value: "₦8.5M" },
     ],
    
    mapEmbed:
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.7119340373706!2d3.82059207500206!3d7.497021992515315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjknNDkuMyJOIDPCsDQ5JzIzLjQiRQ!5e0!3m2!1sen!2sng!4v1783673742916!5m2!1sen!2sng",

mapLink:
  "https://goo.gl/maps/cEpwqDCnDJavJ58b7",

    featured: true,
  },
  {
    id: "country-home-estate",
    slug: "country-home-estate",
    name: "Country Home Estate",
    location: "Simawa, Off Lagos-Ibadan Expressway",
    state: "Ogun",
    type: "Land",
    priceFrom: "₦6.5M",
    status: "Available",
    tagline: "Serene living on Lagos-Ibadan corridor",
    description:
      "A tranquil residential enclave designed for families seeking peace, security and appreciation. Country Home Estate features fully paved roads, mature landscaping and a fast-appreciating land value.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    amenities: ["Gated Community", "CCTV Coverage", "Water Supply", "Recreational Zone", "Landscaping"],
    plotSizes: ["500 sqm", "1000 sqm"],
    paymentPlans: [
      { label: "Outright", value: "₦6.5M" },
      { label: "6 Months", value: "₦7.2M" },
      { label: "12 Months", value: "₦8.4M" },
     ],
    
    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "imperial-gardens",
    slug: "imperial-gardens",
    name: "Imperial Gardens",
    location: "Epe, Lagos",
    state: "Lagos",
    type: "Land",
    priceFrom: "₦12M",
    status: "Available",
    tagline: "Prime waterfront investment opportunity",
    description:
      "Imperial Gardens sits within the fast-appreciating Epe corridor, moments from the Lekki-Free Trade Zone, Dangote Refinery and the proposed international airport. A generational investment.",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba69?w=1200&q=80",
    ],
    amenities: ["Waterfront Access", "Excision Title", "Solar Street Lights", "Gated Perimeter"],
    plotSizes: ["500 sqm", "1000 sqm"],
    paymentPlans: [
      { label: "Outright", value: "₦12M" },
      { label: "12 Months", value: "₦15M" },
    ],
    
    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "wulfri-smart-city",
    slug: "wulfri-smart-city",
    name: "Wulfri Smart City",
    location: "Abeokuta, Ogun",
    state: "Ogun",
    type: "Housing",
    category: "Smart Homes",
    priceFrom: "₦85M",
    status: "Upcoming",
    tagline: "Nigeria's next-generation smart community",
    description:
      "A fully integrated smart city with fibre connectivity, solar micro-grids, EV-ready homes and a walkable town centre. Wulfri Smart City reimagines urban living for the modern Nigerian family.",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    amenities: [
      "Fibre Internet",
      "Solar Micro-Grid",
      "EV Charging",
      "Smart Access Control",
      "Wellness Centre",
      "School",
      "Retail Boulevard",
    ],
    paymentPlans: [
      { label: "Fully Detached", value: "₦85M" },
      { label: "Luxury Villa", value: "₦180M" },
     ],
    
    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "emerald-court",
    slug: "emerald-court",
    name: "Emerald Court",
    location: "Ajah, Lagos",
    state: "Lagos",
    type: "Housing",
    category: "Terrace Duplex",
    priceFrom: "₦120M",
    status: "Available",
    tagline: "Refined terrace living in Lekki-Ajah",
    description:
      "A collection of 24 contemporary terrace duplexes finished to the highest standard. Emerald Court blends Scandinavian minimalism with tropical craftsmanship for effortless daily living.",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753051-6057d5906cdb?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    amenities: ["Private Pool", "Fitted Kitchen", "Rooftop Terrace", "BQ", "Smart Home", "24/7 Power"],
    paymentPlans: [
      { label: "Outright", value: "₦120M" },
      { label: "12 Months", value: "₦135M" },
     ],
    
    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "royal-crest-estate",
    slug: "royal-crest-estate",
    name: "Royal Crest Estate",
    location: "Abuja",
    state: "FCT",
    type: "Housing",
    category: "Luxury Villas",
    priceFrom: "₦250M",
    status: "Available",
    tagline: "Presidential-grade villas in the FCT",
    description:
      "Royal Crest Estate is an exclusive enclave of 12 architect-designed villas set on landscaped grounds. Each home features grand entrances, en-suite bedrooms, private cinema and staff quarters.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    amenities: ["Private Cinema", "Home Gym", "Wine Cellar", "Elevator", "Staff Quarters", "Landscaped Gardens"],
    paymentPlans: [
      { label: "Outright", value: "₦250M" },
      { label: "24 Months", value: "₦290M" },
    ],
    
   mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
  {
    id: "wulfri-commercial-park",
    slug: "wulfri-commercial-park",
    name: "Wulfri Commercial Park",
    location: "Sagamu Interchange",
    state: "Ogun",
    type: "Commercial",
    category: "Mixed-Use",
    priceFrom: "₦45M",
    status: "Available",
    tagline: "Prime commercial hub on the Lagos-Ibadan axis",
    description:
      "Mixed-use commercial park with retail frontage, office suites and warehousing. Positioned on one of West Africa's busiest logistics corridors for guaranteed footfall and yield.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    amenities: ["Retail Frontage", "Office Suites", "Warehousing", "Loading Bays", "Ample Parking"],
    plotSizes: ["Commercial Plots"],
    paymentPlans: [
      { label: "Outright", value: "₦45M" },
      { label: "12 Months", value: "₦52M" },
    ],
    
    mapEmbed:
      "",

    mapLink: 
      "",

    featured: true,
  },
];

export interface ProjectDetailContent {
  eyebrow: string;
  heading: string;
  previewHeading: string;
  highlights: { title: string; desc: string }[];
  galleryPreview: string[];
}

export interface ProjectLandingConfig {
  route: string;
  heroImage: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  gallery: string[];
  usps: { title: string; desc: string }[];
  plans: { size: string; price: string; tag: string }[];
  amenities: string[];
  source: string;
}

export const projectDetailContent: Record<string, ProjectDetailContent> = {
  "emirates-parks-gardens": {
    eyebrow: "Why Emirates Parks & Gardens",
    heading: "Built for Legacy. Priced for Growth.",
    previewHeading: "Life at Emirates Parks.",
    highlights: [
      { title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
      { title: "Prime Location", desc: "Ewu-Ode before Interchange, Mowe-Ofada, Ogun" },
      { title: "40% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
      { title: "Flexible Payment", desc: "Outright, 3, 6 and 12-month structured plans" },
      { title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
      { title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
    ],
    galleryPreview: [
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609182/5fc1b1d0-fd97-4ee0-945e-af4caba951d2_an2bmz.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609181/1000008727_cdfbxg.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2164-1-scaled_c8ipws.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/0N2A2342-scaled_rqcmck.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609184/419A2313-1-scaled_myp8hi.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1783609182/1000008728_gilcja.jpg",
    ],
  },
  "lushville-estate": {
    eyebrow: "Why Lushville Estate",
    heading: "Developed for comfort, value and long-term growth.",
    previewHeading: "A polished estate experience from the first impression.",
    highlights: [
      { title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
      { title: "Prime Location", desc: "Strategically positioned in Lamini-Apete, close to University of Ibadan, Ibadan Poly, Lifeforte International School, Lagos-Ibadan train station" },
      { title: "25% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
      { title: "Flexible Payment", desc: "Outright, 3, 6, 12 and 18-month structured plans" },
      { title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
      { title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    ],
  },
  "country-home-estate": {
    eyebrow: "Why Country Home Estate",
    heading: "A calm, secure address with lasting value.",
    previewHeading: "Life at Country Home Estate.",
    highlights: [
      { title: "Serene Location", desc: "Located in Simawa on the fast-growing Lagos-Ibadan corridor" },
      { title: "Family-Friendly Design", desc: "Thoughtfully planned for privacy, comfort and long-term living" },
      { title: "Infrastructure Ready", desc: "Fully paved roads, good drainage and a premium landscape setting" },
      { title: "Strong Appreciation Outlook", desc: "Positioned for sustained demand and capital growth" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
  },
  "imperial-gardens": {
    eyebrow: "Why Imperial Gardens",
    heading: "A strategic investment in one of Lagos' most promising corridors.",
    previewHeading: "Life at Imperial Gardens.",
    highlights: [
      { title: "Prime Epe Position", desc: "Close to the Lekki-Free Trade Zone, Dangote Refinery and the proposed airport" },
      { title: "High Growth Corridor", desc: "Ideal for investors targeting rapid appreciation and long-term value" },
      { title: "Flexible Ownership", desc: "Structured payment options tailored to investors and end-users" },
      { title: "Premium Infrastructure", desc: "Gated perimeter, solar street lights and waterfront-ready access" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba69?w=1200&q=80",
    ],
  },
  "wulfri-smart-city": {
    eyebrow: "Why Wulfri Smart City",
    heading: "Designed for the future of connected living.",
    previewHeading: "Life at Wulfri Smart City.",
    highlights: [
      { title: "Future-Ready Homes", desc: "Integrated smart features for comfort, security and convenience" },
      { title: "Connected Infrastructure", desc: "Fibre internet, solar energy and EV-friendly community planning" },
      { title: "Walkable Lifestyle", desc: "A well-planned town centre with schools, retail and recreation" },
      { title: "Premium Community", desc: "Built to support modern families and long-term value" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  "emerald-court": {
    eyebrow: "Why Emerald Court",
    heading: "Luxury, comfort and everyday convenience in one address.",
    previewHeading: "Life at Emerald Court.",
    highlights: [
      { title: "Refined Design", desc: "Contemporary terrace duplexes finished to a premium standard" },
      { title: "Prime Lekki-Ajah Address", desc: "A highly sought-after location with exceptional connectivity" },
      { title: "Smart Living", desc: "Integrated technology, fitted interiors and elegant finishing" },
      { title: "Lifestyle Amenities", desc: "Private pool, terrace, BQ and modern comfort in every unit" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753051-6057d5906cdb?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
  },
  "royal-crest-estate": {
    eyebrow: "Why Royal Crest Estate",
    heading: "An exclusive lifestyle defined by elegance and comfort.",
    previewHeading: "Life at Royal Crest Estate.",
    highlights: [
      { title: "Architectural Excellence", desc: "Grand villas designed for luxury, privacy and prestige" },
      { title: "Prime FCT Address", desc: "A prestigious location in the heart of Abuja's elite property market" },
      { title: "Premium Finishes", desc: "Private cinema, gym, wine cellar and staff quarters included" },
      { title: "High-End Lifestyle", desc: "Landscaped grounds and refined interiors for effortless living" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  "wulfri-commercial-park": {
    eyebrow: "Why Wulfri Commercial Park",
    heading: "A high-traffic commercial destination built for yield.",
    previewHeading: "Life at Wulfri Commercial Park.",
    highlights: [
      { title: "Prime Logistics Location", desc: "Strategically positioned at Sagamu Interchange for strong visibility" },
      { title: "Mixed-Use Appeal", desc: "Retail frontage, office suites and warehousing in one development" },
      { title: "Business-Ready Infrastructure", desc: "Loading bays, ample parking and premium access points" },
      { title: "Investment Potential", desc: "Built for sustained demand and reliable commercial returns" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
  },
};

export const projectLandingConfigs: Record<string, ProjectLandingConfig> = {
  "country-home-estate": {
    route: "/country-home-estate",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own Land at Country Home Estate",
    subtitle: "A serene residential estate in Simawa with premium landscaping, secure living and strong investment potential.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753051-6057d5906cdb?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    ],
    usps: [
      { title: "Peaceful Setting", desc: "A calm and secure address designed for family living and long-term appreciation." },
      { title: "Prime Corridor", desc: "Strategic location in Simawa, off the Lagos-Ibadan Expressway." },
      { title: "Flexible Payment", desc: "Easy ownership plans tailored for both first-time buyers and investors." },
      { title: "Premium Infrastructure", desc: "Paved roads, landscaping, security and essential estate services." },
      { title: "Fast Appreciation", desc: "Strong growth outlook on one of Nigeria's busiest development corridors." },
      { title: "Ready for Ownership", desc: "Ideal for residential development and future family settlement." },
    ],
    plans: [
      { size: "500 sqm", price: "₦6.5M", tag: "Outright" },
      { size: "500 sqm", price: "₦7.2M", tag: "6 Months" },
      { size: "1000 sqm", price: "₦8.4M", tag: "12 Months" },
    ],
    amenities: ["Gated Community", "CCTV Coverage", "Water Supply", "Recreational Zone", "Landscaping", "Security Patrols"],
    source: "Country Home Estate Landing — Bottom",
  },
  "imperial-gardens": {
    route: "/imperial-gardens",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own Land at Imperial Gardens",
    subtitle: "Prime waterfront-ready land in Epe with premium access to the booming industrial and logistics corridor.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba69?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80",
    ],
    usps: [
      { title: "Strategic Epe Position", desc: "A fast-growing location near the Lekki-Free Trade Zone and major industrial corridors." },
      { title: "Waterfront Advantage", desc: "Opportunities for premium lifestyle and future commercial value." },
      { title: "Verified Ownership", desc: "Excision title support and secure legal backing for serious investors." },
      { title: "Flexible Plans", desc: "Tailored installment options to make entry easier for buyers and investors." },
      { title: "Premium Access", desc: "Solar street lighting, gated entry and a clearly defined estate environment." },
      { title: "Growth Potential", desc: "Positioned for long-term capital appreciation in a fast-moving corridor." },
    ],
    plans: [
      { size: "500 sqm", price: "₦12M", tag: "Outright" },
      { size: "1000 sqm", price: "₦15M", tag: "12 Months" },
    ],
    amenities: ["Waterfront Access", "Excision Title", "Solar Street Lights", "Gated Perimeter", "Estate Security", "Landscaping"],
    source: "Imperial Gardens Landing — Bottom",
  },
  "wulfri-smart-city": {
    route: "/wulfri-smart-city",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own at Wulfri Smart City",
    subtitle: "A future-ready smart community in Abeokuta built for connected living, energy efficiency and modern family life.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    ],
    usps: [
      { title: "Smart Infrastructure", desc: "Fibre internet, solar power and built-in technology for modern living." },
      { title: "Walkable Community", desc: "A master-planned town centre with retail, wellness and education close by." },
      { title: "Future-Ready Design", desc: "Built to support EV access, digital connectivity and modern conveniences." },
      { title: "Lifestyle Focus", desc: "Thoughtful amenities that support comfort, health and community living." },
      { title: "Security First", desc: "Smart access control and integrated safety systems for peace of mind." },
      { title: "Long-Term Value", desc: "A high-potential address for families and early adopters alike." },
    ],
    plans: [
      { size: "Fully Detached", price: "₦85M", tag: "Launch" },
      { size: "Luxury Villa", price: "₦180M", tag: "Premium" },
    ],
    amenities: ["Fibre Internet", "Solar Micro-Grid", "EV Charging", "Smart Access Control", "Wellness Centre", "Retail Boulevard"],
    source: "Wulfri Smart City Landing — Bottom",
  },
  "emerald-court": {
    route: "/emerald-court",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own at Emerald Court",
    subtitle: "Contemporary terrace duplexes in Ajah with premium finishes, smart amenities and a refined lifestyle experience.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753051-6057d5906cdb?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    ],
    usps: [
      { title: "Modern Duplex Living", desc: "Carefully designed homes that combine elegance, comfort and function." },
      { title: "Prime Ajah Address", desc: "A highly desirable location with seamless access to key urban destinations." },
      { title: "Premium Finishes", desc: "Fitted kitchens, rooftop terraces, smart home features and quality craftsmanship." },
      { title: "Lifestyle Comfort", desc: "Private pool, BQ and relaxing spaces designed for everyday luxury." },
      { title: "Reliable Power", desc: "24/7 power support and dependable utility planning for modern living." },
      { title: "Easy Ownership", desc: "Flexible payment options to support your move into premium property." },
    ],
    plans: [
      { size: "Terrace Duplex", price: "₦120M", tag: "Outright" },
      { size: "Terrace Duplex", price: "₦135M", tag: "12 Months" },
    ],
    amenities: ["Private Pool", "Fitted Kitchen", "Rooftop Terrace", "BQ", "Smart Home", "24/7 Power"],
    source: "Emerald Court Landing — Bottom",
  },
  "royal-crest-estate": {
    route: "/royal-crest-estate",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own at Royal Crest Estate",
    subtitle: "Luxury villas in Abuja designed for prestige, comfort and high-end living in a secure enclave.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",
    ],
    usps: [
      { title: "Prestige Address", desc: "An exclusive estate in Abuja crafted for luxury buyers and high-net-worth investors." },
      { title: "Architectural Excellence", desc: "Spacious villas with refined detailing and elegant interiors." },
      { title: "Private Amenities", desc: "Private cinema, gym, wine cellar and staff quarters included." },
      { title: "Secure Lifestyle", desc: "Controlled access and carefully managed grounds for privacy and comfort." },
      { title: "Landscaped Grounds", desc: "A beautiful setting that elevates everyday living." },
      { title: "Flexible Purchase", desc: "Structured plans designed to make premium ownership more accessible." },
    ],
    plans: [
      { size: "Luxury Villa", price: "₦250M", tag: "Outright" },
      { size: "Luxury Villa", price: "₦290M", tag: "24 Months" },
    ],
    amenities: ["Private Cinema", "Home Gym", "Wine Cellar", "Elevator", "Staff Quarters", "Landscaped Gardens"],
    source: "Royal Crest Estate Landing — Bottom",
  },
  "wulfri-commercial-park": {
    route: "/wulfri-commercial-park",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    badge: "By Lexshield Properties Limited",
    title: "Own at Wulfri Commercial Park",
    subtitle: "A premium mixed-use commercial destination at Sagamu Interchange with strong visibility and excellent yield potential.",
    ctaLabel: "Book Free Inspection",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1400&q=80",
    ],
    usps: [
      { title: "Prime Commercial Location", desc: "Strong visibility and accessibility at Sagamu Interchange." },
      { title: "Mixed-Use Demand", desc: "Retail frontage, office suites and warehousing in one master-planned park." },
      { title: "Business Ready", desc: "Designed for efficient operations with loading bays, parking and strong access." },
      { title: "Return Potential", desc: "Ideal for investors targeting steady income and long-term value." },
      { title: "Flexible Ownership", desc: "Structured payment options for business owners and investors alike." },
      { title: "Professional Environment", desc: "A built-for-business setting that supports growth and visibility." },
    ],
    plans: [
      { size: "Commercial Plot", price: "₦45M", tag: "Outright" },
      { size: "Commercial Plot", price: "₦52M", tag: "12 Months" },
    ],
    amenities: ["Retail Frontage", "Office Suites", "Warehousing", "Loading Bays", "Ample Parking", "24/7 Security"],
    source: "Wulfri Commercial Park Landing — Bottom",
  },
};

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectsByType = (type: ProjectType) => projects.filter((p) => p.type === type);

export const whyChooseUs = [
  { title: "Verified Titles", desc: "Every project comes with C of O, Governor's Consent or verified excision.", icon: "ShieldCheck" },
  { title: "Flexible Payment Plans", desc: "Structured plans from 3 to 24 months tailored to your cashflow.", icon: "Wallet" },
  { title: "Prime Locations", desc: "Strategic sites in Lagos, Ogun, Abuja and other appreciating corridors.", icon: "MapPin" },
  { title: "Fast Appreciation", desc: "Properties historically appreciating 25–40% year-on-year.", icon: "TrendingUp" },
  { title: "Infrastructure Development", desc: "Roads, drainage, power and security delivered before allocation.", icon: "Building2" },
  { title: "Trusted Partner", desc: "Years of delivering value to Nigerian and diaspora investors.", icon: "Handshake" },
];

export const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Doctor, Diaspora Investor — London",
    quote:
      "I bought two plots at Emirates Parks & Gardens from London. Every step, from virtual inspection to allocation, was seamless and transparent. Wulfri Homes truly understands the diaspora investor.",
  },
  {
    name: "Tunde Adebayo",
    role: "Entrepreneur — Lagos",
    quote:
      "My Emerald Court home was delivered on schedule and to specification. The finish quality rivals anything I've seen in Dubai. This is how Nigerian real estate should be done.",
  },
  {
    name: "Chukwuma Family",
    role: "Homeowners — Country Home Estate",
    quote:
      "We inspected several estates before choosing Wulfri. The infrastructure was already in place, the community felt secure, and the flexible plan made ownership stress-free.",
  },
];

export const faqs = [
  {
    q: "What titles do your estates come with?",
    a: "Every Wulfri Homes project is backed by verified titles — Certificate of Occupancy (C of O), Governor's Consent, or Registered Excision. Documentation is issued upon full payment.",
  },
  {
    q: "Can I buy from the diaspora?",
    a: "Absolutely. Over 30% of our clients are diaspora Nigerians. We offer virtual inspections, secure online payments, video walkthroughs and full documentation via courier.",
  },
  {
    q: "What is your payment plan structure?",
    a: "We offer outright, 3-month, 6-month and 12-month plans. Selected premium properties offer up to 24 months. A 10–15% initial deposit typically secures your unit.",
  },
  {
    q: "How do I book an inspection?",
    a: "Site inspections are complimentary. Click the ‘Book Inspection' button, submit your preferred date and our client team will confirm within 24 hours.",
  },
  {
    q: "What happens after full payment?",
    a: "You receive a Deed of Assignment, Survey Plan, Receipt of Payment and Allocation Letter. Physical allocation follows within 30–90 days depending on the estate.",
  },
  {
    q: "Do you offer refund?",
    a: "Yes, subject to our refund policy. Refund requests within the first 30 days incur no penalty; requests thereafter attract an administrative fee.",
  },
  {
    q: "How long does construction take?",
    a: "For housing projects, construction typically spans 12–24 months depending on unit type. Progress reports are shared quarterly with all subscribers.",
  },
  {
    q: "How does allocation work?",
    a: "Allocation is done in the presence of the subscriber (physical or virtual) with the surveyor, estate manager and legal officer. You receive beacon numbers and a copy of your allocated plot.",
  },
];

export const blogPosts = [
  {
    slug: "why-mowe-ofada-is-nigerias-next-growth-corridor",
    title: "Why Mowe-Ofada is Nigeria's Next Growth Corridor",
    excerpt: "The infrastructure catalysts positioning Mowe-Ofada for 3x land appreciation over the next 5 years.",
    category: "Market Insights",
    date: "Nov 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    slug: "diaspora-investor-guide-2026",
    title: "The Diaspora Investor's Guide to Nigerian Real Estate",
    excerpt: "Everything Nigerians abroad need to know before buying land or a home back home in 2026.",
    category: "Buying Guide",
    date: "Oct 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
  {
    slug: "understanding-land-titles-in-nigeria",
    title: "Understanding Land Titles in Nigeria: C of O, Governor's Consent and Excision",
    excerpt: "A plain-English breakdown of the documents that separate a safe investment from a costly mistake.",
    category: "Land Documentation",
    date: "Oct 14, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  },
  {
    slug: "roi-of-land-vs-stocks",
    title: "The ROI of Nigerian Land vs. Stocks and Crypto",
    excerpt: "A 10-year comparative analysis of returns from prime Nigerian land, NSE stocks and digital assets.",
    category: "Investment Tips",
    date: "Sep 30, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=1200&q=80",
  },
];

export const WHATSAPP_NUMBER = "2348027057374";
export const PHONE_NUMBER = "+234 802 705 7374";
export const EMAIL = "info@wulfrihomes.com.ng";
export const OFFICE_ADDRESS = "Plot 106, Ademola Ajasa Street, Omole Phase 1, Ikeja, Lagos, Nigeria";
