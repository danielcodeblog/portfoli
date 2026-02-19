
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
