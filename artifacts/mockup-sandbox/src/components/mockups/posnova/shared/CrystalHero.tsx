import { useEffect, useRef } from 'react'

interface CrystalHeroProps {
  height?: number
}

export function CrystalHero({ height = 700 }: CrystalHeroProps) {
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

    const W = () => canvas.width
    const H = () => canvas.height

    // Mouse tracking
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / canvas.offsetWidth - 0.5) * 2
      mouse.y = -((e.clientY - rect.top) / canvas.offsetHeight - 0.5) * 2
    }
    canvas.addEventListener('mousemove', onMouseMove)

    // Particle field
    const PART_COUNT = 220
    const particles = Array.from({ length: PART_COUNT }, () => {
      const accent = Math.random() < 0.18
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 0.8 + Math.random() * 1.8,
        alpha: 0.15 + Math.random() * 0.55,
        accent,
        phase: Math.random() * Math.PI * 2,
      }
    })

    // Crystal vertices: icosahedron-like projection
    function buildIcosa(cx: number, cy: number, R: number, rotX: number, rotY: number, rotZ: number) {
      const phi = (1 + Math.sqrt(5)) / 2
      const verts3D = [
        [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
        [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
        [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1],
      ].map(([x, y, z]) => {
        // Normalize
        const l = Math.sqrt(x * x + y * y + z * z)
        return [x / l * R, y / l * R, z / l * R]
      })

      // Rotate
      function rotX3D(v: number[], a: number) {
        return [v[0], v[1] * Math.cos(a) - v[2] * Math.sin(a), v[1] * Math.sin(a) + v[2] * Math.cos(a)]
      }
      function rotY3D(v: number[], a: number) {
        return [v[0] * Math.cos(a) + v[2] * Math.sin(a), v[1], -v[0] * Math.sin(a) + v[2] * Math.cos(a)]
      }
      function rotZ3D(v: number[], a: number) {
        return [v[0] * Math.cos(a) - v[1] * Math.sin(a), v[0] * Math.sin(a) + v[1] * Math.cos(a), v[2]]
      }

      const rotated = verts3D.map(v => rotZ3D(rotY3D(rotX3D(v, rotX), rotY), rotZ))

      // Project (simple perspective)
      const fov = 3.5
      return rotated.map(v => {
        const z = v[2] + fov * R
        const scale = fov * R / z
        return { x: cx + v[0] * scale, y: cy + v[1] * scale, z: v[2], depth: z }
      })
    }

    // Icosa edges
    const EDGES = [
      [0,1],[0,4],[0,5],[0,8],[0,9],
      [1,6],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,5],[2,10],[2,11],
      [3,6],[3,7],[3,10],[3,11],
      [4,5],[4,8],[4,10],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,9],[7,11],
      [8,10],[9,11],
    ]

    let frameId: number
    let t = 0
    let currentRotX = 0, currentRotY = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.007
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = W(), h = H()
      const cx = w * 0.62, cy = h * 0.50
      const R = Math.min(w, h) * 0.22

      // Mouse-driven rotation with inertia
      currentRotX += (mouse.y * 0.4 - currentRotX) * 0.04
      currentRotY += (mouse.x * 0.5 - currentRotY) * 0.04

      const rX = currentRotX + t * 0.18
      const rY = currentRotY + t * 0.25
      const rZ = t * 0.08

      const verts = buildIcosa(cx, cy, R, rX, rY, rZ)

      // Sort edges by average depth for painter's algorithm
      const sortedEdges = EDGES
        .map(([a, b]) => ({ a, b, depth: (verts[a].depth + verts[b].depth) / 2 }))
        .sort((x, y) => x.depth - y.depth)

      // Draw face glow behind edges
      ctx.save()
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.3)
      grd.addColorStop(0, `rgba(0,163,180,${0.04 + Math.sin(t * 1.5) * 0.02})`)
      grd.addColorStop(0.4, `rgba(0,163,180,${0.02})`)
      grd.addColorStop(1, 'rgba(0,163,180,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()
      ctx.restore()

      // Draw crystal edges
      sortedEdges.forEach(({ a, b, depth }) => {
        const va = verts[a], vb = verts[b]
        const normDepth = Math.max(0, Math.min(1, (depth - R * 0.5) / (R * 2)))
        const alpha = 0.08 + normDepth * 0.3
        ctx.beginPath()
        ctx.moveTo(va.x, va.y)
        ctx.lineTo(vb.x, vb.y)
        ctx.strokeStyle = normDepth > 0.6 ? `rgba(0,163,180,${alpha})` : `rgba(200,220,230,${alpha * 0.7})`
        ctx.lineWidth = 0.8 + normDepth * 0.6
        ctx.stroke()
      })

      // Draw crystal vertices
      verts.forEach(v => {
        const normDepth = Math.max(0, Math.min(1, (v.depth - R * 0.5) / (R * 2)))
        if (normDepth < 0.1) return
        ctx.beginPath()
        ctx.arc(v.x, v.y, 1.5 + normDepth * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,163,180,${0.2 + normDepth * 0.5})`
        ctx.fill()
      })

      // Inner core pulse
      const pulse = 0.85 + Math.sin(t * 2.2) * 0.15
      const coreGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.45 * pulse)
      coreGrd.addColorStop(0, `rgba(0,163,180,${0.18 * pulse})`)
      coreGrd.addColorStop(0.6, `rgba(0,163,180,${0.05})`)
      coreGrd.addColorStop(1, 'rgba(0,163,180,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 0.45 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = coreGrd
      ctx.fill()

      // Outer torus rings (simulated)
      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(1, 0.35)
      ctx.beginPath()
      ctx.arc(0, 0, R * 1.55, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0,163,180,${0.12 + Math.sin(t * 0.8) * 0.04})`
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, 0, R * 1.3, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255,255,255,${0.05 + Math.sin(t * 0.6) * 0.02})`
      ctx.lineWidth = 0.6
      ctx.stroke()
      ctx.restore()

      // Particles
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.phase += 0.02
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const a = p.alpha * (0.7 + Math.sin(p.phase) * 0.3)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.accent
          ? `rgba(0,163,180,${a})`
          : `rgba(255,255,255,${a * 0.35})`
        ctx.fill()
      })

      // Connecting lines between nearby particles
      for (let i = 0; i < Math.min(40, particles.length); i++) {
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,163,180,${(1 - dist / 90) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }
    animate()

    const handleResize = () => { setSize() }
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
