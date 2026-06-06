import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Support | Inteliglo',
  description: 'Reach out to Inteliglo for technical support, project queries, or anything else. Our team responds within 24 hours.',
}

export default function SupportPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .support-body { font-family: 'Courier New', monospace; background: #0a0a0a; color: #e8e8e0; min-height: 100vh; }
        .support-header { border-bottom: 1px solid #222; padding: 1.2rem 2rem; display: flex; align-items: center; justify-content: space-between; }
        .support-logo { font-size: 1.1rem; letter-spacing: 0.15em; color: #00ff88; font-weight: bold; text-decoration: none; }
        .support-nav a { color: #888; text-decoration: none; margin-left: 2rem; font-size: 0.85rem; letter-spacing: 0.05em; transition: color 0.2s; }
        .support-nav a:hover { color: #00ff88; }
        .support-hero { padding: 4rem 2rem 2rem; max-width: 900px; margin: 0 auto; }
        .support-tag { font-size: 0.75rem; color: #00ff88; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem; }
        .support-h1 { font-size: 2.8rem; line-height: 1.1; color: #f0f0e8; margin-bottom: 1rem; letter-spacing: -0.02em; font-family: Georgia, serif; }
        .support-h1 span { color: #00ff88; }
        .support-sub { color: #888; font-size: 1rem; line-height: 1.7; max-width: 520px; font-family: Georgia, serif; }
        .support-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 900px; margin: 3rem auto; padding: 0 2rem; }
        .support-card { border: 1px solid #222; padding: 2rem; background: #111; }
        .support-card-icon { font-size: 1.5rem; margin-bottom: 1rem; color: #00ff88; }
        .support-card h3 { font-size: 1rem; letter-spacing: 0.1em; color: #f0f0e8; margin-bottom: 0.5rem; text-transform: uppercase; font-family: 'Courier New', monospace; }
        .support-card p { color: #888; font-size: 0.9rem; line-height: 1.7; font-family: Georgia, serif; }
        .support-card a { color: #00ff88; text-decoration: none; }
        .support-card a:hover { text-decoration: underline; }
        .support-address-block { max-width: 900px; margin: 0 auto; padding: 0 2rem 2rem; }
        .support-address-card { border: 1px solid #2a2a2a; padding: 2rem; background: #111; display: flex; gap: 3rem; flex-wrap: wrap; }
        .support-address-card h3 { font-size: 0.75rem; letter-spacing: 0.2em; color: #00ff88; text-transform: uppercase; margin-bottom: 0.75rem; }
        .support-address-card p { color: #ccc; font-size: 0.95rem; line-height: 1.8; font-family: Georgia, serif; }
        .support-hours-table { margin-top: 1.5rem; width: 100%; border-collapse: collapse; }
        .support-hours-table td { padding: 0.5rem 0; font-size: 0.9rem; border-bottom: 1px solid #1a1a1a; }
        .support-hours-table td:first-child { color: #888; width: 160px; }
        .support-hours-table td:last-child { color: #e8e8e0; }
        .support-form-section { max-width: 900px; margin: 0 auto; padding: 0 2rem 4rem; }
        .support-form-section h2 { font-size: 1.5rem; color: #f0f0e8; margin-bottom: 2rem; font-family: Georgia, serif; }
        .support-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .support-form-grid input,
        .support-form-grid textarea,
        .support-form-grid select { width: 100%; background: #111; border: 1px solid #222; color: #e8e8e0; padding: 0.75rem 1rem; font-family: 'Courier New', monospace; font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
        .support-form-grid input:focus,
        .support-form-grid textarea:focus,
        .support-form-grid select:focus { border-color: #00ff88; }
        .support-form-grid textarea { height: 120px; resize: vertical; }
        .support-form-grid .full { grid-column: 1 / -1; }
        .support-label { display: block; font-size: 0.75rem; letter-spacing: 0.1em; color: #888; text-transform: uppercase; margin-bottom: 0.4rem; }
        .support-btn { background: #00ff88; color: #0a0a0a; border: none; padding: 0.85rem 2.5rem; font-family: 'Courier New', monospace; font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; font-weight: bold; display: inline-block; margin-top: 1rem; }
        .support-btn:hover { background: #00cc6e; }
        .support-footer { border-top: 1px solid #1a1a1a; padding: 2rem; text-align: center; color: #444; font-size: 0.8rem; letter-spacing: 0.05em; }
        .support-footer a { color: #555; text-decoration: none; }
        .support-footer a:hover { color: #00ff88; }
        @media (max-width: 600px) {
          .support-grid { grid-template-columns: 1fr; }
          .support-form-grid { grid-template-columns: 1fr; }
          .support-form-grid .full { grid-column: 1; }
          .support-h1 { font-size: 2rem; }
          .support-nav a { margin-left: 1rem; }
        }
      `}</style>

      <div className="support-body">
        <header className="support-header">
          <a href="/" className="support-logo">INTELIGLO</a>
          <nav className="support-nav">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/support" style={{ color: '#00ff88' }}>Support</a>
          </nav>
        </header>

        <div className="support-hero">
          <div className="support-tag">// Contact &amp; Support</div>
          <h1 className="support-h1">We&apos;re Here.<br /><span>Let&apos;s Talk.</span></h1>
          <p className="support-sub">Reach out for technical support, project queries, or anything else. Our team responds within 24 hours — faster for critical issues.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <div className="support-card-icon">✉</div>
            <h3>Email Support</h3>
            <p>Send us a message anytime.<br /><a href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a></p>
          </div>
          <div className="support-card">
            <div className="support-card-icon">☎</div>
            <h3>Phone Support</h3>
            <p>Call us on our domestic India number.<br /><a href="tel:+918860686869">+91 88606 86869</a><br /><span style={{ fontSize: '0.8rem', color: '#555' }}>Mon–Sat, 9AM–7PM IST</span></p>
          </div>
          <div className="support-card">
            <div className="support-card-icon">◎</div>
            <h3>Response Time</h3>
            <p>We aim to respond to all queries within <strong style={{ color: '#e8e8e0' }}>24 hours</strong> on business days (Monday–Saturday).</p>
          </div>
          <div className="support-card">
            <div className="support-card-icon">◈</div>
            <h3>Free Consultation</h3>
            <p>Book a complimentary <strong style={{ color: '#e8e8e0' }}>30-minute discovery call</strong> to discuss your project and requirements.</p>
          </div>
        </div>

        <div className="support-address-block">
          <div className="support-address-card">
            <div>
              <h3>Registered Office Address</h3>
              <p>
                Inteliglo Digital Intelligence Pvt. Ltd.<br />
                India — Serving Clients Worldwide<br />
                <span style={{ color: '#555', fontSize: '0.85rem' }}>(Full registered address available upon request)</span>
              </p>
            </div>
            <div>
              <h3>Support Hours</h3>
              <table className="support-hours-table">
                <tbody>
                  <tr><td>Monday – Friday</td><td>9:00 AM – 7:00 PM IST</td></tr>
                  <tr><td>Saturday</td><td>10:00 AM – 5:00 PM IST</td></tr>
                  <tr><td>Sunday</td><td>Closed</td></tr>
                  <tr><td>Public Holidays</td><td>Closed</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="support-form-section">
          <h2>Send Us a Message</h2>
          <div className="support-form-grid">
            <div>
              <label className="support-label">Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="support-label">Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="support-label">Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="support-label">Issue Type</label>
              <select>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing &amp; Payments</option>
                <option>Project Status</option>
                <option>Other</option>
              </select>
            </div>
            <div className="full">
              <label className="support-label">Message</label>
              <textarea placeholder="Describe your issue or question in detail..." />
            </div>
          </div>
          <button className="support-btn">Send Message →</button>
        </div> */}

        <footer className="support-footer">
          © {new Date().getFullYear()} Inteliglo. All rights reserved. &nbsp;|&nbsp; Digital Intelligence Company &nbsp;|&nbsp; India
          <br />
          <span style={{ fontSize: '0.7rem', marginTop: '0.5rem', display: 'inline-block' }}>
            <a href="/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp;
            <a href="/terms-of-service">Terms of Service</a> &nbsp;|&nbsp;
            <a href="/cancellation">Cancellation &amp; Refund</a>
          </span>
        </footer>
      </div>
    </>
  )
}
