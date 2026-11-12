import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectGrid } from '@/components/ui/ProjectGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';

import styles from './page.module.css';

const description =
  'A curated list of core products, mobile apps, and developer infrastructure built for high performance and reliability.';

export const metadata: Metadata = {
  title: 'All Projects',
  description,
  alternates: { canonical: '/projects/' },
  openGraph: { title: 'All Projects', description, url: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <section className={`container ${styles.page}`} aria-labelledby="projects-title">
      <Link href="/" className={`btn-ghost ${styles.back}`}>
        <ArrowLeft size={16} aria-hidden />
        Back to Home
      </Link>

      <SectionHeading
        as="h1"
        id="projects-title"
        eyebrow="Portfolio"
        title="All Projects."
        description={description}
      />

      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} headingLevel="h2" preload={index < 3} />
        ))}
      </ProjectGrid>
    </section>
  );
}
