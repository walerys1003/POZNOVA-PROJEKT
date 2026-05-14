import { useState } from 'react'
import { PageProps } from '../types'
import { colors } from '../shared/design'

const paths = [
  {
    id: 'biznes',
    label: 'Dla biznesu',
    title: 'Szukasz technologii?',
    desc: 'Wycena projektu AI, software house, automatyzacja lub konsulting strategiczny.',
    email: 'biznes@posnova.pl',
    response: '48 godzin',
  },
  {
    id: 'inwestorzy',
    label: 'Dla inwestorów',
    title: 'Inwestujesz z misją?',
    desc: 'Deck inwestorski, dane finansowe, roadmapa. Otwieramy Q4 2026.',
    email: 'investors@posnova.pl',
    response: '5 dni roboczych',
  },
  {
    id: 'media',
    label: 'Media & PR',
    title: 'Piszesz artykuł?',
    desc: 'Press kit, dane do raportu, komentarz eksperta, wywiad z założycielami.',
    email: 'media@posnova.pl',
    response: '24 godziny',
  },
  {
    id: 'granty',
    label: 'Granty & NGO',
    title: 'Współpracujesz z NGO?',
    desc: 'Partnerstwa, projekty grantowe, programy UE, wspólne wnioski do funduszy.',
    email: 'granty@posnova.pl',
    response: '72 godziny',
  },
  {
    id: 'partnerzy',
    label: 'Partnerzy',
    title: 'Budujesz razem z nami?',
    desc: 'Partnerstwa technologiczne, white-label, joint ventures, kooperacja B2B i akademicka.',
    email: 'partnerzy@posnova.pl',
    response: '48 godzin',
  },
]

