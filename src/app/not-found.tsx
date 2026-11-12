import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={`container ${styles.wrapper}`} aria-labelledby="not-found-title">
      <p className={`text-label-sm text-accent ${styles.code}`}>Error 404</p>
      <h1 id="not-found-title" className="text-display-lg">
        This page <span className="text-accent-italic">doesn&apos;t exist.</span>
      </h1>
      <p className="text-body-lg">The link may be broken, or the page may have been moved.</p>
      <Link href="/" className="btn-primary">
        <ArrowLeft size={16} aria-hidden />
        Back to Home
      </Link>
    </section>
  );
}
