import { useState, useEffect } from 'react'
import { PageKey, NavFn } from '../types'
import { colors } from './design'

interface NavProps {
  navigate: NavFn
  currentPage: PageKey
}

const navLinks: { label: string; page: PageKey }[] = [
  { label: 'Usługi', page: 'uslugi' },
  { label: 'Produkty', page: 'produkty' },
  { label: 'Lab', page: 'lab' },
  { label: 'Wpływ', page: 'wplyw' },
  { label: 'Instytucja', page: 'instytucja' },
  { label: 'Wiedza', page: 'wiedza' },
  { label: 'Kariera', page: 'kariera' },
]

export function Nav({ navigate, currentPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = !scrolled

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    padding: '0 48px',
    background: scrolled ? 'rgba(250,250,247,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? `1px solid ${colors.mist}` : '1px solid transparent',
    transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
  }

  const linkStyle = (page: PageKey): React.CSSProperties => ({
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '10px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: isDark
      ? currentPage === page ? colors.paper : colors.pewter
      : currentPage === page ? colors.obsidian : colors.steel,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px 0',
    transition: 'color 0.2s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  })

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div
        style={{ flex: 1, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        onClick={() => navigate('landing')}
      >
        <img
          src={`${import.meta.env.BASE_URL}posnova-logo.png`}
          alt="POSNOVA Social Cooperative"
          style={{
            height: '36px',
            width: 'auto',
            filter: isDark ? 'invert(1) brightness(2)' : 'none',
            transition: 'filter 0.4s',
            display: 'block',
          }}
        />
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {navLinks.map(({ label, page }) => (
          <button
            key={page}
            style={linkStyle(page)}
            onClick={() => navigate(page)}
            onMouseEnter={e => (e.currentTarget.style.color = isDark ? colors.paper : colors.obsidian)}
            onMouseLeave={e => (e.currentTarget.style.color = isDark
              ? currentPage === page ? colors.paper : colors.pewter
              : currentPage === page ? colors.obsidian : colors.steel)}
          >
            {label}
          </button>
        ))}

        <button
          style={{
            background: isDark ? colors.paper : colors.obsidian,
            color: isDark ? colors.obsidian : colors.paper,
            border: 'none',
            padding: '11px 20px',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: 0,
            transition: 'background 0.3s, color 0.3s',
            whiteSpace: 'nowrap',
          }}
          onClick={() => navigate('kontakt')}
        >
          Kontakt →
        </button>
      </div>
    </nav>
  )
}