export function Kontakt({ navigate }: PageProps) {
  const [activePath, setActivePath] = useState('biznes')
  const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '', budget: '' })
  const [sent, setSent] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const selected = paths.find(p => p.id === activePath)!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: 'none',
    borderBottom: `1px solid ${colors.mist}`,
    background: 'transparent',
    padding: '16px 0',
    fontFamily: '"Inter", sans-serif',
    fontSize: '16px',
    color: colors.obsidian,
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Kontakt — Nawiąż relację</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '40px' }}>
            Zacznijmy<br />rozmowę.
          </h1>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: colors.pewter, maxWidth: '480px', lineHeight: 1.7 }}>
            Wybierz swoją ścieżkę poniżej. Piszemy do każdego. Bez botów. Bez formularzy „czymś tam zajmiemy się".
          </p>
        </div>
      </section>

      {/* Path selector */}
      <section style={{ background: colors.paper, padding: '0 0 96px' }}>
        <div className="container-wide">
          {/* Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px', background: colors.mist, marginBottom: '64px' }}>
            {paths.map(path => (
              <button
                key={path.id}
                style={{
                  background: activePath === path.id ? colors.obsidian : colors.paper,
                  color: activePath === path.id ? colors.paper : colors.steel,
                  border: 'none',
                  padding: '24px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  textAlign: 'left',
                }}
                onClick={() => setActivePath(path.id)}
              >
                {path.label}
              </button>
            ))}
          </div>

          {/* Selected path + form */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
            {/* Left: info */}
            <div>
              <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '16px' }}>{selected.label}</div>
              <h2 className="display-text" style={{ fontSize: 'clamp(36px, 4vw, 64px)', color: colors.obsidian, marginBottom: '24px' }}>
                {selected.title}
              </h2>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: colors.slate, lineHeight: 1.8, marginBottom: '48px' }}>
                {selected.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', background: colors.mist }}>
                {[
                  { label: 'Email', value: selected.email },
                  { label: 'Czas odpowiedzi', value: selected.response },
                  { label: 'Biuro', value: 'ul. Chmielna 14, 00-020 Warszawa' },
                  { label: 'Godziny', value: 'Pon–Pt 9:00–18:00' },
                ].map((info, i) => (
                  <div key={i} style={{ background: colors.bone, padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderBottom: `1px solid ${colors.mist}` }}>
                    <span className="mono-label">{info.label}</span>
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.obsidian }}>{info.value}</span>
                  </div>
                ))}
              </div>

              {/* Misc links */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
                {['LinkedIn', 'Twitter / X', 'GitHub'].map(social => (
                  <span key={social} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.12em', color: colors.steel, textTransform: 'uppercase', cursor: 'pointer', padding: '8px 16px', border: `1px solid ${colors.mist}`, transition: 'border-color 0.2s, color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = colors.obsidian; e.currentTarget.style.color = colors.obsidian }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = colors.mist; e.currentTarget.style.color = colors.steel }}
                  >{social} →</span>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              {sent ? (
                <div style={{ background: colors.obsidian, padding: '64px 48px', textAlign: 'center' }}>
                  <div className="display-text" style={{ fontSize: '64px', color: colors.paper, marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '24px', fontWeight: 400, color: colors.paper, marginBottom: '16px' }}>
                    Wiadomość wysłana.
                  </h3>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: colors.pewter, lineHeight: 1.7, marginBottom: '32px' }}>
                    Odpiszemy w ciągu {selected.response}. Sprawdź też folder spam — na wszelki wypadek.
                  </p>
                  <button className="btn-secondary-light" onClick={() => setSent(false)}>Wyślij kolejną →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mono-label" style={{ marginBottom: '32px' }}>Formularz kontaktowy</div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '0' }}>
                    <div style={{ borderBottom: `1px solid ${colors.mist}`, paddingBottom: '0' }}>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Imię i nazwisko *</label>
                      <input
                        required
                        value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderBottomColor = colors.obsidian)}
                        onBlur={e => (e.target.style.borderBottomColor = colors.mist)}
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Firma / Organizacja</label>
                      <input
                        value={formState.company}
                        onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderBottomColor = colors.obsidian)}
                        onBlur={e => (e.target.style.borderBottomColor = colors.mist)}
                        placeholder="ACME sp. z o.o."
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '32px' }}>
                    <label className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Email *</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderBottomColor = colors.obsidian)}
                      onBlur={e => (e.target.style.borderBottomColor = colors.mist)}
                      placeholder="jan@firma.pl"
                    />
                  </div>

                  {activePath === 'biznes' && (
                    <div style={{ marginTop: '32px' }}>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Orientacyjny budżet projektu</label>
                      <select
                        value={formState.budget}
                        onChange={e => setFormState(s => ({ ...s, budget: e.target.value }))}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Wybierz zakres...</option>
                        <option>Poniżej 25 000 PLN</option>
                        <option>25 000 – 80 000 PLN</option>
                        <option>80 000 – 200 000 PLN</option>
                        <option>Powyżej 200 000 PLN</option>
                        <option>Do ustalenia</option>
                      </select>
                    </div>
                  )}

                  <div style={{ marginTop: '32px' }}>
                    <label className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Wiadomość *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      style={{ ...inputStyle, resize: 'vertical', borderBottom: `1px solid ${colors.mist}` }}
                      onFocus={e => (e.target.style.borderBottomColor = colors.obsidian)}
                      onBlur={e => (e.target.style.borderBottomColor = colors.mist)}
                      placeholder={activePath === 'biznes' ? 'Opisz projekt lub wyzwanie...' : 'Twoja wiadomość...'}
                    />
                  </div>

                  <div style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <button type="submit" className="btn-primary" style={{ padding: '18px 40px' }}>
                      Wyślij wiadomość →
                    </button>
                    <div className="mono-label" style={{ color: colors.silver }}>
                      Odpowiedź: {selected.response}
                    </div>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <span className="mono-label" style={{ color: colors.silver }}>
                      Dane przetwarzamy zgodnie z RODO. Nie sprzedajemy ich nikomu.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: colors.obsidian, height: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', gridTemplateRows: 'repeat(8, 1fr)', opacity: 0.06 }}>
          {Array.from({ length: 160 }).map((_, i) => (
            <div key={i} style={{ border: `0.5px solid ${colors.steel}` }} />
          ))}
        </div>
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>ul. Chmielna 14, Warszawa Śródmieście</div>
          <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: '32px', color: colors.paper, letterSpacing: '-0.02em' }}>
            52°14'N 21°01'E
          </div>
          <div className="mono-label" style={{ color: colors.steel, marginTop: '8px' }}>Metro Centrum · 3 min pieszo</div>
        </div>
      </section>
    </div>
  )
}
