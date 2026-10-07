import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import {
  ArrowUpRight, BrainCircuit, CalendarDays, Check, ChevronDown, ChevronRight,
  Code2, ExternalLink, FileText, Github, Instagram, Layers3, Linkedin, LoaderCircle, Mail, MapPin,
  MessageCircle, Network, Phone, RotateCcw, Send, Sparkles, X, Zap
} from 'lucide-react';
import buildWithBharatImage from '@assets/image_1786293730191.png';
import buildathonImage from '@assets/image_1786293734741.png';
import webnovaImage from '@assets/image_1786293753245.png';
import hackdayImage from '@assets/image_1786293781403.png';
import participationAltImage from '@assets/image_1786293795596.png';
import dataAnalyticsImage from '@assets/image_1786294370235.png';
import ibmAiImage from '@assets/image_1786294376647.png';
import awsNlpImage from '@assets/image_1786294387710.png';
import genAiInternshipImage from '@assets/image_1786294398422.png';
import eisystemsImage from '@assets/image_1786294406297.png';
import geminiBuildathonImage from '@assets/image_1786294422123.png';
import promptBattleImage from '@assets/image_1786330869491.png';
import dataAnalyticsOfferLetterImage from '@assets/image_1786293743248.png';
import prodigyCompletionImage from '@assets/image_1787753336302.png';
import prodigyRecommendationImage from '@assets/image_1787753352025.png';
import pythonOfferLetterPageOne from '@assets/image_1787754043302.png';
import pythonOfferLetterPageTwo from '@assets/image_1787754059719.png';
import sehatEmergencyImage from '@assets/download_1786330882001.png';
import sehatMapImage from '@assets/download_1786330883790.png';
import sehatSignupImage from '@assets/download_1786330886215.png';
import forgeMindHeroImage from '@assets/download_1786330888161.png';
import forgeMindDashboardImage from '@assets/download_1786330889907.png';
import forgeMindRcaImage from '@assets/download_1786330892246.png';
import redHatCertificateImage from '@assets/image_1786331468667.png';
import libraryRepoImage from '@assets/1784367119851_1786331490746.jpg';
import libraryAddBookImage from '@assets/1784367119474_1786331492909.jpg';
import libraryBorrowImage from '@assets/1784367119911_1786331495000.jpg';
import railwayWalletImage from '@assets/1785091659695_1786331504951.jpg';
import railwayBookingImage from '@assets/1785091659663_1786331506557.jpg';
import railwayRepoImage from '@assets/1785091659812_1786331508424.jpg';
import resumeFile from '@assets/0_Anshika_Saxena_Resume_Final_1791301414957.pdf';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

type Project = {
  name: string;
  eyebrow: string;
  description: string;
  contribution?: string;
  tech: string[];
  github?: string;
  placeholder?: string;
  accent: string;
  images?: string[];
};

const projects: Project[] = [
  {
    name: 'SEHAT SAATHI',
    eyebrow: 'Featured / real project',
    description: 'An AI-driven healthcare platform designed to connect patients and doctors and provide intelligent healthcare assistance.',
    contribution: 'Primarily backend development.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'SQLite', 'SQLAlchemy', 'JavaScript', 'Gemini API', 'JWT', 'bcrypt'],
    github: 'https://github.com/saxenakhushi081-svg/Sehat-Saathi-2.0',
    accent: 'rose',
    images: [sehatEmergencyImage, sehatMapImage, sehatSignupImage]
  },
  {
    name: 'FORGEMIND AI',
    eyebrow: 'Featured / real project',
    description: 'An AI-powered Industrial Knowledge Intelligence Platform designed for document interaction, semantic search, analytics, knowledge visualization, RCA, compliance and intelligent information management.',
    contribution: 'Primarily frontend development.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'LangChain', 'FAISS', 'Gemini API'],
    github: 'https://github.com/saxenakhushi081-svg/ForgeMindAI',
    accent: 'teal',
    images: [forgeMindHeroImage, forgeMindDashboardImage, forgeMindRcaImage]
  },
  {
    name: 'LIBRARY MANAGEMENT SYSTEM',
    eyebrow: 'Featured / real project',
    description: 'A Python-based console application for managing books with features such as adding and removing books, searching by title/ISBN, borrowing and returning books, ISBN duplicate validation and persistent JSON storage.',
    tech: ['Python', 'OOP', 'JSON', 'File Handling'],
    github: 'https://github.com/saxenakhushi081-svg/Library-Management-System',
    accent: 'lavender',
    images: [libraryRepoImage, libraryAddBookImage, libraryBorrowImage]
  },
  {
    name: 'RAILWAY MANAGEMENT SYSTEM',
    eyebrow: 'Featured / real project',
    description: 'An individual Python application with user registration/login, train search, ticket booking, cancellation, booking history and wallet management. Admin functionality includes adding/removing trains and viewing bookings.',
    tech: ['Python', 'OOP', 'JSON', 'File Handling', 'Git', 'GitHub'],
    github: 'https://github.com/saxenakhushi081-svg/Railway-Management-System',
    accent: 'gold',
    images: [railwayWalletImage, railwayBookingImage, railwayRepoImage]
  },
  {
    name: 'HIREFLOW',
    eyebrow: 'Learning project',
    description: 'Resume Analyzer. This project is currently a learning project.',
    tech: [],
    placeholder: 'Project image, GitHub link, and demo/video link will be added later.',
    accent: 'blue'
  }
];

