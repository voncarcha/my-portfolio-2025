'use client';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `clamp(24px, 3vw, 40px) clamp(24px, 5vw, 80px)`,
        borderTop: '1px solid var(--v2-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--v2-font-sans)',
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'var(--v2-text-dim)',
          }}
        >
          &copy; {currentYear} Von Carcha
        </p>

        <div style={{ display: 'flex', gap: 'clamp(20px, 2.5vw, 40px)' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'Dribbble', href: 'https://dribbble.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-nav-link"
              style={{
                fontFamily: 'var(--v2-font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: 'var(--v2-text-dim)',
                textDecoration: 'none',
                transition: 'color 0.4s var(--v2-ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--v2-text-muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--v2-text-dim)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
