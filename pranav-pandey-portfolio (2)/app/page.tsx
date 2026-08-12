'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  KeyRound,
  LockKeyhole,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  UserRound,
  X,
} from 'lucide-react'

const domains = [
  { id: 'cybersecurity', label: 'Cybersecurity', icon: ShieldCheck, note: 'Security risks and defense', description: 'Understanding common security risks and how to protect applications, systems and networks.', topics: ['Web Security', 'Network Security', 'Vulnerability Assessment', 'Reconnaissance', 'Threat Intelligence', 'Security Automation', 'Security Fundamentals'] },
  { id: 'networking', label: 'Networking', icon: Network, note: 'Protocols and packet flow', description: 'Learning how devices and services communicate across networks.', topics: ['TCP/IP', 'DNS', 'HTTP / HTTPS', 'TCP / UDP', 'IP Addresses', 'Ports', 'Routing', 'Subnetting', 'Firewalls', 'VPN', 'Network Monitoring'] },
  { id: 'cloud', label: 'Cloud Security', icon: Cloud, note: 'Identity and access control', description: 'Exploring how cloud infrastructure, accounts and data can be protected.', topics: ['AWS', 'IAM', 'VPC', 'Cloud Networking', 'Security Groups', 'Access Control', 'Cloud Storage', 'Logging', 'Monitoring', 'Encryption'] },
  { id: 'linux', label: 'Linux', icon: Terminal, note: 'Systems and security tools', description: 'Using Linux to understand systems, networking and security tools.', topics: ['Linux', 'Kali Linux', 'Parrot OS', 'Ubuntu', 'Debian', 'Bash', 'SSH', 'Permissions', 'Processes', 'System Administration'] },
  { id: 'python', label: 'Python', icon: Code2, note: 'Automation and utilities', description: 'Using Python to build security tools and automate tasks.', topics: ['Security Automation', 'CLI Tools', 'Network Automation', 'API Integration', 'Data Processing', 'Log Analysis', 'Security Utilities'] },
  { id: 'tools', label: 'Security Tools', icon: KeyRound, note: 'Authorized lab practice', description: 'Learning and using security tools in authorized labs and projects.', topics: ['Nmap', 'Wireshark', 'TCPdump', 'Netcat', 'Burp Suite', 'SQLmap', 'cURL', 'SNMP'] },
]

const learningCards = [
  { title: 'Networking', description: 'Learning how networks work, from TCP/IP and DNS to routing, ports and firewalls.', topics: ['TCP/IP', 'DNS', 'Routing', 'Subnetting', 'Network Security'], icon: Network },
  { title: 'Cloud Security', description: 'Learning how cloud accounts, networks and data are protected.', topics: ['AWS', 'IAM', 'VPC', 'Access Control', 'Cloud Networking'], icon: Cloud },
  { title: 'Linux & Security', description: 'Using Linux to understand systems and practice security tools.', topics: ['Linux', 'Bash', 'SSH', 'Permissions', 'Security Tools'], icon: Terminal },
  { title: 'Web Security', description: 'Learning how websites and APIs can be secured.', topics: ['HTTP', 'Authentication', 'Authorization', 'OWASP', 'API Security'], icon: Globe2 },
]

const projects = [
  { title: 'SafeLink', type: 'Cybersecurity web app', description: 'A cybersecurity toolkit for checking suspicious URLs, analyzing password strength and encrypting files.', detail: 'Checks URLs, analyzes passwords and encrypts files.', tags: ['Next.js', 'TypeScript', 'Supabase', 'VirusTotal'], link: 'https://github.com/PranavPandey18/SafeLink' },
  { title: 'Eye Forge', type: 'Cybersecurity tool', description: 'A Linux-based reconnaissance tool for organizing authorized security assessments and running network scans.', detail: 'Manages targets, runs scans and organizes assessment results.', tags: ['Python', 'Linux', 'Bash', 'Nmap'], link: 'https://github.com/PranavPandey18/EyeForge' },
]

