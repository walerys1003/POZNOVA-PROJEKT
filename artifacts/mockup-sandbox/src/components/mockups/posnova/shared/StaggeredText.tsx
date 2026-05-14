import { useEffect, useRef, useState } from 'react'

interface StaggeredTextProps {
  text: string
  style?: React.CSSProperties
  charStyle?: React.CSSProperties
  staggerMs?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function StaggeredText({ text, style = {}, charStyle = {}, staggerMs = 40, as: Tag = 'div', className }: StaggeredTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const chars = text.split('')

  return (
    <Tag ref={ref as any} className={className} style={{ display: 'block', ...style }}>
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * staggerMs}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * staggerMs}ms`,
            ...charStyle,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}
