import React, { useState } from 'react'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { NeuralHero } from '../shared/NeuralHero'
import { useReveal } from '../shared/useReveal'

const researchAreas = [
  {
    id: 'ai',
    code: 'R-01',
    name: 'Applied AI & LLM Systems',
    tag: 'Badania Podstawowe',
    desc: 'Badania nad niezawodnością i bezpieczeństwem systemów LLM w środowiskach produkcyjnych. Fokus: redukcja halucynacji, mechanizmy self-correction i weryfikacja faktów w domenach prawnych i medycznych.',
    papers: 3,
    projects: ['RAG Reliability Framework', 'LegalLLM Benchmark PL', 'HealthRAG Safety Layer'],
    lead: 'dr M. Kowalczyk',
    product: 'LexMate24 · O!Lek',
  },
  {
    id: 'legaltech',
    code: 'R-02',
    name: 'Computational Law & LegalTech',
    tag: 'Badania Podstawowe',
    desc: 'Formalizacja polskiego prawa jako struktury danych. Budujemy ontologię polskiego systemu prawnego i narzędzia do automatycznej analizy zmian legislacyjnych.',
    papers: 5,
    projects: ['Lexicon Juris PL v2', 'ContractGraph', 'Monitor Ustaw AI'],
    lead: 'r.pr. K. Wiśniewska',
    product: 'LexMate24',
  },
  {
    id: 'agetech',
    code: 'R-03',
    name: 'AgeTech & Senior AI Systems',
    tag: 'Badania Stosowane',
    desc: 'Projektowanie systemów AI dla osób starszych — z priorytetem zaufania, prostoty i bezpieczeństwa. Badania nad konwersacyjnymi agentami AI i ich wpływem na dobrostan seniorów.',
    papers: 2,
    projects: ['ADAM Voice UX Study', 'Senior AI Interaction Patterns', 'Loneliness Reduction via AI'],
    lead: 'dr B. Orzechowska',
    product: 'ADAM',
  },
  {
    id: 'healthtech',
    code: 'R-04',
    name: 'HealthTech & Adherence AI',
    tag: 'Badania Stosowane',
    desc: 'Badania nad AI-wspomaganą adherencją terapeutyczną i monitoringiem przewlekłych chorób. Współpraca z klinikami i POZ w Polsce.',
    papers: 2,
    projects: ['O!Lek Clinical Study', 'Adherence ML Model v2', 'PHR Integration Research'],
    lead: 'dr P. Krawczyk-Nowak',
    product: 'O!Lek',
  },
  {
    id: 'proptech',
    code: 'R-05',
    name: 'PropTech & Market Intelligence',
    tag: 'Badania Danych',
    desc: 'Modelowanie rynku nieruchomości metodami ML — predykcja cen najmu, wykrywanie anomalii i segmentacja rynku na poziomie dzielnicy.',
    papers: 2,
    projects: ['RentIndex PL v3', 'Anomaly Detection Housing', 'Spatial Price Modeling'],
    lead: 'dr inż. R. Zawada',
    product: 'RentRadarPL',
  },
  {
    id: 'hrtech',
    code: 'R-06',
    name: 'HR-Tech & Culture Fit AI',
    tag: 'Badania Społeczne',
    desc: 'Badania nad etyczną rekrutacją wspomaganą AI — blind recruitment, ocena dopasowania kulturowego i mitygacja bias algorytmicznego.',
    papers: 1,
    projects: ['Bias Audit UnityHire', 'Culture Fit Scoring v2', 'Blind Recruitment Study PL'],
    lead: 'dr A. Nowak-Grabowska',
    product: 'UnityHire',
  },
  {
    id: 'impact',
    code: 'R-07',
    name: 'Social Impact Measurement',
    tag: 'Metodologia',
    desc: 'Pierwsza polska metodologia SROI dedykowana branży IT i przedsiębiorstwom społecznym technologicznym. Benchmarking PS w sektorze tech.',
    papers: 3,
    projects: ['SROI-TechPL Framework', 'Impact Metrics Dashboard', 'PS Benchmarking 2026'],
    lead: 'dr A. Nowak-Grabowska',
    product: 'Wszystkie produkty',
  },
]

