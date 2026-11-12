'use client';

import { useEffect, useState } from 'react';

/** Fraction of the viewport height used as the "reading line". */
const READING_LINE_RATIO = 0.3;

/**
 * Scroll-spy: returns the id of the section the user is currently reading,
 * defined as the last section (in document order) whose top edge has crossed
 * a reading line near the top of the viewport. Returns `null` above the first
 * section or when disabled.
 */
export function useActiveSection(sectionIds: readonly string[], enabled = true): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    if (!enabled) return;

    const ids = idsKey.split('|');
    let frame = 0;

    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * READING_LINE_RATIO;
      let current: string | null = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= readingLine) current = id;
      }
      setActiveId(current);
    };

    // Coalesce scroll/resize bursts into one measurement per animation frame.
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [idsKey, enabled]);

  return enabled ? activeId : null;
}
