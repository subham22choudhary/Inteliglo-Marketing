import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Inteliglo',
  description:
    'Inteliglo cancellation and refund policy. Formulated in compliance with the Consumer Protection Act, 2019 and applicable e-commerce regulations of India.',
}

export default function CancellationPage() {
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
              Cancellation &<br />Refund Policy
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
            This Cancellation and Refund Policy governs all service engagements with{' '}
            <strong style={{ color: 'var(--white)' }}>Inteliglo</strong>. It is formulated in
            compliance with the{' '}
            <strong style={{ color: 'var(--white)' }}>Consumer Protection Act, 2019</strong> and
            applicable e-commerce regulations of India. Please read this policy carefully before
            engaging our services.
          </HighlightBox>

          {/* Section 1 */}
          <Section title="1. Applicability">
            <P>
              This policy applies to all services offered by Inteliglo, including but not limited
              to website development, digital marketing, AI automation, SEO, paid advertising,
              content creation, and cybersecurity services — whether purchased directly, via a
              retainer, or through a project agreement.
            </P>
          </Section>

          {/* Section 2 */}
          <Section title="2. Cancellation Policy">
            <SubHeading>2.1 Cancellation by the Client (Project-Based Services)</SubHeading>

            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr>
                    {['Cancellation Timing', 'Refund on Advance Paid', 'Additional Charges'].map((h) => (
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
                    {
                      timing: 'Before project kickoff (no work started)',
                      refund: { text: '90% refunded', color: 'var(--green)' },
                      charges: '10% administrative fee retained',
                    },
                    {
                      timing: 'Within 48 hours of kickoff',
                      refund: { text: '50% refunded', color: '#d4a843' },
                      charges: 'Remaining covers initial research & setup',
                    },
                    {
                      timing: 'After work has commenced (beyond 48 hrs)',
                      refund: { text: 'Pro-rata only', color: '#ff5555' },
                      charges: 'Billed for all completed work; balance refunded',
                    },
                    {
                      timing: 'Post-delivery / after acceptance',
                      refund: { text: 'No refund', color: '#ff5555' },
                      charges: 'Fully delivered services are non-refundable',
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      {[
                        <span key="t">{row.timing}</span>,
                        <span key="r" style={{ color: row.refund.color, fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{row.refund.text}</span>,
                        <span key="c">{row.charges}</span>,
                      ].map((cell, j) => (
                        <td key={j} style={{
                          padding: '0.7rem 1rem',
                          border: '1px solid rgba(0,212,255,0.08)',
                          color: 'var(--muted)',
                          verticalAlign: 'top',
                          background: i % 2 === 1 ? 'rgba(0,212,255,0.02)' : 'transparent',
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <SubHeading>2.2 Cancellation of Monthly Retainer / Subscription Services</SubHeading>
            <UL items={[
              'Retainer services can be cancelled with a minimum 30 days\' written notice before the next billing cycle.',
              'Cancellation requests received within 30 days of the billing date will take effect from the following cycle — the current cycle is non-refundable.',
              'Any work completed in the current billing period will not be refunded.',
              'Services already delivered, campaigns already launched, or content already published cannot be reversed or refunded.',
            ]} />

            <SubHeading>2.3 How to Submit a Cancellation Request</SubHeading>
            <P>All cancellations must be submitted in writing via email to:</P>
            <HighlightBox>
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>
              <br />
              Subject line: <em>Cancellation Request — [Your Name / Company Name]</em>
            </HighlightBox>
            <P>
              Verbal cancellations will not be accepted. The cancellation date is the date the
              written request is received and acknowledged by Inteliglo.
            </P>
          </Section>

          {/* Section 3 */}
          <Section title="3. Refund Policy">
            <SubHeading>3.1 Eligibility for Refund</SubHeading>
            <P>A refund may be requested if:</P>
            <UL items={[
              'Inteliglo fails to deliver the agreed services within the agreed timeline and this failure is not due to delayed input from the Client',
              'The deliverable is materially different from what was agreed upon in writing',
              'The Client cancels before work has commenced (subject to administrative fee)',
            ]} />

            <SubHeading>3.2 Situations NOT Eligible for Refund</SubHeading>
            <UL items={[
              'Change of mind after project commencement',
              'Delays caused by the Client (late approvals, missing assets, non-responsiveness)',
              'Dissatisfaction with results arising from feedback not communicated during agreed revision rounds',
              'Completion of agreed deliverables accepted by the Client, explicitly or implicitly (i.e. no objection raised within 7 days of delivery)',
              'Third-party platform performance (e.g. ad performance, Google rankings) — we deliver the service, not the outcome',
              'Services cancelled mid-month on a retainer without 30 days\' notice',
            ]} />

            <SubHeading>3.3 Refund Process — Step by Step</SubHeading>
            <div style={{ margin: '1.5rem 0' }}>
              {[
                {
                  num: '01',
                  title: 'Submit a refund request',
                  desc: 'Email hello.inteliglo@gmail.com with subject "Refund Request — [Your Name]" within 7 days of the triggering event. Include your project details and reason for the refund.',
                },
                {
                  num: '02',
                  title: 'Acknowledgement within 48 hours',
                  desc: 'We will acknowledge your request and begin review within 2 business days of receipt.',
                },
                {
                  num: '03',
                  title: 'Review & decision within 7 business days',
                  desc: 'Our team will review the claim, assess deliverables completed, and communicate the approved refund amount in writing.',
                },
                {
                  num: '04',
                  title: 'Refund processed within 14 working days',
                  desc: 'Approved refunds are credited to the original payment method within 14 working days of approval. Bank transfer timelines may vary.',
                },
              ].map((step) => (
                <div key={step.num} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    border: '1px solid rgba(0,212,255,0.25)',
                    background: 'rgba(0,212,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--sky)',
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--white)',
                      marginBottom: '0.3rem',
                      letterSpacing: '0.02em',
                    }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SubHeading>3.4 Non-Refundable Components</SubHeading>
            <P>Regardless of any approved refund, the following are always non-refundable:</P>
            <UL items={[
              'GST / taxes paid',
              'Payment gateway or transaction charges',
              '10% administrative fee on pre-kickoff cancellations',
              'Third-party costs incurred on behalf of the Client (e.g. domain registrations, ad spend, stock licenses)',
            ]} />
          </Section>

          {/* Section 4 */}
          <Section title="4. Cancellation by Inteliglo">
            <P>Inteliglo reserves the right to cancel or suspend any engagement if:</P>
            <UL items={[
              'The Client fails to make payment within 14 days of the due date',
              'The Client provides false information or engages in conduct harmful to our team',
              'The project requirements are found to violate applicable laws',
            ]} />
            <P>
              In such cases, a pro-rata refund for demonstrably undelivered work (excluding
              administrative and incurred costs) will be issued within 14 working days.
            </P>
          </Section>

          {/* Section 5 */}
          <Section title="5. Free Trial Terms">
            <P>
              Where a complimentary "one month free" service is offered, no payment is charged
              during the trial period. Following the trial, continued use constitutes agreement to
              pay the applicable service fee. There is no refund applicable to the trial itself as
              no payment is taken.
            </P>
          </Section>

          {/* Section 6 */}
          <Section title="6. Compliance with Indian Law">
            <P>This policy is formulated in compliance with:</P>
            <UL items={[
              'The Consumer Protection Act, 2019',
              'The Consumer Protection (E-Commerce) Rules, 2020',
              'The Indian Contract Act, 1872',
              'GST regulations as applicable to digital services in India',
            ]} />

            <div style={{
              border: '1px solid rgba(212,168,67,0.25)',
              background: 'rgba(212,168,67,0.04)',
              padding: '1rem 1.5rem',
              margin: '1.5rem 0',
              borderRadius: '2px',
            }}>
              <p style={{ color: '#d4a843', fontSize: '0.88rem', lineHeight: 1.75 }}>
                ⚠ If you are a consumer under the Consumer Protection Act, 2019, and have a
                dispute that remains unresolved after following the above process, you may approach
                the appropriate Consumer Disputes Redressal Commission (CDRC) in India.
              </p>
            </div>
          </Section>

          {/* Section 7 */}
          <Section title="7. Contact for Cancellations & Refunds">
            <HighlightBox>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>
                Inteliglo — Grievance / Refund Team
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
