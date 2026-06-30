export const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '64px',
      padding: '120px 0 80px 0',
      minHeight: '85vh',
      justifyContent: 'center'
    }} className="hero-container">
      {/* Left side info */}
      <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
        <div className="text-label-sm" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: 'var(--color-border)' }}></span>
          Hey, I'm Utkarsh Gauniyal
        </div>
        <h1 className="text-display-lg" style={{ margin: 0 }}>
          I build scalable products that solve <span className="text-accent-italic">real problems.</span>
        </h1>
        <p className="text-body-lg" style={{ maxWidth: '560px', margin: 0 }}>
          Software Engineer specializing in backend systems, mobile apps, and cloud infrastructure for high-growth environments.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>
            Book a Discovery Call
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_outward</span>
          </a>
          <a href="#work" className="btn-secondary" onClick={(e) => { e.preventDefault(); handleScroll('work'); }}>
            View My Work
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
          </a>
        </div>
      </div>

      {/* Right side code visual */}
      <div style={{ flex: 0.9, position: 'relative', width: '100%' }}>
        {/* Soft backglow */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          background: 'radial-gradient(circle, rgba(255,228,89,0.06) 0%, transparent 70%)',
          borderRadius: '16px',
          pointerEvents: 'none'
        }}></div>

        <div className="code-block" style={{ width: '100%', minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Top panel window controls */}
          <div style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid var(--color-code-border)',
            paddingBottom: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
          </div>

          <pre style={{ margin: 0, overflowX: 'auto', fontSize: '12.5px', lineHeight: '1.9', fontFamily: 'var(--font-mono)' }}>
            <code>
              <div><span style={{ color: '#FFE459' }}>const</span> <span style={{ color: '#ffffff' }}>utkarshGauniyal</span> = {'{'}</div>
              <div>  role: <span style={{ color: '#a3defe' }}>"Software Engineer"</span>,</div>
              <div>  focus: [</div>
              <div>    <span style={{ color: '#a3defe' }}>"Backend Systems"</span>,</div>
              <div>    <span style={{ color: '#a3defe' }}>"Mobile Apps"</span>,</div>
              <div>    <span style={{ color: '#a3defe' }}>"DevOps"</span></div>
              <div>  ],</div>
              <div>  tech: {'{'}</div>
              <div>    backend:  [<span style={{ color: '#a3defe' }}>"Springboot"</span>, <span style={{ color: '#a3defe' }}>"Node.js"</span>, <span style={{ color: '#a3defe' }}>"FastAPI"</span>],</div>
              <div>    frontend: [<span style={{ color: '#a3defe' }}>"React"</span>, <span style={{ color: '#a3defe' }}>"React Native"</span>, <span style={{ color: '#a3defe' }}>"TailwindCSS"</span>],</div>
              <div>    database: [<span style={{ color: '#a3defe' }}>"PostgreSQL"</span>, <span style={{ color: '#a3defe' }}>"MongoDB"</span>, <span style={{ color: '#a3defe' }}>"Redis"</span>],</div>
              <div>    cloud:    [<span style={{ color: '#a3defe' }}>"AWS"</span>, <span style={{ color: '#a3defe' }}>"GCP"</span>, <span style={{ color: '#a3defe' }}>"Docker"</span>, <span style={{ color: '#a3defe' }}>"Kubernetes"</span>]</div>
              <div>  {'}'}</div>
              <div>{'};'}</div>
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-container {
            flex-direction: row !important;
            align-items: center;
            gap: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};