function Diagram({ kind }: { kind: 'network' | 'cloud' }) {
  const nodes = kind === 'network'
    ? [['CLIENT', 'Your device'], ['DNS', 'Finds the website'], ['GATEWAY', 'Routes the request'], ['SERVER', 'Sends the response']]
    : [['USER', 'Who is accessing it?'], ['IDENTITY', 'Who are they?'], ['POLICY', 'What can they access?'], ['APPLICATION', 'What are they using?'], ['DATA', 'What needs protection?']]
  return <div className={`diagram diagram-${kind}`} aria-label={`${kind} security diagram`}><div className="diagram-line" />{nodes.map(([name, description], index) => <div className="diagram-node" key={name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><small>{description}</small></div>)}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDomain, setActiveDomain] = useState('cybersecurity')
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (typeof window !== 'undefined' && window.localStorage.getItem('pp-theme') === 'light' ? 'light' : 'dark'))
  const [progress, setProgress] = useState(0)
  const [introVisible, setIntroVisible] = useState(true)
  const active = useMemo(() => domains.find((domain) => domain.id === activeDomain) ?? domains[0], [activeDomain])

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 2100)
    return () => window.clearTimeout(timer)
  }, [])
  useEffect(() => {
    const onScroll = () => setProgress((window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.documentElement.dataset.theme = theme; window.localStorage.setItem('pp-theme', theme) }, [theme])
  const closeMenu = () => setMenuOpen(false)

  return <main className="portfolio-shell">
    {introVisible && <div className="portal-intro" role="status" aria-label="Opening portfolio" aria-live="polite"><div className="portal-rings" aria-hidden="true"><span className="portal-ring portal-ring-outer" /><span className="portal-ring portal-ring-mid" /><span className="portal-ring portal-ring-inner" /><span className="portal-ring portal-ring-core" /></div><div className="portal-content"><img src="/pranav-logo.png" alt="" /><strong>PRANAV PANDEY</strong><span>CYBERSECURITY ANALYST</span></div><div className="portal-markers" aria-hidden="true"><span>01 / SECURITY</span><span>02 / NETWORK</span><span>03 / CLOUD</span><span>04 / LINUX</span></div></div>}
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Pranav Pandey home"><img className="brand-logo" src="/pranav-logo.png" alt="Pranav Pandey logo" /><span>PRANAV PANDEY</span></a>
      <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
        <a href="/about" onClick={closeMenu}>About</a><a href="/skills" onClick={closeMenu}>Skills</a><a href="/projects" onClick={closeMenu}>Projects</a><a href="/learning" onClick={closeMenu}>Learning</a><a href="/contact" onClick={closeMenu}>Contact</a>
      </nav>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme"><span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section id="top" className="hero section-pad">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> CYBERSECURITY ANALYST</p><h1>I build<br /><em>secure</em><br />digital projects.</h1><p className="hero-lede">I&apos;m Pranav Pandey, a BCA student and cybersecurity analyst interested in network security, cloud security, Linux, Python and practical security tools.</p><p className="hero-lede">I learn by building projects and understanding how technology works behind the scenes.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowUpRight /></a><a className="text-link" href="https://www.linkedin.com/in/pranav-pandey-680b682a7" target="_blank" rel="noreferrer">Say hello <span>↗</span></a></div></div>
      <div className="hero-visual"><div className="visual-label">CURRENT FOCUS<br /><span>CYBERSECURITY / NETWORKING / CLOUD SECURITY</span></div><div className="orbit orbit-outer"><div className="orbit orbit-mid"><div className="orbit-core"><ShieldCheck /><span>SECURITY<br />IN MIND</span></div></div></div><div className="crosshair crosshair-a" /><div className="crosshair crosshair-b" /><div className="visual-stack"><span>BUILDING</span><strong>SafeLink</strong><strong>Eye Forge</strong><span>LEARNING</span><strong>Linux / Python / AWS</strong></div></div>
    </section>

    <section id="about" className="about section-pad section-rule"><div className="section-kicker">01 / ABOUT ME</div><div className="about-grid"><h2>Curious about<br />how <span>technology</span><br />works.</h2><div className="about-copy"><p className="large-copy">I&apos;m Pranav Pandey, a BCA student from Dehradun, India, focused on cybersecurity.</p><p>I&apos;m especially interested in the systems behind everyday technology. I like learning how networks, applications, operating systems and cloud services work — and how to protect them.</p><p>I learn by building small projects, testing ideas and documenting what I learn.</p><div className="signature-line"><span>BASED IN</span><strong>DEHRADUN, INDIA</strong><span>PRIMARY FOCUS</span><strong>CYBERSECURITY</strong></div></div></div><div className="fact-grid">{[['BCA STUDENT', UserRound], ['CYBERSECURITY', ShieldCheck], ['NETWORKING', Network], ['CLOUD SECURITY', Cloud], ['LINUX', Terminal], ['PYTHON', Code2]].map(([label, Icon]) => <div className="fact-card" key={label as string}><Icon /><span>{label as string}</span></div>)}</div></section>

    <section className="what-i-do section-pad section-rule"><div className="section-kicker">02 / WHAT I DO</div><div className="learning-intro"><h2>What I like<br /><span>to build.</span></h2><p>I build practical projects to improve my cybersecurity, programming and infrastructure skills.</p></div><div className="service-grid">{[['CYBERSECURITY', 'Learning security concepts and building tools for defensive and authorized security testing.', ShieldCheck], ['NETWORKING', 'Learning how computers, servers and networks communicate.', Network], ['CLOUD SECURITY', 'Exploring AWS, cloud networking, identity and access control.', Cloud], ['SECURITY AUTOMATION', 'Using Python and Linux tools to automate repetitive security tasks.', Terminal]].map(([title, copy, Icon]) => <article className="service-card" key={title as string}><Icon /><h3>{title as string}</h3><p>{copy as string}</p></article>)}</div></section>

    <section id="skills" className="domains section-pad section-rule"><div className="section-kicker">03 / SKILLS</div><div className="learning-intro"><h2>What I&apos;m<br /><span>learning.</span></h2><p>My current focus is cybersecurity, networking and cloud security, supported by Python and Linux.</p></div><div className="domains-grid"><div className="domain-list">{domains.map(({ id, label, icon: Icon, note }) => <button key={id} className={activeDomain === id ? 'domain-item active' : 'domain-item'} onClick={() => setActiveDomain(id)}><Icon /><span><strong>{label}</strong><small>{note}</small></span><ChevronDown /></button>)}</div><div className="domain-detail"><div className="detail-top"><span>SELECTED SKILL</span><span>/{active.id}</span></div><h2>{active.label}</h2><p>{active.description}</p><div className="skill-tags">{active.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><div className="domain-bar"><span style={{ width: '100%' }} /></div><small className="progress-note">CURRENTLY LEARNING / NO FAKE PERCENTAGES</small></div></div></section>

    <section id="learning" className="learning section-pad section-rule"><div className="section-kicker">04 / LEARNING LOG</div><div className="learning-intro"><h2>What I&apos;m<br /><span>learning now.</span></h2><p>I&apos;m currently improving my skills in cybersecurity, networking, Linux and cloud security through projects, labs and hands-on practice.</p></div><div className="learning-grid"><article className="learning-card wide"><div className="card-head"><span>NETWORKING</span><Network /></div><h3>How a web request moves through a network.</h3><Diagram kind="network" /><p>Understanding how a request moves from your device through DNS, a gateway and a server.</p></article>{learningCards.slice(1).map(({ title, description, topics, icon: Icon }) => <article className="learning-card" key={title}><div className="card-head"><span>{title.toUpperCase()}</span><Icon /></div><h3>{description}</h3><div className="skill-tags">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div><p>{title === 'Cloud Security' ? 'Learning how identity and access control protect cloud systems.' : title === 'Linux & Security' ? 'I use Linux, Bash and security tools in authorized labs.' : 'Learning how websites and APIs can be secured.'}</p></article>)}</div><div className="terminal-card"><div className="card-head"><span>TOOLS I USE TO LEARN</span><Terminal /></div><div className="terminal-box"><span>$ whoami</span><strong>pranav@security-lab</strong><span>$ focus</span><strong>cybersecurity / networking / cloud-security</strong><span>$ tools</span><strong>nmap / linux / python / git</strong><span>$ build</span><strong>safelink / eye-forge</strong></div><p>I use Linux, Python and security tools to build projects and practice what I learn.</p></div></section>

    <section id="projects" className="projects section-pad section-rule"><div className="section-kicker">05 / PROJECTS I&apos;VE BUILT</div><div className="projects-head"><h2>Projects<br /><span>I&apos;ve built.</span></h2><p>These projects show what I&apos;m learning by actually building and testing things.</p></div><div className="project-list">{projects.map((project, index) => <article className="project-row project-detail-row" key={project.title}><span className="project-index">{String(index + 1).padStart(2, '0')}</span><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-facts"><span><b>WHAT IT DOES</b>{project.detail}</span><span><b>WHAT I USED</b>{project.tags.join(', ')}</span></div></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project`}><ArrowUpRight /></a></article>)}</div></section>

    <section className="github-section section-pad section-rule"><div className="section-kicker">06 / GITHUB</div><div className="contact-grid"><div><h2>See what I&apos;m<br /><span>building.</span></h2></div><div className="contact-copy"><p>My GitHub contains the projects, experiments and code behind my learning.</p><div className="github-list">{projects.map((project) => <a href="https://github.com/PranavPandey18" target="_blank" rel="noreferrer" key={project.title}><GitBranch />{project.title}<ExternalLink /></a>)}</div><a className="button button-primary" href="https://github.com/PranavPandey18" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a></div></div></section>

    <section className="mindset section-pad section-rule"><div className="section-kicker">07 / SECURITY MINDSET</div><div className="learning-intro"><h2>How I approach<br /><span>security.</span></h2><p>Good security starts with understanding the system and improving it step by step.</p></div><div className="mindset-grid">{[['UNDERSTAND', 'Learn how the system works first.'], ['TEST', 'Use labs and authorized environments to practice.'], ['BUILD', 'Turn what I learn into practical projects.'], ['VERIFY', 'Test assumptions instead of blindly trusting them.'], ['IMPROVE', 'Keep learning as technology and threats change.']].map(([title, copy], index) => <div className="mindset-item" key={title}><span>0{index + 1}</span><CheckCircle2 /><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>

    <section id="contact" className="contact section-pad"><div className="contact-grid"><div><div className="section-kicker">08 / CONTACT</div><h2>Let&apos;s<br /><em>connect.</em></h2></div><div className="contact-copy"><p>Have a project, opportunity or idea you&apos;d like to discuss? Feel free to reach out.</p><a className="button button-primary" href="/email">Email me <ArrowUpRight /></a><div className="social-links"><a href="https://github.com/PranavPandey18" target="_blank" rel="noreferrer"><GitBranch /> GitHub</a><a href="https://www.linkedin.com/in/pranav-pandey-680b682a7" target="_blank" rel="noreferrer"><LockKeyhole /> LinkedIn</a><a href="/email"><ArrowUpRight /> Email</a></div></div></div></section>
    <footer><span>PRANAV PANDEY / CYBERSECURITY ANALYST</span><span>Building practical projects while learning cybersecurity, networking and cloud security.</span><span>© 2026 / AUTHORIZED SECURITY TESTING ONLY</span></footer>
  </main>
}
