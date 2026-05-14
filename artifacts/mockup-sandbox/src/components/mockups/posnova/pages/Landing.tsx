import React, { useEffect, useRef, useState } from 'react'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { useReveal, useCounter } from '../shared/useReveal'
import { CrystalHero } from '../shared/CrystalHero'

const products = [
  { name: 'ADAM', tag: 'AgeTech', desc: 'Codzienny głos AI, który dzwoni do seniora i przekazuje podsumowanie rodzinie.', status: 'Live', users: '2.1k+', icon: '◉' },
  { name: 'LexMate24', tag: 'LegalTech', desc: 'Asystent prawny AI dla małych firm. Analiza umów w 60 sekund.', status: 'Live', users: '4.8k+', icon: '⬡' },
  { name: 'RentRadarPL', tag: 'PropTech', desc: 'Monitoring rynku najmu w czasie rzeczywistym. Alerty cenowe.', status: 'Live', users: '12k+', icon: '◈' },
  { name: 'UnityHire', tag: 'HR-Tech', desc: 'Platforma rekrutacji z AI screeningiem i oceną kulturową kandydatów.', status: 'Beta', users: '380+', icon: '◇' },
  { name: 'O!Lek', tag: 'HealthTech', desc: 'Przypomnienia o lekach i monitoring adherencji terapeutycznej.', status: 'Beta', users: '720+', icon: '✦' },
  { name: 'DineFlirt', tag: 'FoodTech', desc: 'AI matchmaking kulinarny — łączy gości z restauracjami.', status: 'Coming Soon', users: '–', icon: '◎' },
]

const services = [
  { num: '01', name: 'AI Implementation', desc: 'Chatboty, RAG, agenci AI, knowledge bases.', price: 'Od 25k PLN' },
  { num: '02', name: 'Custom Software', desc: 'SaaSy, mobilne, systemy dedykowane, integracje.', price: 'Od 40k PLN' },
  { num: '03', name: 'LegalTech White-Label', desc: 'Silniki prawne AI na licencji. Dla kancelarii i firm.', price: 'Od 15k PLN' },
  { num: '04', name: 'Process Automation', desc: 'RPA, workflow AI, automatyzacja back-office.', price: 'Od 20k PLN' },
  { num: '05', name: 'Strategic Consulting', desc: 'Audyt AI-readiness, roadmapy transformacji cyfrowej.', price: 'Od 8k PLN' },
  { num: '06', name: 'Public Sector', desc: 'Zamówienia publiczne z klauzulami społecznymi.', price: 'Wycena indywidualna' },
]

const impactMetrics = [
  { value: 50, suffix: 'k+', label: 'Użytkowników produktów', sublabel: 'na 6 platformach SaaS' },
  { value: 2.4, suffix: 'M PLN', label: 'Przychód roczny 2026', sublabel: 'wzrost 340% r/r' },
  { value: 72, suffix: '%', label: 'Zysku reinwestowanego', sublabel: 'w misję i R&D' },
  { value: 15, suffix: '+', label: 'Etatów reintegracyjnych', sublabel: 'dla osób wykluczonych' },
  { value: 5, suffix: '+', label: 'Publikacji naukowych', sublabel: 'ACL, JURIX, EMES 2026' },
  { value: 62, suffix: 'k', label: 'Dokumentów przeanalizowanych', sublabel: 'przez LexMate24 AI' },
]

const pressQuotes = [
  {
    quote: 'POSNOVA udowadnia, że rentowność i odpowiedzialność społeczna to nie sprzeczność — to model biznesowy przyszłości.',
    source: 'Harvard Business Review Polska',
    date: 'Marzec 2026',
  },
  {
    quote: 'Pierwsza polska spółdzielnia socjalna zbudowana od podstaw jako firma technologiczna. Trzy miesiące i już ponad 50 000 użytkowników.',
    source: 'Rzeczpospolita — Technologie',
    date: 'Kwiecień 2026',
  },
  {
    quote: 'Model POSNOVA — spółdzielnia socjalna jako wehikuł dla deep tech — zasługuje na uwagę każdego, kto myśli o przyszłości pracy.',
    source: 'MIT Technology Review (edycja polska)',
    date: 'Maj 2026',
  },
]

