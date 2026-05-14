import { useState } from 'react'
import { PageProps } from '../types'
import { colors } from '../shared/design'

const products = [
  {
    id: 'adam',
    name: 'ADAM',
    full: 'Asystent dla seniora',
    tag: 'AgeTech / HealthTech',
    tagline: 'Głos, który dzwoni codziennie.',
    desc: 'ADAM to system AI, który codziennie dzwoni do starszej osoby, prowadzi naturalną rozmowę, monitoruje samopoczucie i wysyła rodzinie skrócone podsumowanie. Prywatność + spokój ducha.',
    problem: 'Miliony polskich seniorów żyją w izolacji. Rodziny nie mają czasu na codzienny kontakt.',
    solution: 'Automatyczny telefon AI raz dziennie. Rozmowa dostosowana do preferencji seniora. Raport dla rodziny via SMS lub email.',
    metrics: [{ label: 'Użytkowników', value: '2 100+' }, { label: 'NPS', value: '74' }, { label: 'Retencja 90d', value: '81%' }],
    status: 'Live',
    color: colors.obsidian,
    pricing: '49 PLN / miesiąc',
    audience: ['Rodziny z seniorami', 'Domy opieki', 'NFZ-partnerzy', 'Ubezpieczyciele'],
  },
  {
    id: 'lexmate24',
    name: 'LexMate24',
    full: 'Asystent prawny AI',
    tag: 'LegalTech',
    tagline: 'Analiza umowy w 60 sekund.',
    desc: 'LexMate24 analizuje umowy, wyróżnia ryzyka i generuje kontrpropozycje dla MŚP, które nie stać na prawnika od każdego kontraktu. White-label dla kancelarii.',
    problem: 'Polskie MŚP podpisują umowy bez analizy prawnej. Koszty kancelarii są poza zasięgiem.',
    solution: 'Wgraj PDF, otrzymaj analizę ryzyk + sugestie zmian + wzorzec kontrnegocjacyjny. W 60 sekund.',
    metrics: [{ label: 'Użytkowników', value: '4 800+' }, { label: 'Umów przeanalizowanych', value: '62 000' }, { label: 'Średni czas analizy', value: '58 sek.' }],
    status: 'Live',
    color: colors.graphite,
    pricing: '299 PLN / miesiąc',
    audience: ['MŚP', 'Freelancerzy', 'Kancelarie prawne', 'Startupy'],
  },
  {
    id: 'rentradar',
    name: 'RentRadarPL',
    full: 'Monitor rynku najmu',
    tag: 'PropTech',
    tagline: 'Wiedz, kiedy twój czynsz jest za niski.',
    desc: 'Agreguje dane z 8 portali ogłoszeniowych, buduje indeksy cenowe per dzielnica/metraż i wysyła alerty, gdy ceny w okolicy rosną — lub gdy oferta jest poniżej rynku.',
    problem: 'Wynajmujący w Polsce tracą tysiące rocznie, bo nie wiedzą, jaka jest realna cena rynkowa.',
    solution: 'Dashboard z danymi w czasie rzeczywistym + alerty email/SMS + raport miesięczny z trendem.',
    metrics: [{ label: 'Użytkowników', value: '12 000+' }, { label: 'Miast objętych', value: '32' }, { label: 'Ogłoszeń w indeksie', value: '480k' }],
    status: 'Live',
    color: colors.charcoal,
    pricing: '79 PLN / miesiąc',
    audience: ['Właściciele nieruchomości', 'Zarządcy', 'Inwestorzy', 'Pośrednicy'],
  },
  {
    id: 'unityhire',
    name: 'UnityHire',
    full: 'Platforma rekrutacji AI',
    tag: 'HR-Tech',
    tagline: 'Rekrutacja według wartości, nie tylko CV.',
    desc: 'UnityHire łączy screening CV przez AI z oceną dopasowania kulturowego. Kandydaci i firmy widzą stopień match zanim dojdzie do pierwszej rozmowy.',
    problem: 'Firmy tracą talenty bo screen CV jest płytki. Kandydaci tracą czas na mismatched oferty.',
    solution: 'AI screening + culture fit score + blind recruitment mode + integra z ATS.',
    metrics: [{ label: 'Firm aktywnych', value: '38' }, { label: 'Kandydatów', value: '380+' }, { label: 'Czas do oferty', value: '-40%' }],
    status: 'Beta',
    color: colors.slate,
    pricing: '599 PLN / miesiąc',
    audience: ['HR Managerowie', 'Agencje rekrutacyjne', 'Scale-upy', 'Korporacje'],
  },
  {
    id: 'olek',
    name: 'O!Lek',
    full: 'Adherencja terapeutyczna',
    tag: 'HealthTech',
    tagline: 'Nie zapomnisz o leku.',
    desc: 'System przypomnień o lekach z głosowymi potwierdzeniami (telefon lub głośnik), monitoringiem adherencji i raportowaniem dla lekarza / opiekuna rodzinnego.',
    problem: '50% chorób przewlekłych pogarsza się przez nieregularne przyjmowanie leków. Seniorzy to największa ryzyko.',
    solution: 'Telefon głosowy lub push + potwierdzenie przez mowę + tygodniowy raport do lekarza.',
    metrics: [{ label: 'Pacjentów aktywnych', value: '720+' }, { label: 'Adherencja', value: '+38%' }, { label: 'Placówki partnerskie', value: '14' }],
    status: 'Beta',
    color: colors.steel,
    pricing: '39 PLN / miesiąc',
    audience: ['Seniorzy', 'Opiekunowie', 'Przychodnie', 'Apteki'],
  },
  {
    id: 'dineflirt',
    name: 'DineFlirt',
    full: 'Matchmaking kulinarne',
    tag: 'FoodTech',
    tagline: 'Znajdź restaurację, która rozumie Twój smak.',
    desc: 'AI analizuje historię zamówień, preferencje kulinarne i chwilowy nastrój — i dobiera restaurację oraz danie na dziś. Dla użytkownika i grup.',
    problem: 'Każdy wieczór "gdzie idziemy?" to strata 20 minut. Restauracje nie docierają do idealnych klientów.',
    solution: 'Mood + taste profiling → personalizowane propozycje + stolik zarezerwowany jednym kliknięciem.',
    metrics: [{ label: 'Oczekujących', value: 'Waiting list' }, { label: 'Launch', value: 'Q3 2026' }, { label: 'Status', value: 'Pre-seed' }],
    status: 'Coming Soon',
    color: colors.pewter,
    pricing: 'Freemium TBD',
    audience: ['Foodie', 'Restauracje', 'Grupy', 'Event-planner'],
  },
]

