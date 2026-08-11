import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact & Support | Inteliglo',
  description:
    'Reach out to Inteliglo for technical support, project queries, or anything else. Our team responds within 24 hours.',
}

export default function SupportPage() {
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
              // Contact &amp; Support
            </div>

            <h1 style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: 'var(--white)',
              marginBottom: '1rem',
            }}>
              We&apos;re Here.<br />
              <span style={{ color: 'var(--green)' }}>Let&apos;s Talk.</span>
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
            }}>
              Response Time: <span style={{ color: 'var(--green)' }}>Within 24 Hours</span>
              &nbsp;|&nbsp;
              Hours: <span style={{ color: 'var(--green)' }}>Mon–Sat, 9AM–7PM IST</span>
            </div>
          </div>

          {/* Intro highlight box */}
          <HighlightBox>
            Reach out for technical support, project queries, or anything else. Our team responds
            within <strong style={{ color: 'var(--white)' }}>24 hours</strong> on business days —
            faster for critical issues.
          </HighlightBox>

          {/* Section 1 — Contact Channels */}
          <Section title="1. Contact Channels">
            {/* 2-col contact cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              margin: '1.5rem 0',
            }}>
              {[
                {
                  icon: '✉',
                  label: 'Email Support',
                  desc: 'Send us a message anytime.',
                  link: { href: 'mailto:hello.inteliglo@gmail.com', text: 'hello.inteliglo@gmail.com' },
                },
                {
                  icon: '☎',
                  label: 'Phone Support',
                  desc: 'Call us on our domestic India number.',
                  link: { href: 'tel:+918860686869', text: '+91 8210219654' },
                  sub: 'Mon–Sat, 9AM–7PM IST',
                },
                {
                  icon: '◎',
                  label: 'Response Time',
                  desc: 'We aim to respond to all queries within 24 hours on business days (Monday–Saturday).',
                },
                {
                  icon: '◈',
                  label: 'Free Consultation',
                  desc: 'Book a complimentary 30-minute discovery call to discuss your project and requirements.',
                },
              ].map((card, i) => (
                <div key={i} style={{
                  border: '1px solid rgba(0,212,255,0.1)',
                  background: 'rgba(0,212,255,0.02)',
                  padding: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.2rem',
                    color: 'var(--sky)',
                    marginBottom: '0.75rem',
                  }}>
                    {card.icon}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--white)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}>
                    {card.label}
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                    {card.desc}
                    {card.link && (
                      <>
                        <br />
                        <a href={card.link.href} style={{ color: 'var(--sky)' }}>
                          {card.link.text}
                        </a>
                      </>
                    )}
                    {card.sub && (
                      <>
                        <br />
                        <span style={{ fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.6 }}>
                          {card.sub}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Section 2 — Office & Hours */}
          <Section title="2. Office & Support Hours">
            <SubHeading>2.1 Registered Office</SubHeading>
            <P>
              Inteliglo Digital Intelligence Pvt. Ltd.
              <br />
              India — Serving Clients Worldwide
              <br />
              <span style={{ fontSize: '0.82rem', opacity: 0.55 }}>
                (Full registered address available upon request)
              </span>
            </P>

            <SubHeading>2.2 Support Hours</SubHeading>
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr>
                    {['Day', 'Hours'].map((h) => (
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
                    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM IST', open: true },
                    { day: 'Saturday', hours: '10:00 AM – 5:00 PM IST', open: true },
                    { day: 'Sunday', hours: 'Closed', open: false },
                    { day: 'Public Holidays', hours: 'Closed', open: false },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{
                        padding: '0.7rem 1rem',
                        border: '1px solid rgba(0,212,255,0.08)',
                        color: 'var(--muted)',
                        background: i % 2 === 1 ? 'rgba(0,212,255,0.02)' : 'transparent',
                      }}>
                        {row.day}
                      </td>
                      <td style={{
                        padding: '0.7rem 1rem',
                        border: '1px solid rgba(0,212,255,0.08)',
                        color: row.open ? 'var(--green)' : '#ff5555',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        background: i % 2 === 1 ? 'rgba(0,212,255,0.02)' : 'transparent',
                      }}>
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Section 3 — How to Reach Us */}
          <Section title="3. How to Reach Us">
            <SubHeading>3.1 For General Inquiries</SubHeading>
            <P>
              For general questions, service information, or to explore how Inteliglo can help
              your business, email us or call during business hours.
            </P>
            <HighlightBox>
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>
              <br />
              Subject line: <em>Inquiry — [Your Name / Company Name]</em>
            </HighlightBox>

            <SubHeading>3.2 For Technical Support</SubHeading>
            <P>
              If you are experiencing a technical issue with a delivered project or service,
              please include the following details in your email:
            </P>
            <UL items={[
              'Your full name and company name',
              'Project or service reference (if available)',
              'Description of the issue with screenshots if applicable',
              'Steps to reproduce the problem',
              'Urgency level: Low / Medium / High / Critical',
            ]} />

            <SubHeading>3.3 For Billing & Payments</SubHeading>
            <P>
              For invoice queries, payment confirmations, or billing disputes, reference your
              invoice number in the subject line for faster resolution.
            </P>
            <HighlightBox>
              <a href="mailto:hello.inteliglo@gmail.com" style={{ color: 'var(--sky)' }}>
                hello.inteliglo@gmail.com
              </a>
              <br />
              Subject line: <em>Billing — Invoice #[Number] — [Your Name]</em>
            </HighlightBox>

            <SubHeading>3.4 For Project Status Updates</SubHeading>
            <P>
              Active clients may reach their assigned project manager directly. If you do not have
              a dedicated point of contact, use the general email with your project name in the
              subject line.
            </P>
          </Section>

          {/* Section 4 — Free Consultation */}
          <Section title="4. Free Consultation">
            <P>
              We offer a complimentary <strong style={{ color: 'var(--white)' }}>30-minute
                discovery call</strong> for new clients. During this call, we discuss your goals,
              challenges, and how Inteliglo&apos;s services can be tailored to your needs.
            </P>
            <UL items={[
              'No obligation — purely exploratory',
              'Available Monday to Saturday during business hours',
              'Conducted via Google Meet or phone call',
              'Book by emailing us with subject: "Discovery Call Request"',
            ]} />
          </Section>

          {/* Section 5 — Contact Card */}
          <Section title="5. Contact Details">
            <HighlightBox>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>
                Inteliglo — Support Team
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
              Response Time: Within 24 hours
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