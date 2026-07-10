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
export const PHONE_NUMBER = "2348027057374";
export const EMAIL = "info@wulfrihomes.com.ng";
export const OFFICE_ADDRESS = "Plot 106, Ademola Ajasa Street, Omole Phase 1, Ikeja, Lagos, Nigeria";
