import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageProps } from '../types'
import { colors, fonts } from '../shared/design'
import { useReveal } from '../shared/useReveal'

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
    jakToDziala: [
      { step: '01', title: 'Rejestracja w 5 minut', desc: 'Rodzina konfiguruje profil seniora — imię, tematy rozmów, godzina telefonu. Brak wymagań technicznych po stronie seniora. Zwykły telefon stacjonarny lub komórkowy.' },
      { step: '02', title: 'Codzienny telefon AI', desc: 'ADAM dzwoni o ustalonej godzinie. Rozmowa trwa 5–15 minut. AI dostosowuje temat i ton do nastroju i historii poprzednich rozmów. Możliwa mowa regionalna.' },
      { step: '03', title: 'Raport dla rodziny', desc: 'Rodzina otrzymuje SMS lub email z podsumowaniem, oceną nastroju (skala 1–5) i alertami (np. "Senior wspomniał o bólu"). Dashboard online z historią 365 dni.' },
    ],
    pricingTiers: [
      { name: 'Rodzina', price: '49 PLN', period: '/miesiąc', features: ['1 senior', 'Telefon codziennie', 'Raport email/SMS', 'Historia 90 dni', 'Alert awaryjny'], highlight: false },
      { name: 'Rodzina+', price: '89 PLN', period: '/miesiąc', features: ['Do 3 seniorów', 'Raport tygodniowy PDF', 'Historia 365 dni', 'Panel rodzinny online', 'Priorytetowy support'], highlight: true },
      { name: 'Placówka', price: '29 PLN', period: '/os/mies.', features: ['Min. 10 seniorów', 'Panel zarządzania', 'API integracje', 'Raporty RODO zbiorcze', 'Dedykowany account'], highlight: false },
    ],
    caseStudy: {
      client: 'Dom Opieki "Spokojny Wiek" — Kraków',
      context: '38 pensjonariuszy · pilotaż 90 dni · Q1 2026',
      result: 'Znacząca poprawa wskaźników dobrostanu i widoczna redukcja poczucia izolacji wśród pensjonariuszy.',
      stats: [{ label: 'Redukcja poczucia izolacji', value: '−62%' }, { label: 'NPS pensjonariuszy', value: '78' }, { label: 'Adopcja po 90 dniach', value: '89%' }],
    },
    metrics: [{ label: 'Użytkowników', value: '2 100+' }, { label: 'NPS', value: '74' }, { label: 'Retencja 90d', value: '81%' }],
    status: 'Live',
    color: colors.obsidian,
    audience: ['Rodziny z seniorami', 'Domy opieki', 'NFZ-partnerzy', 'Ubezpieczyciele'],
  },
  {
    id: 'lexmate24',
    name: 'LexMate24',
    full: 'Asystent prawny AI',
    tag: 'LegalTech',
    tagline: 'Analiza umowy w 60 sekund.',
    desc: 'LexMate24 analizuje umowy, wyróżnia ryzyka i generuje kontrpropozycje dla MŚP, które nie stać na prawnika od każdego kontraktu. White-label dla kancelarii.',
    problem: 'Polskie MŚP podpisują umowy bez analizy prawnej. Koszty kancelarii są poza zasięgiem małych firm.',
    solution: 'Wgraj PDF, otrzymaj analizę ryzyk + sugestie zmian + wzorzec kontrnegocjacyjny w 60 sekund.',
    jakToDziala: [
      { step: '01', title: 'Wgraj dokument', desc: 'Wgraj PDF lub wklej tekst umowy. Obsługujemy polskie i angielskie kontrakty: NDA, umowy o dzieło, umowy SaaS, kooperacyjne, zlecenia, wynajem.' },
      { step: '02', title: 'AI analizuje ryzyka', desc: 'Model przeszukuje 180+ typowych klauzul ryzyka wg polskiego Kodeksu cywilnego. Każde ryzyko oznaczone: krytyczne / umiarkowane / informacyjne.' },
      { step: '03', title: 'Raport + kontrpropozycje', desc: 'Pobierasz raport PDF z mapą ryzyk, wyjaśnieniami i gotowymi kontrpropozycjami klauzul. Możliwość eksportu do .docx z tracked changes.' },
    ],
    pricingTiers: [
      { name: 'Freelancer', price: '99 PLN', period: '/miesiąc', features: ['10 analiz/mies.', 'Eksport PDF', 'Historia 6 mies.', 'Polskie prawo', 'Email support'], highlight: false },
      { name: 'MŚP', price: '299 PLN', period: '/miesiąc', features: ['Bez limitu analiz', 'Eksport PDF + .docx', 'Historia bez limitu', 'PL + EN umowy', 'Chat support'], highlight: true },
      { name: 'Kancelaria (WL)', price: '1 500 PLN', period: '/miesiąc', features: ['White-label branding', 'API dostęp', 'Szkolenie zespołu', 'SLA 99.9%', 'Dedicated support'], highlight: false },
    ],
    caseStudy: {
      client: 'Kancelaria Wiśniewska & Partnerzy — Warszawa',
      context: '8-osobowy zespół · wdrożenie 3 tygodnie · aktywni od marca 2026',
      result: 'Radykalne skrócenie czasu wstępnej analizy kontraktów i możliwość obsługi większej liczby klientów bez rozbudowy zespołu.',
      stats: [{ label: 'Czas analizy wstępnej', value: '−74%' }, { label: 'Kontraktów/mies. więcej', value: '+340' }, { label: 'Satysfakcja klientów', value: '92%' }],
    },
    metrics: [{ label: 'Użytkowników', value: '4 800+' }, { label: 'Umów przeanalizowanych', value: '62 000' }, { label: 'Śr. czas analizy', value: '58 sek.' }],
    status: 'Live',
    color: colors.graphite,
    audience: ['MŚP', 'Freelancerzy', 'Kancelarie prawne', 'Startupy'],
  },
  {
    id: 'rentradar',
    name: 'RentRadarPL',
    full: 'Monitor rynku najmu',
    tag: 'PropTech',
    tagline: 'Wiedz, kiedy Twój czynsz jest za niski.',
    desc: 'Agreguje dane z 8 portali ogłoszeniowych, buduje indeksy cenowe per dzielnica/metraż i wysyła alerty, gdy ceny w okolicy rosną — lub gdy oferta jest poniżej rynku.',
    problem: 'Wynajmujący w Polsce tracą tysiące rocznie, bo nie wiedzą, jaka jest realna cena rynkowa w ich mikrookolicy.',
    solution: 'Dashboard z danymi w czasie rzeczywistym + alerty email/SMS + raport miesięczny z trendem rynkowym dla Twojej dzielnicy.',
    jakToDziala: [
      { step: '01', title: 'Podaj adres i parametry', desc: 'Wpisz adres lub wybierz dzielnicę na mapie. Określ typ nieruchomości: kawalerka, 2-pok., 3-pok., dom. System konfiguruje Twój monitoring.' },
      { step: '02', title: 'Stały monitoring 8 portali', desc: 'Agregujemy dane z OLX, Otodom, Domiporta, Morizon, Gratka, Facebook Marketplace i 2 innych. Aktualizacja co 6 godzin. Index cen per metr, per dzielnica.' },
      { step: '03', title: 'Alerty i raporty', desc: 'Alert SMS gdy ceny w Twojej okolicy rosną >5% lub gdy nowe oferty pojawiają się poniżej rynku. Miesięczny raport PDF z trendem i benchmarkiem konkurencji.' },
    ],
    pricingTiers: [
      { name: 'Właściciel', price: '79 PLN', period: '/miesiąc', features: ['1 nieruchomość', 'Monitoring 8 portali', 'Alerty email', 'Raport miesięczny PDF', 'Historia 12 mies.'], highlight: false },
      { name: 'Inwestor', price: '199 PLN', period: '/miesiąc', features: ['Do 5 nieruchomości', 'Alerty SMS + email', 'API dostęp', 'Raporty eksport XLS', 'Analiza portfela'], highlight: true },
      { name: 'Zarządca', price: '499 PLN', period: '/miesiąc', features: ['Bez limitu nieruchomości', 'Dashboard zespołowy', 'Dedicated API', 'White-label raporty', 'Dedicated support'], highlight: false },
    ],
    caseStudy: {
      client: 'Prywatny inwestor — portfel 12 mieszkań, Warszawa/Kraków',
      context: 'Subskrypcja "Inwestor" · aktywny od stycznia 2026',
      result: 'Renegocjacja 4 umów najmu po wykryciu niedoszacowania. Optymalizacja cen dla pozostałych 8 mieszkań.',
      stats: [{ label: 'Wzrost przychodów z najmu', value: '+18%' }, { label: 'Zaoszczędzono rocznie', value: '36 000 PLN' }, { label: 'Czas do optymalizacji', value: '3 tygodnie' }],
    },
    metrics: [{ label: 'Użytkowników', value: '12 000+' }, { label: 'Miast objętych', value: '32' }, { label: 'Ogłoszeń w indeksie', value: '480k' }],
    status: 'Live',
    color: colors.charcoal,
    audience: ['Właściciele nieruchomości', 'Zarządcy', 'Inwestorzy', 'Pośrednicy'],
  },
  {
    id: 'unityhire',
    name: 'UnityHire',
    full: 'Platforma rekrutacji AI',
    tag: 'HR-Tech',
    tagline: 'Rekrutacja według wartości, nie tylko CV.',
    desc: 'UnityHire łączy screening CV przez AI z oceną dopasowania kulturowego. Kandydaci i firmy widzą stopień match zanim dojdzie do pierwszej rozmowy.',
    problem: 'Firmy tracą talenty bo screening CV jest płytki. Kandydaci tracą czas na niedopasowane oferty.',
    solution: 'AI screening + culture fit score + tryb rekrutacji anonimowej + integracja z ATS w jeden ekosystem.',
    jakToDziala: [
      { step: '01', title: 'Stwórz ogłoszenie z profilem wartości', desc: 'Poza standardowymi wymaganiami definiujesz wartości zespołu, styl pracy i kulturę organizacyjną. AI generuje "culture fingerprint" dla Twojej firmy.' },
      { step: '02', title: 'Automatyczny screening i scoring', desc: 'AI przeanalizuje CV i dopasuje kandydatów do wymagań twardych ORAZ culture fingerprint. Każdy kandydat dostaje score: skills match + culture fit (0–100).' },
      { step: '03', title: 'Rankingi i rozmowy bez biasów', desc: 'Tryb blind recruitment ukrywa wiek, płeć i zdjęcia do momentu wybrania kandydata do rozmowy. Integracja z Calendly i ATS jednym kliknięciem.' },
    ],
    pricingTiers: [
      { name: 'Starter', price: '299 PLN', period: '/miesiąc', features: ['3 aktywne oferty', 'AI screening', 'Culture fit scoring', 'Historia 6 mies.', 'Email support'], highlight: false },
      { name: 'Agencja', price: '599 PLN', period: '/miesiąc', features: ['Bez limitu ofert', 'Tryb blind recruitment', 'Integracja ATS', 'API dostęp', 'Chat support'], highlight: true },
      { name: 'Enterprise', price: 'Wycena', period: '', features: ['Multi-team dashboard', 'Custom culture model', 'SSO + SAML', 'SLA 99.9%', 'Dedicated support'], highlight: false },
    ],
    caseStudy: {
      client: 'Scale-up FinTech — 45 pracowników, Warszawa',
      context: 'Rekrutacja 8 stanowisk · czas projektu 6 tygodni · Q2 2026',
      result: 'Radykalne skrócenie procesu i poprawa jakości dopasowania kandydatów do kultury organizacyjnej.',
      stats: [{ label: 'Skrócenie procesu rekrutacji', value: '−40%' }, { label: 'Culture fit po 3 mies.', value: '94%' }, { label: 'Rotacja 90-dniowa', value: '0%' }],
    },
    metrics: [{ label: 'Firm aktywnych', value: '38' }, { label: 'Kandydatów', value: '380+' }, { label: 'Czas do oferty', value: '−40%' }],
    status: 'Beta',
    color: colors.slate,
    audience: ['HR Managerowie', 'Agencje rekrutacyjne', 'Scale-upy', 'Korporacje'],
  },
  {
    id: 'olek',
    name: 'O!Lek',
    full: 'Adherencja terapeutyczna AI',
    tag: 'HealthTech',
    tagline: 'Nie zapomnisz o leku.',
    desc: 'System przypomnień o lekach z głosowymi potwierdzeniami (telefon lub głośnik), monitoringiem adherencji i raportowaniem dla lekarza lub opiekuna rodzinnego.',
    problem: '50% chorób przewlekłych pogarsza się przez nieregularne przyjmowanie leków. Seniorzy to największa grupa ryzyka.',
    solution: 'Telefon głosowy lub push + potwierdzenie przez mowę + tygodniowy raport adherencji dla lekarza lub opiekuna.',
    jakToDziala: [
      { step: '01', title: 'Lekarz lub opiekun konfiguruje schemat', desc: 'Lekarz lub opiekun wprowadza schemat leków: nazwa, dawka, godziny. System generuje harmonogram przypominień dla pacjenta na wybrany kanał: telefon, SMS, głośnik (Google Home, Alexa).' },
      { step: '02', title: 'Przypomnienie i głosowe potwierdzenie', desc: 'O ustalonej porze O!Lek dzwoni do pacjenta lub podaje komunikat głosowy przez głośnik. Pacjent potwierdza głosem: "Wziąłem" lub klika przycisk w SMS.' },
      { step: '03', title: 'Raport tygodniowy dla lekarza', desc: 'Lekarz i opiekun widzą w dashboardzie adherencję per lek per tydzień. Alert SMS gdy pacjent opuści ≥3 dawki. Eksport danych do systemu medycznego.' },
    ],
    pricingTiers: [
      { name: 'Pacjent', price: '39 PLN', period: '/miesiąc', features: ['Do 10 leków', 'Telefon + SMS', 'Raport tygodniowy', 'Aplikacja opiekuna', 'Alert dla rodziny'], highlight: false },
      { name: 'Przychodnia', price: '19 PLN', period: '/pacjent/mies.', features: ['Min. 20 pacjentów', 'Dashboard lekarza', 'Eksport danych EMR', 'RODO compliance', 'Dedicated support'], highlight: true },
      { name: 'NFZ Pilot', price: 'Na zamówienie', period: '', features: ['Projekt pilotażowy', 'Pełna integracja P1', 'Ewaluacja kliniczna', 'Raport naukowy', 'Co-branding'], highlight: false },
    ],
    caseStudy: {
      client: 'POZ "MedCenter" — Warszawa Mokotów',
      context: '124 pacjentów z chorobami przewlekłymi · 90-dniowy pilotaż · Q1 2026',
      result: 'Klinicznie istotna poprawa adherencji i zmniejszenie liczby wizyt kontrolnych związanych z brakiem stosowania leków.',
      stats: [{ label: 'Poprawa adherencji', value: '+38%' }, { label: 'Powikłania z nieadherencji', value: '−51%' }, { label: 'Retencja po 90 dniach', value: '91%' }],
    },
    metrics: [{ label: 'Pacjentów aktywnych', value: '720+' }, { label: 'Adherencja', value: '+38%' }, { label: 'Placówki partnerskie', value: '14' }],
    status: 'Beta',
    color: colors.steel,
    audience: ['Seniorzy', 'Opiekunowie', 'Przychodnie', 'Apteki'],
  },
  {
    id: 'dineflirt',
    name: 'DineFlirt',
    full: 'Matchmaking kulinarne AI',
    tag: 'FoodTech',
    tagline: 'Znajdź restaurację, która rozumie Twój smak.',
    desc: 'AI analizuje historię zamówień, preferencje kulinarne i chwilowy nastrój — i dobiera restaurację oraz danie na dziś. Dla użytkownika i grup.',
    problem: 'Każdy wieczór "gdzie idziemy?" to strata 20 minut. Restauracje nie docierają do idealnych klientów.',
    solution: 'Mood + taste profiling → spersonalizowane propozycje + stolik zarezerwowany jednym kliknięciem.',
    jakToDziala: [
      { step: '01', title: 'Zbuduj profil smakowy', desc: 'Odpowiadasz na 12 pytań o preferencje kulinarne, diety, budżet i styl wyjść. AI buduje Twój "taste fingerprint" — unikalny profil smakowy.' },
      { step: '02', title: 'Powiedz AI jak się czujesz', desc: 'Dziś wieczór — romantyczna kolacja czy nieformalny lunch? Leniwy slow-food czy szybka ramen? AI dopasowuje mood do Twojego fingerprint i propozycji w pobliżu.' },
      { step: '03', title: 'Rezerwacja jednym kliknięciem', desc: 'Wybierasz z 3 dopasowanych propozycji. Klikasz "Rezerwuję" — stolik, godzina i potwierdzenie SMS od razu. Restauracje płacą prowizję tylko od rezerwacji.' },
    ],
    pricingTiers: [
      { name: 'Freemium', price: 'Bezpłatnie', period: '', features: ['3 propozycje/tydzień', 'Profil smakowy basic', 'Rezerwacja online', 'Historia wizyt', '—'], highlight: false },
      { name: 'Gourmet', price: 'TBD', period: '/miesiąc', features: ['Bez limitu propozycji', 'Grupowe matchmaking', 'Exclusive early access', 'AI sommelier', 'Beta access'], highlight: true },
      { name: 'Restauracja', price: 'Prowizja', period: 'od rezerwacji', features: ['Profil w systemie AI', 'Matching z klientami', 'Dashboard rezerwacji', 'Analityka gości', 'Marketing automation'], highlight: false },
    ],
    caseStudy: null,
    metrics: [{ label: 'Lista oczekujących', value: 'Waiting list' }, { label: 'Launch', value: 'Q3 2026' }, { label: 'Status', value: 'Pre-seed' }],
    status: 'Coming Soon',
    color: colors.pewter,
    audience: ['Foodies', 'Restauracje', 'Grupy znajomych', 'Event-planner'],
  },
]

