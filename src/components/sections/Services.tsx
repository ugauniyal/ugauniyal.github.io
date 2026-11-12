import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="How I can help."
            description="End-to-end technical execution focusing on performance, scalability, and robust architecture."
          />
        </div>

        <ul role="list" className={styles.grid}>
          {services.map(({ title, description, icon: Icon }) => (
            <li key={title} className={styles.service}>
              <span className={styles.icon} aria-hidden>
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="text-headline-md">{title}</h3>
              <p className="text-body-md text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