const statusColor = (s: string) => {
  if (s === 'Live') return colors.success
  if (s === 'Beta') return colors.accentWarm
  return colors.steel
}

export function Produkty({ navigate }: PageProps) {
  const [active, setActive] = useState<string | null>(null)
  const activeProduct = products.find(p => p.id === active)

  if (activeProduct) {
    return (
      <div>
        {/* Product hero */}
        <section style={{ background: activeProduct.color, paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', background: 'rgba(255,255,255,0.02)' }} />
          <div className="container-wide">
            <button className="link-arrow" style={{ color: colors.pewter, marginBottom: '48px' }} onClick={() => setActive(null)}>
              ← Wróć do portfolio
            </button>
            <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>{activeProduct.tag}</div>
            <h1 className="display-text" style={{ fontSize: 'clamp(72px, 10vw, 140px)', color: colors.paper, lineHeight: 1, marginBottom: '24px' }}>
              {activeProduct.name}
            </h1>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '22px', color: colors.pewter, marginBottom: '48px' }}>
              {activeProduct.tagline}
            </div>
            <div style={{ display: 'flex', gap: '48px' }}>
              {activeProduct.metrics.map((m, i) => (
                <div key={i}>
                  <div className="display-text" style={{ fontSize: '48px', color: colors.paper, lineHeight: 1 }}>{m.value}</div>
                  <div className="mono-label" style={{ color: colors.steel, marginTop: '8px' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product detail */}
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px' }}>
              <div>
                <div className="mono-label" style={{ marginBottom: '16px' }}>Problem</div>
                <div style={{ height: '2px', width: '40px', background: colors.obsidian, marginBottom: '24px' }} />
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: colors.obsidian, lineHeight: 1.7, marginBottom: '40px' }}>
                  {activeProduct.problem}
                </p>

                <div className="mono-label" style={{ marginBottom: '16px' }}>Rozwiązanie</div>
                <div style={{ height: '2px', width: '40px', background: colors.coldSteel, marginBottom: '24px' }} />
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: colors.slate, lineHeight: 1.7 }}>
                  {activeProduct.solution}
                </p>
              </div>
              <div>
                <div className="mono-label" style={{ marginBottom: '16px' }}>Dla kogo?</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: colors.mist, marginBottom: '40px' }}>
                  {activeProduct.audience.map((a, i) => (
                    <div key={i} style={{ background: colors.bone, padding: '20px 24px', fontFamily: '"Inter", sans-serif', fontSize: '15px', color: colors.obsidian, display: 'flex', justifyContent: 'space-between' }}>
                      {a} <span style={{ color: colors.steel }}>→</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: colors.obsidian, padding: '32px' }}>
                  <div className="mono-label" style={{ color: colors.steel, marginBottom: '8px' }}>Cennik</div>
                  <div className="display-text" style={{ fontSize: '36px', color: colors.paper, marginBottom: '8px' }}>{activeProduct.pricing}</div>
                  <div className="mono-label" style={{ color: colors.slate, marginBottom: '24px' }}>
                    Status: <span style={{ color: statusColor(activeProduct.status) }}>{activeProduct.status}</span>
                  </div>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('kontakt')}>
                    Dowiedz się więcej →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>PZN LABS Portfolio</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '40px' }}>
            Sześć SaaSów.<br />Jedna misja.
          </h1>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', color: colors.pewter, maxWidth: '520px', lineHeight: 1.7 }}>
            Produkty budowane przez PZN LABS — centrum badawcze POSNOVA. Każdy produkt odpowiada na realny problem społeczny i generuje przychód, który wraca do misji.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ background: colors.paper, padding: '0 0 128px' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.mist, marginTop: '0' }}>
            {products.map((p, i) => (
              <div
                key={p.id}
                style={{ background: colors.bone, padding: '56px 48px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
                onClick={() => setActive(p.id)}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = colors.paper }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = colors.bone }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                  <span className="mono-label" style={{ color: colors.coldSteel }}>{p.tag}</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', letterSpacing: '0.1em', color: statusColor(p.status), textTransform: 'uppercase' }}>{p.status}</span>
                </div>
                <h2 className="display-text" style={{ fontSize: '56px', color: colors.obsidian, marginBottom: '8px', lineHeight: 1 }}>{p.name}</h2>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: colors.steel, marginBottom: '24px' }}>{p.full}</div>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.slate, lineHeight: 1.7, marginBottom: '32px' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono-label" style={{ color: colors.obsidian }}>{p.pricing}</span>
                  <span style={{ color: colors.slate, fontSize: '16px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: colors.obsidian, padding: '96px 0' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>White-label & partnerstwa</div>
            <h2 className="display-text" style={{ fontSize: '56px', color: colors.paper, maxWidth: '480px' }}>Chcesz naszej technologii pod swoją marką?</h2>
          </div>
          <button className="btn-primary" onClick={() => navigate('kontakt')}>Napisz do nas →</button>
        </div>
      </section>
    </div>
  )
}
