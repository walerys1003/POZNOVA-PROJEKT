import { useRef } from 'react'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { useReveal, useCounter } from '../shared/useReveal'
import { ParticleHumans } from '../shared/ParticleHumans'

const sdgs = [
  { num: '01', label: 'Brak ubóstwa' },
  { num: '08', label: 'Wzrost i praca' },
  { num: '09', label: 'Innowacje' },
  { num: '10', label: 'Mniejsze nierówności' },
  { num: '16', label: 'Sprawiedliwość' },
  { num: '17', label: 'Partnerstwa' },
]

const stories = [
  {
    name: 'Tomasz W.',
    age: 52,
    before: '4 lata bez pracy po restrukturyzacji zakładu przemysłowego.',
    after: 'Junior Python Developer, 5 200 PLN netto. 14 miesięcy w POSNOVA Academy.',
    role: 'Junior Python Developer',
    time: '14 mies.',
  },
  {
    name: 'Marta K.',
    age: 38,
    before: 'Humanistyka bez kompetencji cyfrowych. Przerwa po urlopie macierzyńskim.',
    after: 'Data Analyst, LegalTech. Certified Data Analyst. Praca hybrydowa.',
    role: 'Data Analyst',
    time: '11 mies.',
  },
  {
    name: 'Paweł S.',
    age: 29,
    before: 'Orzeczenie o niepełnosprawności. 2-letnia przerwa po wypadku.',
    after: 'QA Engineer w PZN LABS. Praca zdalna 100%. AI testing specialist.',
    role: 'QA Engineer',
    time: '9 mies.',
  },
]

const impactMetrics = [
  { value: 15, suffix: '+', label: 'Etatów reintegracyjnych', note: 'Audyt OWES Mazowsze' },
  { value: 50, suffix: 'k+', label: 'Użytkowników produktów', note: 'Dane własne Q1 2026' },
  { value: 2.4, suffix: 'M PLN', label: 'Przychód komercyjny', note: 'Rok obrotowy 2026' },
  { value: 72, suffix: '%', label: 'Zysk reinwestowany', note: 'Statut spółdzielni' },
]

function ImpactCounter({ value, suffix, label, note }: typeof impactMetrics[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(ref, value)
  return (
    <div ref={ref} style={{ padding: '48px 0', borderTop: `1px solid ${colors.graphite}` }}>
      <div style={{
        fontFamily: fonts.display,
        fontSize: 'clamp(48px, 7vw, 96px)',
        fontWeight: 300,
        color: colors.paper,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        marginBottom: '12px',
      }}>
        {value % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div style={{ fontFamily: fonts.body, fontSize: '15px', color: colors.silver, marginBottom: '6px' }}>{label}</div>
      <div style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.steel, letterSpacing: '0.12em' }}>{note}</div>
    </div>
  )
}

