'use client'

import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Learning', '/learning'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (typeof window !== 'undefined' && window.localStorage.getItem('pp-theme') === 'light' ? 'light' : 'dark'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('pp-theme', theme)
  }, [theme])

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Pranav Pandey home"><img className="brand-logo" src="/pranav-logo.png" alt="Pranav Pandey" /><span>PRANAV PANDEY</span></Link>
      <nav className={open ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">
          {theme === 'dark' ? <Sun /> : <Moon />}<span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
        </button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

export function PageFrame({ children, kicker, title, intro }: { children: React.ReactNode; kicker: string; title: React.ReactNode; intro: string }) {
  return <main className="portfolio-shell"><SiteNav /><section className="page-hero section-pad"><p className="eyebrow"><span className="status-dot" /> PRANAV PANDEY / CYBERSECURITY ANALYST</p><h1>{title}</h1><p className="page-intro">{intro}</p><span className="page-kicker">{kicker}</span></section>{children}<footer><span>PRANAV PANDEY / CYBERSECURITY ANALYST</span><span>© 2026 / AUTHORIZED SECURITY TESTING ONLY</span></footer></main>
}

export const skills = [
  ['Cybersecurity', 'Security risks and defense', ['Web Security', 'Network Security', 'Vulnerability Assessment', 'Threat Intelligence']],
  ['Networking', 'Protocols and packet flow', ['TCP/IP', 'DNS', 'HTTP / HTTPS', 'Routing', 'Firewalls', 'VPN']],
  ['Cloud Security', 'Identity and access control', ['AWS', 'IAM', 'VPC', 'Security Groups', 'Logging', 'Encryption']],
  ['Linux & Python', 'Systems and automation', ['Linux', 'Bash', 'SSH', 'Permissions', 'CLI Tools', 'Log Analysis']],
]

export const projectItems = [
  ['SafeLink', 'Cybersecurity web app', 'A cybersecurity toolkit for checking suspicious URLs, analyzing password strength and encrypting files.', ['Next.js', 'TypeScript', 'Supabase', 'VirusTotal'], 'https://github.com/PranavPandey18/SafeLink'],
  ['Eye Forge', 'Cybersecurity tool', 'A Linux-based reconnaissance tool for organizing authorized security assessments and running network scans.', ['Python', 'Linux', 'Bash', 'Nmap'], 'https://github.com/PranavPandey18/EyeForge'],
  ['AI Resume Builder', 'Web application', 'An AI-assisted web application for creating clean, professional resumes.', ['HTML', 'CSS', 'AI'], 'https://github.com/PranavPandey18'],
  ['Mini Expenses Tracker', 'Web application', 'A simple web application for tracking personal expenses and keeping everyday spending organized.', ['JavaScript', 'HTML', 'CSS'], 'https://github.com/PranavPandey18'],
]

export const TagList = ({ tags }: { tags: string[] }) => <div className="skill-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>

export const ContactLinks = () => <div className="social-links"><a href="/email">Email <span>↗</span></a><a href="https://github.com/PranavPandey18" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/pranav-pandey-680b682a7" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>

export const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <section className={`section-pad section-rule ${className}`}>{children}</section>
