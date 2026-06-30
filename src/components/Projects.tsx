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
    description: 'Low-latency backend that automatically ingests SEC filings into optimized BigQuery schemas for real-time visual analytics.',
    image: fintechImage,
    icon: 'monitoring',
    tags: ['FastAPI', 'BigQuery', 'GCP', 'SEC Ingestion']
  },
  {
    title: 'Therapy Platform',
    description: 'Comprehensive mental health ecosystem featuring therapist dashboards, booking schedules, and Razorpay integrations.',
    image: therapyImage,
    icon: 'favorite',
    tags: ['Node.js', 'Firebase', 'Next.js', 'Razorpay']
  },
  {
    title: 'Food Delivery App',
    description: 'Real-time live-tracking app featuring custom WebSocket integration, secure auth modules, and rate-limiting controls.',
    image: foodDeliveryImage,
    icon: 'restaurant',
    tags: ['React Native', 'Node.js', 'Express', 'WebSockets']
  }
];

interface ProjectsProps {
  onViewAll: () => void;
}

export const Projects = ({ onViewAll }: ProjectsProps) => {
  return (
    <section id="work" style={{ padding: '80px 0' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '48px'
      }}>
        <div>
          <div className="text-label-sm text-accent" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
            Featured Work
          </div>
          <h2 className="text-headline-lg">Selected Projects.</h2>
        </div>
        <button
          onClick={onViewAll}
          className="btn-ghost"
          style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          View all projects
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        {projects.map((project, idx) => (
          <div key={idx} className="minimal-card">
            {/* Image container */}
            <div className="minimal-card-image-container">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="minimal-card-image"
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

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 className="text-headline-md" style={{ transition: 'color 0.3s ease' }}>
                {project.title}
              </h3>
              <p className="text-body-md" style={{ color: 'var(--color-text-muted)', minHeight: '80px' }}>
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

      <style>{`
        .minimal-card:hover h3 {
          color: var(--color-primary) !important;
        }
      `}</style>
    </section>
  );
};
