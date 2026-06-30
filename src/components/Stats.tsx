export const Stats = () => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '48px 0',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      justifyContent: 'space-between'
    }} className="stats-container">
      {/* Stat 1 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          color: 'var(--color-text-muted)'
        }}>
          <span className="material-symbols-outlined">rocket_launch</span>
        </div>
        <div>
          <div className="text-headline-lg" style={{ lineHeight: 1 }}>10+</div>
          <div className="text-label-sm" style={{ marginTop: '4px' }}>Projects Delivered</div>
        </div>
      </div>

      <div className="stats-divider" style={{ width: '1px', backgroundColor: 'var(--color-border)', height: '48px', alignSelf: 'center' }}></div>

      {/* Stat 2 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          color: 'var(--color-text-muted)'
        }}>
          <span className="material-symbols-outlined">work</span>
        </div>
        <div>
          <div className="text-headline-lg" style={{ lineHeight: 1 }}>3+</div>
          <div className="text-label-sm" style={{ marginTop: '4px' }}>Years Of Experience</div>
        </div>
      </div>

      <div className="stats-divider" style={{ width: '1px', backgroundColor: 'var(--color-border)', height: '48px', alignSelf: 'center' }}></div>

      {/* Stat 3 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          color: 'var(--color-text-muted)'
        }}>
          <span className="material-symbols-outlined">verified</span>
        </div>
        <div>
          <div className="text-headline-lg" style={{ lineHeight: 1 }}>100%</div>
          <div className="text-label-sm" style={{ marginTop: '4px' }}>Client Satisfaction</div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-container {
            flex-direction: row !important;
            gap: 24px !important;
          }
          .stats-divider {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .stats-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
