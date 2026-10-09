export interface Project {
  id: string;
  name: string;
  title: string;
  url: string;
  description: string;
  subtitle?: string;
  category: "Web Apps" | "AI & SaaS" | "E-Commerce" | "Client Work" | "Profiles & Docs" | "Healthcare" | "Education" | string;
  status: "Live" | "In Development" | "Archived";
  featured: boolean;
  tags: string[];
  iconBg?: string;
  iconSvg?: string;
  customThumb?: string;
  clicks?: number;
  createdAt?: number;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
  email: string;
  whatsapp: string;
  phone?: string;
  location: string;
  availableForWork: boolean;
  availabilityText: string;
  techStack: string[];
  metrics: {
    shipped: string;
    saas: string;
    satisfaction: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    instagram?: string;
    youtube?: string;
    resume: string;
  };
}
