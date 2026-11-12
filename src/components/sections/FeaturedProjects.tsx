import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectGrid } from '@/components/ui/ProjectGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="Featured Work"
          title="Selected Projects."
          action={
            <Link href="/projects" className="btn-ghost">
              View all projects
              <ArrowRight size={14} aria-hidden />
            </Link>
          }
        />
        <ProjectGrid>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ProjectGrid>
      </div>
    </section>
  );
}
