import { ArrowUpRight, GitBranch, LockKeyhole, Mail } from 'lucide-react'
import { ContactLinks, PageFrame, Section } from '@/components/site-nav'

export default function ContactPage() {
  return <PageFrame kicker="05 / CONTACT" title={<>Let’s<br /><em>connect.</em></>} intro="Have a project, opportunity or idea you’d like to discuss? Feel free to reach out.">
    <Section><div className="contact-grid"><div><p className="section-kicker">DIRECT CHANNELS</p><h2>Find me<br /><span>online.</span></h2></div><div className="contact-copy"><p>For opportunities, collaborations or questions about my projects, email is the fastest way to reach me.</p><a className="button button-primary" href="mailto:pandeypranav70198@gmail.com">Email me <ArrowUpRight /></a><div className="social-links"><a href="mailto:pandeypranav70198@gmail.com"><Mail /> pandeypranav70198@gmail.com</a><a href="https://github.com/PranavPandey18" target="_blank" rel="noreferrer"><GitBranch /> GitHub / PranavPandey18</a><a href="https://www.linkedin.com/in/pranav-pandey-680b682a7" target="_blank" rel="noreferrer"><LockKeyhole /> LinkedIn profile</a></div></div></div></Section>
    <Section><p className="section-kicker">RESPONSIBLE BUILDING</p><p className="large-copy">I only test systems I own or have explicit permission to assess.</p><ContactLinks /></Section>
  </PageFrame>
}
