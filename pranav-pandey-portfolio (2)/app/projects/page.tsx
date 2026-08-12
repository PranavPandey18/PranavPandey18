import { ArrowUpRight } from 'lucide-react'
import { PageFrame, Section, TagList } from '@/components/site-nav'

const projectItems = [['SafeLink', 'Cybersecurity web app', 'A toolkit for checking suspicious URLs, analyzing password strength and encrypting files.', ['Next.js', 'TypeScript', 'Supabase', 'VirusTotal']], ['Eye Forge', 'Cybersecurity tool', 'A Linux-based reconnaissance tool for organizing authorized security assessments and running network scans.', ['Python', 'Linux', 'Bash', 'Nmap']]] as const

export default function ProjectsPage() {
  return <PageFrame kicker="04 / PROJECTS I’VE BUILT" title={<>Projects<br /><em>I’ve built.</em></>} intro="These projects show what I’m learning by actually building and testing things.">
    <Section><div className="project-list">{projectItems.map(([title, type, description, tags], index) => <article className="project-row project-detail-row" key={title}><span className="project-index">0{index + 1}</span><div><span className="project-type">{type}</span><h3>{title}</h3><p>{description}</p><div className="project-facts"><span><b>WHAT IT DOES</b>{description}</span><span><b>WHAT I USED</b>{tags.join(', ')}</span></div></div><TagList tags={[...tags]} /><a href="mailto:pandeypranav70198@gmail.com" aria-label={`Ask about ${title}`}><ArrowUpRight /></a></article>)}</div></Section>
  </PageFrame>
}
