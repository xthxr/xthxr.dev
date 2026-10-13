"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { achievements, experience, portfolioConfig, projects, technologyAtlas } from "@/lib/portfolio-data";

const selectedProjects = ["watchtower", "bizchat", "piik-me", "ds-visualizer"]
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const chapterLinks = [
  { href: "#achievements", label: "Achievements" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function ScrollPortfolio() {
  const rootRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = max > 0 ? window.scrollY / max : 0;
      setProgress(fraction);
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };
    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion) return;
      root.style.setProperty("--px", `${event.clientX}px`);
      root.style.setProperty("--py", `${event.clientY}px`);
      root.style.setProperty("--mx", `${(event.clientX / window.innerWidth - 0.5).toFixed(3)}`);
      root.style.setProperty("--my", `${(event.clientY / window.innerHeight - 0.5).toFixed(3)}`);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    root.querySelectorAll(".xp-reveal").forEach((element) => observer.observe(element));

    const updateTime = () => setLocalTime(new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="xp" ref={rootRef}>
      <div className="xp-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="xp-pointer-glow" aria-hidden="true" />
      <header className="xp-header">
        <a className="xp-brand" href="#top" aria-label="xthxr, back to top">xthxr<span>®</span></a>
        <nav aria-label="Primary navigation">
          {chapterLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <a className="xp-header-contact" href={`mailto:${portfolioConfig.email}`}>LET&apos;S TALK <Arrow diagonal /></a>
      </header>

      <section className="xp-hero" id="top" aria-labelledby="hero-title">
        <div className="xp-hero-grid" aria-hidden="true" />
        <div className="xp-hero-topline"><span>PORTFOLIO / 2026</span><span>BUILDING AT THE EDGE OF IDEAS.</span><span>KOLKATA, INDIA · {localTime || "--:--"} IST</span></div>
        <div className="xp-hero-center">
          <p className="xp-eyebrow xp-hero-intro"><i /> ATHAR AKRAM — SOFTWARE ENGINEER / CREATIVE BUILDER</p>
          <h1 id="hero-title" className="xp-hero-title" aria-label="xthxr">
            {"xthxr".split("").map((letter, index) => <span key={`${letter}-${index}`} style={{ "--i": index } as React.CSSProperties}>{letter}</span>)}
            <sup>DEV</sup>
          </h1>
          <div className="xp-hero-statement"><span className="xp-asterisk">✳</span><p>I build software that <em>moves</em><br />ideas into the real world.</p></div>
        </div>
        <div className="xp-hero-bottom"><span>01 / THE STORY</span><a href="#achievements">SCROLL TO EXPLORE <span className="xp-down-arrow">↓</span></a><span>OPEN TO INTERESTING PROBLEMS <i /></span></div>
      </section>

      <div className="xp-ticker" aria-hidden="true"><div className="xp-ticker-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>ENGINEER <b>✳</b> RESEARCHER <b>✳</b> COMMUNITY BUILDER <b>✳</b> </span>)}</div></div>

      <section className="xp-section xp-achievements" id="achievements" aria-labelledby="achievement-heading">
        <div className="xp-section-meta xp-reveal"><span>01 / ACHIEVEMENTS</span><span>THE SIGNAL, NOT THE NOISE</span></div>
        <div className="xp-achievement-heading xp-reveal"><h2 id="achievement-heading">Proof<br /><em>of work.</em></h2><p>Competitions, research, and moments where the work stood out. A few markers from a much bigger journey.</p></div>
        <div className="xp-achievement-list">
          {achievements.map((achievement, index) => <article className="xp-achievement xp-reveal" key={achievement.code}>
            <span className="xp-achievement-number">/{achievement.code}</span>
            <div className="xp-achievement-copy"><span className="xp-achievement-category">{index === 1 ? "RESEARCH" : index === 3 ? "SELECTION" : index === 4 ? "ASSESSMENT" : index === 5 ? "OPEN SOURCE" : "COMPETITION"}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
            <span className="xp-achievement-mark" aria-hidden="true">↗</span>
          </article>)}
        </div>
        <p className="xp-section-end xp-reveal">ALWAYS IN MOTION <span>↘</span></p>
      </section>

      <section className="xp-quote-band" aria-label="Personal approach"><div className="xp-quote-inner xp-reveal"><span className="xp-quote-index">THE THROUGHLINE / 001</span><p>Curiosity is the input.<br /><em>Impact</em> is the output.</p><span className="xp-quote-star">✳</span></div></section>

      <section className="xp-section xp-experience" id="experience" aria-labelledby="experience-heading">
        <div className="xp-section-meta xp-reveal"><span>02 / EXPERIENCE</span><span>WHERE I&apos;VE SHIPPED & LED</span></div>
        <div className="xp-split-heading xp-reveal"><h2 id="experience-heading">The<br />trajectory<span>.</span></h2><p>From building research tools to growing developer communities. Hands-on, collaborative, and relentlessly curious.</p></div>
        <div className="xp-experience-list">
          {experience.map((item, index) => <article className="xp-experience-row xp-reveal" key={item.organization}>
            <span className="xp-exp-index">0{index + 1}</span><div><h3>{item.organization}</h3><p>{item.role}</p></div><p className="xp-exp-detail">{item.detail}</p><span className="xp-exp-arrow" aria-hidden="true">↗</span>
          </article>)}
        </div>
        <div className="xp-community xp-reveal"><span>ALSO IN THE MIX</span><p>Founder / VP at <strong>Terminal Troops</strong>, an on-campus coding community of 50+ developers. Contributor and mentor across open-source programs.</p></div>
      </section>

      <section className="xp-section xp-work" id="work" aria-labelledby="work-heading">
        <div className="xp-section-meta xp-reveal"><span>03 / SELECTED WORK</span><span>FOUR BUILDS, ONE MINDSET</span></div>
        <div className="xp-split-heading xp-reveal"><h2 id="work-heading">Selected<br /><em>builds.</em></h2><p>Products, experiments, and systems. Each one an attempt to make complexity useful.</p></div>
        <div className="xp-project-list">{selectedProjects.map((project, index) => <article className="xp-project xp-reveal" key={project.id}>
          <div className="xp-project-top"><span>0{index + 1} / {project.kind}</span><span>{project.year}</span></div>
          <h3>{project.name}<span aria-hidden="true">↗</span></h3>
          <div className="xp-project-bottom"><p>{project.description}</p><div>{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        </article>)}</div>
        <a className="xp-text-link xp-reveal" href={portfolioConfig.github} target="_blank" rel="noopener noreferrer">MORE ON GITHUB <Arrow diagonal /></a>
      </section>

      <section className="xp-section xp-about" id="about" aria-labelledby="about-heading">
        <div className="xp-section-meta xp-reveal"><span>04 / ABOUT</span><span>BEHIND THE CODE</span></div>
        <div className="xp-about-grid">
          <div className="xp-about-image xp-reveal"><Image src="/athar-portrait.jpeg" width={1080} height={761} alt="Athar Akram" /><span>FIG 01 — ATHAR, OFF THE CLOCK</span></div>
          <div className="xp-about-copy xp-reveal"><span className="xp-eyebrow">A LITTLE CONTEXT</span><h2 id="about-heading">I&apos;m Athar.<br />Online, <em>xthxr.</em></h2><p>Computer Science &amp; Engineering (Data Science) student at Kazi Nazrul University. I work across software engineering, applied AI, and the communities that make the field better.</p><p>I like ambitious ideas, clean execution, and projects with a reason to exist beyond the demo.</p><div className="xp-about-facts"><span>KOLKATA, INDIA</span><span>CLASS OF 2028</span><span>BUILDING SINCE DAY ONE</span></div></div>
        </div>
        <div className="xp-stack xp-reveal"><span>TOOLKIT / ALWAYS EVOLVING</span><p>{technologyAtlas.slice(0, 9).map((tech, index) => <span key={tech}>{tech}{index < 8 && <b> · </b>}</span>)}</p></div>
      </section>

      <footer className="xp-footer" id="contact"><div className="xp-footer-top"><span>05 / THE NEXT CHAPTER</span><span>GOT SOMETHING AMBITIOUS?</span></div><a className="xp-footer-cta" href={`mailto:${portfolioConfig.email}`}>Let&apos;s make<br /><em>something happen.</em><span>↗</span></a><div className="xp-footer-bottom"><a href="#top" className="xp-brand">xthxr<span>®</span></a><p>© {new Date().getFullYear()} ATHAR AKRAM. BUILT TO MOVE.</p><div><a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href={`mailto:${portfolioConfig.email}`}>EMAIL ↗</a></div></div></footer>
    </main>
  );
}