const skillGroups = [
  { label: 'Programming', icon: Code2, items: ['Python', 'Java', 'C'] },
  { label: 'Data Science / ML', icon: BrainCircuit, items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Linear Regression', 'K-Means Clustering', 'Support Vector Machine'] },
  { label: 'Web Development', icon: Layers3, items: ['HTML', 'CSS', 'JavaScript', 'FastAPI'] },
  { label: 'Databases', icon: Network, items: ['SQL', 'PostgreSQL', 'SQLite'] },
  { label: 'Tools / AI', icon: Zap, items: ['Git', 'GitHub', 'JSON', 'File Handling', 'OpenCV', 'Gemini API', 'LangChain', 'FAISS'] },
  { label: 'Concepts', icon: Sparkles, items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'DBMS', 'Operating Systems'] }
];

const education = [
  { title: 'B.Tech Computer Science & Design', place: 'IMS Engineering College, Ghaziabad', years: '2024 – 2028', score: 'CGPA: 7.34/10' },
  { title: 'Class XII – PCM', place: 'KDB Public School', years: '2023 – 2024', score: 'Percentage: 69.9%' },
  { title: 'Class X', place: 'KDB Public School', years: '2021 – 2022', score: 'Percentage: 75.9%' }
];

const hackathons = [
  ['Bharat-Tech Xperience 3.0', '3–4 April 2026', 'Team', 'Uniques Community at SVGOI'],
  ['HackdayAgra 2026', '30–31 May 2026', 'Team', 'Optimaxin Solutions Software Solutions Pvt. Ltd.'],
  ['WEBNOVA 2026', 'Round 3 Finalist', 'Team', 'HackerRank Campus Crew – IMS Engineering College'],
  ['Tech4Hack / Buildthon', '1 August 2026', 'Team', 'Thoughtworks Technology'],
  ['Build With Bharat – Microsoft', '1 August 2026', 'Team', 'CodeVerse'],
  ['Gemini Buildathon', '6 November 2025', 'Team', 'Google Student Ambassador Program']
];

type Certificate = {
  title: string;
  org: string;
  date: string;
  image?: string;
  images?: string[];
  imageLabel?: string;
};

const certificates: Certificate[] = [
  { title: 'Data Analytics with Python & Power BI', org: 'EduSkills Academy', date: 'August 2026', image: dataAnalyticsImage, imageLabel: 'EduSkills Data Analytics with Python and Power BI certificate' },
  { title: 'Data Analytics with Python & Power BI — Offer Letter', org: 'EduSkills Academy', date: 'June–August 2026', image: dataAnalyticsOfferLetterImage, imageLabel: 'EduSkills Data Analytics with Python and Power BI internship offer letter' },
  { title: 'Machine Learning Internship', org: 'Prodigy InfoTech', date: '15 July–15 August 2026', images: [prodigyCompletionImage, prodigyRecommendationImage], imageLabel: 'Prodigy InfoTech Machine Learning internship completion certificate and recommendation letter' },
  { title: 'Python Full Stack – EduSkills', org: 'Internship offer letter', date: 'August–October 2026', images: [pythonOfferLetterPageOne, pythonOfferLetterPageTwo], imageLabel: 'EduSkills Python Full Stack internship offer letter, pages one and two' },
  { title: 'Getting Started with Artificial Intelligence', org: 'IBM SkillsBuild', date: 'July 2026', image: ibmAiImage, imageLabel: 'IBM certificate' },
  { title: 'AWS Academy Graduate – Machine Learning for Natural Language Processing', org: 'Amazon Web Services Training and Certification', date: 'May 2026', image: awsNlpImage, imageLabel: 'AWS Academy certificate' },
  { title: 'Red Hat Training: Getting Started with Linux Fundamentals', org: 'Red Hat', date: '29 July 2026', image: redHatCertificateImage, imageLabel: 'Red Hat Training certificate of attendance' },
  { title: 'Gen AI Virtual Internship', org: 'EduSkills Foundation', date: 'April–June 2026', image: genAiInternshipImage, imageLabel: 'Gen AI virtual internship certificate' },
  { title: 'Comprehensive Technical Assessment', org: 'EISystems Technologies', date: 'May 2026', image: eisystemsImage, imageLabel: 'EISystems technical assessment certificate' },
  { title: 'Prompt Battle at IMS', org: 'IMS Engineering College · Tech Triumphs', date: '13 April 2026', image: promptBattleImage, imageLabel: 'Prompt Battle certificate of appreciation' },
  { title: 'Gemini Buildathon', org: 'Google Student Ambassador Program', date: '', image: geminiBuildathonImage, imageLabel: 'Gemini Buildathon certificate' },
  { title: 'Build With Bharat – Microsoft', org: 'CodeVerse', date: '1 August 2026', image: buildWithBharatImage, imageLabel: 'Build With Bharat certificate' },
  { title: 'WEBNOVA 2026', org: 'HackerRank Campus Crew – IMS Engineering College', date: 'Round 3 Finalist', image: webnovaImage, imageLabel: 'WEBNOVA certificate' },
  { title: 'HackdayAgra 2026', org: 'Optimaxin Solutions Software Solutions Pvt. Ltd.', date: '30–31 May 2026', image: hackdayImage, imageLabel: 'HackdayAgra 2026 certificate' },
  { title: 'Bharat-Tech Xperience 3.0', org: 'The Uniques Community at SVGOI', date: '3–4 April 2026', image: participationAltImage, imageLabel: 'Bharat-Tech Xperience 3.0 certificate' },
  { title: 'Tech4Hack / Buildthon', org: 'Thoughtworks Technology', date: '1 August 2026', image: buildathonImage, imageLabel: 'Tech4Hack Buildthon certificate' }
];

