export type ProjectType = "Land" | "Housing" | "Commercial";
export type ProjectStatus = "Available" | "Sold Out" | "Upcoming" | "Selling Fast";

// 1. Defined structured Pricing Tiers for flexible details per page
export interface PricingPlan {
  label: string;
  value: string;
}

export interface PricingTier {
  title: string;
  popular?: boolean;
  plans: PricingPlan[];
}

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
  youtubeVideoId?: string;
  developer?: string; // <--- Dynamic Developer Branding
  pricingTiers?: PricingTier[]; // <--- Dynamic Pricing Details
}

const allProjects: Project[] = [
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
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "6UrhYvxpseM",
    developer: "By Lexshield Properties Limited",
    pricingTiers: [
      {
        title: "Residential 300sqm",
        popular: false,
        plans: [
          { label: "Instant Payment", value: "₦8.25M" },
          { label: "0–3 Months Installment", value: "₦8.85M" },
          { label: "6 Months Plan", value: "₦9.5M" },
        ],
      },
      {
        title: "Residential 600sqm",
        popular: true,
        plans: [
          { label: "Instant Payment", value: "₦14.5M" },
          { label: "0–3 Months Installment", value: "₦15.5M" },
          { label: "6 Months Plan", value: "₦16.5M" },
        ],
      },
      {
        title: "Commercial Plot",
        popular: false,
        plans: [
          { label: "Instant Payment", value: "₦20M" },
          { label: "0–6 Months Installment", value: "₦22M" },
        ],
      },
    ],
  },
  {
    id: "country-home-estate",
    slug: "country-home-estate",
    name: "Country Home Estate",
    location: "Iddo-Ibadan, Along Ido-Eruwa Road",
    state: "Oyo",
    type: "Land",
    priceFrom: "₦1.7M",
    status: "Selling Fast",
    tagline: "Serene and accessible estate development in Iddo, Ibadan",
    description:
      "Country Home Estate offers a blend of natural serenity and fast-developing infrastructure in Iddo-Ibadan. Strategically situated along the Ido-Eruwa road, this estate features verified title, essential modern amenities, and highly affordable payment plans.",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    amenities: [
      "Perimeter Fencing",
      "24/7 Security",
      "24 Hours Electricity",
      "Good Road Network",
      "Recreational Center",
      "Drainage System",
      "Modern Tech Hub",
      "Shopping Mall",
      "World Class Educational Center",
    ],
    plotSizes: ["300 sqm", "500 sqm"],
    paymentPlans: [
      { label: "0-3 Months (300sqm)", value: "₦1.7M" },
      { label: "0-3 Months (500sqm)", value: "₦2.7M" },
    ],
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Lexshield Properties Limited",
    pricingTiers: [
      {
        title: "Residential 300sqm",
        popular: false,
        plans: [
          { label: "0-3 Months", value: "₦1.7M" },
          { label: "6 Months Plan", value: "₦2M" },
          { label: "12 Months Plan", value: "₦2.5M" },
          { label: "18 Months Plan", value: "₦3M" },
        ],
      },
      {
        title: "Residential 500sqm",
        popular: true,
        plans: [
          { label: "0-3 Months", value: "₦2.7M" },
          { label: "6 Months Plan", value: "₦3M" },
          { label: "12 Months Plan", value: "₦3.5M" },
          { label: "18 Months Plan", value: "₦4M" },
        ],
      },
      {
        title: "Statutory Fee Breakdown",
        popular: false,
        plans: [
          { label: "0-3 Months", value: "₦1.8M" },
          { label: "6 Months", value: "₦2M" },
          { label: "12 Months", value: "₦2.2M" },
          { label: "18 Months", value: "₦2.5M" },
        ],
      },
    ],
  },
  {
    id: "zylus-olumo-pride",
    slug: "zylus-olumo-pride",
    name: "Zylus Olumo Pride",
    location: "Abeokuta",
    state: "Ogun",
    type: "Land",
    priceFrom: "₦5.5M",
    status: "Selling Fast",
    tagline: "Prime real estate backed by Government Allocation in Abeokuta",
    description:
      "Zylus Olumo Pride offers secure, high-value land allocation in Abeokuta, Ogun State. Featuring guaranteed Government Allocation titles and flexible monthly installment options, it provides peace of mind for both residential builders and savvy investors.",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    amenities: [
      "Government Allocation Title",
      "Gated Community",
      "Perimeter Fencing",
      "Paved Road Network",
      "Electricity Grid Connection",
      "24/7 Security",
    ],
    plotSizes: ["550 sqm"],
    paymentPlans: [
      { label: "Outright Payment", value: "₦5.5M" },
      { label: "0-3 Months", value: "₦6M" },
      { label: "3-6 Months", value: "₦6.5M" },
      { label: "7-12 Months", value: "₦7.5M" },
    ],
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Zylus Group International",
    pricingTiers: [
      {
        title: "Standard Plot 550sqm",
        popular: true,
        plans: [
          { label: "Outright Payment", value: "₦5.5M" },
          { label: "0-3 Months Plan", value: "₦6M" },
          { label: "3-6 Months Plan", value: "₦6.5M" },
          { label: "7-12 Months Plan", value: "₦7.5M" },
        ],
      },
    ],
  },
  {
    id: "micasa-lagos",
    slug: "micasa-lagos",
    name: "Micasa Lagos",
    location: "Elerangbe, Ibeju Lekki",
    state: "Lagos",
    type: "Land",
    priceFrom: "₦19.4M",
    status: "Selling Fast",
    tagline: "Exclusive discounted plots with C of O Title in Ibeju Lekki",
    description:
      "Micasa Lagos is situated in the high-growth industrial hub of Elerangbe, Ibeju Lekki. Secured with an authentic Certificate of Occupancy (C of O / Government Allocation), this gated development offers heavily discounted promo prices across premium residential and commercial plot sizes.",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    amenities: [
      "Government Allocation (C of O)",
      "Grand Gate House",
      "24/7 Security Patrol",
      "Drainage Channels",
      "Street Lighting",
      "Paved Internal Roads",
    ],
    plotSizes: ["300 sqm", "500 sqm", "1000 sqm"],
    paymentPlans: [
      { label: "300sqm Promo Price", value: "₦19.4M" },
      { label: "500sqm Promo Price", value: "₦32M" },
      { label: "1000sqm Commercial", value: "₦80M" },
    ],
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Wulfri Homes & Properties",
    pricingTiers: [
      {
        title: "300sqm Residential Plot",
        popular: false,
        plans: [
          { label: "Pre-Launch Price", value: "₦21.2M" },
          { label: "Promo Price", value: "₦19.4M" },
        ],
      },
      {
        title: "500sqm Residential Plot",
        popular: true,
        plans: [
          { label: "Pre-Launch Price", value: "₦35M" },
          { label: "Promo Price", value: "₦32M" },
        ],
      },
      {
        title: "1000sqm Commercial Plot",
        popular: false,
        plans: [
          { label: "All Inclusive Price", value: "₦80M" },
        ],
      },
    ],
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
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176979/lushville-1-e1751887400545-768x839_nwuv1g.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176884/Untitled1_vvt4iv.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176979/lushville-e1751887638946_dqmpwj.jpg",
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
    mapLink: "https://goo.gl/maps/cEpwqDCnDJavJ58b7",
    featured: true,
    youtubeVideoId: "jmngF0VY2Pw",
    developer: "By Lexshield Properties Limited",
    pricingTiers: [
      {
        title: "Standard 300sqm",
        plans: [
          { label: "Outright Payment", value: "₦5.1M" },
          { label: "3 Months Installment", value: "₦5.6M" },
        ],
      },
      {
        title: "Premium 500sqm",
        popular: true,
        plans: [
          { label: "Outright Payment", value: "₦7.3M" },
          { label: "3 Months Installment", value: "₦7.9M" },
        ],
      },
    ],
  },
  {
    id: "the-legacy",
    slug: "the-legacy",
    name: "The Legacy",
    location: "Along Ibadan-Ijebu Ode Road, Off Lagos-Ibadan ",
    state: "Oyo",
    type: "Land",
    priceFrom: "₦17M",
    status: "Available",
    tagline: "Serene living in Ibadan's fast-growing corridor",
    description:
      "A tranquil residential enclave designed for families seeking peace, security and appreciation. The Legacy features fully paved roads, mature landscaping and a fast-appreciating land value.",
    heroImage: "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189635/The_Legacy-f001791_zmqp7k.png",
    gallery: [
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189628/The_Legacy-f000861_r9ptea.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189628/The_Legacy-f000871_rmdkeq.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189627/The_Legacy_uxl3td.jpg",
    ],
    amenities: ["Gated Community", "CCTV Coverage", "Water Supply", "Recreational Zone", "Landscaping"],
    plotSizes: ["500 sqm"],
    paymentPlans: [
      { label: "6 Months", value: "₦17M" },
      { label: "12 Months", value: "₦18.7M" },
    ],
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "bghbym1qnOs",
    developer: "By Wulfri Homes & Properties",
    pricingTiers: [
      {
        title: "Residential 500sqm",
        plans: [
          { label: "6 Months Structural Plan", value: "₦17M" },
          { label: "12 Months Structural Plan", value: "₦18.7M" },
        ],
      },
    ],
  },
  {
    id: "zylus-chrystland-city",
    slug: "zylus-chrystland-city",
    name: "Zylus Chrystland City",
    location: "Epe, Lagos",
    state: "Lagos",
    type: "Land",
    priceFrom: "₦12M",
    status: "Available",
    tagline: "By St Augustine University, Epe",
    description:
      "Zylus Chrystland City sits within the fast-appreciating Epe corridor, moments from the Lekki-Free Trade Zone, Dangote Refinery and the proposed international airport. A generational investment.",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fe6ba69?w=1200&q=80",
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
    plotSizes: ["300 sqm", "500 sqm"],
    paymentPlans: [
      { label: "6 Months (300sqm)", value: "₦12M" },
      { label: "6 Months (500sqm)", value: "₦20M" },
    ],
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "In Partnership with Zylus Group",
    pricingTiers: [
      {
        title: "Standard Plot (300sqm)",
        plans: [{ label: "6 Months Payment Plan", value: "₦12M" }],
      },
      {
        title: "Executive Plot (500sqm)",
        plans: [{ label: "6 Months Payment Plan", value: "₦20M" }],
      },
    ],
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
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Wulfri Homes Developments",
    pricingTiers: [
      {
        title: "4 Bedroom Fully Detached",
        plans: [{ label: "Outright Construction Launch Price", value: "₦85M" }],
      },
      {
        title: "5 Bedroom Luxury Villa",
        plans: [{ label: "Outright Construction Launch Price", value: "₦180M" }],
      },
    ],
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
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Wulfri Luxury Residences",
    pricingTiers: [
      {
        title: "4 Bedroom Terrace Duplex",
        plans: [
          { label: "Outright Purchase", value: "₦120M" },
          { label: "12 Months Installment Plan", value: "₦135M" },
        ],
      },
    ],
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
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Wulfri Signature Series",
    pricingTiers: [
      {
        title: "Presidential Mansionette",
        plans: [
          { label: "Outright Purchase Portfolio", value: "₦250M" },
          { label: "24 Months Milestones Delivery", value: "₦290M" },
        ],
      },
    ],
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
    mapEmbed: "",
    mapLink: "",
    featured: true,
    youtubeVideoId: "",
    developer: "By Wulfri Commercial Core Ltd",
    pricingTiers: [
      {
        title: "Industrial Mixed-Use Acre",
        plans: [
          { label: "Outright Allocation", value: "₦45M" },
          { label: "12 Months Financing Structure", value: "₦52M" },
        ],
      },
    ],
  },
];

