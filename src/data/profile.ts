import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, BriefcaseBusiness, Rocket } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const stats: readonly Stat[] = [
  { value: '10+', label: 'Projects Delivered', icon: Rocket },
  { value: '3+', label: 'Years of Experience', icon: BriefcaseBusiness },
  { value: '100%', label: 'Client Satisfaction', icon: BadgeCheck },
];

/** Rendered as a syntax-highlighted object literal in the hero section. */
export const developerProfile = {
  variableName: 'utkarshGauniyal',
  role: 'Software Engineer',
  focus: ['Backend Systems', 'Mobile Apps', 'DevOps'],
  tech: {
    backend: ['Spring Boot', 'Node.js', 'FastAPI'],
    frontend: ['React', 'React Native', 'TailwindCSS'],
    database: ['PostgreSQL', 'MongoDB', 'Redis'],
    cloud: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
} as const;
