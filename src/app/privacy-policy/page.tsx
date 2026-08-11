import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Inteliglo',
  description: 'Inteliglo Privacy Policy — how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>

      <div style={{ paddingTop: '70px', position: 'relative', zIndex: 1 }}>
        <main style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

          {/* Page header */}
          <div
            className="anim-fadeup"
            style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(0,212,255,0.1)', paddingBottom: '2rem' }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--green)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              // Legal
            </div>

            <h1 style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: 'var(--white)',
              marginBottom: '1rem',
            }}>
              Privacy Policy
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
            }}>
              Effective Date: <span style={{ color: 'var(--green)' }}>January 1, 2025</span>
              &nbsp;|&nbsp;
              Last Updated: <span style={{ color: 'var(--green)' }}>June 1, 2026</span>
            </div>
          </div>

          {/* Intro highlight box */}
          <HighlightBox>
            <strong style={{ color: 'var(--white)' }}>Inteliglo</strong> (&ldquo;we&rdquo;,
            &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or use our services. Please read it carefully.
          </HighlightBox>

          {/* Section 1 */}
          <Section title="1. Company Information">
            <P>
              This Privacy Policy applies to{' '}
              <strong style={{ color: 'var(--white)' }}>Inteliglo Digital Intelligence</strong>, a
              digital services company based in India, reachable at:
            </P>
            <UL items={[
              'Email: hello.inteliglo@gmail.com',
              'Phone: +91 8210219654',
              'Website: marketing.inteliglo.com',
            ]} />
          </Section>

          {/* Section 2 */}
          <Section title="2. Information We Collect">
            <P>
              We collect information you provide directly to us, information collected automatically,
              and information from third parties.
            </P>

            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr>
                    {['Category', 'Examples', 'How Collected'].map((h) => (
                      <th key={h} style={{
                        textAlign: 'left',
                        padding: '0.6rem 1rem',
                        background: 'rgba(0,212,255,0.06)',
                        color: 'var(--sky)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(0,212,255,0.12)',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: 'Identity Data', examples: 'Full name, company name', how: 'Contact forms, onboarding' },
                    { category: 'Contact Data', examples: 'Email address, phone number', how: 'Contact forms, calls' },
                    { category: 'Technical Data', examples: 'IP address, browser type, device info', how: 'Automatically via cookies' },
                    { category: 'Usage Data', examples: 'Pages visited, time on site, clicks', how: 'Analytics tools' },
                    { category: 'Marketing Data', examples: 'Communication preferences', how: 'Opt-in forms, settings' },
                    { category: 'Financial Data', examples: 'Payment details (processed securely)', how: 'Payment processors' },
                  ].map((row, i) => (
                    <tr key={i}>
                      {[row.category, row.examples, row.how].map((cell, j) => (
                        <td key={j} style={{
                          padding: '0.7rem 1rem',
                          border: '1px solid rgba(0,212,255,0.08)',
                          color: 'var(--muted)',
                          verticalAlign: 'top',
                          background: i % 2 === 1 ? 'rgba(0,212,255,0.02)' : 'transparent',
                          fontSize: '0.88rem',
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Section 3 */}
          <Section title="3. How We Use Your Information">
            <P>We use the information we collect for the following purposes:</P>
            <UL items={[
              'To provide, operate, and maintain our services',
              'To communicate with you regarding projects, updates, and support',
              'To process transactions and manage billing',
              'To send marketing communications (with your consent)',
              'To analyse website performance and improve user experience',
              'To comply with legal obligations under Indian law',
              'To detect and prevent fraud, security incidents, and abuse',
            ]} />
          </Section>

          {/* Section 4 */}
          <Section title="4. Disclosure of Your Information">
            <P>We do not sell your personal data. We may share your information with:</P>
            <UL items={[
              'Service Providers: Third-party vendors who assist in delivering our services (e.g. hosting, payment gateways, analytics tools) — bound by confidentiality obligations.',
              'Legal Authorities: When required by law, court order, or governmental authority in India.',
              'Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.',
              'With Consent: With any other party with your prior explicit consent.',
            ]} />
          </Section>

          {/* Section 5 */}
          <Section title="5. Method of Disclosure">
            <P>
              Information is shared through secure digital channels including encrypted APIs,
              contractual data processing agreements, and compliance with the{' '}
              <strong style={{ color: 'var(--white)' }}>Information Technology Act, 2000</strong>{' '}
              and its associated rules, including the IT (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </P>
          </Section>

          {/* Section 6 */}
          <Section title="6. Cookies & Tracking">
            <P>
              We use cookies and similar tracking technologies to enhance your experience. Types of
              cookies used:
            </P>
            <UL items={[
              'Essential Cookies: Required for the website to function properly.',
              'Analytics Cookies: Help us understand how visitors interact with our site (e.g. Google Analytics).',
              'Marketing Cookies: Used to deliver relevant ads and track campaign performance.',
            ]} />
            <P>
              You may disable cookies via your browser settings, though some features may not
              function correctly as a result.
            </P>
          </Section>

          {/* Section 7 */}
          <Section title="7. Data Retention">
            <P>
              We retain your personal data only for as long as necessary to fulfil the purposes
              described in this policy, or as required by law. Typically, client project data is
              retained for a period of{' '}
              <strong style={{ color: 'var(--white)' }}>3 years post-project completion</strong>{' '}
              unless otherwise agreed.
            </P>
          </Section>

          {/* Section 8 */}
          <Section title="8. Security Practices">
            <P>
              We implement industry-standard technical and organisational security measures to
              protect your personal data, including:
            </P>
            <UL items={[
              'SSL/TLS encryption for all data in transit',
              'Encrypted storage for sensitive data at rest',
              'Role-based access control and two-factor authentication for internal systems',
              'Regular security audits and penetration testing',
              'Firewalls, intrusion detection, and threat monitoring',
            ]} />
            <P>
              While we take every reasonable precaution, no method of transmission over the
              internet is 100% secure. We cannot guarantee absolute security.
            </P>
          </Section>

          {/* Section 9 */}
          <Section title="9. Your Rights">
            <P>Under applicable Indian law, you have the right to:</P>
            <UL items={[
              'Access and review the personal data we hold about you',
              'Request correction of inaccurate or incomplete data',
              'Withdraw consent for marketing communications at any time',
              'Request deletion of your data, subject to legal obligations',
            ]} />
            <P>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>.
            </P>
          </Section>

          {/* Section 10 */}
          <Section title="10. Third-Party Links">
            <P>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of those sites. We encourage you to review their
              privacy policies before providing any personal information.
            </P>
          </Section>

          {/* Section 11 */}
          <Section title="11. Changes to This Policy">
            <P>
              We may update this Privacy Policy periodically to reflect changes in our practices
              or legal requirements. Updates will be posted on this page with a revised
              &ldquo;Last Updated&rdquo; date. Continued use of our services after changes
              constitutes your acceptance of the updated policy.
            </P>
          </Section>

          {/* Section 12 */}
          <Section title="12. Contact Us">
            <P>
              For questions, concerns, or requests related to this Privacy Policy, please contact:
            </P>
            <HighlightBox>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>
                Inteliglo — Privacy Team
              </strong>
              Email:{' '}
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+918860686869" style={{ color: 'var(--sky)' }}>
                +91 8210219654
              </a>
              <br />
              Hours: Monday–Saturday, 9AM–7PM IST
              <br />
              Response Time: Within 48 hours
            </HighlightBox>
          </Section>

        </main>
      </div>
      <Footer />
    </>
  )
}

/* ─── Small reusable sub-components ─── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: '3rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        color: 'var(--sky)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '1.2rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid rgba(0,212,255,0.1)',
      }}>
        <span style={{ opacity: 0.4 }}>// </span>{title}
      </h2>
      {children}
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: 'var(--white)',
      letterSpacing: '0.05em',
      margin: '1.8rem 0 0.6rem',
    }}>
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.93rem', marginBottom: '0.8rem' }}>
      {children}
    </p>
  )
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '0.5rem 0 1rem 1.2rem', color: 'var(--muted)', lineHeight: 1.85 }}>
      {items.map((item, i) => (
        <li key={i} style={{
          fontSize: '0.93rem',
          marginBottom: '0.45rem',
          listStyleType: 'none',
          paddingLeft: '1rem',
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute',
            left: 0,
            color: 'var(--sky)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
          }}>›</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: '2px solid var(--sky)',
      padding: '1rem 1.5rem',
      background: 'rgba(0,212,255,0.04)',
      margin: '1.2rem 0',
    }}>
      <div style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.93rem' }}>
        {children}
      </div>
    </div>
  )
}