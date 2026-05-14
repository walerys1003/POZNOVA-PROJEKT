import { useState } from 'react'
import { PageProps } from '../types'
import { colors } from '../shared/design'

const articles = [
  {
    id: 1, category: 'AI', tag: 'Przewodnik',
    title: 'RAG vs Fine-tuning: kiedy które podejście w projektach LLM?',
    lead: 'Decyzja między retrieval-augmented generation a fine-tuningiem modelu to jeden z ważniejszych wyborów architektonicznych w projekcie AI. Rozkładamy ją na czynniki pierwsze.',
    date: '12.05.2026', readTime: '8 min', author: 'dr M. Kowalczyk',
  },
  {
    id: 2, category: 'LegalTech', tag: 'Analiza',
    title: 'EU AI Act: co zmienia dla polskich firm technologicznych?',
    lead: 'Rozporządzenie AI Act wchodzi w życie stopniowo. Sprawdzamy, które przepisy dotyczą małych firm i startupów, i jak się przygotować bez przepłacania za compliance.',
    date: '08.05.2026', readTime: '12 min', author: 'r.pr. K. Wiśniewska',
  },
  {
    id: 3, category: 'Biznes', tag: 'Case Study',
    title: 'Jak wdrożyliśmy AI w kancelarii prawnej w 6 tygodni: case study LexMate24',
    lead: 'Kancelaria z 15 prawnikami, 200 umów miesięcznie i 0 doświadczenia z AI. Dokumentujemy cały proces od audytu do produkcji.',
    date: '05.05.2026', readTime: '15 min', author: 'B. Krawczyk',
  },
  {
    id: 4, category: 'AI', tag: 'Techniczny',
    title: 'Ocena halucynacji w LLM dla polskiego prawa: nasze metody benchmarkowania',
    lead: 'Systemy AI w domenie prawnej wymagają ekstremalnej rzetelności. Opisujemy pipeline do systematycznej oceny halucynacji na polskim korpusie prawniczym.',
    date: '28.04.2026', readTime: '18 min', author: 'dr M. Kowalczyk, P. Zieliński',
  },
  {
    id: 5, category: 'Spółdzielczość', tag: 'Esej',
    title: 'Czy spółdzielnia może być firmą technologiczną? Doświadczenia po roku działalności',
    lead: 'Rok po rejestracji POSNOVA podsumowujemy, co działało, co nie i czego nie wiedziałyśmy na początku o prowadzeniu spółdzielni socjalnej w branży IT.',
    date: '22.04.2026', readTime: '10 min', author: 'A. Lewandowska',
  },
  {
    id: 6, category: 'HealthTech', tag: 'Badania',
    title: 'Adherencja terapeutyczna przez AI: wyniki pilotażu O!Lek w 14 placówkach',
    lead: 'Prezentujemy dane z 720 pacjentów biorących udział w 12-tygodniowym pilotażu O!Lek. Wzrost adherencji o 38% — analiza mechanizmów i grupy kontrolne.',
    date: '15.04.2026', readTime: '20 min', author: 'P. Zieliński, dr A. Nowak-Grabowska',
  },
]

const categories = ['Wszystkie', 'AI', 'LegalTech', 'HealthTech', 'Biznes', 'Spółdzielczość']

const resources = [
  { name: 'AI Readiness Assessment Template', desc: 'Arkusz do samodzielnej oceny gotowości organizacji na wdrożenie AI. Opracowany metodologią PZN.', type: 'XLSX', free: true },
  { name: 'Przewodnik po EU AI Act dla MŚP', desc: '32-stronicowy poradnik w języku polskim. Przepisy, terminy, check-listy compliance.', type: 'PDF', free: true },
  { name: 'Wzorzec umowy o wdrożenie AI', desc: 'Prawnie bezpieczna umowa SaaS z klauzulami AI governance. Opracowana przez LexMate24.', type: 'DOCX', free: false },
  { name: 'SROI Calculator dla PS Tech', desc: 'Kalkulator SROI dostosowany do przedsiębiorstw socjalnych działających w sektorze IT.', type: 'XLSX', free: false },
]

