import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { useReveal } from '../shared/useReveal'

const services = [
  {
    id: 'ai',
    num: '01',
    tag: 'WDROŻENIA AI',
    name: 'Sztuczna inteligencja dla firm',
    short: 'Chatboty, RAG, agenci AI, knowledge bases.',
    desc: 'Od prototypu do produkcji. Wdrażamy modele językowe (GPT-4o, Llama 3, Mistral) i budujemy systemy RAG oparte na Waszych bazach danych. Projektujemy agentów AI, którzy automatycznie obsługują klientów, przetwarzają dokumenty i raportują anomalie.',
    features: ['Chatboty sprzedażowe i obsługi klienta', 'Systemy RAG na własnych danych', 'Pipeline analityczny na LLM', 'Integracje z CRM / ERP', 'Ocena i monitoring jakości AI', 'Fine-tuning modeli na danych klienta'],
    methodology: [
      { step: '01', label: 'Audyt procesów i danych' },
      { step: '02', label: 'Proof of Concept (2 tygodnie)' },
      { step: '03', label: 'Architektura i projektowanie systemu' },
      { step: '04', label: 'Implementacja i testy integracyjne' },
      { step: '05', label: 'Wdrożenie produkcyjne + monitoring' },
    ],
    caseStudy: {
      client: 'Firma ubezpieczeniowa (500+ pracowników)',
      stat: '−68% wolumenu zgłoszeń do call center',
      time: '10 tygodni realizacji',
    },
    price: 'Od 25 000 PLN',
    time: '6–12 tygodni',
    stack: ['GPT-4o', 'Claude', 'Llama 3', 'LangChain', 'Pinecone', 'Weaviate'],
  },
  {
    id: 'software',
    num: '02',
    tag: 'OPROGRAMOWANIE DEDYKOWANE',
    name: 'Oprogramowanie na zamówienie',
    short: 'SaaSy, mobilne, systemy dedykowane, integracje.',
    desc: 'Projektujemy i budujemy oprogramowanie, które idealnie odpowiada procesowi — nie odwrotnie. Specjalizujemy się w platformach SaaS, aplikacjach mobilnych, panelach zarządzania i integracjach między systemami.',
    features: ['Platformy SaaS B2B i B2C', 'Aplikacje mobilne (iOS, Android)', 'Panele administracyjne i CMS', 'Integracje API z zewnętrznymi systemami', 'Audyty i migracje legacy', 'DevOps i CI/CD na zamówienie'],
    methodology: [
      { step: '01', label: 'Discovery i specyfikacja wymagań' },
      { step: '02', label: 'Architektura systemu i UX design' },
      { step: '03', label: 'Sprinty developerskie (2-tygodniowe)' },
      { step: '04', label: 'Testy QA i security audit' },
      { step: '05', label: 'Go-live i utrzymanie produkcyjne' },
    ],
    caseStudy: {
      client: 'Platforma HR dla 3 000 pracowników',
      stat: '+340% wydajności działu HR',
      time: '16 tygodni realizacji',
    },
    price: 'Od 40 000 PLN',
    time: '8–20 tygodni',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'React Native'],
  },
  {
    id: 'legaltech',
    num: '03',
    tag: 'LEGALTECH',
    name: 'LegalTech White-Label',
    short: 'Silniki prawne AI na licencji. Dla kancelarii i firm.',
    desc: 'Licencjonujemy technologię będącą podstawą LexMate24. Integruje analizę umów AI, generowanie pism procesowych, monitoring zmian prawnych i moduł Q&A dla klientów kancelarii. Wdrożenie pod Waszą marką.',
    features: ['Analiza umów i kontraktów w 60 sek.', 'Generator pism procesowych AI', 'Monitoring zmian w prawie (monitor ustaw)', 'White-label Q&A dla klientów kancelarii', 'Baza wiedzy prawnej (customizable)', 'Integracja z systemami DMS'],
    methodology: [
      { step: '01', label: 'Analiza potrzeb i dobór modułów' },
      { step: '02', label: 'Konfiguracja white-label + branding' },
      { step: '03', label: 'Integracja z systemem DMS kancelarii' },
      { step: '04', label: 'Szkolenie zespołu i testy akceptacyjne' },
      { step: '05', label: 'Go-live + support i aktualizacje prawne' },
    ],
    caseStudy: {
      client: 'Kancelaria 8-osobowa, Warszawa',
      stat: '−74% czasu na wstępną analizę umów',
      time: '6 tygodni wdrożenia',
    },
    price: 'Od 15 000 PLN / miesiąc',
    time: '4–8 tygodni wdrożenia',
    stack: ['LexMate24 Engine', 'GPT-4', 'Elasticsearch', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'automation',
    num: '04',
    tag: 'AUTOMATYZACJA',
    name: 'Automatyzacja procesów',
    short: 'RPA, workflow AI, automatyzacja back-office.',
    desc: 'Mapujemy procesy, identyfikujemy wąskie gardła i wdrażamy automatyzację, która od pierwszego dnia oszczędza czas i redukuje błędy ludzkie. Od prostych botów RPA do złożonych pipeline\'ów opartych na AI.',
    features: ['Audyt i mapowanie procesów', 'Boty RPA dla powtarzalnych zadań', 'Workflow AI z regułami biznesowymi', 'Automatyczny OCR i klasyfikacja dokumentów', 'Integracje z księgowością i ERP', 'Monitoring i raportowanie KPI'],
    methodology: [
      { step: '01', label: 'Process mining — mapowanie AS-IS' },
      { step: '02', label: 'Identyfikacja wąskich gardeł i quick wins' },
      { step: '03', label: 'Projekt docelowego workflow TO-BE' },
      { step: '04', label: 'Implementacja botów i pipeline AI' },
      { step: '05', label: 'Testy, szkolenie i przekazanie' },
    ],
    caseStudy: {
      client: 'Dział finansów grupy budowlanej (400 os.)',
      stat: '−82% czasu procesowania faktur',
      time: '8 tygodni realizacji',
    },
    price: 'Od 20 000 PLN',
    time: '4–10 tygodni',
    stack: ['n8n', 'Make', 'Python RPA', 'Tesseract', 'Apache Airflow', 'REST'],
  },
  {
    id: 'consulting',
    num: '05',
    tag: 'DORADZTWO STRATEGICZNE',
    name: 'Doradztwo AI',
    short: 'Audyt AI-readiness, roadmapy transformacji cyfrowej.',
    desc: 'Zanim zainwestujesz miliony — sprawdź, gdzie jesteś. Przeprowadzamy audit AI-readiness, identyfikujemy szybkie wygrane i budujemy wieloletnią roadmapę transformacji dopasowaną do budżetu i kultury organizacji.',
    features: ['AI Readiness Assessment (metodologia PZN)', 'Mapa dojrzałości technologicznej', 'Roadmapa 12/24/36 miesięcy', 'Benchmarking vs. konkurencja', 'Szkolenie zarządu z AI governance', 'Raport z rekomendacjami'],
    methodology: [
      { step: '01', label: 'Wywiady z kierownictwem i kluczowymi teamami' },
      { step: '02', label: 'Audyt infrastruktury i danych' },
      { step: '03', label: 'Benchmarking branżowy i analiza luk' },
      { step: '04', label: 'Warsztat strategiczny z zarządem (1 dzień)' },
      { step: '05', label: 'Raport + roadmapa + prezentacja wyników' },
    ],
    caseStudy: {
      client: 'Firma produkcyjna, 1 200 pracowników',
      stat: '12 quick wins zidentyfikowanych w 3 tygodnie',
      time: '3 tygodnie realizacji',
    },
    price: 'Od 8 000 PLN',
    time: '2–4 tygodnie',
    stack: ['PZN AI Framework', 'Gartner Hype Cycle', 'ISO/IEC 42001', 'EU AI Act'],
  },
  {
    id: 'public',
    num: '06',
    tag: 'SEKTOR PUBLICZNY',
    name: 'Zamówienia publiczne',
    short: 'Przetargi z klauzulami społecznymi.',
    desc: 'Posiadamy status spółdzielni socjalnej uprawniający do klauzul społecznych w zamówieniach publicznych. Realizujemy projekty dla JST, ministerstw i instytucji rządowych — zgodnie z Pzp i standardami WCAG 2.1.',
    features: ['Klauzule społeczne (art. 96 Pzp)', 'E-government i systemy dla JST', 'Portale obywatelskie WCAG 2.1', 'Systemy elektronicznego obiegu dokumentów', 'Integracje z ePUAP / gov.pl', 'Zarządzanie projektem zgodne z PRINCE2'],
    methodology: [
      { step: '01', label: 'Analiza SIWZ i ocena ryzyk' },
      { step: '02', label: 'Przygotowanie oferty z klauzulą społeczną' },
      { step: '03', label: 'Realizacja w metodyce PRINCE2' },
      { step: '04', label: 'Testy zgodności WCAG 2.1 i bezpieczeństwa' },
      { step: '05', label: 'Odbiór, dokumentacja i gwarancja' },
    ],
    caseStudy: {
      client: 'Urząd Marszałkowski (region centralny)',
      stat: 'Portal obsługujący 240 000 obywateli, wynik zgodności WCAG AA: 98%',
      time: '20 tygodni realizacji',
    },
    price: 'Wycena indywidualna',
    time: 'Według specyfikacji SIWZ',
    stack: ['ePUAP API', 'WCAG 2.1', 'Java EE', 'Oracle', 'Red Hat', 'PRINCE2'],
  },
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

export function Uslugi({ navigate }: PageProps) {
  const { service } = useParams<{ service?: string }>()
  const [selected, setSelected] = useState<number | null>(() => {
    if (service) {
      const idx = services.findIndex(s => s.id === service)
      return idx >= 0 ? idx : null
    }
    return null
  })
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    if (service) {
      const idx = services.findIndex(s => s.id === service)
      if (idx >= 0) {
        setSelected(idx)
        setTimeout(() => {
          const el = document.getElementById(`service-${services[idx].id}`)
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300)
      }
    }
  }, [service])

  const selectedService = selected !== null ? services[selected] : null

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Usługi — Oferta</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '40px' }}>
            Co dla Was budujemy.
          </h1>
          <p style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.pewter, maxWidth: '520px', lineHeight: 1.7 }}>
            Sześć specjalizacji. Jeden punkt kontaktu. Wycena w 48 godziny. Kontrakt z klauzulą społeczną dostępną na życzenie.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: colors.paper }}>
        <div className="container-wide">
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr 160px 160px 48px', gap: '24px', padding: '20px 0', borderBottom: `1px solid ${colors.mist}` }}>
            {['#', 'Usługa', 'Stack', 'Cena bazowa', 'Czas', ''].map((h, i) => (
              <div key={i} className="mono-label">{h}</div>
            ))}
          </div>

          {services.map((s, i) => (
            <div key={s.id} id={`service-${s.id}`}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr 1fr 160px 160px 48px',
                  gap: '24px',
                  padding: '36px 0',
                  borderBottom: `1px solid ${colors.mist}`,
                  cursor: 'pointer',
                  background: hovered === i || selected === i ? colors.bone : 'transparent',
                  transition: 'background 0.2s',
                  margin: '0 -48px',
                  paddingLeft: '48px',
                  paddingRight: '48px',
                }}
                onClick={() => setSelected(selected === i ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mono-label">{s.num}</span>
                <div>
                  <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '6px' }}>{s.tag}</div>
                  <div style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.obsidian }}>{s.name}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'flex-start' }}>
                  {s.stack.slice(0, 3).map(t => (
                    <span key={t} style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.08em', color: colors.steel, background: colors.pearl, padding: '4px 8px', textTransform: 'uppercase' }}>{t}</span>
                  ))}
                </div>
                <span className="mono-label" style={{ color: colors.obsidian }}>{s.price}</span>
                <span className="mono-label" style={{ color: colors.slate }}>{s.time}</span>
                <span style={{ color: colors.slate, fontSize: '18px', transform: selected === i ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s', display: 'flex', alignItems: 'center' }}>→</span>
              </div>

              {/* Expanded detail */}
              {selected === i && (
                <div style={{ background: colors.bone, borderBottom: `1px solid ${colors.mist}` }}>
                  {/* Description + scope */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', padding: '48px' }}>
                    <div>
                      <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.slate, lineHeight: 1.8, marginBottom: '32px' }}>{s.desc}</p>
                      <div className="mono-label" style={{ marginBottom: '16px' }}>Zakres prac:</div>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {s.features.map((f, fi) => (
                          <li key={fi} style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate, padding: '10px 0', borderBottom: `1px solid ${colors.mist}`, display: 'flex', gap: '12px' }}>
                            <span style={{ color: colors.coldSteel, flexShrink: 0 }}>✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mono-label" style={{ marginBottom: '16px' }}>Stack technologiczny:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                        {s.stack.map(t => (
                          <span key={t} style={{ fontFamily: fonts.mono, fontSize: '11px', letterSpacing: '0.08em', color: colors.obsidian, background: colors.paper, border: `1px solid ${colors.mist}`, padding: '8px 12px', textTransform: 'uppercase' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ background: colors.obsidian, padding: '32px', marginBottom: '16px' }}>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>Cena startowa</div>
                        <div style={{ fontFamily: fonts.display, fontWeight: 300, fontSize: '32px', letterSpacing: '-0.02em', color: colors.paper }}>{s.price}</div>
                        <div className="mono-label" style={{ color: colors.slate, marginTop: '8px' }}>{s.time}</div>
                      </div>
                      <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('kontakt')}>
                        Wyceń projekt →
                      </button>
                    </div>
                  </div>

                  {/* Methodology */}
                  <div style={{ borderTop: `1px solid ${colors.mist}`, padding: '40px 48px' }}>
                    <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '28px' }}>Metodologia realizacji</div>
                    <div style={{ display: 'flex', gap: '2px', background: colors.mist, overflowX: 'auto' }}>
                      {s.methodology.map((m, mi) => (
                        <div key={m.step} style={{ flex: 1, minWidth: '140px', background: mi === 0 ? colors.obsidian : colors.paper, padding: '24px 20px' }}>
                          <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', color: mi === 0 ? colors.coldSteel : colors.steel, textTransform: 'uppercase', marginBottom: '10px' }}>{m.step}</div>
                          <div style={{ fontFamily: fonts.body, fontSize: '13px', color: mi === 0 ? colors.silver : colors.slate, lineHeight: 1.4 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case study */}
                  <div style={{ borderTop: `1px solid ${colors.mist}`, padding: '40px 48px', background: colors.pearl }}>
                    <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '20px' }}>Studium przypadku</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px' }}>
                      <div>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>Klient</div>
                        <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.obsidian }}>{s.caseStudy.client}</div>
                      </div>
                      <div>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>Rezultat</div>
                        <div style={{ fontFamily: fonts.display, fontSize: '20px', fontWeight: 300, color: colors.coldSteel, letterSpacing: '-0.01em' }}>{s.caseStudy.stat}</div>
                      </div>
                      <div>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>Czas realizacji</div>
                        <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate }}>{s.caseStudy.time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: colors.graphiteDeep, padding: '96px 0' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>Gotowi do rozmowy?</div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: colors.paper }}>Wycena w 48h.</h2>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('kontakt')}>Skontaktuj się →</button>
            <button className="btn-secondary-light" onClick={() => navigate('produkty')}>Zobacz produkty →</button>
          </div>
        </div>
      </section>
    </div>
  )
}