const navItems = [
  ['home', 'Home'], ['about', 'About'], ['education', 'Education'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['hackathons', 'Hackathons'], ['experience', 'Experience'], ['certificates', 'Certificates'], ['contact', 'Contact']
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .65, delay, ease: [.22, .8, .24, 1] }}>
      {children}
    </motion.div>
  );
}

function QuoteRibbon({ className = '' }: { className?: string }) {
  return <p className={`quote-ribbon ${className}`}>“Where creativity meets intelligent technology.”</p>;
}

function Petals() {
  const petals = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i, left: `${(i * 23) % 101}%`, duration: `${10 + (i % 6) * 2}s`, delay: `${-(i % 8) * 2}s`,
    sway: `${(i % 2 ? 1 : -1) * (20 + (i % 4) * 11)}px`, blur: i % 4 === 0 ? '1px' : '0px', opacity: `${.3 + (i % 4) * .12}`
  })), []);
  return <div className="petal-field" aria-hidden="true">{petals.map((p) => <span key={p.id} className="petal" style={p as CSSProperties} />)}</div>;
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 1350);
    return () => window.clearTimeout(timer);
  }, [onDone]);
  return (
    <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .65 }}>
      <div className="relative text-center">
        <div className="loader-ring mx-auto" />
        <p className="mono-font mt-6 text-[.62rem] uppercase tracking-[.25em] text-slate-600">a small world is opening</p>
        <p className="display-font mt-3 text-3xl text-slate-800">Anshika Saxena</p>
      </div>
    </motion.div>
  );
}

function Navbar({ active, onResume }: { active: string; onResume: () => void }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 px-3 pt-3 md:px-6 md:pt-5">
      <div className="nav-glass mx-auto max-w-[1180px] rounded-[1.6rem] px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <button className="focus-ring display-font whitespace-nowrap text-lg font-semibold tracking-tight text-slate-800 md:text-xl" onClick={() => scrollToId('home')} data-testid="button-home">Anshika Saxena<span className="text-rose-500">.</span></button>
          <button className="nav-resume focus-ring flex shrink-0 rounded-full px-3 py-2 mono-font text-[.6rem] uppercase tracking-[.08em] md:px-4 md:text-[.62rem]" onClick={onResume} data-testid="link-resume"><FileText size={13} /> Resume</button>
        </div>
        <nav className="nav-links-row mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 border-t border-slate-200/70 pt-2 md:gap-x-5 md:pt-3" aria-label="Primary navigation">
          {navItems.map(([id, label]) => <button key={id} className="nav-link focus-ring mono-font whitespace-nowrap text-[.56rem] uppercase tracking-[.045em] md:text-[.62rem] md:tracking-[.08em]" data-active={active === id} onClick={() => scrollToId(id)} data-testid={`link-${id}`}>{label}</button>)}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-sky relative min-h-[100dvh] overflow-hidden pt-28">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="section-wrap relative z-[2] flex min-h-[calc(100dvh-7rem)] items-center justify-center">
        <div className="hero-copy w-full max-w-5xl">
          <Reveal><p className="hero-eyebrow mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2"><Sparkles size={14} /> CURIOUS BY NATURE <span aria-hidden="true">·</span> BUILDING WITH PURPOSE</p></Reveal>
          <Reveal><p className="hero-self-quote">“A curious soul, a creative mind, and dreams bigger than the screen.”</p></Reveal>
          <Reveal delay={.1}><h1 className="hero-word display-font text-[clamp(4.8rem,11vw,9rem)] font-semibold leading-[.77] tracking-[-.075em] text-slate-800">ANSHIKA<br /><span className="accent">SAXENA</span></h1></Reveal>
          <Reveal delay={.2}><h2 className="hero-role display-font">Aspiring ML Engineer</h2></Reveal>
          <Reveal delay={.3}><div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600"><span className="tag">Computer Science &amp; Design</span><span className="tag accent">Machine Learning</span><span className="tag">Learning by building</span></div></Reveal>
          <Reveal delay={.4}><p className="hero-note mx-auto mt-7 px-5 text-slate-600">Creative thinking, technical curiosity, and a habit of learning by building.</p></Reveal>
          <Reveal delay={.5}><QuoteRibbon className="mt-8" /></Reveal>
          <Reveal delay={.6}><div className="hero-actions mt-8 flex flex-wrap items-center justify-center gap-3"><button onClick={() => scrollToId('projects')} className="hero-primary focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">Explore projects <ArrowUpRight size={15} /></button><button onClick={() => scrollToId('about')} className="hero-secondary focus-ring rounded-full px-5 py-3 text-sm font-semibold">My learning journey</button></div></Reveal>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
    </section>
  );
}

