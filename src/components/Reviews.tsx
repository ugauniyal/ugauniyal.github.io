interface Review {
  quote: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  {
    quote: 'Utkarsh builds robust, scalable backend architectures. He has a knack for anticipating future needs, ensuring the systems he builds can handle significant growth without failure.',
    author: 'Vikas Verma',
    role: 'Ex-Investment Banker'
  },
  {
    quote: 'His attention to detail is remarkable. He creates interfaces that are not only visually appealing but also extremely user-friendly.',
    author: 'Saurabh Sharma',
    role: 'CEO, Sqaby Technologies'
  },
  {
    quote: 'Utkarsh is a true professional. He\'s communicative, technically brilliant, and has a great instinct for what a project actually needs, not just what\'s asked for.',
    author: 'Vikrant Yadav',
    role: 'Founder, Manastha'
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ marginBottom: '48px' }}>
        <div className="text-label-sm text-accent" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
          Reviews
        </div>
        <h2 className="text-headline-lg">What people say.</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        {reviews.map((review, idx) => (
          <div key={idx} style={{
            padding: '32px',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            backgroundColor: 'var(--color-surface-card)'
          }}>
            <span className="material-symbols-outlined text-accent" style={{ fontSize: '32px', alignSelf: 'flex-start' }}>
              format_quote
            </span>
            <p className="text-body-lg" style={{ color: 'var(--color-text-bright)', fontStyle: 'italic', flexGrow: 1 }}>
              "{review.quote}"
            </p>
            <div>
              <div className="text-body-lg" style={{ fontWeight: 700, color: 'var(--color-text-bright)' }}>
                {review.author}
              </div>
              <div className="text-label-sm" style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {review.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
