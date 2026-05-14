import { useState } from 'react'
import { PageProps } from '../types'
import { colors } from '../shared/design'

const team = [
  { name: 'Jakub Nowak', role: 'Prezes Zarządu', bg: 'Seryjny założyciel. Ex-CTO Allegro Smart. Absolwent PW i MIT Sloan.', tag: 'Zarząd' },
  { name: 'Karolina Mazur', role: 'Dyrektor Naukowy', bg: 'Dr hab. AI, Politechnika Warszawska. 12 publikacji w top-tier venues.', tag: 'R&D' },
  { name: 'Marcin Wiśniewski', role: 'CFO', bg: 'Ex-McKinsey. Ekspert ekonomii społecznej i modeli hybrydowych.', tag: 'Finanse' },
  { name: 'Agata Lewandowska', role: 'COO', bg: 'Była koordynatorka OWES Mazowsze. Doktorantka polityki społecznej.', tag: 'Operacje' },
  { name: 'Piotr Zieliński', role: 'Head of Engineering', bg: '15 lat w enterprise backend. Architekt systemów dla banków i telekomów.', tag: 'Tech' },
  { name: 'Beata Krawczyk', role: 'Head of Product', bg: 'Ex-Allegro Product Manager. Specjalistka UX dla produktów z misją.', tag: 'Produkt' },
]

const legalDocs = [
  { name: 'Statut Spółdzielni Socjalnej POSNOVA', date: '14.03.2026', type: 'Statut', size: '284 KB' },
  { name: 'Decyzja o wpisie do KRS', date: '22.03.2026', type: 'KRS', size: '140 KB' },
  { name: 'Zaświadczenie OWES Mazowsze', date: '05.04.2026', type: 'Certyfikat', size: '88 KB' },
  { name: 'Regulamin Zarządu', date: '14.03.2026', type: 'Regulamin', size: '164 KB' },
  { name: 'Polityka wynagrodzeń', date: '14.03.2026', type: 'Polityka', size: '112 KB' },
  { name: 'Sprawozdanie z działalności Q1 2026', date: '15.04.2026', type: 'Sprawozdanie', size: '620 KB' },
]

