import type { StaticImageData } from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { ChartLine, HeartHandshake, UtensilsCrossed } from 'lucide-react';

import fintechImage from '@/assets/projects/fintech-dashboard.webp';
import foodDeliveryImage from '@/assets/projects/food-delivery.webp';
import therapyImage from '@/assets/projects/therapy-platform.webp';

export interface Project {
  /** Stable identifier, used as React key. */
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  icon: LucideIcon;
  tags: readonly string[];
  /** Featured projects are shown on the home page. */
  featured: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    description:
      'Low-latency backend that automatically ingests SEC filings into optimized BigQuery schemas for real-time visual analytics.',
    image: fintechImage,
    icon: ChartLine,
    tags: ['FastAPI', 'BigQuery', 'GCP', 'SEC Ingestion'],
    featured: true,
  },
  {
    slug: 'therapy-platform',
    title: 'Therapy Platform',
    description:
      'Comprehensive mental health ecosystem featuring therapist dashboards, booking schedules, and Razorpay integrations.',
    image: therapyImage,
    icon: HeartHandshake,
    tags: ['Node.js', 'Firebase', 'Next.js', 'Razorpay'],
    featured: true,
  },
  {
    slug: 'food-delivery-app',
    title: 'Food Delivery App',
    description:
      'Real-time live-tracking app featuring custom WebSocket integration, secure auth modules, and rate-limiting controls.',
    image: foodDeliveryImage,
    icon: UtensilsCrossed,
    tags: ['React Native', 'Node.js', 'Express', 'WebSockets'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