function SectionIntro({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return <Reveal className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="section-kicker mb-5">{index} / {eyebrow}</p><h2 className="section-title max-w-3xl">{title}</h2></div>{children && <div className="max-w-xs text-sm leading-6 text-slate-500">{children}</div>}</Reveal>;
}

function About() {
  return <section id="about" className="section-pad bg-[hsl(var(--background))]"><div className="section-wrap"><SectionIntro index="01" eyebrow="about me" title={<>A curious mind, <em>always building.</em></>}><span>Somewhere between a dataset and a sketchbook, Anshika is finding her way into intelligent, user-focused technology.</span></SectionIntro>
    <div className="grid gap-8 md:grid-cols-[1.4fr_.8fr]"><Reveal><div className="story-card rounded-[2rem] p-7 md:p-11"><p className="display-font text-[1.5rem] leading-[1.28] text-slate-700 md:text-[2rem]">An aspiring AI/ML Engineer with a curious mind, a creative streak, and a growing passion for intelligent, user-focused solutions.</p><div className="mt-8 space-y-5 text-sm leading-7 text-slate-600"><p>I enjoy turning ideas into practical projects, especially where AI, technology, and real-world problems meet. I’ve worked on projects and participated in hackathons and buildathons, gaining hands-on experience with <strong>Python</strong>, Machine Learning, Pandas, NumPy, Git, GitHub, and web technologies.</p><p>Currently, I’m strengthening my foundations in Machine Learning, Deep Learning, and AI, while building projects that help me understand how these technologies can be used beyond just theory.</p><p>Outside of coding, I enjoy drawing, listening to music, and exploring creative ideas. I’m someone who likes <strong>learning</strong> by <strong>building</strong>, experimenting, and occasionally breaking things first because apparently that is also part of engineering.</p><p>My goal: to grow into an <strong>AI/ML Engineer</strong> who builds meaningful, intelligent, and user-focused solutions while continuously learning and improving.</p></div></div></Reveal>
      <Reveal delay={.15}><div className="flex h-full flex-col justify-between gap-5"><div className="story-card rounded-[2rem] bg-[hsl(190_56%_49%/.12)] p-7"><Sparkles className="mb-12 text-teal-600" size={24} /><p className="mono-font text-[.67rem] uppercase tracking-[.14em] text-teal-800">currently exploring</p><p className="display-font mt-3 text-3xl text-slate-700">Machine Learning<br />Deep Learning<br />AI</p></div><div className="story-card rounded-[2rem] p-7"><p className="mono-font text-[.67rem] uppercase tracking-[.14em] text-slate-500">off-screen</p><p className="mt-4 text-sm leading-6 text-slate-600">Drawing, music, and creative ideas — the quieter inputs behind the work.</p></div></div></Reveal></div>
    </div></section>;
}

function Timeline({ items, kind = 'education' }: { items: { title: string; place: string; years: string; score?: string; details?: string[] }[]; kind?: string }) {
  return <div className="relative space-y-9 pl-10">{items.map((item, i) => <Reveal key={item.title} delay={i * .08} className="relative"><span className="timeline-dot" /><div className="story-card rounded-3xl p-6 md:p-8"><div className="flex flex-col justify-between gap-3 md:flex-row"><div><p className="mono-font text-[.65rem] uppercase tracking-[.15em] text-rose-500">{kind === 'education' ? 'academic record' : 'experience' } 0{i + 1}</p><h3 className="display-font mt-2 text-2xl text-slate-800">{item.title}</h3><p className="mt-1 text-sm text-slate-500">{item.place}</p></div><div className="text-left md:text-right"><p className="mono-font text-xs text-slate-500">{item.years}</p>{item.score && <p className="mt-2 text-sm font-semibold text-teal-700">{item.score}</p>}</div></div>{item.details && <ul className="mt-6 grid gap-2 border-t border-slate-200/70 pt-5 text-sm leading-6 text-slate-600">{item.details.map(d => <li key={d} className="flex gap-2"><Check size={15} className="mt-1 shrink-0 text-rose-500" />{d}</li>)}</ul>}</div></Reveal>)}</div>;
}

function Education() {
  return <section id="education" className="section-pad bg-[hsl(200_51%_88%/.27)]"><div className="section-wrap"><SectionIntro index="02" eyebrow="education" title={<>The foundations of <em>the journey.</em></>}><span>Every academic milestone adds another way to look at a problem — and another reason to keep asking questions.</span></SectionIntro><Timeline items={education} /></div></section>;
}

function Skills() {
  const [open, setOpen] = useState('Data Science / ML');
  return <section id="skills" className="section-pad"><div className="section-wrap"><SectionIntro index="03" eyebrow="skills / tech stack" title={<>Tools for turning <em>questions</em> into things.</>}><span>Explore the toolkit. No progress bars — just a living constellation of what she is learning and using.</span></SectionIntro><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({ label, icon: Icon, items }, i) => <Reveal key={label} delay={i * .05}><button onClick={() => setOpen(open === label ? '' : label)} className="skill-panel focus-ring story-card w-full rounded-3xl p-6 text-left transition-all duration-300" data-open={open === label} data-testid={`button-skill-${label.toLowerCase().replaceAll(' ', '-')}`}><div className="flex items-center justify-between"><span className="flex items-center gap-3 text-sm font-semibold text-slate-700"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/70 text-teal-700"><Icon size={19} /></span>{label}</span><ChevronDown size={17} className={`text-slate-400 transition-transform ${open === label ? 'rotate-180' : ''}`} /></div><AnimatePresence initial={false}>{open === label && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="mt-6 flex flex-wrap gap-2">{items.map(item => <span key={item} className="tag">{item}</span>)}</div></motion.div>}</AnimatePresence></button></Reveal>)}</div></div></section>;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);
  const accentMap: Record<string, string> = { rose: 'hsl(342 67% 62% / .12)', teal: 'hsl(190 56% 49% / .12)', lavender: 'hsl(264 41% 66% / .16)', gold: 'hsl(38 86% 65% / .18)', blue: 'hsl(202 62% 95%)' };
  const slug = project.name.toLowerCase().replaceAll(' ', '-');
  return <motion.div ref={ref} onMouseMove={(event) => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); setTilt({ x: ((event.clientY - r.top) / r.height - .5) * -7, y: ((event.clientX - r.left) / r.width - .5) * 7 }); }} onMouseLeave={() => setTilt({ x: 0, y: 0 })} animate={{ rotateX: tilt.x, rotateY: tilt.y }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} style={{ transformPerspective: 1000 }} className="project-flip-wrap" data-testid={`card-project-${slug}`}>
    <div className={`project-flip-inner ${flipped ? 'is-flipped' : ''}`}>
      <article className="project-face project-front story-card group rounded-[2rem] p-6 md:p-8">
        <div className="mb-10 flex items-start justify-between"><span className="tag accent">{project.eyebrow}</span><span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: accentMap[project.accent] }}><ArrowUpRight size={17} className="text-slate-700 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></div>
        <button onClick={() => onOpen(project)} className="focus-ring block text-left" data-testid={`button-open-project-${slug}`}><h3 className="display-font max-w-sm text-4xl leading-[.96] text-slate-800">{project.name}</h3><p className="mt-5 max-w-md text-sm leading-6 text-slate-600">{project.description}</p></button>
        {project.placeholder ? <div className="placeholder-art mt-7 rounded-2xl px-5 py-4"><FileText size={18} className="mx-auto mb-2 text-rose-400" /><span className="mono-font text-[.62rem] uppercase tracking-[.08em]">{project.placeholder}</span></div> : <div className="mt-7 flex flex-wrap gap-2">{project.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}{project.tech.length > 5 && <span className="tag">+{project.tech.length - 5}</span>}</div>}
        <div className="mt-8 flex items-center justify-between border-t border-slate-200/70 pt-5">{project.contribution ? <span className="text-xs text-slate-500">{project.contribution}</span> : <span className="text-xs text-slate-500">{project.placeholder ? 'assets pending' : 'individual project'}</span>}{project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="focus-ring inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-rose-500" data-testid={`link-github-${slug}`}>GitHub <ExternalLink size={13} /></a> : <button onClick={() => onOpen(project)} className="focus-ring text-xs font-semibold text-rose-500" data-testid="button-hireflow-placeholder">details <ChevronRight size={13} className="inline" /></button>}</div>
        <button onClick={() => setFlipped(true)} className="focus-ring mt-5 inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-rose-500" data-testid={`button-flip-project-${slug}`}><Layers3 size={14} /> {project.images?.length ? 'view project pictures' : 'flip for project note'}</button>
      </article>
      <article className="project-face project-back story-card rounded-[2rem] p-5 md:p-6">
        <div className="flex items-center justify-between"><div><span className="tag accent">project gallery</span><h3 className="display-font mt-4 text-3xl text-slate-800">{project.name}</h3></div><button onClick={() => setFlipped(false)} className="focus-ring rounded-full border border-slate-200 p-2 text-slate-600" aria-label={`Flip ${project.name} card back`}><RotateCcw size={15} /></button></div>
        {project.images?.length ? <div className="mt-5 grid grid-cols-2 gap-3">{project.images.map((image, i) => <button key={image} type="button" className="focus-ring project-gallery-button" onClick={() => window.dispatchEvent(new CustomEvent('portfolio:open-image', { detail: { src: image, title: `${project.name} screen ${i + 1}` } }))} aria-label={`View ${project.name} screen ${i + 1}`}><img src={image} alt={`${project.name} project screen ${i + 1}`} className="project-gallery-image" /></button>)}</div> : <div className="placeholder-art mt-6 rounded-2xl px-5 py-10"><FileText size={18} className="mx-auto mb-2 text-rose-400" /><span className="mono-font text-[.62rem] uppercase tracking-[.08em]">project images can be added later</span></div>}
        <p className="mt-5 text-xs leading-5 text-slate-500">Tap the card again to return to the project details.</p>
      </article>
    </div>
  </motion.div>;
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => { if (!project) return; const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; }; }, [project, onClose]);
  return <AnimatePresence>{project && <motion.div className="modal-backdrop fixed inset-0 z-40 grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.div className="modal-panel w-full max-w-2xl rounded-[2rem] p-7 md:p-10" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><div className="flex justify-between gap-4"><div><span className="tag accent">{project.eyebrow}</span><h2 id="project-modal-title" className="display-font mt-5 text-5xl leading-[.9] text-slate-800">{project.name}</h2></div><button className="focus-ring h-10 w-10 shrink-0 rounded-full border border-slate-200 text-slate-600" onClick={onClose} aria-label="Close project details" data-testid="button-close-project"><X size={18} className="mx-auto" /></button></div><p className="mt-8 text-sm leading-7 text-slate-600">{project.description}</p>{project.contribution && <p className="mt-6 border-l-2 border-rose-400 pl-4 text-sm text-slate-600"><strong>My contribution:</strong> {project.contribution}</p>}<div className="mt-8"><p className="mono-font text-[.65rem] uppercase tracking-[.15em] text-rose-500">technologies</p><div className="mt-3 flex flex-wrap gap-2">{project.tech.length ? project.tech.map(t => <span key={t} className="tag">{t}</span>) : <span className="text-sm text-slate-500">Technology details will be added later.</span>}</div></div>{project.placeholder && <div className="placeholder-art mt-8 rounded-2xl px-6 py-8"><p className="mono-font text-[.65rem] uppercase tracking-[.12em]">placeholder</p><p className="mt-2 max-w-sm text-sm">{project.placeholder}</p></div>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-xs font-semibold text-white hover:-translate-y-0.5" data-testid="link-modal-github">Open GitHub <ExternalLink size={14} /></a>}</motion.div></motion.div>}</AnimatePresence>;
}

