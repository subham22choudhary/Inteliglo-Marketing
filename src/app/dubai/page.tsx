


'use client'

import { useEffect, useRef } from 'react'

/* ── Types ── */
interface StatCardProps {
    label: string
    value: React.ReactNode
    sub: string
}

interface StatMiniProps {
    val: string
    label: string
}

interface FeatureItemProps {
    icon: string
    gold?: boolean
    title: string
    desc: string
}

interface ProcessCardProps {
    num: string
    title: string
    desc: string
    cta: { label: string; href: string; primary?: boolean }
}

interface ProofCardProps {
    text: string
    initials: string
    name: string
    role: string
}

/* ── Sub-components ── */
function StatCard({ label, value, sub }: StatCardProps) {
    return (
        <div className="stat-card">
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-sub">{sub}</div>
        </div>
    )
}

function StatMini({ val, label }: StatMiniProps) {
    return (
        <div className="stat-mini">
            <div className="stat-mini-val">{val}</div>
            <div className="stat-mini-label">{label}</div>
        </div>
    )
}

function FeatureItem({ icon, gold = false, title, desc }: FeatureItemProps) {
    return (
        <div className="feature-item fade-up">
            <div className={`feat-icon${gold ? ' gold' : ''}`}>{icon}</div>
            <div className="feat-body">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

function ProcessCard({ num, title, desc, cta }: ProcessCardProps) {
    return (
        <div className="process-card fade-up">
            <div className="process-num">{num}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className="process-cta">
                <a
                    className={cta.primary ? 'btn-primary' : 'btn-ghost'}
                    href={cta.href}
                    style={{ fontSize: '13px', padding: cta.primary ? '11px 22px' : '10px 22px' }}
                >
                    {cta.label}
                </a>
            </div>
        </div>
    )
}

function ProofCard({ text, initials, name, role }: ProofCardProps) {
    return (
        <div className="proof-card fade-up">
            <div className="proof-stars">★★★★★</div>
            <p className="proof-text">&ldquo;{text}&rdquo;</p>
            <div className="proof-author">
                <div className="proof-avatar">{initials}</div>
                <div>
                    <div className="proof-name">{name}</div>
                    <div className="proof-role">{role}</div>
                </div>
            </div>
        </div>
    )
}

/* ── Jellyfish Canvas ── */
function JellyfishCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let W = 0
        let H = 0
        let animId: number

        function resize() {
            W = canvas!.width = window.innerWidth
            H = canvas!.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const COLORS: [string, string][] = [
            ['rgba(0, 212, 255, ', 'rgba(0, 180, 220, '],
            ['rgba(124, 58, 237, ', 'rgba(100, 40, 200, '],
            ['rgba(201, 168, 76, ', 'rgba(180, 140, 50, '],
            ['rgba(0, 180, 200, ', 'rgba(80, 40, 180, '],
        ]

        class Jellyfish {
            c1 = ''
            c2 = ''
            x = 0
            y = 0
            r = 0
            speed = 0
            drift = 0
            phase = 0
            phaseSpd = 0
            tentacles = 0
            opacity = 0
            pulseAmt = 0

            constructor() { this.reset(true) }

            reset(init: boolean) {
                const col = COLORS[Math.floor(Math.random() * COLORS.length)]
                this.c1 = col[0]
                this.c2 = col[1]
                this.x = Math.random() * W
                this.y = init ? Math.random() * H : H + 120
                this.r = 28 + Math.random() * 44
                this.speed = 0.18 + Math.random() * 0.28
                this.drift = (Math.random() - 0.5) * 0.22
                this.phase = Math.random() * Math.PI * 2
                this.phaseSpd = 0.012 + Math.random() * 0.016
                this.tentacles = 5 + Math.floor(Math.random() * 5)
                this.opacity = 0.12 + Math.random() * 0.22
                this.pulseAmt = 0.08 + Math.random() * 0.12
            }

            draw() {
                const pulse = 1 + Math.sin(this.phase) * this.pulseAmt
                const rX = this.r * pulse
                const rY = this.r * 0.62 * pulse
                const al = this.opacity

                ctx!.save()
                ctx!.translate(this.x, this.y)

                const grad = ctx!.createRadialGradient(0, -rY * 0.3, 0, 0, 0, rX * 1.2)
                grad.addColorStop(0, this.c1 + al * 0.9 + ')')
                grad.addColorStop(0.6, this.c1 + al * 0.4 + ')')
                grad.addColorStop(1, this.c2 + '0)')

                ctx!.beginPath()
                ctx!.ellipse(0, 0, rX, rY, 0, Math.PI, 0)
                ctx!.closePath()
                ctx!.fillStyle = grad
                ctx!.fill()

                ctx!.beginPath()
                ctx!.ellipse(0, 0, rX, rY * 0.18, 0, 0, Math.PI * 2)
                ctx!.strokeStyle = this.c1 + al * 0.6 + ')'
                ctx!.lineWidth = 1.5
                ctx!.stroke()

                ctx!.beginPath()
                ctx!.ellipse(0, -rY * 0.3, rX * 0.55, rY * 0.38, 0, Math.PI, 0)
                ctx!.fillStyle = this.c1 + al * 0.18 + ')'
                ctx!.fill()

                const gap = (rX * 1.6) / (this.tentacles - 1)
                const startX = -rX * 0.8

                for (let i = 0; i < this.tentacles; i++) {
                    const tx = startX + i * gap
                    const tLen = rY * 1.8 + Math.random() * rY * 0.6
                    ctx!.beginPath()
                    ctx!.moveTo(tx, rY * 0.05)
                    for (let j = 1; j <= 6; j++) {
                        const sy = rY * 0.05 + (tLen / 6) * j
                        const sx = tx + Math.sin(this.phase * 1.4 + i * 1.1 + j * 0.7) * (8 + j * 1.5)
                        ctx!.lineTo(sx, sy)
                    }
                    ctx!.strokeStyle = this.c1 + al * (0.5 - i * 0.02) + ')'
                    ctx!.lineWidth = 1
                    ctx!.stroke()
                }

                ctx!.restore()
            }

            update() {
                this.y -= this.speed
                this.x += this.drift + Math.sin(this.phase * 0.7) * 0.25
                this.phase += this.phaseSpd
                if (this.y < -this.r * 3) this.reset(false)
            }
        }

        const jellies = Array.from({ length: 10 }, () => new Jellyfish())

        function loop() {
            ctx!.clearRect(0, 0, W, H)
            jellies.forEach((j) => { j.update(); j.draw() })
            animId = requestAnimationFrame(loop)
        }
        loop()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            id="jelly-canvas"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.55,
            }}
        />
    )
}

