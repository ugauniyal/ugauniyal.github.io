interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Backend Development',
    description: 'Scalable APIs, microservices, and robust backend systems using modern, performant technologies.',
    icon: 'code'
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that are fast, reliable, and deliver native-like user experiences.',
    icon: 'smartphone'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Automated deployment pipelines, infrastructure as code, and cloud-native architecture on GCP/AWS.',
    icon: 'cloud'
  },
  {
    title: 'Technical Consulting',
    description: 'System design reviews, architecture planning, and technical guidance for your product roadmap.',
    icon: 'architecture'
  }
];

export const Services = () => {
  return (
    <section id="services" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }} className="services-grid">
        {/* Left header column */}
        <div style={{ flex: '1', maxWidth: '340px' }}>
          <div className="text-label-sm text-accent" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
            Services
          </div>
          <h2 className="text-headline-lg" style={{ marginBottom: '24px' }}>How I can help.</h2>
          <p className="text-body-md" style={{ color: 'var(--color-text-muted)' }}>
            End-to-end technical execution focusing on performance, scalability, and robust architecture.
          </p>
        </div>

        {/* Right services grid */}
        <div style={{
          flex: '2',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px 32px'
        }}>
          {services.map((service, idx) => (
            <div key={idx} className="service-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="service-icon-container" style={{
                width: '48px',
                height: '48px',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-bright)',
                transition: 'border-color 0.3s ease, color 0.3s ease'
              }}>
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="text-headline-md">{service.title}</h3>
              <p className="text-body-md" style={{ color: 'var(--color-text-muted)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover .service-icon-container {
          border-color: var(--color-primary) !important;
          color: var(--color-primary) !important;
        }
        @media (min-width: 768px) {
          .services-grid {
            flex-direction: row !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  );
};
