import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Inteliglo',
  description: 'Inteliglo Terms of Service — the legal agreement governing your use of our digital services.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .tos-body { font-family: Georgia, serif; background: #0a0a0a; color: #e8e8e0; min-height: 100vh; }
        .tos-header { border-bottom: 1px solid #222; padding: 1.2rem 2rem; display: flex; align-items: center; justify-content: space-between; font-family: 'Courier New', monospace; }
        .tos-logo { font-size: 1.1rem; letter-spacing: 0.15em; color: #00ff88; font-weight: bold; text-decoration: none; }
        .tos-nav a { color: #888; text-decoration: none; margin-left: 2rem; font-size: 0.85rem; letter-spacing: 0.05em; transition: color 0.2s; }
        .tos-nav a:hover { color: #00ff88; }
        .tos-container { max-width: 760px; margin: 0 auto; padding: 4rem 2rem; }
        .tos-tag { font-size: 0.75rem; color: #00ff88; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem; font-family: 'Courier New', monospace; }
        .tos-h1 { font-size: 2.4rem; line-height: 1.15; color: #f0f0e8; margin-bottom: 0.5rem; }
        .tos-meta { color: #555; font-size: 0.85rem; margin-bottom: 3rem; font-family: 'Courier New', monospace; border-bottom: 1px solid #1a1a1a; padding-bottom: 1.5rem; }
        .tos-meta span { color: #00ff88; }
        .tos-h2 { font-size: 1.1rem; color: #00ff88; margin: 2.5rem 0 1rem; font-family: 'Courier New', monospace; letter-spacing: 0.05em; text-transform: uppercase; }
        .tos-h2::before { content: '// '; opacity: 0.4; }
        .tos-h3 { font-size: 1rem; color: #e8e8e0; margin: 1.5rem 0 0.5rem; font-family: 'Courier New', monospace; }
        .tos-p { color: #bbb; line-height: 1.85; margin-bottom: 1rem; font-size: 0.97rem; }
        .tos-ul { color: #bbb; line-height: 1.85; margin: 0.75rem 0 1rem 1.5rem; font-size: 0.97rem; }
        .tos-ul li { margin-bottom: 0.4rem; }
        .tos-highlight { border-left: 2px solid #00ff88; padding: 1rem 1.5rem; background: #111; margin: 1.5rem 0; }
        .tos-highlight p { margin: 0; color: #ccc; }
        .tos-toc { background: #111; border: 1px solid #1a1a1a; padding: 1.5rem 2rem; margin: 2rem 0; }
        .tos-toc h3 { margin: 0 0 1rem; color: #00ff88; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; font-family: 'Courier New', monospace; }
        .tos-toc ol { margin: 0; padding-left: 1.5rem; }
        .tos-toc li { color: #888; font-size: 0.9rem; font-family: 'Courier New', monospace; margin-bottom: 0.3rem; }
        .tos-toc a { color: #888; text-decoration: none; }
        .tos-toc a:hover { color: #00ff88; }
        .tos-important { background: #150f00; border: 1px solid #3a2a00; padding: 1rem 1.5rem; margin: 1.5rem 0; }
        .tos-important p { color: #d4a843; margin: 0; font-size: 0.9rem; }
        .tos-a { color: #00ff88; text-decoration: none; }
        .tos-a:hover { text-decoration: underline; }
        .tos-footer { border-top: 1px solid #1a1a1a; padding: 2rem; text-align: center; color: #444; font-size: 0.8rem; font-family: 'Courier New', monospace; }
        .tos-footer a { color: #555; text-decoration: none; }
        .tos-footer a:hover { color: #00ff88; }
        @media (max-width: 600px) {
          .tos-h1 { font-size: 1.8rem; }
          .tos-nav a { margin-left: 1rem; font-size: 0.75rem; }
        }
      `}</style>

      <div className="tos-body">
        <header className="tos-header">
          <a href="/" className="tos-logo">INTELIGLO</a>
          <nav className="tos-nav">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/support">Contact</a>
          </nav>
        </header>

        <div className="tos-container">
          <div className="tos-tag">// Legal</div>
          <h1 className="tos-h1">Terms of Service</h1>
          <p className="tos-meta">Effective Date: <span>January 1, 2025</span> &nbsp;|&nbsp; Last Updated: <span>June 1, 2026</span></p>

          <div className="tos-highlight">
            <p>By accessing or using any service provided by Inteliglo, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms govern your relationship with Inteliglo and constitute a legally binding agreement under the laws of India.</p>
          </div>

          <div className="tos-toc">
            <h3>Table of Contents</h3>
            <ol>
              <li><a href="#parties">Parties &amp; Agreement</a></li>
              <li><a href="#services">Services Provided</a></li>
              <li><a href="#obligations">Client Obligations</a></li>
              <li><a href="#payment">Payment Terms</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
              <li><a href="#confidentiality">Confidentiality</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#refund">Refund &amp; Cancellation Policy</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#governing">Governing Law</a></li>
              <li><a href="#disputes">Dispute Resolution</a></li>
              <li><a href="#amendments">Amendments</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </div>

          <h2 id="parties" className="tos-h2">1. Parties &amp; Agreement</h2>
          <p className="tos-p">These Terms of Service (&ldquo;Terms&rdquo;) constitute an agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and <strong style={{ color: '#e8e8e0' }}>Inteliglo</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a digital intelligence company operating in India. By engaging our services or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>

          <h2 id="services" className="tos-h2">2. Services Provided</h2>
          <p className="tos-p">Inteliglo provides a range of digital services including but not limited to website development, graphic design, video production, social media marketing, AI automation, SEO, paid advertising, cybersecurity, content marketing, and related digital services as described on our website.</p>
          <p className="tos-p">The specific scope, deliverables, timelines, and pricing for each engagement are agreed upon separately via a Service Agreement or Statement of Work (SOW) provided prior to project commencement.</p>

          <h2 id="obligations" className="tos-h2">3. Client Obligations</h2>
          <p className="tos-p">To enable Inteliglo to deliver services effectively, the Client agrees to:</p>
          <ul className="tos-ul">
            <li>Provide accurate, complete, and timely information, assets, and approvals as required</li>
            <li>Designate a primary point of contact for the project</li>
            <li>Review and provide feedback within agreed timelines (typically 48–72 hours)</li>
            <li>Ensure all content and materials provided do not infringe on third-party rights</li>
            <li>Not use our services for any illegal, fraudulent, or harmful purposes</li>
          </ul>

          <h2 id="payment" className="tos-h2">4. Payment Terms</h2>
          <p className="tos-p">Unless otherwise specified in writing:</p>
          <ul className="tos-ul">
            <li>A non-refundable advance (typically 50%) is due before project commencement</li>
            <li>The remaining balance is due upon project completion or as per milestones agreed in the SOW</li>
            <li>Monthly retainer services are billed at the start of each billing cycle</li>
            <li>Late payments beyond 7 days of the due date may attract a 2% per month interest charge</li>
            <li>All prices are in Indian Rupees (INR) unless otherwise stated and are exclusive of GST</li>
          </ul>

          <h2 id="ip" className="tos-h2">5. Intellectual Property</h2>
          <p className="tos-p">Upon full payment of all applicable fees:</p>
          <ul className="tos-ul">
            <li>All custom deliverables created exclusively for the Client become the Client&apos;s property</li>
            <li>Inteliglo retains ownership of all pre-existing tools, frameworks, methodologies, templates, and proprietary technology used in delivering the services</li>
            <li>Inteliglo reserves the right to display completed work in its portfolio unless the Client provides written objection</li>
          </ul>

          <h2 id="confidentiality" className="tos-h2">6. Confidentiality</h2>
          <p className="tos-p">Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of the agreement for a period of 2 years. Confidential information does not include information that is publicly available or independently developed.</p>

          <h2 id="liability" className="tos-h2">7. Limitation of Liability</h2>
          <p className="tos-p">To the fullest extent permitted by applicable Indian law, Inteliglo shall not be liable for:</p>
          <ul className="tos-ul">
            <li>Indirect, incidental, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Damages arising from third-party services, platforms, or integrations</li>
          </ul>
          <p className="tos-p">Our total cumulative liability under these Terms shall not exceed the total fees paid by the Client in the 3 months preceding the event giving rise to the claim.</p>

          <h2 id="refund" className="tos-h2">8. Refund &amp; Cancellation Policy</h2>
          <div className="tos-important">
            <p>⚠ This section constitutes Inteliglo&apos;s official Refund and Cancellation Policy in compliance with Indian consumer protection and e-commerce regulations.</p>
          </div>
          <h3 className="tos-h3">8.1 Cancellation by Client</h3>
          <ul className="tos-ul">
            <li><strong style={{ color: '#e8e8e0' }}>Before work commencement:</strong> If a project is cancelled before any work begins, the Client is entitled to a full refund minus a 10% administrative fee.</li>
            <li><strong style={{ color: '#e8e8e0' }}>After work has commenced:</strong> If a project is cancelled after work has begun, the Client will be billed for all work completed up to the date of cancellation. Any advance payments beyond the amount owed will be refunded within 14 working days.</li>
            <li><strong style={{ color: '#e8e8e0' }}>Monthly retainers:</strong> Monthly services may be cancelled with 30 days&apos; written notice. No refund is issued for the current billing cycle; cancellation takes effect from the next cycle.</li>
          </ul>
          <h3 className="tos-h3">8.2 Refund Eligibility</h3>
          <ul className="tos-ul">
            <li>Refunds are applicable only where Inteliglo has failed to deliver agreed services within the agreed timeframe and quality standards, despite written notice and a reasonable cure period of 7 business days.</li>
            <li>Refunds are not provided for change of mind, delays caused by the Client, or dissatisfaction arising from feedback not communicated during the agreed revision rounds.</li>
            <li>Digital services that have been fully delivered and accepted are non-refundable.</li>
          </ul>
          <h3 className="tos-h3">8.3 Refund Process</h3>
          <ul className="tos-ul">
            <li>Refund requests must be submitted in writing to <a className="tos-a" href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a> within 7 days of the triggering event.</li>
            <li>Approved refunds will be processed to the original payment method within <strong style={{ color: '#e8e8e0' }}>14 working days</strong>.</li>
            <li>GST and payment gateway charges are non-refundable.</li>
          </ul>
          <h3 className="tos-h3">8.4 Cancellation by Inteliglo</h3>
          <p className="tos-p">Inteliglo reserves the right to cancel any engagement with 7 days&apos; written notice if the Client breaches these Terms, fails to make payment, or engages in conduct harmful to our team or reputation. In such cases, a pro-rata refund for undelivered work will be issued.</p>

          <h2 id="termination" className="tos-h2">9. Termination</h2>
          <p className="tos-p">Either party may terminate the service agreement with written notice as outlined in the SOW. Upon termination, the Client shall pay for all work completed, and Inteliglo shall deliver all completed and partially completed work to the Client. Provisions relating to IP, confidentiality, and liability survive termination.</p>

          <h2 id="governing" className="tos-h2">10. Governing Law</h2>
          <p className="tos-p">These Terms are governed by and construed in accordance with the laws of India, including but not limited to:</p>
          <ul className="tos-ul">
            <li>The Indian Contract Act, 1872</li>
            <li>The Information Technology Act, 2000</li>
            <li>The Consumer Protection Act, 2019</li>
            <li>The Goods and Services Tax (GST) laws of India</li>
          </ul>

          <h2 id="disputes" className="tos-h2">11. Dispute Resolution</h2>
          <p className="tos-p">In the event of any dispute arising out of or relating to these Terms, the parties shall first attempt to resolve the matter through good-faith negotiation. If unresolved within 30 days, the dispute shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with jurisdiction in India.</p>

          <h2 id="amendments" className="tos-h2">12. Amendments</h2>
          <p className="tos-p">Inteliglo reserves the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised date. Your continued use of our services after any modification constitutes acceptance of the revised Terms.</p>

          <h2 id="contact" className="tos-h2">13. Contact Us</h2>
          <p className="tos-p">For questions regarding these Terms of Service:</p>
          <div className="tos-highlight">
            <p><strong style={{ color: '#e8e8e0' }}>Inteliglo</strong><br />
            Email: <a className="tos-a" href="mailto:hello.inteliglo@gmail.com">hello.inteliglo@gmail.com</a><br />
            Phone: <a className="tos-a" href="tel:+918860686869">+91 88606 86869</a><br />
            Hours: Monday–Saturday, 9AM–7PM IST</p>
          </div>
        </div>

        <footer className="tos-footer">
          © {new Date().getFullYear()} Inteliglo. All rights reserved. &nbsp;|&nbsp;
          <a href="/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="/cancellation">Cancellation &amp; Refund Policy</a> &nbsp;|&nbsp;
          <a href="/support">Contact</a>
        </footer>
      </div>
    </>
  )
}
