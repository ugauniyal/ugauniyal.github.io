import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { developerProfile } from '@/data/profile';
import { CONTACT_SECTION_ID } from '@/data/site';

import styles from './Hero.module.css';

const INDENT = '  ';

const Keyword = ({ children }: { children: ReactNode }) => (
  <span className={styles.tokenKeyword}>{children}</span>
);
const Str = ({ children }: { children: string }) => (
  <span className={styles.tokenString}>&quot;{children}&quot;</span>
);
const Key = ({ children }: { children: string }) => <span className={styles.tokenKey}>{children}</span>;

/** Renders `["a", "b"]` with highlighted strings. */
function InlineArray({ items }: { items: readonly string[] }) {
  return (
    <>
      [
      {items.map((item, index) => (
        <span key={item}>
          <Str>{item}</Str>
          {index < items.length - 1 && ', '}
        </span>
      ))}
      ]
    </>
  );
}

function ProfileCode() {
  const { variableName, role, focus, tech } = developerProfile;
  const techEntries = Object.entries(tech);
  const keyWidth = Math.max(...techEntries.map(([key]) => key.length));

  return (
    <code>
      <Keyword>const</Keyword> <span className={styles.tokenVariable}>{variableName}</span> = {'{'}
      {'\n'}
      {INDENT}
      <Key>role</Key>: <Str>{role}</Str>,{'\n'}
      {INDENT}
      <Key>focus</Key>: [{'\n'}
      {focus.map((item, index) => (
        <span key={item}>
          {INDENT.repeat(2)}
          <Str>{item}</Str>
          {index < focus.length - 1 ? ',' : ''}
          {'\n'}
        </span>
      ))}
      {INDENT}],{'\n'}
      {INDENT}
      <Key>tech</Key>: {'{'}
      {'\n'}
      {techEntries.map(([key, items], index) => (
        <span key={key}>
          {INDENT.repeat(2)}
          <Key>{key}</Key>:{' '.repeat(keyWidth - key.length + 1)}
          <InlineArray items={items} />
          {index < techEntries.length - 1 ? ',' : ''}
          {'\n'}
        </span>
      ))}
      {INDENT}
      {'}'},{'\n'}
      {'};'}
    </code>
  );
}

export function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <p className={`text-label-sm ${styles.greeting}`}>
          <span className={styles.rule} aria-hidden />
          Hey, I&apos;m Utkarsh Gauniyal
        </p>
        <h1 id="hero-title" className="text-display-lg">
          I build scalable products that solve <span className="text-accent-italic">real problems.</span>
        </h1>
        <p className={`text-body-lg ${styles.lead}`}>
          Software Engineer specializing in backend systems, mobile apps, and cloud infrastructure for
          high-growth environments.
        </p>
        <div className={styles.actions}>
          <a href={`#${CONTACT_SECTION_ID}`} className="btn-primary">
            Book a Discovery Call
            <ArrowUpRight size={16} aria-hidden />
          </a>
          <a href="#work" className="btn-secondary">
            View My Work
            <ArrowDown size={16} aria-hidden />
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow} aria-hidden />
        <div className={styles.window}>
          <div className={styles.windowBar} aria-hidden>
            <span className={styles.windowDot} data-color="red" />
            <span className={styles.windowDot} data-color="yellow" />
            <span className={styles.windowDot} data-color="green" />
            <span className={styles.fileName}>profile.ts</span>
          </div>
          {/* Focusable so keyboard users can scroll it horizontally on small screens. */}
          <pre className={styles.code} tabIndex={0} aria-label="Developer profile written as code">
            <ProfileCode />
          </pre>
        </div>
      </div>
    </section>
  );
}
