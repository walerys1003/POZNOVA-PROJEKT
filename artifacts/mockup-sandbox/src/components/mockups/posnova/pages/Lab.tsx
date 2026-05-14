import { useState } from 'react'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { NeuralHero } from '../shared/NeuralHero'

const researchAreas = [
  {
    id: 'ai',
    code: 'R-01',
    name: 'Applied AI & LLM Systems',
    desc: 'Badania nad niezawodnością i bezpieczeństwem systemów LLM w środowiskach produkcyjnych. Fokus: redukcja halucynacji, mechanizmy self-correction i weryfikacja faktów w domenach prawnych i medycznych.',
    papers: 3,
    projects: ['RAG Reliability Framework', 'LegalLLM Benchmark PL', 'HealthRAG Safety Layer'],
    lead: 'dr M. Kowalczyk',
  },
  {
    id: 'legaltech',
    code: 'R-02',
    name: 'Computational Law & LegalTech',
    desc: 'Formalizacja polskiego prawa jako struktury danych. Budujemy ontologię polskiego systemu prawnego i narzędzia do automatycznej analizy zmian legislacyjnych.',
    papers: 5,
    projects: ['Lexicon Juris PL v2', 'ContractGraph', 'Monitor Ustaw AI'],
    lead: 'r.pr. K. Wiśniewska',
  },
  {
    id: 'social',
    code: 'R-03',
    name: 'Social Impact Measurement',
    desc: 'Opracowanie metodologii pomiaru wpływu społecznego dla przedsiębiorstw socjalnych działających w sektorze technologicznym. Pierwsza polska metodologia SROI dedykowana branży IT.',
    papers: 2,
    projects: ['SROI-TechPL Framework', 'Impact Metrics Dashboard', 'PS Benchmarking 2026'],
    lead: 'dr A. Nowak-Grabowska',
  },
]

const publications = [
  { title: 'Reducing Hallucination in Legal LLMs: A RAG-First Approach for Polish Contract Law', year: '2026', venue: 'ACL Workshop on LLMs for Law', area: 'R-01' },
  { title: 'ContractGraph: Representing Polish Commercial Law as a Knowledge Graph', year: '2026', venue: 'JURIX 2026', area: 'R-02' },
  { title: 'SROI Measurement for Tech-Enabled Social Cooperatives: A Polish Case Study', year: '2026', venue: 'EMES International Research Conference', area: 'R-03' },
  { title: 'LegalLLM-PL: A Benchmark for Evaluating Polish-Language Legal AI Systems', year: '2026', venue: 'arXiv preprint', area: 'R-02' },
  { title: 'Adherence Monitoring Through Conversational AI: Clinical Study Design', year: '2026', venue: 'Digital Health Journal', area: 'R-01' },
]

