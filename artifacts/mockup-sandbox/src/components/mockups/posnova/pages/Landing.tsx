import { useEffect, useRef, useState } from 'react'
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

const stats = [
  { value: 50, suffix: 'k+', label: 'Użytkowników' },
  { value: 2.4, suffix: 'M PLN', label: 'Przychód 2026' },
  { value: 72, suffix: '%', label: 'Reinwestowany zysk' },
  { value: 15, suffix: '+', label: 'Etatów reintegracyjnych' },
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

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(ref, value)
  return (
    <div ref={ref} style={{ textAlign: 'left' }}>
      <div style={{
        fontFamily: fonts.display,
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 300,
        color: colors.paper,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        {value % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div style={{
        fontFamily: fonts.mono,
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: colors.steel,
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

export function Landing({ navigate }: PageProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [taglineVisible, setTaglineVisible] = useState(false)
  const { ref: sectionRef } = useReveal()

  useEffect(() => {
    const t = setTimeout(() => setTaglineVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: colors.obsidian,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Full-bleed 3D canvas behind content */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <CrystalHero height={window.innerHeight} />
        </div>

        {/* Gradient overlay left side so text is readable */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.65) 55%, rgba(10,10,11,0.0) 100%)',
        }} />

        {/* Hero content */}
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '660px' }}>
            <div style={{
              fontFamily: fonts.mono,
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: colors.coldSteel,
              marginBottom: '32px',
              opacity: taglineVisible ? 1 : 0,
              transform: taglineVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s, transform 0.6s',
            }}>
              Spółdzielnia Socjalna · PZN LABS · Est. 2026
            </div>

            <HeroLetters />

            <div style={{
              marginTop: '32px',
              opacity: taglineVisible ? 1 : 0,
              transform: taglineVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.6s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}>
              <p style={{
                fontFamily: fonts.body,
                fontSize: 'clamp(17px, 2.2vw, 22px)',
                fontWeight: 300,
                color: colors.silver,
                lineHeight: 1.65,
                maxWidth: '520px',
                margin: '0 0 48px',
              }}>
                Technologia z misją. Budujemy produkty AI, zatrudniamy osoby wykluczone zawodowo i reinwestujemy&nbsp;72%&nbsp;zysku w transformację społeczną.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={() => navigate('uslugi')}
                  style={{ background: colors.coldSteel, color: colors.paper, border: 'none' }}
                >
                  Nasze usługi →
                </button>
                <button
                  className="btn-secondary-light"
                  onClick={() => navigate('instytucja')}
                >
                  Manifest instytucji
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.4,
        }}>
          <div style={{
            width: '1px',
            height: '60px',
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: colors.graphite,
          }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: colors.graphiteDeep, padding: '48px 40px' }}>
                <CounterStat value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────── */}
      <section ref={sectionRef} style={{ background: colors.obsidian, padding: '140px 0' }}>
        <div className="container-wide">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                PZN LABS Portfolio
              </div>
              <h2 style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 300,
                color: colors.paper,
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.05,
              }}>
                Produkty<br />
                <span style={{ color: colors.coldSteel }}>na rynku</span>
              </h2>
            </div>
            <button
              className="btn-secondary-light"
              onClick={() => navigate('produkty')}
              style={{ flexShrink: 0 }}
            >
              Wszystkie produkty →
            </button>
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: colors.graphite }}>
            {products.map(p => (
              <div
                key={p.name}
                onClick={() => navigate('produkty')}
                onMouseEnter={() => setHoveredProduct(p.name)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  background: hoveredProduct === p.name ? colors.charcoal : colors.graphiteDeep,
                  padding: '52px 44px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent line on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: colors.coldSteel,
                  transform: hoveredProduct === p.name ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                  <div style={{
                    fontFamily: fonts.mono,
                    fontSize: '24px',
                    color: hoveredProduct === p.name ? colors.coldSteel : colors.slate,
                    transition: 'color 0.3s',
                  }}>
                    {p.icon}
                  </div>
                  <div style={{
                    fontFamily: fonts.mono,
                    fontSize: '9px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: p.status === 'Live' ? colors.success : p.status === 'Beta' ? colors.coldSteel : colors.slate,
                    padding: '4px 8px',
                    border: `1px solid ${p.status === 'Live' ? colors.success : p.status === 'Beta' ? colors.coldSteel : colors.slate}`,
                  }}>
                    {p.status}
                  </div>
                </div>

                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.steel, textTransform: 'uppercase', marginBottom: '10px' }}>
                  {p.tag}
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: '28px', fontWeight: 300, color: colors.paper, letterSpacing: '-0.01em', marginBottom: '16px', lineHeight: 1.1 }}>
                  {p.name}
                </div>
                <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.pewter, lineHeight: 1.65, margin: '0 0 24px' }}>
                  {p.desc}
                </p>
                <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.coldSteel, letterSpacing: '0.1em' }}>
                  {p.users} użytkowników
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '160px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'start' }}>
            {/* Left: header */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                Komercja z misją
              </div>
              <h2 style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 300,
                color: colors.obsidian,
                letterSpacing: '-0.02em',
                margin: '0 0 32px',
                lineHeight: 1.05,
              }}>
                Usługi<br />dla firm
              </h2>
              <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.steel, lineHeight: 1.75, margin: '0 0 48px', maxWidth: '380px' }}>
                Pracujemy z firmami, które rozumieją, że dobra technologia i odpowiedzialność społeczna to nie sprzeczność — to przewaga konkurencyjna.
              </p>
              <button className="btn-primary" onClick={() => navigate('uslugi')}>
                Wszystkie usługi →
              </button>
            </div>

            {/* Right: service list */}
            <div>
              {services.map((s, i) => (
                <div
                  key={s.num}
                  onMouseEnter={() => setHoveredService(s.num)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    borderTop: `1px solid ${hoveredService === s.num ? colors.coldSteel : colors.mist}`,
                    padding: '32px 0',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s',
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr auto',
                    gap: '24px',
                    alignItems: 'start',
                  }}
                  onClick={() => navigate('uslugi')}
                >
                  <div style={{
                    fontFamily: fonts.mono,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: hoveredService === s.num ? colors.coldSteel : colors.silver,
                    paddingTop: '4px',
                    transition: 'color 0.3s',
                  }}>
                    {s.num}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: fonts.display,
                      fontSize: '22px',
                      fontWeight: 300,
                      color: colors.obsidian,
                      marginBottom: '8px',
                      lineHeight: 1.2,
                    }}>
                      {s.name}
                    </div>
                    <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.steel, lineHeight: 1.6 }}>
                      {s.desc}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: fonts.mono,
                    fontSize: '11px',
                    color: hoveredService === s.num ? colors.obsidian : colors.pewter,
                    whiteSpace: 'nowrap',
                    paddingTop: '4px',
                    transition: 'color 0.3s',
                  }}>
                    {s.price}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${colors.mist}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO PULL-QUOTE ──────────────────────────── */}
      <section style={{
        background: colors.obsidian,
        padding: '160px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(0,163,180,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '40px' }}>
            § Manifest
          </div>
          <blockquote style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(24px, 3.5vw, 52px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.01em',
            lineHeight: 1.35,
            margin: '0 0 56px',
            borderLeft: `3px solid ${colors.coldSteel}`,
            paddingLeft: '40px',
          }}>
            "Każda złotówka wypracowana przez POSNOVA wraca do ludzi, którzy nie mieli jeszcze swojej szansy na rynku pracy."
          </blockquote>
          <div style={{ paddingLeft: '40px', display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <button className="btn-secondary-light" onClick={() => navigate('instytucja')}>
              Przeczytaj manifest →
            </button>
            <button className="btn-secondary-light" onClick={() => navigate('wplyw')}>
              Mierzony wpływ →
            </button>
          </div>
        </div>
      </section>

      {/* ── LAB TEASER ────────────────────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0', borderTop: `1px solid ${colors.mist}` }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.18em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '16px' }}>
                PZN LABS — Research
              </div>
              <h2 style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(32px, 4.5vw, 64px)',
                fontWeight: 300,
                color: colors.obsidian,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
                lineHeight: 1.08,
              }}>
                Badamy<br />
                co jest trudne
              </h2>
              <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.steel, lineHeight: 1.75, margin: '0 0 40px', maxWidth: '440px' }}>
                Applied AI, Computational Law, Social Impact Measurement. Trzy obszary badawcze, 10 aktywnych projektów, 5 publikacji naukowych.
              </p>
              <button className="btn-primary" onClick={() => navigate('lab')}>
                Explore PZN LABS →
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1px', background: colors.mist }}>
              {[
                { code: 'R-01', name: 'Applied AI & LLM Systems', papers: 3, projects: 3 },
                { code: 'R-02', name: 'Computational Law & LegalTech', papers: 5, projects: 3 },
                { code: 'R-03', name: 'Social Impact Measurement', papers: 2, projects: 3 },
              ].map(area => (
                <div key={area.code} style={{ background: colors.paper, padding: '32px 36px', cursor: 'pointer' }} onClick={() => navigate('lab')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, marginBottom: '6px' }}>{area.code}</div>
                      <div style={{ fontFamily: fonts.body, fontSize: '15px', fontWeight: 500, color: colors.obsidian }}>{area.name}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: fonts.display, fontSize: '24px', fontWeight: 300, color: colors.obsidian }}>{area.papers}</div>
                        <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.12em' }}>papers</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: fonts.display, fontSize: '24px', fontWeight: 300, color: colors.obsidian }}>{area.projects}</div>
                        <div style={{ fontFamily: fonts.mono, fontSize: '9px', color: colors.pewter, letterSpacing: '0.12em' }}>projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{
        background: colors.coldSteel,
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container-narrow" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
            Zacznijmy rozmowę
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(32px, 5vw, 72px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.05,
          }}>
            Budujemy razem.
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: '0 auto 48px', maxWidth: '480px' }}>
            Projekt AI, transformacja cyfrowa, inwestycja z misją lub po prostu chcesz wiedzieć więcej.
          </p>
          <button
            onClick={() => navigate('kontakt')}
            style={{
              background: colors.paper,
              color: colors.coldSteel,
              border: 'none',
              padding: '18px 44px',
              fontFamily: fonts.mono,
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Napisz do nas →
          </button>
        </div>
      </section>
    </div>
  )
}
