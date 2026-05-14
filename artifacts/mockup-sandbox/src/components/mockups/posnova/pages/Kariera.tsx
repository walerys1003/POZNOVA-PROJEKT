import { useState } from 'react'
import { PageProps } from '../types'
import { colors } from '../shared/design'

const jobs = [
  {
    id: 1,
    title: 'Senior ML Engineer',
    team: 'PZN LABS',
    type: 'Pełny etat',
    location: 'Warszawa / Zdalnie',
    salary: '12 000–18 000 PLN netto B2B',
    level: 'Senior',
    desc: 'Budujesz i utrzymujesz systemy LLM w produkcji. Fine-tuning, RAG, ocena jakości, monitoring dryftu. Stack: Python, LangChain, PyTorch, Pinecone.',
    req: ['3+ lat w ML/NLP', 'Doświadczenie z LLM APIs', 'Python (expert)', 'Znajomość RAG patterns'],
    reintegration: false,
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    team: 'RentRadarPL',
    type: 'Pełny etat',
    location: 'Warszawa / Hybrydowo',
    salary: '8 000–13 000 PLN netto B2B',
    level: 'Mid / Senior',
    desc: 'Rozwijasz platformę scraping + analytics RentRadarPL. React, Node.js, PostgreSQL, Redis, web scraping w skali.',
    req: ['React + TypeScript', 'Node.js / Python', 'Bazy danych relacyjne', 'Web scraping (Playwright/Puppeteer)'],
    reintegration: false,
  },
  {
    id: 3,
    title: 'LegalTech Analyst',
    team: 'LexMate24',
    type: 'Pełny etat',
    location: 'Warszawa',
    salary: '6 000–9 000 PLN netto B2B',
    level: 'Mid',
    desc: 'Testujesz jakość analiz AI w LexMate24, tworzysz zbiory testowe, współpracujesz z prawnikami przy ocenie wyników. Wykształcenie prawnicze mile widziane.',
    req: ['Znajomość prawa polskiego (podstawy)', 'Analityczne myślenie', 'Excel / Google Sheets', 'Angielski B2+'],
    reintegration: false,
  },
  {
    id: 4,
    title: 'Junior Developer — Program Reintegracji',
    team: 'POSNOVA',
    type: 'Pełny etat',
    location: 'Warszawa / Zdalnie',
    salary: '4 000–5 500 PLN netto',
    level: 'Junior',
    desc: 'Stanowisko w ramach programu reintegracji zawodowej. Zapewniamy 3-miesięczne szkolenie z Python/JS, mentoring 1:1 i pełne wsparcie w pierwszych miesiącach pracy.',
    req: ['Motywacja do nauki', 'Podstawy logicznego myślenia', 'Prawo do pracy w Polsce'],
    reintegration: true,
  },
  {
    id: 5,
    title: 'Content & Community Manager',
    team: 'Marketing',
    type: 'Pełny etat',
    location: 'Warszawa / Hybrydowo',
    salary: '5 000–7 000 PLN netto B2B',
    level: 'Mid',
    desc: 'Zarządzasz treściami POSNOVA, budujesz społeczność wokół marki, prowadzisz komunikację w mediach społecznościowych i na blogu.',
    req: ['Doświadczenie w content marketingu', 'LinkedIn/Twitter B2B', 'Copywriting PL+EN', 'Rozumienie AI/tech'],
    reintegration: false,
  },
]

const academySteps = [
  { n: '01', name: 'Rekrutacja', desc: 'Prosta rozmowa bez stresu. Oceniamy motywację, nie CV. Decyzja w 72h.' },
  { n: '02', name: 'Akademia (3 mies.)', desc: 'Intensywne szkolenie z Pythona lub JavaScript. Zajęcia online + mentoring 1:1.' },
  { n: '03', name: 'Praktyki (1 mies.)', desc: 'Prawdziwe projekty, prawdziwa odpowiedzialność. Pełne wynagrodzenie.' },
  { n: '04', name: 'Zatrudnienie', desc: 'Umowa o pracę lub B2B. Dalszy mentoring, ścieżka awansu, praca z sensem.' },
]