export function Wplyw({ navigate }: PageProps) {
  const { ref: sectionRef } = useReveal()

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: colors.obsidian,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* 3D particle humans, full bleed */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleHumans height={window.innerHeight} />
        </div>

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.3) 50%, rgba(10,10,11,0.85) 100%)',
        }} />

        {/* Hero text */}
        <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '100px', textAlign: 'center' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '32px' }}>
            Wpływ Społeczny — Mierzony, Audytowany
          </div>
          <h1 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.03em',
            margin: '0 0 32px',
            lineHeight: 0.95,
          }}>
            Każda<br />
            <span style={{ color: colors.coldSteel }}>złotówka</span><br />
            wraca
          </h1>
          <p style={{
            fontFamily: fonts.body,
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 300,
            color: colors.silver,
            maxWidth: '520px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}>
            72% zysku reinwestowane w reintegrację zawodową, szkolenia i programy społeczne. To nie slogan — to statut spółdzielni.
          </p>
          <button
            className="btn-secondary-light"
            style={{ margin: '0 auto' }}
            onClick={() => navigate('instytucja')}
          >
            Sprawdź statut →
          </button>
        </div>
      </section>

      {/* ── IMPACT METRICS ────────────────────────────────── */}
      <section ref={sectionRef} style={{ background: colors.graphiteDeep, padding: '80px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.graphite }}>
            {impactMetrics.map(m => (
              <div key={m.label} style={{ background: colors.graphiteDeep }}>
                <ImpactCounter {...m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REINTEGRATION MODEL ───────────────────────────── */}
      <section style={{ background: colors.paper, padding: '140px 0' }}>
        <div className="container-wide">
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
            Model reintegracji
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 300,
            color: colors.obsidian,
            letterSpacing: '-0.02em',
            margin: '0 0 80px',
            lineHeight: 1.05,
          }}>
            Jak to działa
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: colors.mist }}>
            {[
              { step: '01', icon: '◉', title: 'Rekrutacja włączająca', desc: 'Aktywna rekrutacja osób z lukami zawodowymi. Bez dyskryminacji ze względu na wiek, sprawność czy gap w CV.' },
              { step: '02', icon: '◈', title: 'POSNOVA Academy', desc: '3–18 miesięcy intensywnego reskillingu. Programowanie, AI, dane. Stipendium na czas nauki.' },
              { step: '03', icon: '◇', title: 'Praca w PZN LABS', desc: 'Zatrudnienie przy komercyjnych projektach. Mentoring, peer learning, rozwój kompetencji.' },
              { step: '04', icon: '✦', title: 'Reinwestycja 72%', desc: 'Zysk wraca do programu. Finansuje kolejnych kandydatów. Model samonapędzający.' },
            ].map(s => (
              <div key={s.step} style={{ background: colors.paper, padding: '52px 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '28px', color: colors.coldSteel }}>{s.icon}</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', letterSpacing: '0.12em', color: colors.silver }}>{s.step}</div>
                </div>
                <h3 style={{ fontFamily: fonts.display, fontSize: '22px', fontWeight: 300, color: colors.obsidian, margin: '0 0 16px', lineHeight: 1.25 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.steel, lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES ───────────────────────────────────────── */}
      <section style={{ background: colors.obsidian, padding: '140px 0' }}>
        <div className="container-wide">
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
            Historie transformacji
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 300,
            color: colors.paper,
            letterSpacing: '-0.02em',
            margin: '0 0 80px',
            lineHeight: 1.05,
          }}>
            Twarze za liczbami
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: colors.graphite }}>
            {stories.map(story => (
              <div key={story.name} style={{ background: colors.graphiteDeep, padding: '52px 44px' }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: colors.graphite,
                  borderRadius: '50%',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: fonts.display,
                  fontSize: '24px',
                  color: colors.coldSteel,
                  fontWeight: 300,
                }}>
                  {story.name[0]}
                </div>

                <div style={{ fontFamily: fonts.display, fontSize: '20px', fontWeight: 300, color: colors.paper, marginBottom: '4px' }}>
                  {story.name}
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.12em', color: colors.coldSteel, marginBottom: '32px' }}>
                  {story.role} · {story.time}
                </div>

                <div style={{ borderLeft: `2px solid ${colors.graphite}`, paddingLeft: '20px', marginBottom: '20px' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', color: colors.slate, textTransform: 'uppercase', marginBottom: '8px' }}>Przed</div>
                  <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.pewter, lineHeight: 1.65, margin: 0 }}>{story.before}</p>
                </div>

                <div style={{ borderLeft: `2px solid ${colors.coldSteel}`, paddingLeft: '20px' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '9px', letterSpacing: '0.14em', color: colors.coldSteel, textTransform: 'uppercase', marginBottom: '8px' }}>Teraz</div>
                  <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.silver, lineHeight: 1.65, margin: 0 }}>{story.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG ALIGNMENT ─────────────────────────────────── */}
      <section style={{ background: colors.bone, padding: '120px 0' }}>
        <div className="container-wide">
          <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.coldSteel, marginBottom: '16px' }}>
            Agenda 2030
          </div>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 300,
            color: colors.obsidian,
            letterSpacing: '-0.02em',
            margin: '0 0 56px',
          }}>
            SDG Alignment
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {sdgs.map(s => (
              <div key={s.num} style={{
                background: colors.obsidian,
                padding: '20px 28px',
                minWidth: '140px',
              }}>
                <div style={{ fontFamily: fonts.display, fontSize: '36px', fontWeight: 300, color: colors.coldSteel, lineHeight: 1, marginBottom: '8px' }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.12em', color: colors.pewter, textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: colors.obsidian, padding: '120px 0', borderTop: `1px solid ${colors.graphite}` }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 300, color: colors.paper, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
            Inwestuj z misją
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.pewter, lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '460px' }}>
            Szukamy inwestorów i partnerów, którzy rozumieją, że wpływ społeczny i zwrot z inwestycji nie są sprzecznością.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ background: colors.coldSteel }} onClick={() => navigate('kontakt')}>
              Porozmawiajmy →
            </button>
            <button className="btn-secondary-light" onClick={() => navigate('instytucja')}>
              Manifest POSNOVA
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
