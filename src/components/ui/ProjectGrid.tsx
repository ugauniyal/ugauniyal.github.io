import { Children, type ReactNode } from 'react';

import styles from './ProjectGrid.module.css';

export function ProjectGrid({ children }: { children: ReactNode }) {
  return (
    <ul role="list" className={styles.grid}>
      {Children.map(children, (child) => (
        <li className={styles.item}>{child}</li>
      ))}
    </ul>
  );
}
