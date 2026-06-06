import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Inteliglo',
  description: 'Inteliglo Terms of Service — the legal agreement governing your use of our digital services.',
}

export default function TermsOfServicePage() {
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
              Terms of Service
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
            By accessing or using any service provided by{' '}
            <strong style={{ color: 'var(--white)' }}>Inteliglo</strong>, you agree to be bound
            by these Terms of Service. If you do not agree, please do not use our services. These
            terms govern your relationship with Inteliglo and constitute a legally binding
            agreement under the laws of India.
          </HighlightBox>

          {/* Table of Contents */}
          <style>{`.tos-toc-link { color: var(--muted); text-decoration: none; transition: color 0.2s; } .tos-toc-link:hover { color: var(--sky); }`}</style>
          <div style={{
            border: '1px solid rgba(0,212,255,0.1)',
            background: 'rgba(0,212,255,0.02)',
            padding: '1.5rem 2rem',
            margin: '2rem 0',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--sky)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              // Table of Contents
            </div>
            <ol style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {[
                ['#parties', 'Parties & Agreement'],
                ['#services', 'Services Provided'],
                ['#obligations', 'Client Obligations'],
                ['#payment', 'Payment Terms'],
                ['#ip', 'Intellectual Property'],
                ['#confidentiality', 'Confidentiality'],
                ['#liability', 'Limitation of Liability'],
                ['#refund', 'Refund & Cancellation Policy'],
                ['#termination', 'Termination'],
                ['#governing', 'Governing Law'],
                ['#disputes', 'Dispute Resolution'],
                ['#amendments', 'Amendments'],
                ['#contact', 'Contact'],
              ].map(([href, label], i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--muted)',
                  marginBottom: '0.35rem',
                  listStyle: 'decimal',
                }}>
                  <a href={href} className="tos-toc-link">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 1 */}
          <Section id="parties" title="1. Parties & Agreement">
            <P>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute an agreement between you
              (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and{' '}
              <strong style={{ color: 'var(--white)' }}>Inteliglo</strong> (&ldquo;Company&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a digital intelligence
              company operating in India. By engaging our services or using our website, you
              acknowledge that you have read, understood, and agree to be bound by these Terms.
            </P>
          </Section>

          {/* Section 2 */}
          <Section id="services" title="2. Services Provided">
            <P>
              Inteliglo provides a range of digital services including but not limited to website
              development, graphic design, video production, social media marketing, AI automation,
              SEO, paid advertising, cybersecurity, content marketing, and related digital services
              as described on our website.
            </P>
            <P>
              The specific scope, deliverables, timelines, and pricing for each engagement are
              agreed upon separately via a Service Agreement or Statement of Work (SOW) provided
              prior to project commencement.
            </P>
          </Section>

          {/* Section 3 */}
          <Section id="obligations" title="3. Client Obligations">
            <P>
              To enable Inteliglo to deliver services effectively, the Client agrees to:
            </P>
            <UL items={[
              'Provide accurate, complete, and timely information, assets, and approvals as required',
              'Designate a primary point of contact for the project',
              'Review and provide feedback within agreed timelines (typically 48–72 hours)',
              'Ensure all content and materials provided do not infringe on third-party rights',
              'Not use our services for any illegal, fraudulent, or harmful purposes',
            ]} />
          </Section>

          {/* Section 4 */}
          <Section id="payment" title="4. Payment Terms">
            <P>Unless otherwise specified in writing:</P>
            <UL items={[
              'A non-refundable advance (typically 50%) is due before project commencement',
              'The remaining balance is due upon project completion or as per milestones agreed in the SOW',
              'Monthly retainer services are billed at the start of each billing cycle',
              'Late payments beyond 7 days of the due date may attract a 2% per month interest charge',
              'All prices are in Indian Rupees (INR) unless otherwise stated and are exclusive of GST',
            ]} />
          </Section>

          {/* Section 5 */}
          <Section id="ip" title="5. Intellectual Property">
            <P>Upon full payment of all applicable fees:</P>
            <UL items={[
              'All custom deliverables created exclusively for the Client become the Client\'s property',
              'Inteliglo retains ownership of all pre-existing tools, frameworks, methodologies, templates, and proprietary technology used in delivering the services',
              'Inteliglo reserves the right to display completed work in its portfolio unless the Client provides written objection',
            ]} />
          </Section>

          {/* Section 6 */}
          <Section id="confidentiality" title="6. Confidentiality">
            <P>
              Both parties agree to keep confidential any proprietary or sensitive information
              shared during the engagement. This obligation survives termination of the agreement
              for a period of{' '}
              <strong style={{ color: 'var(--white)' }}>2 years</strong>. Confidential information
              does not include information that is publicly available or independently developed.
            </P>
          </Section>

          {/* Section 7 */}
          <Section id="liability" title="7. Limitation of Liability">
            <P>
              To the fullest extent permitted by applicable Indian law, Inteliglo shall not be
              liable for:
            </P>
            <UL items={[
              'Indirect, incidental, consequential, or punitive damages',
              'Loss of profits, revenue, data, or business opportunities',
              'Damages arising from third-party services, platforms, or integrations',
            ]} />
            <P>
              Our total cumulative liability under these Terms shall not exceed the total fees
              paid by the Client in the 3 months preceding the event giving rise to the claim.
            </P>
          </Section>

          {/* Section 8 */}
          <Section id="refund" title="8. Refund & Cancellation Policy">

            <div style={{
              border: '1px solid rgba(212,168,67,0.25)',
              background: 'rgba(212,168,67,0.04)',
              padding: '1rem 1.5rem',
              margin: '1.2rem 0',
              borderRadius: '2px',
            }}>
              <p style={{ color: '#d4a843', fontSize: '0.88rem', lineHeight: 1.75 }}>
                ⚠ This section constitutes Inteliglo&apos;s official Refund and Cancellation
                Policy in compliance with Indian consumer protection and e-commerce regulations.
              </p>
            </div>

            <SubHeading>8.1 Cancellation by Client</SubHeading>
            <UL items={[
              'Before work commencement: If a project is cancelled before any work begins, the Client is entitled to a full refund minus a 10% administrative fee.',
              'After work has commenced: If a project is cancelled after work has begun, the Client will be billed for all work completed up to the date of cancellation. Any advance payments beyond the amount owed will be refunded within 14 working days.',
              'Monthly retainers: Monthly services may be cancelled with 30 days\' written notice. No refund is issued for the current billing cycle; cancellation takes effect from the next cycle.',
            ]} />

            <SubHeading>8.2 Refund Eligibility</SubHeading>
            <UL items={[
              'Refunds are applicable only where Inteliglo has failed to deliver agreed services within the agreed timeframe and quality standards, despite written notice and a reasonable cure period of 7 business days.',
              'Refunds are not provided for change of mind, delays caused by the Client, or dissatisfaction arising from feedback not communicated during the agreed revision rounds.',
              'Digital services that have been fully delivered and accepted are non-refundable.',
            ]} />

            <SubHeading>8.3 Refund Process</SubHeading>
            <UL items={[
              'Refund requests must be submitted in writing to hello.inteliglo@gmail.com within 7 days of the triggering event.',
              'Approved refunds will be processed to the original payment method within 14 working days.',
              'GST and payment gateway charges are non-refundable.',
            ]} />

            <SubHeading>8.4 Cancellation by Inteliglo</SubHeading>
            <P>
              Inteliglo reserves the right to cancel any engagement with 7 days&apos; written
              notice if the Client breaches these Terms, fails to make payment, or engages in
              conduct harmful to our team or reputation. In such cases, a pro-rata refund for
              undelivered work will be issued.
            </P>
          </Section>

          {/* Section 9 */}
          <Section id="termination" title="9. Termination">
            <P>
              Either party may terminate the service agreement with written notice as outlined in
              the SOW. Upon termination, the Client shall pay for all work completed, and
              Inteliglo shall deliver all completed and partially completed work to the Client.
              Provisions relating to IP, confidentiality, and liability survive termination.
            </P>
          </Section>

          {/* Section 10 */}
          <Section id="governing" title="10. Governing Law">
            <P>
              These Terms are governed by and construed in accordance with the laws of India,
              including but not limited to:
            </P>
            <UL items={[
              'The Indian Contract Act, 1872',
              'The Information Technology Act, 2000',
              'The Consumer Protection Act, 2019',
              'The Goods and Services Tax (GST) laws of India',
            ]} />
          </Section>

          {/* Section 11 */}
          <Section id="disputes" title="11. Dispute Resolution">
            <P>
              In the event of any dispute arising out of or relating to these Terms, the parties
              shall first attempt to resolve the matter through good-faith negotiation. If
              unresolved within 30 days, the dispute shall be referred to arbitration under the
              Arbitration and Conciliation Act, 1996, with jurisdiction in India.
            </P>
          </Section>

          {/* Section 12 */}
          <Section id="amendments" title="12. Amendments">
            <P>
              Inteliglo reserves the right to modify these Terms at any time. Updated Terms will
              be posted on this page with a revised date. Your continued use of our services after
              any modification constitutes acceptance of the revised Terms.
            </P>
          </Section>

          {/* Section 13 */}
          <Section id="contact" title="13. Contact Us">
            <P>For questions regarding these Terms of Service:</P>
            <HighlightBox>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>
                Inteliglo — Legal Team
              </strong>
              Email:{' '}
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+918860686869" style={{ color: 'var(--sky)' }}>
                +91 88606 86869
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

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginTop: '3rem' }}>
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