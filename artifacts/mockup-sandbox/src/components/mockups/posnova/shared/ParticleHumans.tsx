import { useEffect, useRef } from 'react'

interface ParticleHumansProps {
  height?: number
}

export function ParticleHumans({ height = 600 }: ParticleHumansProps) {
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

    // Background particles
    const bgParticles = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: 0.5 + Math.random() * 1.2,
      alpha: 0.04 + Math.random() * 0.12,
    }))

    // 5 human figures
    const PARTICLES_PER_FIGURE = 80

    function buildFigureTargets(cx: number, cy: number, scale: number) {
      return Array.from({ length: PARTICLES_PER_FIGURE }, (_, i) => {
        const t = i / PARTICLES_PER_FIGURE
        let px = 0, py = 0
        if (t < 0.1) {
          const a = Math.random() * Math.PI * 2
          px = Math.cos(a) * 14 * Math.random()
          py = -70 + Math.sin(a) * 14 * Math.random()
        } else if (t < 0.42) {
          px = (Math.random() - 0.5) * 24
          py = -44 + Math.random() * 60
        } else if (t < 0.65) {
          const side = Math.random() > 0.5 ? 1 : -1
          px = side * (16 + Math.random() * 26)
          py = -38 + Math.random() * 55
        } else {
          const side = Math.random() > 0.5 ? 1 : -1
          px = side * (6 + Math.random() * 9)
          py = 20 + Math.random() * 70
        }
        return { tx: cx + px * scale, ty: cy + py * scale }
      })
    }

    const W = canvas.width, H = canvas.height
    const figureData = [0, 1, 2, 3, 4].map(fi => {
      const cx = W * (fi + 1) / 6
      const cy = H * 0.52
      const isCenter = fi === 2
      const scale = isCenter ? 1.25 : 0.85 + Math.random() * 0.2
      const targets = buildFigureTargets(cx, cy, scale)
      const particles = targets.map(tgt => ({
        tx: tgt.tx,
        ty: tgt.ty,
        x: W * Math.random(),
        y: H * Math.random(),
        vx: 0,
        vy: 0,
        r: 1.2 + Math.random() * 1.4,
        alpha: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      }))
      return { particles, isCenter, cx, cy, scale, phaseTimer: Math.random() * 3, phase: 0 }
    })

    let frameId: number
    let t = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.012
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cW = canvas.width, cH = canvas.height

      // Background particles
      bgParticles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > cW) p.vx *= -1
        if (p.y < 0 || p.y > cH) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(60,70,90,${p.alpha})`
        ctx.fill()
      })

      // Horizontal ground line
      ctx.beginPath()
      ctx.moveTo(0, cH * 0.75)
      ctx.lineTo(cW, cH * 0.75)
      ctx.strokeStyle = 'rgba(0,163,180,0.06)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Figures
      figureData.forEach(fig => {
        fig.phaseTimer += 0.012
        if (fig.phaseTimer > 5 && fig.phase === 0) { fig.phase = 1; fig.phaseTimer = 0 }
        else if (fig.phaseTimer > 2.5 && fig.phase === 1) { fig.phase = 2; fig.phaseTimer = 0 }
        else if (fig.phaseTimer > 3 && fig.phase === 2) { fig.phase = 0; fig.phaseTimer = 0 }

        const LERP = fig.phase === 0 ? 0.022 : 0

        fig.particles.forEach(p => {
          p.phase += 0.018
          if (fig.phase === 0 || fig.phase === 1) {
            p.x += (p.tx - p.x) * LERP
            p.y += (p.ty - p.y) * LERP
          } else {
            p.x += (Math.random() - 0.5) * 2.5
            p.y += -(0.3 + Math.random() * 0.8)
            p.alpha = Math.max(0, p.alpha - 0.005)
          }
          if (fig.phase === 0) p.alpha = Math.min(0.5 + Math.random() * 0.5, p.alpha + 0.02)

          const flicker = 0.85 + Math.sin(p.phase) * 0.15
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * flicker, 0, Math.PI * 2)
          ctx.fillStyle = fig.isCenter
            ? `rgba(0,163,180,${p.alpha})`
            : `rgba(200,210,230,${p.alpha * 0.65})`
          ctx.fill()
        })

        // Reset scattered particles
        if (fig.phase === 0 && fig.phaseTimer < 0.5) {
          fig.particles.forEach((p, i) => {
            p.x = cW * Math.random()
            p.y = cH * Math.random()
            p.alpha = 0.1
          })
        }

        // Glow beneath center figure
        if (fig.isCenter) {
          const grd = ctx.createRadialGradient(fig.cx, fig.cy + 50 * fig.scale, 0, fig.cx, fig.cy + 50 * fig.scale, 90 * fig.scale)
          grd.addColorStop(0, `rgba(0,163,180,${0.04 + Math.sin(t * 1.5) * 0.02})`)
          grd.addColorStop(1, 'rgba(0,163,180,0)')
          ctx.beginPath()
          ctx.arc(fig.cx, fig.cy + 50 * fig.scale, 90 * fig.scale, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }
      })

      // Connection lines between close particles across figures
      for (let fi = 0; fi < figureData.length - 1; fi++) {
        const a = figureData[fi].particles
        const b = figureData[fi + 1].particles
        for (let i = 0; i < 5; i++) {
          const pa = a[i * 16], pb = b[i * 16]
          if (!pa || !pb) continue
          const dx = pa.x - pb.x, dy = pa.y - pb.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(pa.x, pa.y)
            ctx.lineTo(pb.x, pb.y)
            ctx.strokeStyle = `rgba(0,163,180,${(1 - dist / 120) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
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
