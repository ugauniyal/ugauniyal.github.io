import { Quote } from 'lucide-react';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { reviews } from '@/data/reviews';

import styles from './Reviews.module.css';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export function Reviews() {
  return (
    <section id="reviews" className="section" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeading id="reviews-title" eyebrow="Reviews" title="What people say." />
        <ul role="list" className={styles.grid}>
          {reviews.map((review) => (
            <li key={review.author}>
              <figure className={styles.card}>
                <Quote className={styles.quoteIcon} size={28} aria-hidden />
                <blockquote className={`text-body-lg ${styles.quote}`}>
                  <p>{review.quote}</p>
                </blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar} aria-hidden>
                    {initials(review.author)}
                  </span>
                  <span>
                    <span className={styles.name}>{review.author}</span>
                    <span className={`text-label-sm ${styles.role}`}>{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
