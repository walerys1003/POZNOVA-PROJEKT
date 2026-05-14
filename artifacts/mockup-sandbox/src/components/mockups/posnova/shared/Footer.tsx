import { NavFn } from '../types'
import { colors } from './design'

interface FooterProps {
  navigate: NavFn
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer style={{ background: colors.obsidian, color: colors.paper, padding: '96px 0 48px' }}>
      <div className="container-wide">
        <div className="footer-grid" style={{ marginBottom: '80px' }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '24px', cursor: 'pointer' }} onClick={() => navigate('landing')}>
              <img
                src={`${import.meta.env.BASE_URL}posnova-logo.png`}
                alt="POSNOVA Social Cooperative"
                style={{
                  height: '44px',
                  width: 'auto',
                  filter: 'invert(1) brightness(2)',
                  display: 'block',
                  opacity: 0.9,
                }}
              />
            </div>

            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, lineHeight: 1.7, maxWidth: '260px', marginBottom: '32px' }}>
              Technologia z misją. Spółdzielnia socjalna nowej generacji. Budujemy przyszłość, w której nikt nie zostaje w tyle.
            </p>

            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: colors.slate, lineHeight: 2.2 }}>
              <div>EST. 2026 · WARSZAWA</div>
              <div>STATUS PS NR 2026/001</div>
              <div>KRS: 0000000000</div>
              <div>NIP: 000-000-00-00</div>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: colors.steel, textTransform: 'uppercase', marginBottom: '20px' }}>
              Usługi
            </div>
            {['AI dla firm', 'Custom Software', 'LegalTech', 'Automatyzacja', 'Doradztwo', 'Sektor publiczny'].map(s => (
              <button key={s} onClick={() => navigate('uslugi')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, padding: '4px 0', lineHeight: 1.6, transition: 'color 0.2s', textAlign: 'left' }}
                onMouseEnter={e => (e.currentTarget.style.color = colors.paper)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.pewter)}>{s}</button>
            ))}
          </div>

          {/* Produkty */}
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: colors.steel, textTransform: 'uppercase', marginBottom: '20px' }}>
              Produkty
            </div>
            {['ADAM', 'LexMate24', 'RentRadarPL', 'UnityHire', 'O!Lek', 'DineFlirt'].map(p => (
              <button key={p} onClick={() => navigate('produkty')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, padding: '4px 0', lineHeight: 1.6, transition: 'color 0.2s', textAlign: 'left' }}
                onMouseEnter={e => (e.currentTarget.style.color = colors.paper)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.pewter)}>{p}</button>
            ))}
          </div>

          {/* Instytucja */}
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: colors.steel, textTransform: 'uppercase', marginBottom: '20px' }}>
              Instytucja
            </div>
            {[
              { label: 'Manifest', page: 'instytucja' as const },
              { label: 'Architektura', page: 'instytucja' as const },
              { label: 'Zespół', page: 'instytucja' as const },
              { label: 'Status prawny', page: 'instytucja' as const },
              { label: 'Lab', page: 'lab' as const },
              { label: 'Wpływ społeczny', page: 'wplyw' as const },
            ].map(({ label, page }) => (
              <button key={label} onClick={() => navigate(page)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, padding: '4px 0', lineHeight: 1.6, transition: 'color 0.2s', textAlign: 'left' }}
                onMouseEnter={e => (e.currentTarget.style.color = colors.paper)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.pewter)}>{label}</button>
            ))}
          </div>

          {/* Inne */}
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: colors.steel, textTransform: 'uppercase', marginBottom: '20px' }}>
              Inne
            </div>
            {[
              { label: 'Kariera', page: 'kariera' as const },
              { label: 'Wiedza / Blog', page: 'wiedza' as const },
              { label: 'Kontakt — Biznes', page: 'kontakt' as const },
              { label: 'Kontakt — Inwestorzy', page: 'kontakt' as const },
              { label: 'Kontakt — Media', page: 'kontakt' as const },
              { label: 'Kontakt — Granty', page: 'kontakt' as const },
            ].map(({ label, page }) => (
              <button key={label} onClick={() => navigate(page)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, padding: '4px 0', lineHeight: 1.6, transition: 'color 0.2s', textAlign: 'left' }}
                onMouseEnter={e => (e.currentTarget.style.color = colors.paper)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.pewter)}>{label}</button>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: colors.graphite, marginBottom: '48px' }} />

        <div className="footer-bottom">
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {['Polityka prywatności', 'Regulamin', 'RODO', 'Dostępność'].map(l => (
              <span key={l} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.12em', color: colors.slate, textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = colors.pewter)}
                onMouseLeave={e => (e.currentTarget.style.color = colors.slate)}>{l}</span>
            ))}
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.12em', color: colors.slate, textTransform: 'uppercase' }}>
            © 2026 POSNOVA — PZN LABS
          </div>
        </div>
      </div>
    </footer>
  )
}
