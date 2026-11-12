import type { ReactNode } from 'react';

import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  /** Small mono label shown above the title. */
  eyebrow: string;
  title: ReactNode;
  /** Id applied to the heading so the section can reference it via aria-labelledby. */
  id?: string;
  description?: ReactNode;
  /** Optional element (e.g. a link) aligned to the end of the heading row. */
  action?: ReactNode;
  /** Render the title as the page's `h1` instead of a section `h2`. */
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  description,
  action,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p className={`text-label-sm text-accent ${styles.eyebrow}`}>
          <span className={styles.dot} aria-hidden />
          {eyebrow}
        </p>
        <Heading id={id} className={Heading === 'h1' ? 'text-display-lg' : 'text-headline-lg'}>
          {title}
        </Heading>
        {description && <p className={`text-body-lg ${styles.description}`}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
