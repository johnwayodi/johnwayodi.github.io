export interface User {
  name: string;
  title: string;
  quote: string;
  email: string;
  linkedin: string;
  twitter: string;
  github: string;
}

export interface About {
  description: string;
}

export interface Position {
  title: string;
  companyName: string;
  companyLink?: string;
  employmentType: string;
  duration: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface Project {
  title: string;
  description: string;
  projectUrl: string;
  repoUrl: string;
  imagePath: string;
  repoLink?: string;
  appLink?: string;
  highlights?: string[];
  stack?: string[];
}

export interface Contact {
  title: string;
  urlLink: string;
  username?: string;
}

export interface SkillItem {
  language: string;
  level: number;
  iconName: string;
  asset: boolean;
}

export interface Skills {
  softs: string[];
  frameworks: SkillItem[];
  languages: SkillItem[];
}

export interface Portfolio {
  user: User;
  about: About;
  contacts: Contact[];
  experience: Position[];
  projects: Project[];
  skills: Skills;
}
