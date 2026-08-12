import { PageFrame, Section, TagList } from '@/components/site-nav'

const lessons = [['NETWORKING', 'How a web request moves through a network.', 'Understanding how a request moves from your device through DNS, a gateway and a server.', ['TCP/IP', 'DNS', 'Routing', 'Ports']], ['CLOUD SECURITY', 'Identity is the first boundary.', 'Learning how identity and access control protect cloud systems.', ['AWS', 'IAM', 'VPC', 'Encryption']], ['LINUX & SECURITY', 'The system is the lab.', 'Using Linux, Bash and security tools in authorized labs.', ['Linux', 'Bash', 'SSH', 'Nmap']], ['WEB SECURITY', 'Build with the threat model in mind.', 'Learning how websites and APIs can be secured.', ['HTTP', 'Authentication', 'OWASP', 'API Security']]]

export default function LearningPage() {
  return <PageFrame kicker="03 / LEARNING LOG" title={<>What I’m<br /><em>learning now.</em></>} intro="I’m improving my skills through projects, labs and hands-on practice.">
    <Section><div className="learning-grid">{lessons.map(([label, title, copy, tags], index) => <article className={index === 0 ? 'learning-card wide' : 'learning-card'} key={String(label)}><div className="card-head"><span>{label}</span><span>0{index + 1}</span></div><h3>{title}</h3>{index === 0 ? <div className="diagram"><div className="diagram-line" />{['CLIENT', 'DNS', 'GATEWAY', 'SERVER'].map((node, i) => <div className="diagram-node" key={node}><span>0{i + 1}</span><strong>{node}</strong><small>security boundary</small></div>)}</div> : <TagList tags={tags as string[]} />}<p>{copy}</p></article>)}</div></Section>
    <Section><div className="terminal-card"><div className="card-head"><span>TOOLS I USE TO LEARN</span><span>TERMINAL</span></div><div className="terminal-box"><span>$ whoami</span><strong>pranav@security-lab</strong><span>$ focus</span><strong>cybersecurity / networking / cloud-security</strong><span>$ tools</span><strong>nmap / linux / python / git</strong></div></div></Section>
  </PageFrame>
}
