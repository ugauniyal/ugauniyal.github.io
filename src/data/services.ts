import type { LucideIcon } from 'lucide-react';
import { Cloud, CodeXml, Network, Smartphone } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: readonly Service[] = [
  {
    title: 'Backend Development',
    description:
      'Scalable APIs, microservices, and robust backend systems using modern, performant technologies.',
    icon: CodeXml,
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications that are fast, reliable, and deliver native-like user experiences.',
    icon: Smartphone,
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Automated deployment pipelines, infrastructure as code, and cloud-native architecture on GCP/AWS.',
    icon: Cloud,
  },
  {
    title: 'Technical Consulting',
    description:
      'System design reviews, architecture planning, and technical guidance for your product roadmap.',
    icon: Network,
  },
];
