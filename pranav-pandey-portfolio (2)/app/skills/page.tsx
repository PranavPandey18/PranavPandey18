import { PageFrame, Section, TagList } from '@/components/site-nav'

const skills = [['Cybersecurity', 'Security risks and defense', ['Web Security', 'Network Security', 'Vulnerability Assessment', 'Threat Intelligence']], ['Networking', 'Protocols and packet flow', ['TCP/IP', 'DNS', 'HTTP / HTTPS', 'Routing', 'Firewalls', 'VPN']], ['Cloud Security', 'Identity and access control', ['AWS', 'IAM', 'VPC', 'Security Groups', 'Logging', 'Encryption']], ['Linux & Python', 'Systems and automation', ['Linux', 'Bash', 'SSH', 'Permissions', 'CLI Tools', 'Log Analysis']]] as const

export default function SkillsPage() {
  return <PageFrame kicker="02 / SKILLS" title={<>What I’m<br /><em>learning.</em></>} intro="My current focus is cybersecurity, networking and cloud security, supported by Python and Linux.">
    <Section><div className="service-grid">{[['CYBERSECURITY', 'Learning security concepts and building tools for defensive and authorized security testing.'], ['NETWORKING', 'Learning how computers, servers and networks communicate.'], ['CLOUD SECURITY', 'Exploring AWS, cloud networking, identity and access control.'], ['SECURITY AUTOMATION', 'Using Python and Linux tools to automate repetitive security tasks.']].map(([title, copy]) => <article className="service-card" key={title}><span className="eyebrow">{title}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>
    <Section><div className="domains-grid"><div><p className="section-kicker">CURRENT STUDY AREAS</p><h2>Skills in<br /><em>progress.</em></h2></div><div className="domain-list">{skills.map(([name, note, tags]) => <article className="domain-item" key={name}><span><strong>{name}</strong><small>{note}</small><TagList tags={[...tags]} /></span></article>)}</div></div></Section>
  </PageFrame>
}