function ImageViewer({ image, onClose }: { image: { src?: string; title: string } | null; onClose: () => void }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  return <AnimatePresence>
    {image && <motion.div className="modal-backdrop fixed inset-0 z-50 grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal-panel relative w-full max-w-5xl rounded-[2rem] p-4 md:p-6" initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .98 }} onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={image.title}>
        <div className="flex items-center justify-between gap-4 pb-4"><div><span className="tag accent">uploaded artwork</span><h2 className="display-font mt-3 text-3xl text-slate-800">{image.title}</h2></div><button onClick={onClose} className="focus-ring rounded-full border border-slate-200 p-2 text-slate-600" aria-label="Close image viewer"><X size={18} /></button></div>
        {image.src ? <img src={image.src} alt={image.title} className="viewer-image" /> : <div className="placeholder-art rounded-2xl px-5 py-16"><FileText size={18} className="mx-auto mb-2 text-rose-400" /><span className="mono-font text-[.62rem] uppercase tracking-[.08em]">image can be added later</span></div>}
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const [filter, setFilter] = useState<'all' | 'featured' | 'learning'>('all');
  const visible = projects.filter(p => filter === 'all' || (filter === 'learning' ? p.eyebrow === 'Learning project' : p.eyebrow.includes('Featured')));
  return <section id="projects" className="section-pad bg-[hsl(342_67%_94%/.27)]"><div className="section-wrap"><SectionIntro index="04" eyebrow="my work" title={<>Ideas that became <em>real things.</em></>}><span>Projects are the trail markers: practical problems, new tools, and lots of learning along the way.</span></SectionIntro><div className="mb-8 flex flex-wrap gap-2">{(['all', 'featured', 'learning'] as const).map(f => <button key={f} onClick={() => setFilter(f)} className={`focus-ring rounded-full px-4 py-2 mono-font text-[.65rem] uppercase tracking-[.1em] transition ${filter === f ? 'bg-slate-800 text-white' : 'border border-slate-300 text-slate-600 hover:border-rose-300'}`} data-testid={`button-filter-${f}`}>{f === 'all' ? 'all projects' : f}</button>)}</div><div className="grid gap-5 lg:grid-cols-2">{visible.map((p, i) => <Reveal key={p.name} delay={i * .06}><ProjectCard project={p} onOpen={onOpen} /></Reveal>)}</div></div></section>;
}

