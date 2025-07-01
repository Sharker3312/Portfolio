export interface Certification {
  id: string;
  name: string;
  provider: string;
  level: string;
  year: string;
  color: string;
  icon: string; // URL to certification icon/logo
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'CI/CD' | 'IaC' | 'Kubernetes' | 'Monitoring' | 'Pipelines' | 'Automation';
  diagram?: string; // URL to project diagram/architecture
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface TechCategory {
  name: string;
  technologies: string[];
  color: string;
}

export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}