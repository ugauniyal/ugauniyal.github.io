import fintechImage from '../assets/fintech_dashboard.png';
import therapyImage from '../assets/therapy_platform.png';
import foodDeliveryImage from '../assets/food_delivery.png';

interface Project {
  title: string;
  description: string;
  image: string;
  icon: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Fintech Dashboard',
    description: 'Real-time financial analytics platform with high-density data visualization and automated reporting.',
    image: fintechImage,
    icon: 'monitoring',
    tags: ['FastAPI', 'BigQuery', 'GCP']
  },
  {
    title: 'Therapy Platform',
    description: 'Mental health ecosystem facilitating booking, secure communications, and session management.',
    image: therapyImage,
    icon: 'favorite',
    tags: ['Node.js', 'Firebase', 'Next.js']
  },
  {
    title: 'Food Delivery App',
    description: 'A complete live food delivery solution featuring real-time tracking, intuitive discovery, and seamless checkout.',
    image: foodDeliveryImage,
    icon: 'restaurant',
    tags: ['React Native', 'Node.js', 'Express']
  }
];

interface AllProjectsProps {
  onBackToHome: () => void;
}

export const AllProjects = ({ onBackToHome }: AllProjectsProps) => {
  return (
    <section style={{ padding: '60px 0 100px 0' }}>
      {/* Header */}
      <div style={{ marginBottom: '64px' }}>
        <button 
          onClick={onBackToHome}
          className="btn-ghost" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
          Back to Home
        </button>
        <div className="text-label-sm text-accent" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
          Portfolio
        </div>
        <h1 className="text-display-lg" style={{ marginBottom: '24px' }}>All Projects.</h1>
        <p className="text-body-lg" style={{ maxWidth: '640px', color: 'var(--color-text-muted)' }}>
          A curated list of core products, mobile apps, and developer infrastructure built for high performance and reliability.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        {projects.map((project, idx) => (
          <div key={idx} className="minimal-card" style={{ cursor: 'default' }}>
            <div className="minimal-card-image-container">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="minimal-card-image"
                style={{ opacity: 0.8, filter: 'none' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-text-bright)' }}>
                  {project.icon}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 className="text-headline-md">
                {project.title}
              </h3>
              <p className="text-body-md" style={{ color: 'var(--color-text-muted)', minHeight: '60px' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