// FILTERED: Export only Land projects to hide Housing and Commercial projects under review
export const projects = allProjects.filter((p) => p.type === "Land");

export interface ProjectDetailContent {
  eyebrow: string;
  heading: string;
  previewHeading: string;
  highlights: { title: string; desc: string }[];
  galleryPreview: string[];
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
  "country-home-estate": {
    eyebrow: "Why Country Home Estate",
    heading: "Affordable luxury and serene living along Ido-Eruwa Road.",
    previewHeading: "Life at Country Home Estate.",
    highlights: [
      { title: "Low Entry Deposit", desc: "Start your investment journey with an initial deposit of ₦300K" },
      { title: "Comprehensive Infrastructure", desc: "Equipped with modern tech hub, educational center, and shopping mall" },
      { title: "Flexible Payment Terms", desc: "Convenient payment plans structured up to 18 months" },
      { title: "Strategic Corridor", desc: "Located along Ido-Eruwa Road, Iddo-Ibadan with high growth potential" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  "zylus-olumo-pride": {
    eyebrow: "Why Zylus Olumo Pride",
    heading: "Guaranteed Government Allocation in the heart of Abeokuta.",
    previewHeading: "Life at Zylus Olumo Pride.",
    highlights: [
      { title: "Government Allocation", desc: "Guaranteed land documentation backed by government allocation" },
      { title: "Prime Abeokuta Location", desc: "Situated in a prime and accessible zone in Ogun State" },
      { title: "Structured Monthly Plans", desc: "Clear monthly installment plans up to 12 months with low initial deposit" },
      { title: "High Capital Appreciation", desc: "Positioned in one of Abeokuta's fastest-growing residential hubs" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
  },
  "micasa-lagos": {
    eyebrow: "Why Micasa Lagos",
    heading: "Discounted pre-launch pricing with Certificate of Occupancy (C of O).",
    previewHeading: "Life at Micasa Lagos.",
    highlights: [
      { title: "Certificate of Occupancy (C of O)", desc: "100% verified Government Allocation land title" },
      { title: "Massive Discount Splash", desc: "Exclusive promotional pricing across residential and commercial plots" },
      { title: "Prime Ibeju-Lekki Hub", desc: "Located in Elerangbe, Ibeju Lekki, close to major economic catalysts" },
      { title: "Commercial Opportunities", desc: "1000sqm commercial allocations available all-inclusive" },
    ],
    galleryPreview: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
  "lushville-estate": {
    eyebrow: "Why Lushville Estate",
    heading: "Developed for comfort, value and long-term growth.",
    previewHeading: "A polished estate experience from the first impression.",
    highlights: [
      { title: "Verified C of O Title", desc: "Genuine title with government-backed documentation" },
      { title: "25% ROI Projected", desc: "Fast-appreciating corridor with proven historical growth" },
      { title: "Flexible Payment", desc: "Outright, 3, 6, 12 and 18-month structured plans" },
      { title: "Full Infrastructure", desc: "Roads, drainage, security, street lighting delivered" },
      { title: "Ready for Allocation", desc: "Physical allocation within 30 days of full payment" },
    ],
    galleryPreview: [
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176979/lushville-1-e1751887400545-768x839_nwuv1g.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176884/Untitled1_vvt4iv.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784176979/lushville-e1751887638946_dqmpwj.jpg",
    ],
  },
  "the-legacy": {
    eyebrow: "Why The Legacy",
    heading: "A calm, secure address with lasting value.",
    previewHeading: "Life at The Legacy.",
    highlights: [
      { title: "Serene Location", desc: "Located in a fast-growing corridor in Ibadan" },
      { title: "Family-Friendly Design", desc: "Thoughtfully planned for privacy, comfort and long-term living" },
      { title: "Infrastructure Ready", desc: "Fully paved roads, good drainage and a premium landscape setting" },
      { title: "Strong Appreciation Outlook", desc: "Positioned for sustained demand and capital growth" },
    ],
    galleryPreview: [
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189628/The_Legacy-f000861_r9ptea.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189628/The_Legacy-f000871_rmdkeq.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189627/The_Legacy_uxl3td.jpg",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189628/The_Legacy-f004716_qozqko.png",
      "https://res.cloudinary.com/vxtwsudt/image/upload/v1784189633/The_Legacy-f004284_bj9rfk.png",
    ],
  },
  "zylus-chrystland-city": {
    eyebrow: "Why Zylus Chrystland City",
    heading: "A strategic investment in one of Lagos' most promising corridors.",
    previewHeading: "Life at Zylus Chrystland City.",
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

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectsByType = (type: ProjectType) => projects.filter((p) => p.type === type);

export const whyChooseUs = [
  { title: "Verified Titles", desc: "Every project comes with C of O, Governor's Consent or verified excision.", icon: "ShieldCheck" },
  { title: "Flexible Payment Plans", desc: "Structured plans from 3 to 24 months tailored to your cashflow.", icon: "Wallet" },
  { title: "Prime Locations", desc: "Strategic sites in Lagos, Ogun, Oyo and other appreciating corridors.", icon: "MapPin" },
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
    role: "Homeowners — The Legacy",
    quote:
      "We inspected several estates before choosing The Legacy. The infrastructure was already in place, the community felt secure, and the flexible plan made ownership stress-free.",
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
    date: "Jan 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    slug: "diaspora-investor-guide-2026",
    title: "The Diaspora Investor's Guide to Nigerian Real Estate",
    excerpt: "Everything Nigerians abroad need to know before buying land or a home back home in 2026.",
    category: "Buying Guide",
    date: "Jan 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
  {
    slug: "understanding-land-titles-in-nigeria",
    title: "Understanding Land Titles in Nigeria: C of O, Governor's Consent and Excision",
    excerpt: "A plain-English breakdown of the documents that separate a safe investment from a costly mistake.",
    category: "Land Documentation",
    date: "Feb 16, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  },
  {
    slug: "roi-of-land-vs-stocks",
    title: "The ROI of Nigerian Land vs. Stocks and Crypto",
    excerpt: "A 10-year comparative analysis of returns from prime Nigerian land, NSE stocks and digital assets.",
    category: "Investment Tips",
    date: "Apr 30, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=1200&q=80",
  },
];

export const WHATSAPP_NUMBER = "2348027057374";
export const PHONE_NUMBER = "+234 802 705 7374";
export const EMAIL = "info@wulfrihomes.com.ng";
export const OFFICE_ADDRESS = "Plot 106, Ademola Ajasa Street, Omole Phase 1, Ikeja, Lagos, Nigeria";