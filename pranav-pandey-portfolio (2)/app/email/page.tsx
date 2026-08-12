import { ArrowUpRight, Mail } from 'lucide-react'
import { PageFrame } from '@/components/site-nav'

const email = 'pandeypranav70198@gmail.com'

export default function EmailPage() {
  return (
    <PageFrame kicker="EMAIL / DIRECT CONTACT" title={<>Send me a<br /><em>message.</em></>} intro="Your email app will open with my address ready. I look forward to hearing from you.">
      <section className="section-pad section-rule email-page-section">
        <div className="email-card">
          <Mail aria-hidden="true" />
          <span className="section-kicker">DIRECT EMAIL</span>
          <h2>{email}</h2>
          <p>For project opportunities, internships, collaborations or questions, send me a message directly.</p>
          <a className="button button-primary" href={`mailto:${email}?subject=Hello%20Pranav`}>Open email app <ArrowUpRight /></a>
        </div>
      </section>
    </PageFrame>
  )
}

export const metadata = { title: 'Email Pranav Pandey', description: 'Send Pranav Pandey an email about projects, opportunities and collaborations.' }
