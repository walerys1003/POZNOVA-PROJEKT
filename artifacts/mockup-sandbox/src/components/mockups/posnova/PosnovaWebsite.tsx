import { useEffect, useState, useRef } from 'react'
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { PageKey, NavFn } from './types'
import { globalStyles } from './shared/design'
import { Nav } from './shared/Nav'
import { Footer } from './shared/Footer'
import { Landing } from './pages/Landing'
import { Uslugi } from './pages/Uslugi'
import { Produkty } from './pages/Produkty'
import { Lab } from './pages/Lab'
import { Wplyw } from './pages/Wplyw'
import { Instytucja } from './pages/Instytucja'
import { Kariera } from './pages/Kariera'
import { Wiedza } from './pages/Wiedza'
import { Kontakt } from './pages/Kontakt'

const PAGE_ROUTES: Record<PageKey, string> = {
  landing: '/',
  uslugi: '/uslugi',
  produkty: '/produkty',
  lab: '/lab',
  wplyw: '/wplyw',
  instytucja: '/instytucja',
  kariera: '/kariera',
  wiedza: '/wiedza',
  kontakt: '/kontakt',
}

function currentPageFromPath(path: string): PageKey {
  const entry = Object.entries(PAGE_ROUTES).find(([, route]) => route === path)
  return (entry?.[0] as PageKey) ?? 'landing'
}

function AppShell() {
  const reactNavigate = useNavigate()
  const location = useLocation()
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [cursorBig, setCursorBig] = useState(false)

  const currentPage = currentPageFromPath(location.pathname)

  const navigate: NavFn = (page: PageKey, sub?: string) => {
    const route = PAGE_ROUTES[page] ?? '/'
    reactNavigate(sub ? `${route}/${sub}` : route)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setCursorBig(!!target.closest('a, button, [role="button"], input, textarea, select, label'))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  // Scroll background morph — detect dark vs light sections and transition root bg
  useEffect(() => {
    const mainEl = document.querySelector<HTMLElement>('.posnova-root main')
    if (!mainEl) return
    let rafId: number

    const update = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'))
      if (!sections.length) return

      // Find section nearest to viewport center
      const mid = window.innerHeight / 2
      let closest: HTMLElement | null = null
      let closestDist = Infinity

      sections.forEach(s => {
        const rect = s.getBoundingClientRect()
        const sectionMid = rect.top + rect.height / 2
        const dist = Math.abs(sectionMid - mid)
        if (dist < closestDist) { closestDist = dist; closest = s }
      })

      if (closest) {
        const bg = getComputedStyle(closest).backgroundColor
        // Detect dark sections by low R,G,B values
        const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/)
        if (match) {
          const [, r, g, b] = match.map(Number)
          const luminance = (r * 299 + g * 587 + b * 114) / 1000
          mainEl.style.backgroundColor = luminance < 60 ? '#0A0A0B' : '#FAFAF7'
        }
      }
    }

    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
  }, [location.pathname])

  return (
    <div className="posnova-root" style={{ minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div
        className={`posnova-cursor ${cursorBig ? 'big' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <Nav navigate={navigate} currentPage={currentPage} />
      <main>
        <Routes>
          <Route path="/" element={<Landing navigate={navigate} />} />
          <Route path="/uslugi" element={<Uslugi navigate={navigate} />} />
          <Route path="/uslugi/:service" element={<Uslugi navigate={navigate} />} />
          <Route path="/produkty" element={<Produkty navigate={navigate} />} />
          <Route path="/produkty/:product" element={<Produkty navigate={navigate} />} />
          <Route path="/lab" element={<Lab navigate={navigate} />} />
          <Route path="/wplyw" element={<Wplyw navigate={navigate} />} />
          <Route path="/instytucja" element={<Instytucja navigate={navigate} />} />
          <Route path="/instytucja/:section" element={<Instytucja navigate={navigate} />} />
          <Route path="/kariera" element={<Kariera navigate={navigate} />} />
          <Route path="/wiedza" element={<Wiedza navigate={navigate} />} />
          <Route path="/kontakt" element={<Kontakt navigate={navigate} />} />
          <Route path="*" element={<Landing navigate={navigate} />} />
        </Routes>
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

export function PosnovaWebsite() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