export function Wiedza({ navigate }: PageProps) {
  const [catFilter, setCatFilter] = useState('Wszystkie')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = catFilter === 'Wszystkie' ? articles : articles.filter(a => a.category === catFilter)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Baza Wiedzy — PZN LABS</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '40px' }}>
            Piszemy.<br />Badamy.<br />Dzielimy się.
          </h1>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: colors.pewter, maxWidth: '520px', lineHeight: 1.7 }}>
            Artykuły, case studies, wyniki badań i zasoby do pobrania. Bezpłatnie dla wszystkich — bo wiedza powinna być dostępna.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section style={{ background: colors.paper, padding: '0' }}>
        <div className="container-wide">
          <div
            style={{ background: colors.bone, padding: '64px', cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = colors.pearl)}
            onMouseLeave={e => (e.currentTarget.style.background = colors.bone)}
          >
            <div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <span className="mono-label" style={{ color: colors.coldSteel }}>{articles[0].category}</span>
                <span className="mono-label">·</span>
                <span className="mono-label" style={{ color: colors.steel }}>{articles[0].tag}</span>
                <span className="mono-label">·</span>
                <span className="mono-label">Polecane</span>
              </div>
              <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: 'clamp(24px, 3vw, 48px)', letterSpacing: '-0.02em', color: colors.obsidian, lineHeight: 1.2, marginBottom: '24px' }}>
                {articles[0].title}
              </h2>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: colors.slate, lineHeight: 1.8, marginBottom: '32px' }}>{articles[0].lead}</p>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <span className="mono-label">{articles[0].author}</span>
                <span className="mono-label" style={{ color: colors.silver }}>·</span>
                <span className="mono-label">{articles[0].readTime} czytania</span>
                <span className="mono-label" style={{ color: colors.silver }}>·</span>
                <span className="mono-label">{articles[0].date}</span>
              </div>
            </div>
            <div style={{ background: colors.obsidian, height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: '64px', color: colors.graphite, letterSpacing: '-0.04em' }}>RAG</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section style={{ background: colors.paper, padding: '80px 0 128px' }}>
        <div className="container-wide">
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '2px', marginBottom: '48px', background: colors.mist, width: 'fit-content' }}>
            {categories.map(cat => (
              <button
                key={cat}
                style={{
                  background: catFilter === cat ? colors.obsidian : 'transparent',
                  color: catFilter === cat ? colors.paper : colors.steel,
                  border: 'none',
                  padding: '10px 20px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onClick={() => setCatFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.mist }}>
            {filtered.map((article) => (
              <div
                key={article.id}
                style={{
                  background: hovered === article.id ? colors.bone : colors.paper,
                  padding: '40px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={() => setHovered(article.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span className="mono-label" style={{ color: colors.coldSteel }}>{article.category}</span>
                  <span className="mono-label" style={{ background: colors.bone, padding: '3px 8px' }}>{article.tag}</span>
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: '22px', letterSpacing: '-0.02em', color: colors.obsidian, lineHeight: 1.3, marginBottom: '16px', flex: 1 }}>
                  {article.title}
                </h3>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.slate, lineHeight: 1.7, marginBottom: '24px' }}>{article.lead}</p>
                <div style={{ height: '1px', background: colors.mist, marginBottom: '20px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono-label">{article.author}</span>
                  <span className="mono-label">{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{ background: colors.obsidian, padding: '96px 0' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Zasoby do pobrania</div>
          <h2 className="display-text" style={{ fontSize: 'clamp(36px, 4vw, 64px)', color: colors.paper, marginBottom: '64px' }}>
            Darmowe narzędzia.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', background: colors.graphite }}>
            {resources.map((res, i) => (
              <div key={i} style={{ background: colors.graphiteDeep, padding: '40px 48px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', background: colors.graphite, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: colors.steel, letterSpacing: '0.08em' }}>{res.type}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 400, color: colors.paper, lineHeight: 1.3 }}>{res.name}</h3>
                    {res.free
                      ? <span className="mono-label" style={{ color: colors.success, flexShrink: 0, marginLeft: '16px' }}>Bezpłatne</span>
                      : <span className="mono-label" style={{ color: colors.accentWarm, flexShrink: 0, marginLeft: '16px' }}>Pro</span>
                    }
                  </div>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.pewter, lineHeight: 1.7, marginBottom: '20px' }}>{res.desc}</p>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.12em', color: colors.steel, textTransform: 'uppercase', padding: 0, display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = colors.paper)}
                    onMouseLeave={e => (e.currentTarget.style.color = colors.steel)}
                  >
                    Pobierz {res.type} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: colors.paper, padding: '96px 0' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="mono-label" style={{ marginBottom: '24px' }}>Newsletter — POSNOVA Dispatch</div>
          <h2 className="display-text" style={{ fontSize: 'clamp(36px, 4vw, 64px)', color: colors.obsidian, marginBottom: '24px' }}>
            Co dwa tygodnie.<br />Bez spamu.
          </h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: colors.slate, lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 48px' }}>
            AI w praktyce, LegalTech, ekonomia społeczna i kulisy budowania przedsiębiorstwa z misją. Dla praktyków, nie buzzwordów.
          </p>
          <div style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto', background: colors.mist }}>
            <input
              type="email"
              placeholder="twoj@email.pl"
              style={{
                flex: 1,
                border: 'none',
                borderBottom: `2px solid ${colors.obsidian}`,
                background: colors.paper,
                padding: '16px 24px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '15px',
                color: colors.obsidian,
                outline: 'none',
              }}
            />
            <button className="btn-primary" style={{ borderRadius: 0, flexShrink: 0 }}>
              Zapisz się →
            </button>
          </div>
          <div className="mono-label" style={{ marginTop: '16px', color: colors.silver }}>
            Zapisując się akceptujesz politykę prywatności · Unsubscribe w każdej chwili
          </div>
        </div>
      </section>
    </div>
  )
}