const publications = [
  { title: 'Reducing Hallucination in Legal LLMs: A RAG-First Approach for Polish Contract Law', year: '2026', venue: 'ACL Workshop on LLMs for Law', area: 'R-01' },
  { title: 'ContractGraph: Representing Polish Commercial Law as a Knowledge Graph', year: '2026', venue: 'JURIX 2026', area: 'R-02' },
  { title: 'SROI Measurement for Tech-Enabled Social Cooperatives: A Polish Case Study', year: '2026', venue: 'EMES International Research Conference', area: 'R-07' },
  { title: 'LegalLLM-PL: A Benchmark for Evaluating Polish-Language Legal AI Systems', year: '2026', venue: 'arXiv preprint', area: 'R-02' },
  { title: 'Adherence Monitoring Through Conversational AI: Clinical Study Design', year: '2026', venue: 'Digital Health Journal', area: 'R-04' },
  { title: 'Senior-Centered Voice UI: Design Patterns for AgeTech Conversational Agents', year: '2026', venue: 'CHI 2026 — Late Breaking Work', area: 'R-03' },
]

function RevealDiv({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function Lab({ navigate }: PageProps) {
  const [activeArea, setActiveArea] = useState('ai')
  const active = researchAreas.find(r => r.id === activeArea)!

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: colors.obsidian, minHeight: '100vh',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <NeuralHero height={typeof window !== 'undefined' ? window.innerHeight : 800} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(10,10,11,0.75) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.85) 100%)' }} />

        <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '100px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '24px' }}>
            PZN LABS — Research Institute
          </div>
          <h1 style={{ fontFamily: fonts.display, fontSize: 'clamp(56px, 9vw, 128px)', fontWeight: 300, color: colors.paper, letterSpacing: '-0.03em', margin: '0 0 32px', lineHeight: 0.95 }}>
            Lab
          </h1>
          <p style={{ fontFamily: fonts.body, fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, color: colors.silver, maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Badamy to, co jest trudne. Siedem obszarów badawczych, gdzie akademia spotyka się z przemysłem i realnym wpływem społecznym.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, borderTop: `1px solid ${colors.graphite}`, background: 'rgba(10,10,11,0.8)', backdropFilter: 'blur(12px)' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.graphite }}>
              {[
                { val: '7', label: 'Obszary badawcze' },
                { val: '15', label: 'Aktywne projekty' },
                { val: '6+', label: 'Publikacje 2026' },
                { val: '8', label: 'Naukowców i inżynierów' },
              ].map(s => (
                <div key={s.label} style={{ background: 'transparent', padding: '32px 36px' }}>
                  <div style={{ fontFamily: fonts.display, fontSize: '40px', fontWeight: 300, color: colors.coldSteel, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: colors.steel, marginTop: '8px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0' }}>
        <div className="container-wide">
          <RevealDiv>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
              Obszary badawcze
            </div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.02em', margin: '0 0 80px', lineHeight: 1.05 }}>
              Siedem frontów badań
            </h2>
          </RevealDiv>

          {/* Tab navigation - 2 rows of 4+3 */}
          <div style={{ marginBottom: '1px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.mist, marginBottom: '1px' }}>
              {researchAreas.slice(0, 4).map(area => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  style={{
                    background: activeArea === area.id ? colors.obsidian : colors.paper,
                    color: activeArea === area.id ? colors.paper : colors.steel,
                    border: 'none', padding: '24px 28px', cursor: 'pointer',
                    textAlign: 'left', transition: 'background 0.3s, color 0.3s',
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: activeArea === area.id ? colors.coldSteel : colors.pewter, marginBottom: '6px' }}>
                    {area.code}
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: '13px', fontWeight: 500 }}>{area.name}</div>
                </button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: colors.mist }}>
              {researchAreas.slice(4).map(area => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  style={{
                    background: activeArea === area.id ? colors.obsidian : colors.paper,
                    color: activeArea === area.id ? colors.paper : colors.steel,
                    border: 'none', padding: '24px 28px', cursor: 'pointer',
                    textAlign: 'left', transition: 'background 0.3s, color 0.3s',
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: activeArea === area.id ? colors.coldSteel : colors.pewter, marginBottom: '6px' }}>
                    {area.code}
                  </div>
                  <div style={{ fontFamily: fonts.body, fontSize: '13px', fontWeight: 500 }}>{area.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active area detail */}
          <div style={{ background: colors.obsidian, padding: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '8px' }}>
                {active.tag}
              </div>
              <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.12em', color: colors.steel, textTransform: 'uppercase', marginBottom: '24px' }}>
                Kierownik: {active.lead} · Produkt: {active.product}
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
              {active.projects.map((proj) => (
                <div key={proj} style={{ borderTop: `1px solid ${colors.graphite}`, padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: fonts.body, fontSize: '15px', color: colors.silver }}>{proj}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.12em', color: colors.coldSteel, padding: '4px 10px', border: `1px solid ${colors.coldSteel}` }}>
                    AKTYWNY
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${colors.graphite}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL AREAS OVERVIEW ─────────────────────────────── */}
      <section style={{ background: colors.bone, padding: '100px 0' }}>
        <div className="container-wide">
          <RevealDiv>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '60px' }}>
              Przegląd wszystkich obszarów
            </div>
          </RevealDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', background: colors.mist }}>
            {researchAreas.map((area, i) => (
              <RevealDiv key={area.id} delay={i * 0.06}>
                <div
                  style={{ background: colors.paper, padding: '36px 32px', cursor: 'pointer', minHeight: '180px' }}
                  onClick={() => { setActiveArea(area.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', color: colors.coldSteel, marginBottom: '8px', textTransform: 'uppercase' }}>{area.code} · {area.tag}</div>
                  <div style={{ fontFamily: fonts.body, fontSize: '14px', fontWeight: 500, color: colors.obsidian, marginBottom: '12px', lineHeight: 1.35 }}>{area.name}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.08em' }}>{area.papers} pub · {area.projects.length} proj · {area.lead}</div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ──────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '120px 0' }}>
        <div className="container-wide">
          <RevealDiv>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
              Publikacje naukowe
            </div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.02em', margin: '0 0 64px', lineHeight: 1.05 }}>
              Wybrane Publikacje 2026
            </h2>
          </RevealDiv>

          {publications.map((pub, i) => (
            <RevealDiv key={i} delay={i * 0.07}>
              <div style={{ borderTop: `1px solid ${colors.mist}`, padding: '36px 0', display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '32px', alignItems: 'start' }}>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, paddingTop: '4px' }}>{pub.area}</div>
                <div>
                  <div style={{ fontFamily: fonts.body, fontSize: '16px', fontWeight: 500, color: colors.obsidian, marginBottom: '8px', lineHeight: 1.5 }}>{pub.title}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.steel, letterSpacing: '0.08em' }}>{pub.venue}</div>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.pewter, paddingTop: '4px' }}>{pub.year}</div>
              </div>
            </RevealDiv>
          ))}
          <div style={{ borderTop: `1px solid ${colors.mist}` }} />
        </div>
      </section>

      {/* ── OPEN POSITIONS ────────────────────────────────── */}
      <section style={{ background: colors.obsidian, padding: '120px 0' }}>
        <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <RevealDiv>
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
          </RevealDiv>
          <div style={{ display: 'grid', gap: '1px', background: colors.graphite }}>
            {[
              'Researcher — Applied AI (postdoc)',
              'Research Engineer — NLP/LLM',
              'Legal Researcher — Computational Law',
              'UX Researcher — AgeTech / Accessibility',
            ].map(pos => (
              <div key={pos} style={{ background: colors.graphiteDeep, padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.silver }}>{pos}</div>
                <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.coldSteel, padding: '3px 8px', border: `1px solid ${colors.coldSteel}` }}>OTWARTE</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
