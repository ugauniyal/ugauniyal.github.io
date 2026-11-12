import Image from 'next/image';

import type { Project } from '@/data/projects';

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  headingLevel?: 'h2' | 'h3';
  /** Load the image eagerly when the card is likely above the fold. */
  preload?: boolean;
}

export function ProjectCard({ project, headingLevel: Heading = 'h3', preload = false }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className={styles.card}>
      <div className={styles.layout}>
        <div className={styles.media}>
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} project`}
            className={styles.image}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            preload={preload}
          />
          <span className={styles.badge} aria-hidden>
            <Icon size={18} strokeWidth={1.75} />
          </span>
        </div>

        <div className={styles.body}>
          <Heading className={`text-headline-md ${styles.title}`}>{project.title}</Heading>
          <p className={`text-body-md ${styles.description}`}>{project.description}</p>
          <ul role="list" className={styles.tags} aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
