import { useEffect, useRef } from 'react'

interface NeuralHeroProps {
  height?: number
}

export function NeuralHero({ height = 600 }: NeuralHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    canvas.addEventListener('mousemove', onMouseMove)

    // Nodes
    const nodes = Array.from({ length: 12 }, (_, i) => ({
      x: 80 + Math.random() * (canvas.width - 160),
      y: 60 + Math.random() * (canvas.height - 120),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: i < 3 ? 7 + Math.random() * 5 : 3 + Math.random() * 4,
      accent: i < 3,
      label: ['Applied AI', 'LegalTech', 'Social Impact', 'RAG', 'NLP', 'LLM', 'Safety', 'Knowledge Graph', 'Benchmark', 'SROI', 'HealthTech', 'Ontology'][i],
      phase: Math.random() * Math.PI * 2,
    }))

    // Data travelling along connections
    const dataDots: { i: number; j: number; t: number; speed: number }[] = []
    for (let k = 0; k < 10; k++) {
      dataDots.push({
        i: Math.floor(Math.random() * nodes.length),
        j: Math.floor(Math.random() * nodes.length),
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      })
    }

    // Background star field
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.5 + Math.random() * 1.2,
      alpha: 0.05 + Math.random() * 0.2,
    }))

    let frameId: number
    let t = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.012
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const W = canvas.width, H = canvas.height

      // Stars
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100,110,130,${s.alpha})`
        ctx.fill()
      })

      // Move nodes (slight mouse attraction for core nodes)
      nodes.forEach((n, idx) => {
        n.phase += 0.015
        if (idx < 3) {
          // Core nodes drift toward mouse slowly
          n.vx += (mouse.x - n.x) * 0.00005
          n.vy += (mouse.y - n.y) * 0.00005
        }
        n.x += n.vx
        n.y += n.vy
        // Bounce
        if (n.x < 40 || n.x > W - 40) n.vx *= -0.9
        if (n.y < 40 || n.y > H - 40) n.vy *= -0.9
        // Damping
        n.vx *= 0.998
        n.vy *= 0.998
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = W * 0.36
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            const isAccent = nodes[i].accent || nodes[j].accent
            ctx.strokeStyle = isAccent ? `rgba(0,163,180,${alpha})` : `rgba(150,160,180,${alpha * 0.5})`
            ctx.lineWidth = isAccent ? 0.9 : 0.5
            ctx.stroke()
          }
        }
      }

      // Data dots travelling
      dataDots.forEach(d => {
        d.t = (d.t + d.speed) % 1
        const a = nodes[d.i], b = nodes[d.j]
        const dx = b.x - a.x, dy = b.y - a.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > W * 0.36) return
        const px = a.x + dx * d.t
        const py = a.y + dy * d.t
        const fadeAlpha = d.t < 0.1 ? d.t * 10 : d.t > 0.9 ? (1 - d.t) * 10 : 1
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,163,180,${0.85 * fadeAlpha})`
        ctx.fill()
        // Tiny trail
        ctx.beginPath()
        ctx.arc(px - dx * 0.03, py - dy * 0.03, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,163,180,${0.35 * fadeAlpha})`
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach(n => {
        const pulse = 0.88 + Math.sin(n.phase * 1.6) * 0.12

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5 * pulse)
        grd.addColorStop(0, n.accent ? `rgba(0,163,180,0.18)` : `rgba(200,210,230,0.08)`)
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 5 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Node body
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = n.accent ? `rgba(0,163,180,0.9)` : `rgba(180,190,210,0.75)`
        ctx.fill()
        ctx.strokeStyle = n.accent ? `rgba(0,200,220,0.6)` : `rgba(220,230,245,0.3)`
        ctx.lineWidth = 1
        ctx.stroke()

        // Label for large nodes
        if (n.r > 6) {
          ctx.fillStyle = `rgba(250,250,247,${0.55 + Math.sin(n.phase) * 0.15})`
          ctx.font = `${Math.floor(canvas.width * 0.009)}px 'JetBrains Mono', monospace`
          ctx.textAlign = 'center'
          ctx.fillText(n.label, n.x, n.y + n.r * 2.8)
        }
      })
    }
    animate()

    const handleResize = () => setSize()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: `${height}px`, display: 'block' }}
    />
  )
}
