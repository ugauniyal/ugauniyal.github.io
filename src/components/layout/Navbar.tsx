'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { CONTACT_SECTION_ID, navItems, siteConfig } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';

import styles from './Navbar.module.css';

const DESKTOP_QUERY = '(min-width: 768px)';
// The contact footer is tracked too, so no nav link stays highlighted once the
// user has scrolled past the last navigable section.
const trackedSections = [...navItems.map((item) => item.sectionId), CONTACT_SECTION_ID];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const activeSection = useActiveSection(trackedSections, isHome);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // While the mobile menu is open: close on Escape, outside click, or when the
  // viewport grows to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpointChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpointChange);
    };
  }, [menuOpen]);

  const navLinks = navItems.map((item) => {
    const isActive = activeSection === item.sectionId;
    return (
      <li key={item.sectionId}>
        <Link
          href={`/#${item.sectionId}`}
          className="btn-ghost"
          aria-current={isActive ? 'true' : undefined}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <nav ref={navRef} className={styles.nav} aria-label="Main">
        <div className={`container ${styles.bar}`}>
          <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} — home`} onClick={closeMenu}>
            Utkarsh<span className={styles.logoDot}>.</span>
          </Link>

          <ul role="list" className={styles.desktopLinks}>
            {navLinks}
          </ul>

          <a href={`#${CONTACT_SECTION_ID}`} className={`btn-primary ${styles.desktopCta}`}>
            Let&apos;s Talk
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>

        {menuOpen && (
          <div id={menuId} className={styles.mobileMenu}>
            <ul role="list" className={`container ${styles.mobileLinks}`}>
              {navLinks}
              <li>
                <a
                  href={`#${CONTACT_SECTION_ID}`}
                  className={`btn-primary ${styles.mobileCta}`}
                  onClick={closeMenu}
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
