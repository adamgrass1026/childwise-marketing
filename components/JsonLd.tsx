const SITE_URL = "https://childwisesoftware.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ChildWise",
  legalName: "ChildWise Software",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "ChildWise is the AI-powered childcare management platform for daycare centers, preschools, and in-home providers. Auto staff scheduling, accredited CEU training, observations, and predictive enrollment in one connected operating system.",
  email: "hello@childwisesoftware.com",
  sameAs: ["https://childwiselearning.com"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@childwisesoftware.com",
      url: "https://calendly.com/adam-childwise/30min",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Privacy",
      email: "privacy@childwisesoftware.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "ChildWise",
  description:
    "AI childcare management software — scheduling, training, observations, and enrollment for childcare centers.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "ChildWise",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Childcare Management Software",
  operatingSystem: "Web, iOS, Android",
  url: SITE_URL,
  description:
    "ChildWise is an AI-powered childcare management platform that automates staff scheduling, tracks licensing and CEU training, drafts developmental observations, and forecasts enrollment for childcare centers and in-home daycares.",
  featureList: [
    "AI auto staff scheduling",
    "State-licensed ratio compliance",
    "CDA and CEU training tracker",
    "AI-drafted child observations",
    "Predictive enrollment forecasting",
    "Parent messaging and attendance",
    "Billing and invoicing",
    "Time clock and payroll",
  ],
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    priceValidUntil: "2027-04-09",
    availability: "https://schema.org/InStock",
    description:
      "Launch pricing — 50% off the regular $99/month rate for the first 12 months.",
    url: `${SITE_URL}/#pricing`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "37",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqItems = [
  {
    q: "What is ChildWise?",
    a: "ChildWise is an AI-powered childcare management software that runs the entire operations of a childcare center — auto-generating staff schedules, tracking licensing and CEU training, drafting child observations from photos and voice notes, forecasting enrollment, and handling billing and parent communication in one connected platform.",
  },
  {
    q: "How much does childcare management software like ChildWise cost?",
    a: "ChildWise is a flat $99 per month per center with all features included. New centers get launch pricing of $49 per month for the first 12 months — a 50% discount with no per-child fees, no contracts, and no hidden add-ons.",
  },
  {
    q: "Does ChildWise replace Brightwheel, Procare, or Lillio?",
    a: "Yes. ChildWise consolidates the features that childcare centers normally pay for across Brightwheel, Procare, Lillio, scheduling tools, and training providers into a single platform — at a lower total cost and with AI built into every workflow.",
  },
  {
    q: "Is ChildWise compliant with state childcare licensing requirements?",
    a: "Yes. ChildWise tracks every staff member's training hours, CDA progress, and certification expirations against your state's licensing rules and alerts directors weeks before anything lapses. The auto scheduler also enforces state child-to-staff ratios for every shift it generates.",
  },
  {
    q: "Can ChildWise generate staff schedules automatically?",
    a: "Yes. Parents submit weekly drop-off and pickup times through the parent app, and ChildWise's AI scheduler builds a fully ratio-compliant, overtime-aware staff schedule in seconds. Directors review and confirm in minutes instead of spending Sunday nights rebuilding schedules by hand.",
  },
  {
    q: "How does ChildWise help with CDA and CEU training?",
    a: "ChildWise integrates with ChildWise Learning, our accredited CEU and CDA training platform. The AI assistant matches each staff member to the exact courses they need to meet upcoming licensing renewals and auto-enrolls them with director approval.",
  },
  {
    q: "Does ChildWise work for in-home daycares or only large centers?",
    a: "Both. ChildWise is built for childcare centers, preschools, and in-home daycare providers. The same flat pricing applies whether you serve 8 children or 200.",
  },
  {
    q: "Is my data and the children's data secure?",
    a: "Yes. ChildWise uses TLS encryption in transit, encryption at rest, hashed and salted passwords and PINs, role-based access controls, and audit logging. We never sell data, never use child data for advertising, and follow strict data retention policies. Full details are on our privacy page.",
  },
  {
    q: "How long does it take to set up ChildWise?",
    a: "Most centers are fully onboarded in under a week. Our team migrates your existing staff, child, and family records, configures your state's compliance rules, and trains directors and teachers on the platform.",
  },
  {
    q: "Do parents need to download an app?",
    a: "Parents can use a mobile app or a browser link — whichever they prefer. Both options support submitting weekly schedules, receiving observations and photos, viewing invoices, and messaging the center.",
  },
];

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      softwareApplication,
      faqPage,
      breadcrumb,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
