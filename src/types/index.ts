// User data interfaces
export interface IUserData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  aboutImage: string;
  aboutHeadline: string;
  aboutDescription: string;
  personalDetails: IPersonalDetail[];
  skills: ISkill[];
  projects: IProject[];
  education: IEducation[];
  experience: IExperience[];
}

export interface IPersonalDetail {
  label: string;
  value: string;
}

export interface ISkill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  type?: string; // For technical skills: Frontend, Backend, etc.
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubLink?: string;
  demoLink?: string;
}

export interface IEducation {
  institution: string;
  degree: string;
  description: string;
  startYear: string;
  endYear: string;
  location: string;
  gpa?: string;
  achievements?: string[];
}

export interface IExperience {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string | null; // null indicates "Present"
  location: string;
  employmentType: string;
  responsibilities?: string[];
  technologies?: string[];
}