const heroLetters = 'POSNOVA'.split('')

function HeroLetters() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(t)
  }, [])
  return (
    <div style={{ display: 'flex', gap: '0.02em', lineHeight: 1 }}>
      {heroLetters.map((l, i) => (
        <span
          key={i}
          style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(72px, 10vw, 148px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.03em',
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.07}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.07}s`,
          }}
        >
          {l}
        </span>
      ))}
    </div>
  )
}

function CounterStat({ value, suffix, label, sublabel, dark = false }: {
  value: number; suffix: string; label: string; sublabel?: string; dark?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(ref, value)
  const textColor = dark ? colors.paper : colors.obsidian
  const subColor = dark ? colors.steel : colors.pewter
  return (
    <div ref={ref} style={{ textAlign: 'left' }}>
      <div style={{
        fontFamily: fonts.display,
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 300,
        color: dark ? colors.coldSteel : colors.obsidian,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        {value % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: textColor, marginTop: '10px', lineHeight: 1.4 }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.1em', color: subColor, marginTop: '4px' }}>
          {sublabel}
        </div>
      )}
    </div>
  )
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export function Landing({ navigate }: PageProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [taglineVisible, setTaglineVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setTaglineVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      {/* ── HERO — manifesto, no CTA ──────────────────────── */}
      <section style={{
        background: colors.obsidian,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <CrystalHero height={typeof window !== 'undefined' ? window.innerHeight : 800} />
        </div>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg, rgba(10,10,11,0.94) 0%, rgba(10,10,11,0.65) 55%, rgba(10,10,11,0.0) 100%)',
        }} />
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '120px' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{
              fontFamily: fonts.mono,
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: colors.coldSteel,
              marginBottom: '36px',
              opacity: taglineVisible ? 1 : 0,
              transform: taglineVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s, transform 0.6s',
            }}>
              Spółdzielnia Socjalna · PZN LABS · Est. 2026
            </div>

            <HeroLetters />

            <div style={{
              marginTop: '48px',
              opacity: taglineVisible ? 1 : 0,
              transform: taglineVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.6s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}>
              <p style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(20px, 2.8vw, 34px)',
                fontWeight: 300,
                color: colors.silver,
                lineHeight: 1.55,
                maxWidth: '580px',
                margin: 0,
                letterSpacing: '-0.01em',
              }}>
                Budujemy technologię dla tych, dla których inni nie budują. Zatrudniamy tych, których inni nie zatrudniają. Reinwestujemy to, co inni zatrzymują dla siebie.
              </p>
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          opacity: scrolled ? 0 : 0.4,
          transition: 'opacity 0.5s',
        }}>
          <div style={{
            width: '1px', height: '60px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
          <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.18em', color: colors.silver, textTransform: 'uppercase' }}>
            scroll
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section style={{ background: colors.graphiteDeep, borderBottom: `1px solid ${colors.graphite}` }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.graphite }}>
            {[
              { value: 50, suffix: 'k+', label: 'Użytkowników' },
              { value: 2.4, suffix: 'M PLN', label: 'Przychód 2026' },
              { value: 72, suffix: '%', label: 'Reinwestowany zysk' },
              { value: 15, suffix: '+', label: 'Etatów reintegracyjnych' },
            ].map(s => (
              <div key={s.label} style={{ background: colors.graphiteDeep, padding: '48px 40px' }}>
                <CounterStat value={s.value} suffix={s.suffix} label={s.label} dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6-METRIC IMPACT DASHBOARD ─────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0' }}>
        <div className="container-wide">
          <RevealSection>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '80px', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                  Wpływ mierzony — Maj 2026
                </div>
                <h2 style={{
                  fontFamily: fonts.display, fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300,
                  color: colors.obsidian, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.05,
                }}>
                  Liczby,<br />nie deklaracje.
                </h2>
              </div>
              <button className="btn-secondary" onClick={() => navigate('wplyw')}>
                Pełny raport wpływu →
              </button>
            </div>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.mist }}>
            {impactMetrics.map((m, i) => (
              <RevealSection key={m.label} delay={i * 0.07}>
                <div style={{ background: i % 2 === 0 ? colors.bone : colors.paper, padding: '52px 48px', minHeight: '180px' }}>
                  <CounterStat value={m.value} suffix={m.suffix} label={m.label} sublabel={m.sublabel} />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────── */}
      <section style={{ background: colors.obsidian, padding: '140px 0' }}>
        <div className="container-wide">
          <RevealSection>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                  PZN LABS Portfolio
                </div>
                <h2 style={{
                  fontFamily: fonts.display, fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 300,
                  color: colors.paper, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.05,
                }}>
                  Produkty<br />
                  <span style={{ color: colors.coldSteel }}>na rynku</span>
                </h2>
              </div>
              <button className="btn-secondary-light" onClick={() => navigate('produkty')} style={{ flexShrink: 0 }}>
                Wszystkie produkty →
              </button>
            </div>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: colors.graphite }}>
            {products.map((p, i) => (
              <div
                key={p.name}
                onClick={() => navigate('produkty')}
                onMouseEnter={() => setHoveredProduct(p.name)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  background: hoveredProduct === p.name ? colors.charcoal : colors.graphiteDeep,
                  padding: '52px 44px', cursor: 'pointer',
                  transition: 'background 0.3s', position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: colors.coldSteel,
                  transform: hoveredProduct === p.name ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '24px', color: hoveredProduct === p.name ? colors.coldSteel : colors.slate, transition: 'color 0.3s' }}>
                    {p.icon}
                  </div>
                  <div style={{
                    fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: p.status === 'Live' ? colors.success : p.status === 'Beta' ? colors.coldSteel : colors.slate,
                    padding: '4px 8px',
                    border: `1px solid ${p.status === 'Live' ? colors.success : p.status === 'Beta' ? colors.coldSteel : colors.slate}`,
                  }}>
                    {p.status}
                  </div>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.steel, textTransform: 'uppercase', marginBottom: '10px' }}>{p.tag}</div>
                <div style={{ fontFamily: fonts.display, fontSize: '28px', fontWeight: 300, color: colors.paper, letterSpacing: '-0.01em', marginBottom: '16px', lineHeight: 1.1 }}>{p.name}</div>
                <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.pewter, lineHeight: 1.65, margin: '0 0 24px' }}>{p.desc}</p>
                <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.coldSteel, letterSpacing: '0.1em' }}>{p.users} użytkowników</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '160px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '120px' }}>
              <RevealSection>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                  Komercja z misją
                </div>
                <h2 style={{
                  fontFamily: fonts.display, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300,
                  color: colors.obsidian, letterSpacing: '-0.02em', margin: '0 0 32px', lineHeight: 1.05,
                }}>
                  Usługi<br />dla firm
                </h2>
                <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.steel, lineHeight: 1.75, margin: '0 0 48px', maxWidth: '380px' }}>
                  Pracujemy z firmami, które rozumieją, że dobra technologia i odpowiedzialność społeczna to nie sprzeczność — to przewaga konkurencyjna.
                </p>
                <button className="btn-primary" onClick={() => navigate('uslugi')}>
                  Wszystkie usługi →
                </button>
              </RevealSection>
            </div>
            <div>
              {services.map((s) => (
                <div
                  key={s.num}
                  onMouseEnter={() => setHoveredService(s.num)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    borderTop: `1px solid ${hoveredService === s.num ? colors.coldSteel : colors.mist}`,
                    padding: '32px 0', cursor: 'pointer',
                    transition: 'border-color 0.3s',
                    display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: '24px', alignItems: 'start',
                  }}
                  onClick={() => navigate('uslugi')}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', letterSpacing: '0.1em', color: hoveredService === s.num ? colors.coldSteel : colors.silver, paddingTop: '4px', transition: 'color 0.3s' }}>
                    {s.num}
                  </div>
                  <div>
                    <div style={{ fontFamily: fonts.display, fontSize: '22px', fontWeight: 300, color: colors.obsidian, marginBottom: '8px', lineHeight: 1.2 }}>{s.name}</div>
                    <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.steel, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: hoveredService === s.num ? colors.obsidian : colors.pewter, whiteSpace: 'nowrap', paddingTop: '4px', transition: 'color 0.3s' }}>
                    {s.price}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${colors.mist}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTITUTION ARCHITECTURE MAP ──────────────────── */}
      <section style={{ background: colors.obsidian, padding: '140px 0' }}>
        <div className="container-wide">
          <RevealSection>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
              Architektura instytucjonalna
            </div>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 300, color: colors.paper, letterSpacing: '-0.02em', margin: '0 0 80px', lineHeight: 1.05 }}>
              Jak jesteśmy zbudowani.
            </h2>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: colors.graphite }}>
            {[
              {
                label: 'POSNOVA (Holding)',
                role: 'Strategia · Marka · Inwestorzy',
                desc: 'Zarządza kapitałem, strategią marki i relacjami z inwestorami. Właściciel udziałów w PZN LABS sp. z o.o.',
                tag: 'Holding strategiczny',
              },
              {
                label: 'PZN LABS sp. z o.o.',
                role: 'R&D · IP · Produkty',
                desc: 'Centrum badawcze i innowacji. Tu powstają produkty. Właściciel IP wszystkich rozwiązań. 100% własności POSNOVA.',
                tag: 'Innovation Lab',
              },
              {
                label: 'Spółdzielnia Socjalna',
                role: 'Kontrakty B2B · Reintegracja',
                desc: 'Realizuje kontrakty B2B i zarządza programem reintegracji. Status PS nr 2026/001. Możliwość klauzul społecznych.',
                tag: 'Centrum operacyjne',
              },
              {
                label: 'Portfolio Produktów',
                role: 'Rynek · Przychód · Misja',
                desc: '6 produktów SaaS generujących przychód reinwestowany w misję. ADAM, LexMate24, RentRadarPL i trzy kolejne.',
                tag: 'Portfel rynkowy',
              },
            ].map((node, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div style={{
                  background: i % 2 === 0 ? colors.graphiteDeep : colors.graphite,
                  padding: '56px 52px', minHeight: '220px',
                  borderLeft: `3px solid ${i === 0 ? colors.coldSteel : i === 1 ? colors.steel : i === 2 ? colors.pewter : colors.slate}`,
                }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.16em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '8px' }}>
                    {node.tag}
                  </div>
                  <div style={{ fontFamily: fonts.display, fontSize: '22px', fontWeight: 300, color: colors.paper, marginBottom: '8px', lineHeight: 1.2 }}>
                    {node.label}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.1em', color: colors.coldSteel, marginBottom: '20px' }}>
                    {node.role}
                  </div>
                  <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.pewter, lineHeight: 1.7, margin: 0 }}>
                    {node.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.3}>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button className="btn-secondary-light" onClick={() => navigate('instytucja')}>
                Pełna architektura i dokumenty →
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PRESS QUOTES ──────────────────────────────────── */}
      <section style={{ background: colors.bone, padding: '140px 0' }}>
        <div className="container-wide">
          <RevealSection>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '80px' }}>
              Media o POSNOVA
            </div>
          </RevealSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.mist }}>
            {pressQuotes.map((q, i) => (
              <RevealSection key={i} delay={i * 0.12}>
                <div style={{ background: colors.paper, padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
                  <blockquote style={{
                    fontFamily: fonts.display, fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300,
                    color: colors.obsidian, letterSpacing: '-0.01em', lineHeight: 1.55,
                    margin: '0 0 40px', borderLeft: `2px solid ${colors.coldSteel}`, paddingLeft: '24px',
                  }}>
                    "{q.quote}"
                  </blockquote>
                  <div>
                    <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.obsidian, textTransform: 'uppercase', marginBottom: '4px' }}>
                      {q.source}
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.1em' }}>
                      {q.date}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAB TEASER ────────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0', borderTop: `1px solid ${colors.mist}` }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <RevealSection>
              <div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                  PZN LABS — Research
                </div>
                <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 4.5vw, 64px)', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.02em', margin: '0 0 24px', lineHeight: 1.08 }}>
                  Badamy<br />co jest trudne
                </h2>
                <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.steel, lineHeight: 1.75, margin: '0 0 40px', maxWidth: '440px' }}>
                  Applied AI, Computational Law, AgeTech, HealthTech, PropTech, HR-Tech. Sześć obszarów badawczych, 10 aktywnych projektów, 5 publikacji naukowych.
                </p>
                <button className="btn-primary" onClick={() => navigate('lab')}>
                  Explore PZN LABS →
                </button>
              </div>
            </RevealSection>
            <div style={{ display: 'grid', gap: '1px', background: colors.mist }}>
              {[
                { code: 'R-01', name: 'Applied AI & LLM Systems', papers: 3, projects: 3 },
                { code: 'R-02', name: 'Computational Law & LegalTech', papers: 5, projects: 3 },
                { code: 'R-03', name: 'AgeTech & HealthTech', papers: 2, projects: 4 },
                { code: 'R-04', name: 'PropTech & HR-Tech Systems', papers: 2, projects: 2 },
              ].map((area, i) => (
                <RevealSection key={area.code} delay={i * 0.08}>
                  <div style={{ background: colors.paper, padding: '28px 36px', cursor: 'pointer' }} onClick={() => navigate('lab')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, marginBottom: '6px' }}>{area.code}</div>
                        <div style={{ fontFamily: fonts.body, fontSize: '14px', fontWeight: 500, color: colors.obsidian }}>{area.name}</div>
                      </div>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: fonts.display, fontSize: '20px', fontWeight: 300, color: colors.obsidian }}>{area.papers}</div>
                          <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.12em' }}>papers</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: fonts.display, fontSize: '20px', fontWeight: 300, color: colors.obsidian }}>{area.projects}</div>
                          <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.12em' }}>projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-PATH CTA: Biznes / Inwestorzy / Pracownicy ──── */}
      <section style={{ background: colors.obsidian, padding: '0' }}>
        <RevealSection>
          <div style={{ borderTop: `1px solid ${colors.graphite}` }}>
            <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', textAlign: 'center', padding: '64px 48px 0' }}>
              Porozmawiajmy
            </div>
            <h2 style={{
              fontFamily: fonts.display, fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 300,
              color: colors.paper, letterSpacing: '-0.02em', textAlign: 'center',
              padding: '24px 48px 64px', lineHeight: 1.1,
            }}>
              Kim jesteś?
            </h2>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: colors.graphite }}>
          {[
            {
              path: 'Biznes',
              icon: '◈',
              headline: 'Chcę wdrożyć AI w mojej firmie',
              body: 'Usługi, wyceny, kontrakty z klauzulą społeczną. Wycena w 48 godziny. Jeden punkt kontaktu.',
              cta: 'Wyceń projekt',
              page: 'kontakt' as const,
              bg: colors.graphiteDeep,
            },
            {
              path: 'Inwestorzy',
              icon: '◉',
              headline: 'Interesuję się inwestowaniem w misję',
              body: 'Raporty finansowe, struktura kapitałowa, SROI. Transparentność jako standard instytucji.',
              cta: 'Pobierz materiały',
              page: 'instytucja' as const,
              bg: colors.charcoal,
            },
            {
              path: 'Pracownicy',
              icon: '◇',
              headline: 'Szukam miejsca z wartościami',
              body: 'POSNOVA Academy, ścieżki reintegracji, otwarte pozycje badawcze i inżynieryjne.',
              cta: 'Zobacz oferty',
              page: 'kariera' as const,
              bg: colors.slate,
            },
          ].map((card, i) => (
            <RevealSection key={card.path} delay={i * 0.1}>
              <div
                style={{ background: card.bg, padding: '72px 56px', cursor: 'pointer', transition: 'background 0.3s', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onClick={() => navigate(card.page)}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = colors.obsidian }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = card.bg }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '20px' }}>
                    {card.path}
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '32px', color: colors.coldSteel, marginBottom: '28px', lineHeight: 1 }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: fonts.display, fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 300, color: colors.paper, letterSpacing: '-0.01em', marginBottom: '20px', lineHeight: 1.25 }}>
                    {card.headline}
                  </h3>
                  <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.pewter, lineHeight: 1.7, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
                <div style={{ marginTop: '48px' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', letterSpacing: '0.14em', color: colors.silver, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {card.cta} <span>→</span>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>
    </div>
  )
}