function Hackathons() {
  const images = [participationAltImage, hackdayImage, webnovaImage, buildathonImage, buildWithBharatImage, geminiBuildathonImage];
  return <section id="hackathons" className="section-pad"><div className="section-wrap"><SectionIntro index="05" eyebrow="hackathons & competitions" title={<>Many rooms, one <em>curious team.</em></>}><span>Participation certificates and event artwork, matched to the events they document.</span></SectionIntro><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{hackathons.map(([title, date, format, org], i) => <Reveal key={title} delay={i * .05}><article className="story-card overflow-hidden rounded-[1.7rem]"><button className="focus-ring block w-full" onClick={() => window.dispatchEvent(new CustomEvent('portfolio:open-image', { detail: { src: images[i], title } }))} aria-label={`View image for ${title}`}><img src={images[i]} alt={`${title} participation artwork`} className="hackathon-image" /></button><div className="p-6"><p className="mono-font text-[.62rem] uppercase tracking-[.12em] text-rose-500">{date}</p><h3 className="display-font mt-3 text-2xl leading-tight text-slate-800">{title}</h3><div className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500"><CalendarDays size={14} className="mt-0.5 shrink-0" />{format}<span className="text-slate-300">/</span>{org}</div></div></article></Reveal>)}</div></div></section>;
}

const experience = [
  { title: 'MACHINE LEARNING INTERN', place: 'Prodigy Infotech', years: '15 July 2026 – 15 August 2026', details: ['Developed four machine learning projects using practical ML techniques.', 'Implemented Linear Regression, K-Means Clustering and Support Vector Machine models.', 'Used Python, Scikit-learn, OpenCV and data-processing techniques.', 'Performed data preparation, model training, testing and evaluation.'] },
  { title: 'DATA ANALYTICS WITH PYTHON & POWER BI INTERN', place: 'EduSkills Virtual Internship', years: 'June 2026 – July 2026', details: ['Developed practical skills in Python, SQL and Microsoft Power BI.', 'Completed a capstone project focused on E-commerce Sales and Customer Insights.', 'Designed an interactive Power BI dashboard.', 'Applied data analysis and visualization techniques.'] }
];

function Experience() {
  return <section id="experience" className="section-pad bg-[hsl(200_51%_88%/.27)]"><div className="section-wrap"><SectionIntro index="06" eyebrow="experience / training" title={<>Learning by <em>doing.</em></>}><span>Training and internships that turn concepts into practice, one experiment at a time.</span></SectionIntro><Timeline items={experience} kind="experience" /><Reveal className="mt-8 pl-10"><div className="story-card rounded-3xl p-7"><p className="section-kicker">training / certification journey</p><div className="mt-5 flex flex-wrap gap-2">{['AWS Gen AI / EduSkills', 'IBM Getting Started with AI', 'Data Analytics with Python & Power BI', 'Python Full Stack – EduSkills internship'].map(item => <span className="tag" key={item}>{item}</span>)}</div></div></Reveal></div></section>;
}

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const images = certificate.images ?? (certificate.image ? [certificate.image] : []);
  const openImage = (src: string, imageIndex: number) => window.dispatchEvent(new CustomEvent('portfolio:open-image', { detail: { src, title: `${certificate.title}${images.length > 1 ? ` · document ${imageIndex + 1}` : ''}` } }));
  return <Reveal delay={index * .04}><article className="story-card flex min-h-[390px] flex-col rounded-3xl p-4 md:p-5">
    {images.length ? <div className={`certificate-gallery ${images.length > 1 ? 'certificate-gallery-multi' : ''}`}>{images.map((src, imageIndex) => <button key={src} type="button" className="focus-ring certificate-image-button" onClick={() => openImage(src, imageIndex)} aria-label={`Open ${certificate.title} document ${imageIndex + 1}`}><img src={src} alt={certificate.imageLabel || `${certificate.title} document ${imageIndex + 1}`} className="certificate-image" /></button>)}</div> : <div className="placeholder-art min-h-[190px] rounded-2xl"><FileText size={18} className="mx-auto mb-2 text-rose-400" /><span className="mono-font text-[.62rem] uppercase tracking-[.08em]">asset can be added later</span></div>}
    <div className="flex flex-1 flex-col justify-between px-2 pb-2 pt-5"><div><h3 className="display-font text-2xl leading-tight text-slate-800">{certificate.title}</h3><p className="mt-2 text-sm text-slate-500">{certificate.org}</p></div><div className="mt-7 flex items-center justify-between gap-4"><span className="mono-font text-[.63rem] uppercase tracking-[.1em] text-slate-500">{certificate.date || 'document uploaded'}</span><span className="tag">{images.length ? 'click photo to zoom in' : 'asset pending'}</span></div></div>
  </article></Reveal>;
}

function Certificates() {
  const [expanded, setExpanded] = useState(false);
  return <section id="certificates" className="section-pad"><div className="section-wrap"><SectionIntro index="07" eyebrow="certifications" title={<>Proof of <em>the practice.</em></>}><span>Click the photo to zoom in and explore each certificate, recommendation letter, or internship offer letter.</span></SectionIntro><div className="grid gap-4 md:grid-cols-2">{certificates.slice(0, expanded ? certificates.length : 8).map((certificate, i) => <CertificateCard key={certificate.title} certificate={certificate} index={i} />)}</div><button onClick={() => setExpanded(!expanded)} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-xs font-semibold text-slate-700 hover:border-rose-300" data-testid="button-toggle-certificates">{expanded ? 'show fewer' : 'show all entries'} <ChevronDown size={14} className={expanded ? 'rotate-180' : ''} /></button></div></section>;
}

function ResumePlaceholder({ onOpen }: { onOpen: () => void }) {
  return <button onClick={onOpen} className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-rose-300" data-testid="button-resume"><FileText size={17} /> Please download the resume to view it <ArrowUpRight size={16} /></button>;
}

function Contact({ onResume }: { onResume: () => void }) {
  return <section id="contact" className="section-pad bg-[hsl(342_67%_94%/.36)]"><div className="section-wrap"><SectionIntro index="08" eyebrow="contact" title={<>Let’s keep the <em>conversation</em> moving.</>}><span>For a project, an idea, or just a thoughtful hello.</span></SectionIntro><div className="grid gap-8 md:grid-cols-[1fr_.8fr]"><Reveal><div className="story-card rounded-[2rem] p-7 md:p-10"><p className="mono-font text-[.65rem] uppercase tracking-[.15em] text-rose-500">reach out</p><div className="mt-7 space-y-5"><a href="mailto:saxenakhushi081@gmail.com" className="focus-ring flex items-center gap-4 text-lg text-slate-700 hover:text-rose-500" data-testid="link-email"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/75"><Mail size={18} /></span>saxenakhushi081@gmail.com</a><a href="tel:9310505178" className="focus-ring flex items-center gap-4 text-lg text-slate-700 hover:text-rose-500" data-testid="link-phone"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/75"><Phone size={18} /></span>9310505178</a></div><div className="mt-9 flex flex-wrap gap-3"><a href="https://www.linkedin.com/in/anshika-saxena-155026331/" target="_blank" rel="noopener noreferrer" className="social-link focus-ring grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white/45" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={18} /></a><a href="https://github.com/saxenakhushi081-svg" target="_blank" rel="noopener noreferrer" className="social-link focus-ring grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white/45" aria-label="GitHub" data-testid="link-github-profile"><Github size={18} /></a><a href="https://www.instagram.com/saxenakhushi081/" target="_blank" rel="noopener noreferrer" className="social-link focus-ring grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white/45" aria-label="Instagram" data-testid="link-instagram"><Instagram size={18} /></a></div></div></Reveal><Reveal delay={.1}><div className="flex h-full flex-col justify-between gap-7"><div className="rounded-[2rem] bg-slate-800 p-8 text-white"><MapPin size={20} className="text-rose-300" /><p className="display-font mt-14 text-4xl leading-tight">The next chapter<br /><em className="text-rose-300">starts here.</em></p><p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">A peaceful corner of the internet, open to new questions.</p></div><ResumePlaceholder onOpen={onResume} /></div></Reveal></div></div></section>;
}

function PlaceholderModal({ kind, onClose }: { kind: 'resume'; onClose: () => void }) {
  return <motion.div className="modal-backdrop fixed inset-0 z-40 grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.div className="modal-panel w-full max-w-2xl rounded-[2rem] p-5 md:p-7" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true"><div className="flex items-center justify-between"><span className="tag accent">{kind} asset</span><button onClick={onClose} className="focus-ring rounded-full p-1" aria-label="Close resume" data-testid="button-close-placeholder"><X size={18} /></button></div><h2 className="display-font mt-5 text-4xl text-slate-800">Anshika’s <em className="text-rose-500">resume.</em></h2><div className="resume-download-card mt-6 rounded-3xl p-7"><FileText size={28} className="text-rose-400" /><p className="display-font mt-5 text-2xl text-slate-800">Please download the resume to see it.</p><p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">The direct PDF download avoids browser and Google preview-blocking issues.</p><a href={resumeFile} download className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-xs font-semibold text-white hover:-translate-y-0.5">Download resume PDF <ArrowUpRight size={14} /></a></div></motion.div></motion.div>;
}

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I’m Anshika’s portfolio assistant. Ask me about her projects, skills, experience, or ML Engineer career direction. I stick to verified facts." },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || sending) return;

    const userMessage: ChatMessage = { role: 'user', content: question };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: question,
          history: messages.slice(-8),
        }),
      });
      const data = await response.json() as { answer?: string; error?: string };
      if (!response.ok || !data.answer) throw new Error(data.error || 'The assistant could not answer right now.');
      setMessages([...nextMessages, { role: 'assistant', content: data.answer }]);
    } catch (error) {
      setMessages([...nextMessages, { role: 'assistant', content: error instanceof Error ? error.message : 'The assistant is temporarily unavailable. Please try again.' }]);
    } finally {
      setSending(false);
    }
  }

  return <div className="chatbot fixed bottom-5 right-5 z-30 md:bottom-7 md:right-7">
    <AnimatePresence>
      {open && <motion.section className="chatbot-panel mb-3 flex w-[min( calc(100vw-2rem),380px)] flex-col overflow-hidden rounded-[1.6rem]" initial={{ opacity: 0, y: 15, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: .96 }} role="dialog" aria-label="Ask Anshika’s AI assistant">
        <div className="chatbot-header flex items-center justify-between p-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/75 text-rose-500"><BotIcon /></span><div><p className="display-font text-xl text-slate-800">Ask Anshika’s AI</p><p className="mono-font text-[.58rem] uppercase tracking-[.12em] text-slate-500">portfolio assistant</p></div></div><button onClick={() => setOpen(false)} className="focus-ring rounded-full p-2 text-slate-500 hover:text-rose-500" aria-label="Close AI assistant"><X size={17} /></button></div>
        <div className="chatbot-messages flex min-h-[230px] max-h-[350px] flex-1 flex-col gap-3 overflow-y-auto p-4">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`chat-message ${message.role === 'user' ? 'chat-message-user self-end' : 'chat-message-assistant self-start'} max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6`}>{message.content}</div>)}{sending && <div className="chat-message chat-message-assistant self-start rounded-2xl px-4 py-3"><LoaderCircle size={16} className="animate-spin text-rose-500" aria-label="Assistant is typing" /></div>}<div ref={messagesEndRef} /></div>
        <form onSubmit={sendMessage} className="chatbot-form flex items-end gap-2 border-t border-slate-200/70 p-3"><textarea value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} placeholder="Ask about Anshika…" rows={1} maxLength={1200} disabled={sending} className="chatbot-input focus-ring min-h-11 flex-1 resize-none rounded-2xl px-4 py-3 text-sm" aria-label="Ask a question about Anshika" /><button type="submit" className="chatbot-send focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-2xl" disabled={sending || !input.trim()} aria-label="Send question"><Send size={16} /></button></form>
      </motion.section>}
    </AnimatePresence>
    <button onClick={() => setOpen(!open)} className="chatbot-launch focus-ring flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold" aria-expanded={open} aria-label={open ? 'Close Anshika AI assistant' : 'Ask Anshika AI assistant'} data-testid="button-open-chat"><MessageCircle size={18} /> <span className="hidden sm:inline">{open ? 'Close chat' : 'Ask my AI'}</span></button>
  </div>;
}

