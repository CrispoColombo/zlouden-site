export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year?: string;
  thumb: string;
  href?: string;
  status?: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    slug: "sscloud",
    title: "StreamSets Cloud",
    tagline: "A top-down redesign of the StreamSets Platform.",
    role: "Design Lead",
    year: "2018–2019",
    thumb: "/images/thumbs/sscloud.gif",
    href: "/projects/sscloud",
    status: "live",
  },
  {
    slug: "terraform",
    title: "HashiCorp Terraform Cloud",
    tagline: "Infrastructure as Code, with parity between open-source and cloud, usability improvements, and a navigation redesign.",
    role: "Senior Product Designer",
    year: "2019–2020",
    thumb: "/images/thumbs/terraform.png",
    status: "coming-soon",
  },
  {
    slug: "structure",
    title: "HashiCorp Structure Design System",
    tagline: "A design system built for scalability, portability, and power users who favor the CLI.",
    role: "Senior Product Designer",
    year: "2019–2020",
    thumb: "/images/thumbs/structure.png",
    status: "coming-soon",
  },
  {
    slug: "richmond",
    title: "StreamSets Richmond Design System",
    tagline: "A design system for complex, information‑dense applications.",
    role: "Design Lead",
    year: "2018–2019",
    thumb: "/images/thumbs/richmond.png",
    href: "/projects/richmond",
    status: "live",
  },
  {
    slug: "fedex",
    title: "FedEx TRAC & Route",
    tagline: "A modern replacement for a 30‑year‑old aircraft and route planning system managing 660 aircraft across 375+ locations.",
    role: "Product Designer",
    year: "2014–2015",
    thumb: "/images/thumbs/fedex.gif",
    href: "/projects/fedex",
    status: "live",
  },
  {
    slug: "nuna",
    title: "Nuna",
    tagline: "Healthcare data integration and analytics platform for Medicaid data from ~70M lives across 50 states and 7 territories.",
    role: "UX Design Lead",
    year: "2016–2018",
    thumb: "/images/thumbs/nuna.png",
    href: "/projects/nuna",
    status: "live",
  },
  {
    slug: "germwatch",
    title: "GermWatch",
    tagline: "A clinical pathogen tracking tool combining epidemiological data with treatment options.",
    role: "Product Designer",
    thumb: "/images/thumbs/germwatch.png",
  },
  {
    slug: "zurich",
    title: "Zurich NA",
    tagline: "Mobile adaptation of the complex GUQA Workstation with multi‑level navigation.",
    role: "UX Designer",
    thumb: "/images/thumbs/zurich.png",
  },
  {
    slug: "mastercard",
    title: "Mastercard LMI",
    tagline: "A competitive retail performance intelligence dashboard built on transactional data.",
    role: "Senior UX Architect",
    thumb: "/images/thumbs/mastercard.png",
  },
  {
    slug: "pfizer",
    title: "Pfizer",
    tagline: "An HR self‑service portal built on Microsoft SharePoint.",
    role: "Senior UX Architect",
    thumb: "/images/thumbs/pfizer.png",
  },
  {
    slug: "google",
    title: "Google",
    tagline: "An internal CRM for the Local Marketing and Google Fiber teams.",
    role: "UX Designer",
    year: "2012",
    thumb: "/images/thumbs/google.jpg",
  },
];