export function Lab({ navigate }: PageProps) {
  const [activeArea, setActiveArea] = useState('ai')
  const active = researchAreas.find(r => r.id === activeArea)!

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: colors.obsidian,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* 3D Neural background, full bleed */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <NeuralHero height={window.innerHeight} />
        </div>

        {/* Gradient */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.85) 100%)',
        }} />

        {/* Header content */}
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '100px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '24px' }}>
            PZN LABS — Research Institute
          </div>
          <h1 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(56px, 9vw, 128px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.03em',
            margin: '0 0 32px',
            lineHeight: 0.95,
          }}>
            Lab
          </h1>
          <p style={{
            fontFamily: fonts.body,
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 300,
            color: colors.silver,
            maxWidth: '560px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Badamy to, co jest trudne. Trzy obszary badawcze, gdzie akademia spotyka się z przemysłem i wpływem społecznym.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          borderTop: `1px solid ${colors.graphite}`,
          background: 'rgba(10,10,11,0.8)',
          backdropFilter: 'blur(12px)',
        }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.graphite }}>
              {[
                { val: '3', label: 'Obszary badawcze' },
                { val: '10', label: 'Aktywne projekty' },
                { val: '5+', label: 'Publikacje 2026' },
                { val: '6', label: 'Naukowców' },
              ].map(s => (
                <div key={s.label} style={{ background: 'transparent', padding: '32px 36px' }}>
                  <div style={{ fontFamily: fonts.display, fontSize: '40px', fontWeight: 300, color: colors.coldSteel, lineHeight: 1 }}>
                    {s.val}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: colors.steel, marginTop: '8px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0' }}>
        <div className="container-wide">
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
            Obszary badawcze
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300,
            color: colors.obsidian,
            letterSpacing: '-0.02em',
            margin: '0 0 80px',
            lineHeight: 1.05,
          }}>
            Trzy fronty badań
          </h2>

          {/* Tab navigation */}
          <div style={{ display: 'flex', gap: '1px', background: colors.mist, marginBottom: '1px' }}>
            {researchAreas.map(area => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                style={{
                  flex: 1,
                  background: activeArea === area.id ? colors.obsidian : colors.paper,
                  color: activeArea === area.id ? colors.paper : colors.steel,
                  border: 'none',
                  padding: '24px 28px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: activeArea === area.id ? colors.coldSteel : colors.pewter, marginBottom: '6px' }}>
                  {area.code}
                </div>
                <div style={{ fontFamily: fonts.body, fontSize: '15px', fontWeight: 500 }}>
                  {area.name}
                </div>
              </button>
            ))}
          </div>

          {/* Active area detail */}
          <div style={{ background: colors.obsidian, padding: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '24px' }}>
                Lead: {active.lead}
              </div>
              <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.silver, lineHeight: 1.8, margin: '0 0 40px' }}>
                {active.desc}
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontFamily: fonts.display, fontSize: '48px', fontWeight: 300, color: colors.coldSteel, lineHeight: 1 }}>{active.papers}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.steel, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>Publikacje</div>
                </div>
                <div>
                  <div style={{ fontFamily: fonts.display, fontSize: '48px', fontWeight: 300, color: colors.paper, lineHeight: 1 }}>{active.projects.length}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.steel, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>Projekty</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.steel, textTransform: 'uppercase', marginBottom: '24px' }}>
                Aktywne projekty
              </div>
              {active.projects.map((proj, i) => (
                <div
                  key={proj}
                  style={{
                    borderTop: `1px solid ${colors.graphite}`,
                    padding: '20px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontFamily: fonts.body, fontSize: '15px', color: colors.silver }}>{proj}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.12em', color: colors.coldSteel, padding: '4px 10px', border: `1px solid ${colors.coldSteel}` }}>
                    ACTIVE
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${colors.graphite}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ──────────────────────────────────── */}
      <section style={{ background: colors.bone, padding: '120px 0' }}>
        <div className="container-wide">
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
            Publikacje naukowe
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 300,
            color: colors.obsidian,
            letterSpacing: '-0.02em',
            margin: '0 0 64px',
            lineHeight: 1.05,
          }}>
            Selected Papers 2026
          </h2>

          {publications.map((pub, i) => (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${colors.mist}`,
                padding: '36px 0',
                display: 'grid',
                gridTemplateColumns: '64px 1fr auto',
                gap: '32px',
                alignItems: 'start',
              }}
            >
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, paddingTop: '4px' }}>
                {pub.area}
              </div>
              <div>
                <div style={{ fontFamily: fonts.body, fontSize: '16px', fontWeight: 500, color: colors.obsidian, marginBottom: '8px', lineHeight: 1.5 }}>
                  {pub.title}
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.steel, letterSpacing: '0.08em' }}>
                  {pub.venue}
                </div>
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.pewter, paddingTop: '4px' }}>
                {pub.year}
              </div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${colors.mist}` }} />
        </div>
      </section>

      {/* ── OPEN POSITIONS ────────────────────────────────── */}
      <section style={{ background: colors.obsidian, padding: '120px 0' }}>
        <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
              Dołącz do zespołu
            </div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, color: colors.paper, letterSpacing: '-0.02em', margin: '0 0 24px', lineHeight: 1.05 }}>
              Szukamy<br />badaczy
            </h2>
            <p style={{ fontFamily: fonts.body, fontSize: '15px', color: colors.pewter, lineHeight: 1.75, margin: '0 0 40px', maxWidth: '400px' }}>
              Doktoranci, postdocy i praktycy z AI, prawa lub nauk społecznych. Łączymy rigour akademicki z realnym wpływem.
            </p>
            <button className="btn-secondary-light" onClick={() => navigate('kariera')}>
              Otwarte pozycje →
            </button>
          </div>
          <div style={{ display: 'grid', gap: '1px', background: colors.graphite }}>
            {['Researcher — Applied AI (postdoc)', 'Research Engineer — NLP/LLM', 'Legal Researcher — Computational Law'].map(pos => (
              <div key={pos} style={{ background: colors.graphiteDeep, padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.silver }}>{pos}</div>
                <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.coldSteel, padding: '3px 8px', border: `1px solid ${colors.coldSteel}` }}>OPEN</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
