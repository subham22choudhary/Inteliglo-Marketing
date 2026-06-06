import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Inteliglo',
  description: 'Inteliglo Privacy Policy — how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .pp-body { font-family: Georgia, serif; background: #0a0a0a; color: #e8e8e0; min-height: 100vh; }
        .pp-header { border-bottom: 1px solid #222; padding: 1.2rem 2rem; display: flex; align-items: center; justify-content: space-between; font-family: 'Courier New', monospace; }
        .pp-logo { font-size: 1.1rem; letter-spacing: 0.15em; color: #00ff88; font-weight: bold; text-decoration: none; }
        .pp-nav a { color: #888; text-decoration: none; margin-left: 2rem; font-size: 0.85rem; letter-spacing: 0.05em; transition: color 0.2s; }
        .pp-nav a:hover { color: #00ff88; }
        .pp-container { max-width: 760px; margin: 0 auto; padding: 4rem 2rem; }
        .pp-tag { font-size: 0.75rem; color: #00ff88; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem; font-family: 'Courier New', monospace; }
        .pp-h1 { font-size: 2.4rem; line-height: 1.15; color: #f0f0e8; margin-bottom: 0.5rem; }
        .pp-meta { color: #555; font-size: 0.85rem; margin-bottom: 3rem; font-family: 'Courier New', monospace; border-bottom: 1px solid #1a1a1a; padding-bottom: 1.5rem; }
        .pp-meta span { color: #00ff88; }
        .pp-h2 { font-size: 1.15rem; color: #00ff88; margin: 2.5rem 0 1rem; font-family: 'Courier New', monospace; letter-spacing: 0.05em; text-transform: uppercase; }
        .pp-h2::before { content: '// '; opacity: 0.4; }
        .pp-p { color: #bbb; line-height: 1.85; margin-bottom: 1rem; font-size: 0.97rem; }
        .pp-ul { color: #bbb; line-height: 1.85; margin: 0.75rem 0 1rem 1.5rem; font-size: 0.97rem; }
        .pp-ul li { margin-bottom: 0.4rem; }
        .pp-highlight { border-left: 2px solid #00ff88; padding: 1rem 1.5rem; background: #111; margin: 1.5rem 0; }
        .pp-highlight p { margin: 0; color: #ccc; }
        .pp-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
        .pp-table th { text-align: left; padding: 0.6rem 1rem; background: #111; color: #00ff88; font-family: 'Courier New', monospace; font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #1a1a1a; }
        .pp-table td { padding: 0.65rem 1rem; border: 1px solid #1a1a1a; color: #aaa; vertical-align: top; }
        .pp-table tr:nth-child(even) td { background: #0d0d0d; }
        .pp-a { color: #00ff88; text-decoration: none; }
        .pp-a:hover { text-decoration: underline; }
        .pp-footer { border-top: 1px solid #1a1a1a; padding: 2rem; text-align: center; color: #444; font-size: 0.8rem; font-family: 'Courier New', monospace; }
        .pp-footer a { color: #555; text-decoration: none; }
        .pp-footer a:hover { color: #00ff88; }
        @media (max-width: 600px) {
          .pp-h1 { font-size: 1.8rem; }
          .pp-nav a { margin-left: 1rem; }
          .pp-table { font-size: 0.8rem; }
        }
      `}</style>

      <div className="pp-body">
        <header className="pp-header">
          <a href="/" className="pp-logo">INTELIGLO</a>
          <nav className="pp-nav">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/support">Contact</a>
          </nav>
        </header>

        <div className="pp-container">
          <div className="pp-tag">// Legal</div>
          <h1 className="pp-h1">Privacy Policy</h1>
          <p className="pp-meta">Effective Date: <span>January 1, 2025</span> &nbsp;|&nbsp; Last Updated: <span>June 1, 2026</span></p>

          <div className="pp-highlight">
            <p>Inteliglo (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read it carefully.</p>
          </div>

          <h2 className="pp-h2">1. Company Information</h2>
          <p className="pp-p">This Privacy Policy applies to <strong style={{ color: '#e8e8e0' }}>Inteliglo Digital Intelligence</strong>, a digital services company based in India, reachable at:</p>
          <ul className="pp-ul">
            <li>Email: <a className="pp-a" href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a></li>
            <li>Phone: <a className="pp-a" href="tel:+918860686869">+91 88606 86869</a></li>
            <li>Website: <a className="pp-a" href="https://marketing.inteliglo.com">marketing.inteliglo.com</a></li>
          </ul>

          <h2 className="pp-h2">2. Information We Collect</h2>
          <p className="pp-p">We collect information you provide directly to us, information collected automatically, and information from third parties.</p>
          <table className="pp-table">
            <thead>
              <tr><th>Category</th><th>Examples</th><th>How Collected</th></tr>
            </thead>
            <tbody>
              <tr><td>Identity Data</td><td>Full name, company name</td><td>Contact forms, onboarding</td></tr>
              <tr><td>Contact Data</td><td>Email address, phone number</td><td>Contact forms, calls</td></tr>
              <tr><td>Technical Data</td><td>IP address, browser type, device info</td><td>Automatically via cookies</td></tr>
              <tr><td>Usage Data</td><td>Pages visited, time on site, clicks</td><td>Analytics tools</td></tr>
              <tr><td>Marketing Data</td><td>Communication preferences</td><td>Opt-in forms, settings</td></tr>
              <tr><td>Financial Data</td><td>Payment details (processed securely)</td><td>Payment processors</td></tr>
            </tbody>
          </table>

          <h2 className="pp-h2">3. How We Use Your Information</h2>
          <p className="pp-p">We use the information we collect for the following purposes:</p>
          <ul className="pp-ul">
            <li>To provide, operate, and maintain our services</li>
            <li>To communicate with you regarding projects, updates, and support</li>
            <li>To process transactions and manage billing</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To analyse website performance and improve user experience</li>
            <li>To comply with legal obligations under Indian law</li>
            <li>To detect and prevent fraud, security incidents, and abuse</li>
          </ul>

          <h2 className="pp-h2">4. Disclosure of Your Information</h2>
          <p className="pp-p">We do not sell your personal data. We may share your information with:</p>
          <ul className="pp-ul">
            <li><strong style={{ color: '#e8e8e0' }}>Service Providers:</strong> Third-party vendors who assist in delivering our services (e.g. hosting, payment gateways, analytics tools) — bound by confidentiality obligations.</li>
            <li><strong style={{ color: '#e8e8e0' }}>Legal Authorities:</strong> When required by law, court order, or governmental authority in India.</li>
            <li><strong style={{ color: '#e8e8e0' }}>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
            <li><strong style={{ color: '#e8e8e0' }}>With Consent:</strong> With any other party with your prior explicit consent.</li>
          </ul>

          <h2 className="pp-h2">5. Method of Disclosure</h2>
          <p className="pp-p">Information is shared through secure digital channels including encrypted APIs, contractual data processing agreements, and compliance with the <strong style={{ color: '#e8e8e0' }}>Information Technology Act, 2000</strong> and its associated rules, including the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>

          <h2 className="pp-h2">6. Cookies &amp; Tracking</h2>
          <p className="pp-p">We use cookies and similar tracking technologies to enhance your experience. Types of cookies used:</p>
          <ul className="pp-ul">
            <li><strong style={{ color: '#e8e8e0' }}>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong style={{ color: '#e8e8e0' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g. Google Analytics).</li>
            <li><strong style={{ color: '#e8e8e0' }}>Marketing Cookies:</strong> Used to deliver relevant ads and track campaign performance.</li>
          </ul>
          <p className="pp-p">You may disable cookies via your browser settings, though some features may not function correctly as a result.</p>

          <h2 className="pp-h2">7. Data Retention</h2>
          <p className="pp-p">We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Typically, client project data is retained for a period of 3 years post-project completion unless otherwise agreed.</p>

          <h2 className="pp-h2">8. Security Practices</h2>
          <p className="pp-p">We implement industry-standard technical and organisational security measures to protect your personal data, including:</p>
          <ul className="pp-ul">
            <li>SSL/TLS encryption for all data in transit</li>
            <li>Encrypted storage for sensitive data at rest</li>
            <li>Role-based access control and two-factor authentication for internal systems</li>
            <li>Regular security audits and penetration testing</li>
            <li>Firewalls, intrusion detection, and threat monitoring</li>
          </ul>
          <p className="pp-p">While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>

          <h2 className="pp-h2">9. Your Rights</h2>
          <p className="pp-p">Under applicable Indian law, you have the right to:</p>
          <ul className="pp-ul">
            <li>Access and review the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Request deletion of your data, subject to legal obligations</li>
          </ul>
          <p className="pp-p">To exercise any of these rights, contact us at <a className="pp-a" href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a>.</p>

          <h2 className="pp-h2">10. Third-Party Links</h2>
          <p className="pp-p">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.</p>

          <h2 className="pp-h2">11. Changes to This Policy</h2>
          <p className="pp-p">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our services after changes constitutes your acceptance of the updated policy.</p>

          <h2 className="pp-h2">12. Contact Us</h2>
          <p className="pp-p">For questions, concerns, or requests related to this Privacy Policy, please contact:</p>
          <div className="pp-highlight">
            <p><strong style={{ color: '#e8e8e0' }}>Inteliglo</strong><br />
            Email: <a className="pp-a" href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a><br />
            Phone: <a className="pp-a" href="tel:+918860686869">+91 88606 86869</a><br />
            Hours: Monday–Saturday, 9AM–7PM IST</p>
          </div>
        </div>

        <footer className="pp-footer">
          © {new Date().getFullYear()} Inteliglo. All rights reserved. &nbsp;|&nbsp;
          <a href="/terms-of-service">Terms of Service</a> &nbsp;|&nbsp;
          <a href="/cancellation">Cancellation &amp; Refund</a> &nbsp;|&nbsp;
          <a href="/support">Contact</a>
        </footer>
      </div>
    </>
  )
}