/* ── Fade-up Observer ── */
function useFadeUp() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('visible')
                }),
            { threshold: 0.08 }
        )
        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}

/* ── Main Page Component ── */
export default function InteligloLanding() {
    useFadeUp()

    const trustItems = [
        'Website Development', 'AI Automation', 'Paid Advertising', 'WhatsApp Marketing',
        'Cybersecurity', 'SEO Services', 'AI Chatbots', 'Branding & Design',
        'Video Production', 'CRO & Analytics',
    ]

    return (
        <>
            <style>{`
        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #07070e; color: #dcdcf0; line-height: 1.6; overflow-x: hidden; }

        .container { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

        /* ── NAV ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 18px 0;
          background: rgba(7,7,14,0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-size: 22px; font-weight: 800; color: #fff; text-decoration: none; letter-spacing: -0.02em; }
        .nav-logo em { font-style: normal; color: #00d4ff; }
        .nav-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #00d4ff; color: #07070e; font-weight: 700; font-size: 13px;
          padding: 10px 22px; border-radius: 100px; text-decoration: none; transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* ── HERO ── */
        .hero {
          position: relative; z-index: 1; min-height: 100vh;
          display: flex; align-items: center; padding: 140px 0 100px; overflow: hidden;
        }
        .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.10); border: 1px solid rgba(201,168,76,0.28);
          border-radius: 100px; padding: 6px 16px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #c9a84c; margin-bottom: 28px;
        }
        .pulse-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #c9a84c;
          animation: pulse-g 2s infinite;
        }
        @keyframes pulse-g {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(201,168,76,0); }
        }
        .hero h1 {
          font-size: clamp(42px, 3.5vw, 61px); font-weight: 800;
          line-height: 1.06; letter-spacing: -0.025em; color: #fff; margin-bottom: 26px;
        }
        .rgb-word {
          font-style: normal;
          background: linear-gradient(90deg,#ff0080,#ff8c00,#ffe600,#00ff88,#00cfff,#9b59ff,#ff0080);
          background-size: 300% 100%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: rgb-shift 4s linear infinite;
        }
        @keyframes rgb-shift { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
        .hero-sub { font-size: 17px; color: #7a7a9a; max-width: 500px; line-height: 1.8; margin-bottom: 44px; }
        .cta-group { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg,#00d4ff 0%,#7c3aed 100%);
          color: #fff; font-weight: 700; font-size: 14px;
          padding: 15px 30px; border-radius: 100px; border: none;
          cursor: pointer; text-decoration: none; transition: all 0.25s;
        }
        .btn-primary:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 9px;
          background: transparent; color: #fff; font-weight: 600; font-size: 14px;
          padding: 14px 26px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer; text-decoration: none; transition: all 0.25s;
        }
        .btn-ghost:hover { border-color: #c9a84c; color: #c9a84c; background: rgba(201,168,76,0.10); }
        .btn-gold {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg,#c9a84c,#e8c96a);
          color: #07070e; font-weight: 800; font-size: 15px;
          padding: 18px 40px; border-radius: 100px; text-decoration: none; transition: all 0.25s;
        }
        .btn-gold:hover { transform: translateY(-3px); filter: brightness(1.08); }

        /* ── STAT CARDS ── */
        .stat-card {
          background: rgba(15,15,29,0.85); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 24px 28px; backdrop-filter: blur(10px);
          position: relative; overflow: hidden; transition: transform 0.3s, border-color 0.3s;
        }
        .stat-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,transparent,#00d4ff,transparent); opacity: 0.35;
        }
        .stat-card:hover { transform: translateX(5px); border-color: rgba(0,212,255,0.18); }
        .stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #7a7a9a; margin-bottom: 8px; }
        .stat-value { font-size: 38px; font-weight: 800; color: #fff; line-height: 1; }
        .stat-value span { color: #00d4ff; }
        .stat-sub { font-size: 13px; color: #7a7a9a; margin-top: 6px; }
        .stat-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .stat-mini {
          background: rgba(15,15,29,0.85); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 20px 22px; backdrop-filter: blur(10px);
        }
        .stat-mini-val { font-size: 30px; font-weight: 800; color: #c9a84c; }
        .stat-mini-label { font-size: 12px; color: #7a7a9a; margin-top: 4px; }
        .hero-right { display: flex; flex-direction: column; gap: 14px; }

        /* ── TRUST STRIP ── */
        .trust-strip {
          position: relative; z-index: 1; background: #0c0c18;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 18px 0; overflow: hidden;
        }
        .trust-track { display: flex; gap: 48px; width: max-content; animation: scroll-left 28s linear infinite; }
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .trust-item {
          display: flex; align-items: center; gap: 10px; white-space: nowrap;
          font-size: 12px; font-weight: 600; color: #7a7a9a; letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ── SECTION ATOMS ── */
        .section-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #00d4ff; margin-bottom: 14px; }
        .section-eyebrow.gold { color: #c9a84c; }
        .section-title { font-size: clamp(30px,3.8vw,52px); font-weight: 800; line-height: 1.1; color: #fff; margin-bottom: 18px; letter-spacing: -0.02em; }
        .section-desc { font-size: 16px; color: #7a7a9a; line-height: 1.8; }

        /* ── WHY SECTION ── */
        .why-section { position: relative; z-index: 1; padding: 120px 0; background: #07070e; }
        .why-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 72px; }
        .why-header { margin-bottom: 44px; }
        .why-header .section-desc { max-width: 480px; }
        .feature-list { display: flex; flex-direction: column; gap: 18px; }
        .feature-item {
          display: flex; gap: 16px; align-items: flex-start;
          background: #0f0f1d; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 22px 24px; transition: border-color 0.3s, transform 0.3s;
        }
        .feature-item:hover { border-color: rgba(0,212,255,0.2); transform: translateX(-4px); }
        .feat-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(0,212,255,0.10); border: 1px solid rgba(0,212,255,0.18);
          display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;
        }
        .feat-icon.gold { background: rgba(201,168,76,0.10); border-color: rgba(201,168,76,0.22); }
        .feat-body h4 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .feat-body p { font-size: 13.5px; color: #7a7a9a; line-height: 1.65; }
        .why-cta { margin-top: 36px; }

        /* ── UAE CARD ── */
        .uae-card {
          background: linear-gradient(145deg,#111120 0%,rgba(20,20,38,0.9) 100%);
          border: 1px solid rgba(201,168,76,0.22); border-radius: 20px;
          padding: 48px 44px; position: sticky; top: 100px; overflow: hidden;
        }
        .uae-card::after {
          content: ''; position: absolute; top: -100px; right: -100px;
          width: 240px; height: 240px; border-radius: 50%;
          background: radial-gradient(circle,rgba(201,168,76,0.12),transparent 70%); pointer-events: none;
        }
        .uae-flag { font-size: 52px; margin-bottom: 22px; display: block; }
        .uae-card h3 { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.2; }
        .uae-card p { font-size: 15px; color: #7a7a9a; line-height: 1.85; margin-bottom: 36px; }
        .uae-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .uae-stat-val { font-size: 32px; font-weight: 800; color: #c9a84c; }
        .uae-stat-label { font-size: 12px; color: #7a7a9a; margin-top: 4px; line-height: 1.4; }

        /* ── PROCESS ── */
        .process-section { position: relative; z-index: 1; padding: 120px 0; background: #0c0c18; }
        .process-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-bottom: 80px; }
        .process-header-right p { font-size: 16px; color: #7a7a9a; line-height: 1.8; margin-bottom: 32px; }
        .process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .process-card {
          background: #0f0f1d; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 32px 30px; position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .process-card:hover { border-color: rgba(0,212,255,0.18); transform: translateY(-3px); }
        .process-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg,#00d4ff,#7c3aed); opacity: 0; transition: opacity 0.3s;
        }
        .process-card:hover::before { opacity: 1; }
        .process-num { font-size: 48px; font-weight: 800; color: rgba(0,212,255,0.08); line-height: 1; margin-bottom: 16px; letter-spacing: -0.03em; }
        .process-card h4 { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 10px; line-height: 1.3; }
        .process-card p { font-size: 14px; color: #7a7a9a; line-height: 1.7; }
        .process-cta { margin-top: 16px; }

        /* ── PROOF ── */
        .proof-section { position: relative; z-index: 1; padding: 120px 0; background: #07070e; }
        .proof-header { text-align: center; margin-bottom: 64px; }
        .proof-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .proof-card {
          background: #0f0f1d; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 30px 28px; transition: border-color 0.3s, transform 0.3s;
        }
        .proof-card:hover { border-color: rgba(0,212,255,0.18); transform: translateY(-4px); }
        .proof-stars { color: #c9a84c; font-size: 13px; letter-spacing: 3px; margin-bottom: 16px; }
        .proof-text { font-size: 14px; color: #7a7a9a; line-height: 1.8; margin-bottom: 20px; font-style: italic; }
        .proof-author { display: flex; align-items: center; gap: 12px; }
        .proof-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg,#00d4ff,#7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; color: #fff; font-size: 13px; flex-shrink: 0;
        }
        .proof-name { font-size: 14px; font-weight: 700; color: #fff; }
        .proof-role { font-size: 12px; color: #7a7a9a; }
        .proof-cta { text-align: center; margin-top: 56px; }

        /* ── BIG CTA ── */
        .cta-section { position: relative; z-index: 1; padding: 140px 0; background: #0c0c18; text-align: center; overflow: hidden; }
        .cta-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%); pointer-events: none;
        }
        .cta-inner { position: relative; z-index: 1; }
        .cta-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(0,212,255,0.07); border: 1px solid rgba(0,212,255,0.22);
          border-radius: 100px; padding: 6px 16px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #00d4ff; margin-bottom: 28px;
        }
        .cta-title { font-size: clamp(38px,5vw,68px); font-weight: 800; line-height: 1.06; color: #fff; margin-bottom: 20px; letter-spacing: -0.02em; }
        .cta-title em { font-style: normal; color: #c9a84c; }
        .cta-sub { font-size: 17px; color: #7a7a9a; max-width: 500px; margin: 0 auto 52px; line-height: 1.8; }
        .cta-actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .cta-note { margin-top: 22px; font-size: 13px; color: #7a7a9a; }
        .cta-note span { color: #00d4ff; }

        /* ── FOOTER ── */
        footer { position: relative; z-index: 1; background: #050509; border-top: 1px solid rgba(255,255,255,0.06); padding: 28px 0; text-align: center; }
        footer p { font-size: 13px; color: #7a7a9a; }
        footer span { color: #00d4ff; }

        /* ── FADE UP ── */
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-right { display: none; }
          .why-layout { grid-template-columns: 1fr; gap: 56px; }
          .uae-card { position: static; }
          .process-header { grid-template-columns: 1fr; gap: 32px; }
          .process-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .container { padding: 0 20px; }
          .proof-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
          .uae-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

            <JellyfishCanvas />

            {/* NAV */}
            <nav>
                <div className="container">
                    <div className="nav-inner">
                        <a className="nav-logo" href="/">
                            Inteli<em>glo</em>
                        </a>
                        <a className="nav-cta" href="#cta">
                            🚀 Get Started
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        <div className="hero-left fade-up">
                            <div className="hero-badge">
                                <span className="pulse-dot" />
                                Now Serving Dubai &amp; the Middle East
                            </div>
                            <h1>
                                Your Brand, <br />
                                Built to <em className="rgb-word">Dominate</em>
                                <br />
                                the Middle East
                            </h1>
                            <p className="hero-sub">
                                Inteliglo brings AI-powered marketing, world-class web development, and enterprise
                                cybersecurity to Dubai, UAE, and the wider GCC — all under one roof. One partner.
                                Zero gaps.
                            </p>
                            <div className="cta-group">
                                <a className="btn-primary" href="#cta">
                                    📞 Book a Free Consult
                                </a>
                                <a className="btn-ghost" href="https://wa.me/918860686869" target="_blank" rel="noreferrer">
                                    💬 WhatsApp Us
                                </a>
                            </div>
                        </div>

                        <div className="hero-right">
                            <StatCard
                                label="Average ROI Delivered"
                                value={<><span>3×</span> Growth</>}
                                sub="Across 50+ global clients in 18 months"
                            />
                            <div className="stat-row">
                                <StatMini val="150+" label="Projects Delivered" />
                                <StatMini val="20+" label="Core Services" />
                            </div>
                            <StatCard
                                label="AI Ticket Resolution Rate"
                                value={<><span>85%</span></>}
                                sub="AI support — zero wait time, zero agents needed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}
            <div className="trust-strip">
                <div className="trust-track">
                    {[...trustItems, ...trustItems].map((item, i) => (
                        <div className="trust-item" key={i}>
                            ✦ {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* WHY SECTION */}
            <section className="why-section">
                <div className="container">
                    <div className="why-layout">
                        <div className="why-left">
                            <div className="why-header fade-up">
                                <div className="section-eyebrow gold">Built for the GCC Market</div>
                                <h2 className="section-title">Why Middle East Brands Choose Inteliglo</h2>
                                <p className="section-desc">
                                    The digital landscape in Dubai and the GCC is fiercely competitive. You need a
                                    partner who&apos;s not just technically excellent — but strategically relentless.
                                </p>
                            </div>
                            <div className="feature-list">
                                <FeatureItem
                                    icon="🧠"
                                    title="AI-First, Not AI-Hype"
                                    desc="We embed real AI into every layer — from customer support bots to automated sales teams that work 24/7 without hiring headcount."
                                />
                                <FeatureItem
                                    icon="🌍"
                                    gold
                                    title="Global Reach, Regional Understanding"
                                    desc="We understand Arabic-market audiences, bilingual UX requirements, and GCC-specific platforms including WhatsApp-first communication culture."
                                />
                                <FeatureItem
                                    icon="⚡"
                                    title="One Partner for Everything"
                                    desc="No juggling 6 agencies. Strategy, design, dev, ads, AI, and security — unified under one account team that speaks outcomes, not deliverables."
                                />
                                <FeatureItem
                                    icon="🛡️"
                                    gold
                                    title="Enterprise Security, Startup Speed"
                                    desc="Penetration testing, threat monitoring, and cloud-grade security baked in — your digital assets stay protected as you scale fast."
                                />
                            </div>
                            <div className="why-cta fade-up">
                                <a className="btn-primary" href="#cta">
                                    Get Your Free Strategy Call →
                                </a>
                            </div>
                        </div>

                        <div className="why-right fade-up">
                            <div className="uae-card">
                                <span className="uae-flag">🇦🇪</span>
                                <h3>Powering the Next Wave of GCC Digital Leaders</h3>
                                <p>
                                    From Dubai&apos;s DIFC fintech sector to Abu Dhabi&apos;s enterprise market and
                                    Saudi Arabia&apos;s Vision 2030 brands — Inteliglo is built to serve the ambition
                                    of the region&apos;s fastest-growing companies.
                                </p>
                                <div className="uae-stats">
                                    {[
                                        { val: '24/7', label: 'Support, no timezone delays' },
                                        { val: '<24h', label: 'Response time, guaranteed' },
                                        { val: '30min', label: 'Free discovery call' },
                                        { val: '3×', label: 'Avg ROI for our clients' },
                                    ].map((s) => (
                                        <div key={s.val}>
                                            <div className="uae-stat-val">{s.val}</div>
                                            <div className="uae-stat-label">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section">
                <div className="container">
                    <div className="process-header">
                        <div className="process-header-left fade-up">
                            <div className="section-eyebrow">The Inteliglo Protocol</div>
                            <h2 className="section-title">
                                From Brief to
                                <br />
                                Breakthrough — Fast
                            </h2>
                        </div>
                        <div className="process-header-right fade-up">
                            <p>
                                A proven execution system trusted by 50+ global brands. No fluff, no delays. Every
                                engagement follows four clear stages, each designed to compound your results.
                            </p>
                            <a className="btn-ghost" href="#cta">
                                Start Your Journey →
                            </a>
                        </div>
                    </div>
                    <div className="process-grid">
                        <ProcessCard
                            num="01"
                            title="Discovery Call — 30 Minutes, Zero Obligation"
                            desc="We learn your business, your market, your competition, and your biggest bottlenecks. You leave with a clear picture of what's possible — and what's holding you back."
                            cta={{ label: 'Book Your Call →', href: '#cta', primary: true }}
                        />
                        <ProcessCard
                            num="02"
                            title="Custom Growth Roadmap — Delivered in 48hrs"
                            desc="A tailored digital strategy built for your specific sector, audience, and goals — not a template. Includes prioritized initiatives, timelines, and projected ROI."
                            cta={{ label: 'Get Your Roadmap →', href: '#cta' }}
                        />
                        <ProcessCard
                            num="03"
                            title="Rapid Build & Launch"
                            desc="Our engineers and creatives move fast. Production-grade work delivered with precision — websites, campaigns, automations — all go live simultaneously."
                            cta={{ label: 'See Our Work →', href: '#cta' }}
                        />
                        <ProcessCard
                            num="04"
                            title="Ongoing Optimization — Month Over Month Growth"
                            desc="We don't just launch and leave. Continuous A/B testing, AI insights, and data-driven refinements compound your results into an unfair competitive advantage."
                            cta={{ label: 'Start Growing →', href: '#cta', primary: true }}
                        />
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="proof-section">
                <div className="container">
                    <div className="proof-header fade-up">
                        <div className="section-eyebrow" style={{ textAlign: 'center' }}>
                            What Our Clients Say
                        </div>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 0 }}>
                            Results That Speak
                            <br />
                            for Themselves
                        </h2>
                    </div>
                    <div className="proof-grid">
                        <ProofCard
                            text="Inteliglo completely transformed our digital presence. Our lead volume tripled within the first three months. The AI chatbot alone handles 80% of our inbound without any human intervention."
                            initials="AR"
                            name="Ahmed R."
                            role="CEO, E-Commerce Brand — Dubai"
                        />
                        <ProofCard
                            text="The paid ads team cut our cost per lead by 60% while doubling our conversion rate. These people understand the GCC market in a way no other agency we've worked with has."
                            initials="FM"
                            name="Fatima M."
                            role="Marketing Director — Abu Dhabi Real Estate"
                        />
                        <ProofCard
                            text="From website rebuild to WhatsApp drip campaigns and AI calling — Inteliglo is the only vendor we need. The ROI dashboard alone has changed how we make decisions as a company."
                            initials="KS"
                            name="Khalid S."
                            role="Founder, SaaS Startup — Riyadh"
                        />
                    </div>
                    <div className="proof-cta fade-up">
                        <a className="btn-primary" href="#cta">
                            Join 50+ Growing Brands →
                        </a>
                    </div>
                </div>
            </section>

            {/* BIG CTA */}
            <section className="cta-section" id="cta">
                <div className="cta-glow" />
                <div className="container">
                    <div className="cta-inner fade-up">
                        <div className="cta-badge">📍 Serving Dubai, UAE &amp; the GCC</div>
                        <h2 className="cta-title">
                            Ready to Scale
                            <br />
                            Your Brand <em>Now?</em>
                        </h2>
                        <p className="cta-sub">
                            One free 30-minute call is all it takes. Our team will map out a custom growth
                            strategy — no commitment, no sales pressure.
                        </p>
                        <div className="cta-actions">
                            <a className="btn-gold" href="tel:+918860686869">
                                📞 Call Now — +91 8210219654
                            </a>
                            <a className="btn-ghost" href="https://wa.me/918860686869" target="_blank" rel="noreferrer">
                                💬 WhatsApp Our Team
                            </a>
                        </div>
                        <div className="cta-note">
                            <span>✦ Free Strategy Call</span> · <span>✦ Response in &lt;24hrs</span> ·{' '}
                            <span>✦ No Obligation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} <span>Inteliglo</span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}