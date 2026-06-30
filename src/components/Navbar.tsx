import { useState } from 'react';

interface NavbarProps {
  onNavigateHome: () => void;
  currentPage: 'home' | 'projects';
}

export const Navbar = ({ onNavigateHome, currentPage }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavAction = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentPage !== 'home') {
      // Go to home first
      onNavigateHome();
      // Wait for React to render home page, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      // Scroll directly
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-border)',
      padding: '16px 24px'
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div 
          className="text-headline-md" 
          style={{ fontWeight: 700, cursor: 'pointer' }}
          onClick={onNavigateHome}
        >
          Utkarsh.
        </div>

        {/* Desktop Nav */}
        <ul style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
          listStyle: 'none'
        }} className="md-flex">
          <li>
            <a 
              href="#work" 
              className="btn-ghost" 
              onClick={(e) => handleNavAction(e, 'work')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#reviews" 
              className="btn-ghost" 
              onClick={(e) => handleNavAction(e, 'reviews')}
            >
              Reviews
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="btn-ghost" 
              onClick={(e) => handleNavAction(e, 'services')}
            >
              Services
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div style={{ display: 'none' }} className="md-block">
          <a 
            href="#contact" 
            className="btn-primary"
            onClick={(e) => handleNavAction(e, 'contact')}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-bright)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          className="md-hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface-card)',
          borderBottom: '1px solid var(--color-border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          zIndex: 49
        }}>
          <a 
            href="#work" 
            className="btn-ghost"
            style={{ alignSelf: 'flex-start' }}
            onClick={(e) => handleNavAction(e, 'work')}
          >
            Projects
          </a>
          <a 
            href="#reviews" 
            className="btn-ghost"
            style={{ alignSelf: 'flex-start' }}
            onClick={(e) => handleNavAction(e, 'reviews')}
          >
            Reviews
          </a>
          <a 
            href="#services" 
            className="btn-ghost"
            style={{ alignSelf: 'flex-start' }}
            onClick={(e) => handleNavAction(e, 'services')}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="btn-primary"
            style={{ textAlign: 'center' }}
            onClick={(e) => handleNavAction(e, 'contact')}
          >
            Let's Talk
          </a>
        </div>
      )}

      {/* Embedded style helper for quick responsive behaviors */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-block { display: block !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
