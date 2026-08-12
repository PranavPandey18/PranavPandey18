import { PageFrame, Section, ContactLinks } from '@/components/site-nav'

export default function AboutPage() {
  return <PageFrame kicker="01 / ABOUT ME" title={<>Curious about<br />how <em>technology</em> works.</>} intro="I’m Pranav Pandey, a BCA student from Dehradun, India, focused on cybersecurity.">
    <Section><div className="about-grid"><div><p className="section-kicker">THE SHORT VERSION</p><p className="large-copy">I’m interested in the systems behind everyday technology and how they can be made safer.</p></div><div className="about-copy"><p>I like learning how networks, applications, operating systems and cloud services work — and how to protect them.</p><p>I learn by building small projects, testing ideas and documenting what I learn. This site is a record of that process.</p><div className="signature-line"><span>BASED IN</span><strong>DEHRADUN, INDIA</strong><span>PRIMARY FOCUS</span><strong>CYBERSECURITY</strong></div></div></div></Section>
    <Section><div className="fact-grid">{['BCA STUDENT', 'CYBERSECURITY', 'NETWORKING', 'CLOUD SECURITY', 'LINUX', 'PYTHON'].map((item) => <div className="fact-card" key={item}><span>{item}</span></div>)}</div></Section>
    <Section><div className="contact-grid"><div><p className="section-kicker">OPEN TO CONNECTIONS</p><h2>Let’s<br /><em>connect.</em></h2></div><div className="contact-copy"><p>Have a project, opportunity or idea to discuss?</p><ContactLinks /></div></div></Section>
  </PageFrame>
}
