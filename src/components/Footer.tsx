export const Footer = () => {
  return (
    <footer id="contact" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderTop: '1px solid var(--color-border)',
      padding: '80px 0 40px 0',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '80px'
    }}>
      {/* Background Gradient Element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        background: 'linear-gradient(to left, rgba(255, 228, 89, 0.02), transparent)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          justifyContent: 'space-between'
        }} className="footer-cols">
          {/* Left CTA */}
          <div style={{ flex: 1 }}>
            <h2 className="text-display-lg" style={{ marginBottom: '24px' }}>
              Let's build something <br />
              <span className="text-accent-italic">Great together.</span>
            </h2>
          </div>

          {/* Right Links & Schedule info */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '440px', width: '100%' }}>
            {/* Email contact */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '20px'
            }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-text-muted)' }}>mail</span>
              <div>
                <div className="text-label-sm" style={{ color: 'var(--color-text-muted)', marginBottom: '4px' }}>Email</div>
                <a href="mailto:ugauniyal@outlook.com" className="text-body-lg" style={{
                  color: 'var(--color-text-bright)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-bright)'}>
                  ugauniyal@outlook.com
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '20px'
            }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-text-muted)' }}>event_available</span>
              <div>
                <div className="text-label-sm" style={{ color: 'var(--color-text-muted)', marginBottom: '4px' }}>Status</div>
                <div className="text-body-lg" style={{ color: 'var(--color-text-bright)' }}>Available for freelance projects.</div>
              </div>
            </div>

            {/* CTA Button */}
            <a href="mailto:ugauniyal@outlook.com" className="btn-primary" style={{ width: '100%', padding: '18px 0', marginTop: '16px', textDecoration: 'none' }}>
              Schedule a Call
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--color-border)',
          marginTop: '80px',
          paddingTop: '32px',
          gap: '24px'
        }} className="footer-bottom">
          <div className="text-body-md" style={{ color: 'var(--color-text-muted)' }}>
            &copy; 2026 Utkarsh Gauniyal. All rights reserved.
          </div>
          <ul style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none'
          }}>
            <li>
              <a href="https://www.linkedin.com/in/utkarsh-gauniyal/" className="btn-ghost">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/ugauniyal" className="btn-ghost">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/UtkarshGauniyal" className="btn-ghost">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-cols {
            flex-direction: row !important;
            gap: 64px !important;
          }
          .footer-bottom {
            flex-direction: row !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
};