export function Kariera({ navigate }: PageProps) {
  const [activeJob, setActiveJob] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'reintegration'>('all')

  const filtered = filter === 'reintegration' ? jobs.filter(j => j.reintegration) : jobs

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Kariera — Dołącz do nas</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '40px' }}>
            Praca<br />z misją.
          </h1>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: colors.pewter, maxWidth: '520px', lineHeight: 1.7, marginBottom: '48px' }}>
            Budujemy AI, które zmienia ludzkie życie — i szukamy ludzi, dla których to ma znaczenie. Otwarte oferty i program reintegracji.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.graphite, maxWidth: '600px' }}>
            {[
              { val: `${jobs.length}`, label: 'Otwartych ról' },
              { val: '1', label: 'Miejsce, 2 ścieżki' },
              { val: '48h', label: 'Odpowiedź gwarantowana' },
            ].map((s, i) => (
              <div key={i} style={{ background: colors.graphiteDeep, padding: '28px 24px' }}>
                <div className="display-text" style={{ fontSize: '40px', color: colors.paper, lineHeight: 1 }}>{s.val}</div>
                <div className="mono-label" style={{ color: colors.steel, marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reintegration Academy */}
      <section style={{ background: colors.paper, padding: '96px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
            <div>
              <div className="mono-label" style={{ marginBottom: '24px' }}>Program reintegracji zawodowej</div>
              <h2 className="display-text" style={{ fontSize: 'clamp(36px, 4vw, 64px)', color: colors.obsidian, marginBottom: '24px' }}>
                Akademia POSNOVA.
              </h2>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: colors.slate, lineHeight: 1.8, marginBottom: '32px' }}>
                Jeśli nie masz doświadczenia w IT, ale chcesz je zdobyć — to tutaj. Program przeznaczony dla osób w trudnej sytuacji zawodowej. Płatna akademia, gwarantowane zatrudnienie po ukończeniu.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {['Długoterminowe bezrobocie', 'Powrót po urlopie', 'Niepełnosprawność', 'Restrukturyzacja', 'Po 45. roku życia'].map(g => (
                  <span key={g} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.08em', color: colors.slate, background: colors.bone, border: `1px solid ${colors.mist}`, padding: '6px 12px', textTransform: 'uppercase' }}>{g}</span>
                ))}
              </div>
              <button className="btn-primary" onClick={() => navigate('kontakt')}>Aplikuj do Akademii →</button>
            </div>
            <div>
              {academySteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                  <div style={{ width: '48px', height: '48px', background: colors.obsidian, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="mono-label" style={{ color: colors.paper }}>{step.n}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 500, color: colors.obsidian, marginBottom: '8px' }}>{step.name}</h3>
                    <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.slate, lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section style={{ background: colors.bone, padding: '96px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <div className="mono-label" style={{ marginBottom: '16px' }}>Otwarte rekrutacje</div>
              <h2 className="display-text" style={{ fontSize: 'clamp(36px, 4vw, 64px)', color: colors.obsidian }}>Aktualne oferty.</h2>
            </div>
            <div style={{ display: 'flex', gap: '2px', background: colors.mist }}>
              {([['all', 'Wszystkie'], ['reintegration', 'Reintegracja']] as const).map(([val, label]) => (
                <button
                  key={val}
                  style={{
                    background: filter === val ? colors.obsidian : 'transparent',
                    color: filter === val ? colors.paper : colors.steel,
                    border: 'none',
                    padding: '10px 20px',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onClick={() => setFilter(val)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: colors.mist }}>
            {filtered.map((job) => (
              <div key={job.id}>
                <div
                  style={{
                    background: activeJob === job.id ? colors.obsidian : colors.paper,
                    padding: '32px 40px',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto auto auto',
                    gap: '32px',
                    alignItems: 'center',
                    transition: 'background 0.2s',
                  }}
                  onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                >
                  <div>
                    {job.reintegration && (
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.1em', color: colors.coldSteel, textTransform: 'uppercase', background: 'rgba(0,163,180,0.1)', padding: '2px 8px', marginRight: '8px' }}>Reintegracja</span>
                    )}
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: activeJob === job.id ? colors.paper : colors.obsidian }}>{job.title}</span>
                  </div>
                  <span className="mono-label" style={{ color: activeJob === job.id ? colors.steel : colors.slate }}>{job.team}</span>
                  <span className="mono-label" style={{ color: activeJob === job.id ? colors.steel : colors.slate }}>{job.level}</span>
                  <span className="mono-label" style={{ color: activeJob === job.id ? colors.pewter : colors.obsidian }}>{job.salary}</span>
                  <span style={{ color: activeJob === job.id ? colors.paper : colors.slate, fontSize: '18px', transition: 'transform 0.3s', transform: activeJob === job.id ? 'rotate(90deg)' : 'none' }}>→</span>
                </div>
                {activeJob === job.id && (
                  <div style={{ background: colors.graphiteDeep, padding: '48px 40px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                      <div>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>Opis stanowiska</div>
                        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: colors.pewter, lineHeight: 1.8, marginBottom: '32px' }}>{job.desc}</p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                          {[job.type, job.location].map((info, i) => (
                            <span key={i} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.08em', color: colors.steel, background: colors.graphite, padding: '6px 12px', textTransform: 'uppercase' }}>{info}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>Wymagania</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                          {job.req.map((r, i) => (
                            <li key={i} style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.silver, padding: '10px 0', borderBottom: `1px solid ${colors.graphite}`, display: 'flex', gap: '12px' }}>
                              <span style={{ color: colors.coldSteel }}>✓</span> {r}
                            </li>
                          ))}
                        </ul>
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('kontakt')}>
                          Aplikuj →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