export function Instytucja({ navigate }: PageProps) {
  const [activeTab, setActiveTab] = useState<'manifest' | 'architektura' | 'zespol' | 'status'>('manifest')

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'manifest', label: 'Manifest' },
    { id: 'architektura', label: 'Architektura' },
    { id: 'zespol', label: 'Zespół' },
    { id: 'status', label: 'Status prawny' },
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{ background: colors.obsidian, paddingTop: '160px', paddingBottom: '0' }}>
        <div className="container-wide">
          <div className="mono-label" style={{ color: colors.steel, marginBottom: '24px' }}>Instytucja</div>
          <h1 className="display-text" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: colors.paper, maxWidth: '700px', marginBottom: '64px' }}>
            Kim<br />jesteśmy.
          </h1>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0', borderTop: `1px solid ${colors.graphite}` }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                style={{
                  background: activeTab === tab.id ? colors.paper : 'transparent',
                  color: activeTab === tab.id ? colors.obsidian : colors.pewter,
                  border: 'none',
                  padding: '20px 40px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  borderRight: `1px solid ${colors.graphite}`,
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content based on tab */}
      {activeTab === 'manifest' && (
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-narrow">
            <div className="mono-label" style={{ marginBottom: '48px' }}>POSNOVA / Manifest założycielski · 2026</div>
            {[
              {
                n: '01', heading: 'Technologia nie jest celem.',
                body: 'Nie budujemy technologii, żeby ją sprzedać. Budujemy ją, żeby zmienić ludzkie życie. Każda linia kodu, każdy model AI, każdy produkt — musi odpowiadać na realny problem realnych ludzi. Inaczej to ćwiczenie z elegancji, nie z sensu.',
              },
              {
                n: '02', heading: 'Misja i rynek nie wykluczają się.',
                body: 'Odrzucamy fałszywą dychotomię między "robieniem dobrego" a "robieniem pieniędzy". Jesteśmy dowodem, że można budować rentowne przedsiębiorstwo technologiczne i jednocześnie tworzyć miejsca pracy dla osób wykluczonych. Rentowność jest warunkiem trwałości misji — nie jej zaprzeczeniem.',
              },
              {
                n: '03', heading: 'Spółdzielnia socjalna to nasz wybór, nie konieczność.',
                body: 'Mamy co najmniej dwóch założycieli z doświadczeniem komercyjnym, którzy mogliby zarejestrować sp. z o.o. i nie zawracać sobie głowy klauzulami społecznymi. Wybraliśmy spółdzielnię, bo statut, który nas ogranicza w dystrybucji zysku, jest dokładnie tym ograniczeniem, które chcemy mieć. To zabezpieczenie misji przed przyszłą chciwością.',
              },
              {
                n: '04', heading: 'Transparentność jako standard.',
                body: 'Publikujemy roczne sprawozdania z działalności, dane o wynagrodzeniach (widełki), wskaźniki wpływu społecznego i wyniki audytów OWES. Nie dlatego, że musimy — dlatego, że instytucja, która nie mierzy swojego wpływu, nie ma prawa mówić, że ma misję.',
              },
              {
                n: '05', heading: 'AI ma być dostępna dla wszystkich.',
                body: 'Nie budujemy narzędzi wyłącznie dla Fortune 500. Nasze produkty są projektowane tak, żeby MŚP, indywidualni użytkownicy i sektor publiczny mogli z nich korzystać w cenach, które nie wymagają rund finansowania. Demokratyzacja AI to nie slogan — to kryterium projektowe.',
              },
            ].map(block => (
              <div key={block.n} style={{ marginBottom: '64px' }}>
                <div className="mono-label" style={{ marginBottom: '16px' }}>{block.n}</div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em', color: colors.obsidian, marginBottom: '20px', lineHeight: 1.2 }}>{block.heading}</h3>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: colors.slate, lineHeight: 1.9 }}>{block.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'architektura' && (
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <div className="mono-label" style={{ marginBottom: '64px' }}>Struktura grupy POSNOVA</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
              <div>
                {[
                  { name: 'POSNOVA (Holding)', desc: 'Zarządza kapitałem, strategią marki i relacjami z inwestorami. Właściciel udziałów w PZN LABS sp. z o.o.', role: 'Holding strategiczny', color: colors.obsidian },
                  { name: 'PZN LABS sp. z o.o.', desc: 'Centrum R&D. Tutaj powstają produkty. Właściciel IP wszystkich rozwiązań. 100% własność POSNOVA.', role: 'Innovation Lab', color: colors.graphite },
                  { name: 'Spółdzielnia Socjalna', desc: 'Realizuje kontrakty B2B i zarządza programem reintegracji. Status PS nr 2026/001. Mózg operacyjny.', role: 'Centrum operacyjne', color: colors.charcoal },
                  { name: 'Portfolio Produktów', desc: '6 SaaS-ów i pełna oferta usług B2B. Generują przychód reinwestowany w misję.', role: 'Portfel rynkowy', color: colors.slate },
                ].map((node, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: '32px', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', background: node.color, flexShrink: 0, alignSelf: 'stretch', minHeight: '80px' }} />
                    <div>
                      <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 500, color: colors.obsidian, marginBottom: '4px' }}>{node.name}</div>
                      <div className="mono-label" style={{ marginBottom: '8px', color: colors.coldSteel }}>{node.role}</div>
                      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.slate, lineHeight: 1.7 }}>{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ background: colors.bone, padding: '48px' }}>
                  <div className="mono-label" style={{ marginBottom: '32px' }}>Przepływ finansowy</div>
                  {[
                    { from: 'Klienci B2B + SaaS', to: 'Przychód brutto', pct: '100%' },
                    { from: 'Koszty operacyjne', to: 'Wynagrodzenia + infrastruktura', pct: '−28%' },
                    { from: 'Reinwestycja', to: 'R&D + reintegracja + misja', pct: '72%' },
                  ].map((flow, i) => (
                    <div key={i} style={{ padding: '16px 0', borderBottom: `1px solid ${colors.mist}`, display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.obsidian }}>{flow.from}</div>
                        <div className="mono-label" style={{ color: colors.slate, marginTop: '4px' }}>{flow.to}</div>
                      </div>
                      <div className="display-text" style={{ fontSize: '32px', color: colors.obsidian }}>{flow.pct}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'zespol' && (
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <div className="mono-label" style={{ marginBottom: '64px' }}>Zarząd i liderzy</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: colors.mist }}>
              {team.map((member, i) => (
                <div key={i} style={{ background: colors.bone, padding: '48px 40px' }}>
                  <div style={{ width: '64px', height: '64px', background: colors.graphite, marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 300, fontSize: '24px', color: colors.silver }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '8px' }}>{member.tag}</div>
                  <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 500, color: colors.obsidian, marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: colors.steel, letterSpacing: '0.08em', marginBottom: '20px' }}>{member.role}</div>
                  <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.slate, lineHeight: 1.7 }}>{member.bg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'status' && (
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px' }}>
              <div>
                <div className="mono-label" style={{ marginBottom: '32px' }}>Dane rejestrowe</div>
                {[
                  ['Forma prawna', 'Spółdzielnia Socjalna'],
                  ['Nr KRS', '0000000000'],
                  ['NIP', '000-000-00-00'],
                  ['REGON', '000000000'],
                  ['Status PS', 'Nr 2026/001 (OWES Mazowsze)'],
                  ['Data wpisu', '22 marca 2026'],
                  ['Siedziba', 'Warszawa, Śródmieście'],
                  ['Adres', 'ul. Chmielna 14, 00-020 Warszawa'],
                  ['Kapitał własny', '80 000 PLN'],
                  ['Rok obrotowy', '1.01.2026 – 31.12.2026'],
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '14px 0', borderBottom: `1px solid ${colors.mist}` }}>
                    <span className="mono-label">{label}</span>
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.obsidian }}>{val}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="mono-label" style={{ marginBottom: '32px' }}>Dokumenty do pobrania</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: colors.mist }}>
                  {legalDocs.map((doc, i) => (
                    <div key={i} style={{ background: colors.bone, padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '16px', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: colors.obsidian }}>{doc.name}</div>
                        <div className="mono-label" style={{ marginTop: '4px' }}>{doc.date}</div>
                      </div>
                      <span className="mono-label" style={{ color: colors.coldSteel }}>{doc.type}</span>
                      <span className="mono-label">{doc.size}</span>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: colors.slate, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        PDF →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
