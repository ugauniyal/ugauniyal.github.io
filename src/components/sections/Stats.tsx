import { stats } from '@/data/profile';

import styles from './Stats.module.css';

export function Stats() {
  return (
    <section className={styles.band} aria-label="Highlights">
      <dl className={`container ${styles.stats}`}>
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.icon} aria-hidden>
              <Icon size={22} strokeWidth={1.5} />
            </span>
            <div className={styles.text}>
              <dt className="text-label-sm">{label}</dt>
              <dd className={`text-headline-lg ${styles.value}`}>{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
