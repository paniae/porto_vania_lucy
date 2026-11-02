export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  description?: string;
  items: string[];
  // Optional backwards compatibility fields
  name?: string;
  percentage?: number;
}

export type SkillItem = SkillGroup;

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'github' | 'linkedin';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  projectScope: string;
  createdAt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface PortfolioData {
  name: string;
  nickname: string;
  role: string;
  location: string;
  email: string;
  bio: string[];
  yearsExperience: number;
  skills: SkillItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  socials: SocialLink[];
}