function BotIcon() {
  return <BotFace />;
}

function BotFace() {
  return <BrainCircuit size={19} />;
}

function Portfolio() {
  const [active, setActive] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src?: string; title: string } | null>(null);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id); }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .5, .9] }); navItems.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);
  useEffect(() => {
    const onOpenImage = (event: Event) => {
      const detail = (event as CustomEvent<{ src?: string; title: string }>).detail;
      setSelectedImage(detail);
    };
    window.addEventListener('portfolio:open-image', onOpenImage);
    return () => window.removeEventListener('portfolio:open-image', onOpenImage);
  }, []);
  useEffect(() => { document.title = 'Anshika Saxena — AI/ML Engineer'; }, []);
  return <div className="story-shell"><Petals /><div className="grain" /><Navbar active={active} onResume={() => setResumeOpen(true)} /><main><Hero /><About /><Education /><Skills /><Projects onOpen={setSelectedProject} /><Hackathons /><Experience /><Certificates /><Contact onResume={() => setResumeOpen(true)} /></main><footer className="section-wrap flex items-center justify-center border-t border-slate-200/70 py-10"><p className="display-font text-lg text-slate-700">Anshika Saxena</p></footer><ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /><ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} /><AnimatePresence>{resumeOpen && <PlaceholderModal kind="resume" onClose={() => setResumeOpen(false)} />}</AnimatePresence><PortfolioChatbot /></div>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><ErrorBoundary><Portfolio /></ErrorBoundary><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;