const statusColor = (s: string) => {
  if (s === 'Live') return colors.success
  if (s === 'Beta') return colors.accentWarm
  return colors.steel
}

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

export function Produkty({ navigate }: PageProps) {
  const { product } = useParams<{ product?: string }>()
  const [active, setActive] = useState<string | null>(() => {
    if (product && products.some(p => p.id === product)) return product
    return null
  })
  const activeProduct = products.find(p => p.id === active)

  if (activeProduct) {
    return (
      <div>
        {/* Hero */}
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
            <div style={{ fontFamily: fonts.body, fontSize: '22px', color: colors.pewter, marginBottom: '48px' }}>
              {activeProduct.tagline}
            </div>
            <div className="resp-grid-3" style={{ gap: '48px', maxWidth: '600px' }}>
              {activeProduct.metrics.map((m, i) => (
                <div key={i}>
                  <div className="display-text" style={{ fontSize: '48px', color: colors.paper, lineHeight: 1 }}>{m.value}</div>
                  <div className="mono-label" style={{ color: colors.steel, marginTop: '8px' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jak to działa — 3-step flow */}
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <RevealDiv>
              <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '12px' }}>Jak to działa?</div>
              <div style={{ height: '2px', width: '40px', background: colors.coldSteel, marginBottom: '60px' }} />
            </RevealDiv>
            <div className="resp-grid-3" style={{ gap: '2px', background: colors.mist }}>
              {activeProduct.jakToDziala.map((s, i) => (
                <RevealDiv key={s.step} delay={i * 0.1}>
                  <div style={{ background: colors.bone, padding: '48px 40px', minHeight: '260px', position: 'relative' }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: colors.coldSteel, marginBottom: '20px' }}>{s.step}</div>
                    <div style={{ position: 'absolute', top: '40px', right: '40px', width: '40px', height: '2px', background: i < activeProduct.jakToDziala.length - 1 ? colors.mist : 'transparent' }} />
                    <h3 style={{ fontFamily: fonts.display, fontSize: '22px', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.01em', marginBottom: '16px', lineHeight: 1.25 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section style={{ background: colors.obsidian, padding: '80px 0' }}>
          <div className="container-wide">
            <div className="resp-grid-2" style={{ gap: '96px' }}>
              <RevealDiv>
                <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '16px' }}>Problem</div>
                <div style={{ height: '2px', width: '40px', background: colors.coldSteel, marginBottom: '24px' }} />
                <p style={{ fontFamily: fonts.body, fontSize: '20px', color: colors.silver, lineHeight: 1.7 }}>{activeProduct.problem}</p>
              </RevealDiv>
              <RevealDiv delay={0.1}>
                <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>Rozwiązanie</div>
                <div style={{ height: '2px', width: '40px', background: colors.steel, marginBottom: '24px' }} />
                <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.pewter, lineHeight: 1.7 }}>{activeProduct.solution}</p>
              </RevealDiv>
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section style={{ background: colors.paper, padding: '96px 0' }}>
          <div className="container-wide">
            <RevealDiv>
              <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '12px' }}>Cennik</div>
              <div style={{ height: '2px', width: '40px', background: colors.coldSteel, marginBottom: '60px' }} />
            </RevealDiv>
            <div className="resp-grid-3" style={{ gap: '2px', background: colors.mist }}>
              {activeProduct.pricingTiers.map((tier, i) => (
                <RevealDiv key={tier.name} delay={i * 0.1}>
                  <div style={{
                    background: tier.highlight ? colors.obsidian : colors.bone,
                    padding: '48px 40px',
                    display: 'flex', flexDirection: 'column', minHeight: '360px',
                  }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.14em', color: tier.highlight ? colors.coldSteel : colors.steel, textTransform: 'uppercase', marginBottom: '24px' }}>
                      {tier.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                      <span style={{ fontFamily: fonts.display, fontSize: '36px', fontWeight: 300, color: tier.highlight ? colors.paper : colors.obsidian, letterSpacing: '-0.02em' }}>
                        {tier.price}
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: '10px', color: tier.highlight ? colors.steel : colors.pewter }}>{tier.period}</span>
                    </div>
                    <div style={{ height: '1px', background: tier.highlight ? colors.graphite : colors.mist, margin: '24px 0' }} />
                    <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                      {tier.features.map((f, fi) => (
                        <li key={fi} style={{ fontFamily: fonts.body, fontSize: '13px', color: tier.highlight ? colors.silver : colors.slate, padding: '8px 0', borderBottom: `1px solid ${tier.highlight ? colors.graphite : colors.mist}`, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: tier.highlight ? colors.coldSteel : colors.coldSteel, flexShrink: 0, marginTop: '1px' }}>{f === '—' ? '–' : '✓'}</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={tier.highlight ? 'btn-primary' : 'btn-secondary'}
                      style={{ marginTop: '32px', width: '100%', justifyContent: 'center', ...(tier.highlight ? { background: colors.coldSteel } : {}) }}
                      onClick={() => navigate('kontakt')}
                    >
                      {tier.price === 'Wycena' || tier.price === 'Na zamówienie' ? 'Zapytaj o wycenę →' : 'Zacznij teraz →'}
                    </button>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Case study */}
        {activeProduct.caseStudy && (
          <section style={{ background: colors.bone, padding: '96px 0' }}>
            <div className="container-wide">
              <RevealDiv>
                <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '12px' }}>Studium przypadku</div>
                <div style={{ height: '2px', width: '40px', background: colors.coldSteel, marginBottom: '60px' }} />
              </RevealDiv>
              <div className="resp-grid-2" style={{ gap: '80px', alignItems: 'start' }}>
                <RevealDiv>
                  <div style={{ fontFamily: fonts.display, fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '20px' }}>
                    {activeProduct.caseStudy.client}
                  </div>
                  <div className="mono-label" style={{ color: colors.coldSteel, marginBottom: '28px' }}>{activeProduct.caseStudy.context}</div>
                  <p style={{ fontFamily: fonts.body, fontSize: '16px', color: colors.slate, lineHeight: 1.8 }}>{activeProduct.caseStudy.result}</p>
                </RevealDiv>
                <RevealDiv delay={0.15}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: colors.mist }}>
                    {activeProduct.caseStudy.stats.map((stat, si) => (
                      <div key={si} style={{ background: colors.paper, padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate }}>{stat.label}</div>
                        <div style={{ fontFamily: fonts.display, fontSize: '36px', fontWeight: 300, color: colors.obsidian, letterSpacing: '-0.02em' }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </RevealDiv>
              </div>
            </div>
          </section>
        )}

        {/* Audience + CTA */}
        <section style={{ background: colors.obsidian, padding: '80px 0' }}>
          <div className="container-wide">
            <div className="resp-grid-2" style={{ gap: '80px', alignItems: 'start' }}>
              <div>
                <div className="mono-label" style={{ color: colors.steel, marginBottom: '20px' }}>Dla kogo?</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: colors.graphite }}>
                  {activeProduct.audience.map((a, i) => (
                    <div key={i} style={{ background: colors.graphiteDeep, padding: '20px 24px', fontFamily: fonts.body, fontSize: '15px', color: colors.silver, display: 'flex', justifyContent: 'space-between' }}>
                      {a} <span style={{ color: colors.steel }}>→</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>Status produktu</div>
                <div style={{ fontFamily: fonts.display, fontSize: '20px', fontWeight: 300, color: statusColor(activeProduct.status), marginBottom: '40px' }}>{activeProduct.status}</div>
                <button className="btn-primary" style={{ background: colors.coldSteel, marginBottom: '16px', width: '100%', justifyContent: 'center' }} onClick={() => navigate('kontakt')}>
                  Dowiedz się więcej →
                </button>
                <button className="btn-secondary-light" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setActive(null)}>
                  ← Powrót do portfolio
                </button>
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
          <p style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.pewter, maxWidth: '520px', lineHeight: 1.7 }}>
            Produkty budowane przez PZN LABS — centrum badawcze POSNOVA. Każdy produkt odpowiada na realny problem społeczny i generuje przychód, który wraca do misji.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ background: colors.paper, padding: '0 0 128px' }}>
        <div className="container-wide">
          <div className="resp-grid-3" style={{ gap: '2px', background: colors.mist, marginTop: '0' }}>
            {products.map((p) => (
              <div
                key={p.id}
                style={{ background: colors.bone, padding: '56px 48px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
                onClick={() => setActive(p.id)}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = colors.paper }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = colors.bone }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                  <span className="mono-label" style={{ color: colors.coldSteel }}>{p.tag}</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: '10px', letterSpacing: '0.1em', color: statusColor(p.status), textTransform: 'uppercase' }}>{p.status}</span>
                </div>
                <h2 className="display-text" style={{ fontSize: '56px', color: colors.obsidian, marginBottom: '8px', lineHeight: 1 }}>{p.name}</h2>
                <div style={{ fontFamily: fonts.body, fontSize: '13px', color: colors.steel, marginBottom: '24px' }}>{p.full}</div>
                <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate, lineHeight: 1.7, marginBottom: '32px' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono-label" style={{ color: colors.obsidian }}>{p.pricingTiers?.[0]?.price ?? 'TBD'} {p.pricingTiers?.[0]?.period ?? ''}</span>
                  <span style={{ color: colors.slate, fontSize: '16px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: colors.obsidian, padding: '96px 0' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="mono-label" style={{ color: colors.steel, marginBottom: '16px' }}>White-label & partnerstwa</div>
            <h2 className="display-text" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: colors.paper, maxWidth: '480px' }}>Chcesz naszej technologii pod swoją marką?</h2>
          </div>
          <button className="btn-primary" onClick={() => navigate('kontakt')}>Napisz do nas →</button>
        </div>
      </section>
    </div>
  )
}
