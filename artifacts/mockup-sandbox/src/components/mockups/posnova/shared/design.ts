export const colors = {
  obsidian: '#0A0A0B',
  paper: '#FAFAF7',
  graphiteDeep: '#161618',
  graphite: '#1F1F22',
  charcoal: '#2E2E32',
  slate: '#44444A',
  steel: '#6B6B73',
  pewter: '#9999A1',
  silver: '#BDBDC4',
  mist: '#DDDDE0',
  pearl: '#EEEEEC',
  bone: '#F4F4F0',
  coldSteel: '#00A3B4',
  accentWarm: '#B89968',
  success: '#2D7A4B',
  error: '#8B2C2C',
}

export const fonts = {
  display: '"Playfair Display", "Georgia", serif',
  body: '"Inter", system-ui, -apple-system, sans-serif',
  mono: '"JetBrains Mono", "Courier New", monospace',
}

export const spacing = {
  s1: '4px', s2: '8px', s3: '16px', s4: '24px',
  s5: '32px', s6: '48px', s7: '64px', s8: '96px',
  s9: '128px', s10: '192px',
}

export const easing = {
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  outLong: 'cubic-bezier(0.22, 1, 0.36, 1)',
}

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500&family=Playfair+Display:wght@300;400&display=swap');

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.2; transform: scaleY(0.7); }
    50% { opacity: 0.7; transform: scaleY(1); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .posnova-root {
    font-family: "Inter", system-ui, sans-serif;
    background: #FAFAF7;
    color: #0A0A0B;
    cursor: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .posnova-root * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .posnova-cursor {
    position: fixed;
    width: 8px;
    height: 8px;
    background: #0A0A0B;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
  }

  .posnova-cursor.big {
    width: 40px;
    height: 40px;
  }

  .mono-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6B6B73;
  }

  .display-text {
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1.0;
  }

  .hairline {
    height: 1px;
    background: #6B6B73;
    width: 100%;
  }

  .hairline-animate {
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hairline-animate.visible {
    transform: scaleX(1);
  }

  .btn-primary {
    background: #0A0A0B;
    color: #FAFAF7;
    border: none;
    padding: 16px 32px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0;
    transition: background 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary:hover {
    background: #161618;
  }

  .btn-secondary {
    background: transparent;
    color: #0A0A0B;
    border: 1px solid #0A0A0B;
    padding: 15px 31px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0;
    transition: background 0.2s, color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-secondary:hover {
    background: #0A0A0B;
    color: #FAFAF7;
  }

  .btn-secondary-light {
    background: transparent;
    color: #FAFAF7;
    border: 1px solid rgba(250,250,247,0.4);
    padding: 15px 31px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 0;
    transition: background 0.2s, border-color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-secondary-light:hover {
    background: rgba(250,250,247,0.1);
    border-color: #FAFAF7;
  }

  .section-number {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    color: #6B6B73;
    text-transform: uppercase;
  }

  .card-dark {
    background: #1F1F22;
    color: #FAFAF7;
    padding: 40px;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;
  }

  .card-dark:hover {
    background: #0A0A0B;
    transform: translateY(-2px);
  }

  .card-quiet {
    background: #EEEEEC;
    color: #0A0A0B;
    padding: 40px;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;
  }

  .card-quiet:hover {
    background: #DDDDE0;
    transform: translateY(-2px);
  }

  .card-ghost {
    background: transparent;
    color: #0A0A0B;
    padding: 40px;
    border: 1px solid #DDDDE0;
    transition: border-color 0.3s, background 0.3s;
    cursor: pointer;
  }

  .card-ghost:hover {
    border-color: #6B6B73;
    background: #EEEEEC;
  }

  .link-arrow {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0A0A0B;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;
    transition: color 0.2s;
  }

  .link-arrow:hover {
    color: #6B6B73;
  }

  .link-arrow:hover .arrow-icon {
    transform: translateX(4px);
  }

  .arrow-icon {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .container-wide {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 48px;
  }

  .container-narrow {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 48px;
  }

  .container-prose {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 48px;
  }

  /* ── Responsive grid helpers ── */

  /* Semantic responsive grids used throughout pages */
  .resp-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .resp-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .resp-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 960px) {
    .resp-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
    .resp-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
  }

  @media (max-width: 640px) {
    .resp-grid-2 { grid-template-columns: 1fr !important; }
    .resp-grid-3 { grid-template-columns: 1fr !important; }
    .resp-grid-4 { grid-template-columns: 1fr !important; }
  }

  /* Scroll background morph transition */
  .posnova-root main {
    transition: background-color 0.7s cubic-bezier(0.65, 0, 0.35, 1);
  }

  @keyframes hairlineDraw {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .hairline-draw {
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hairline-draw.visible {
    transform: scaleX(1);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 48px;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1200px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .container-wide, .container-narrow, .container-prose {
      padding: 0 20px;
    }

    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }

    .btn-primary, .btn-secondary, .btn-secondary-light {
      padding: 14px 24px;
      font-size: 10px;
    }

    /* Stack 2-col grids on mobile */
    .posnova-root section .grid-2col {
      grid-template-columns: 1fr !important;
    }

    .posnova-root section .grid-3col {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }

    .display-text {
      letter-spacing: -0.02em;
    }
  }
`
