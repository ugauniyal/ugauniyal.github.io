import { ArrowRight, ArrowUpRight, CalendarCheck, Mail } from 'lucide-react';

import { CONTACT_SECTION_ID, mailtoLink, siteConfig } from '@/data/site';

import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id={CONTACT_SECTION_ID} className={styles.footer} aria-labelledby="contact-title">
      <div className={styles.gradient} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.columns}>
          <h2 id="contact-title" className={`text-display-lg ${styles.cta}`}>
            Let&apos;s build something <span className="text-accent-italic">great together.</span>
          </h2>

          <div className={styles.contact}>
            <dl className={styles.details}>
              <div className={styles.detail}>
                <Mail className={styles.detailIcon} size={20} aria-hidden />
                <div>
                  <dt className="text-label-sm">Email</dt>
                  <dd>
                    <a href={mailtoLink()} className={`text-body-lg ${styles.email}`}>
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className={styles.detail}>
                <CalendarCheck className={styles.detailIcon} size={20} aria-hidden />
                <div>
                  <dt className="text-label-sm">Status</dt>
                  <dd className={`text-body-lg ${styles.detailValue}`}>
                    <span className={styles.statusDot} aria-hidden />
                    {siteConfig.availability}
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={mailtoLink('Project inquiry — discovery call')}
              className={`btn-primary ${styles.button}`}
            >
              Schedule a Call
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className="text-body-md">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul role="list" className={styles.socials} aria-label="Social profiles">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                  {social.label}
                  <ArrowUpRight size={14} aria-hidden />
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
