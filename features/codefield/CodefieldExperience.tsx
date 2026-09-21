"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { portfolioConfig, projects, signals, type ProjectRecord } from "@/lib/portfolio-data";

type Mode = "ENTRY" | "CODEFIELD" | "PROJECT" | "SIGNALS" | "RAW";
type Vec = { x: number; y: number; vx: number; vy: number };

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const hash = (input: string) => {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) h = Math.imul(h ^ input.charCodeAt(i), 16777619);
  return Math.abs(h >>> 0);
};

function FieldCanvas({ entered, focused, technology, raw, onSelect, onMetrics }: {
  entered: boolean;
  focused: ProjectRecord | null;
  technology: string | null;
  raw: boolean;
  onSelect: (project: ProjectRecord) => void;
  onMetrics: (metrics: Record<string, string>) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -999, y: -999, px: -999, py: -999, vx: 0, vy: 0, down: false, impulse: 0 });
  const nodes = useRef<Vec[]>([]);
  const frame = useRef(0);
  const projectBodies = useMemo(() => projects.map((project, i) => {
    const seed = hash(project.id);
    return { project, angle: (seed % 628) / 100 + i * 2.1, radius: 0, x: 0, y: 0, vx: 0, vy: 0 };
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    let raf = 0, width = 0, height = 0, dpr = 1, previous = performance.now(), elapsed = 0;
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, width < 700 ? 1.25 : 1.75);
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 700 ? 150 : 360;
      nodes.current = Array.from({ length: count }, (_, i) => ({ x: ((hash(`x${i}`) % 10000) / 10000) * width, y: ((hash(`y${i}`) % 10000) / 10000) * height, vx: 0, vy: 0 }));
    };
    const move = (event: PointerEvent) => {
      const p = pointer.current; p.px = p.x; p.py = p.y; p.x = event.clientX; p.y = event.clientY; p.vx = p.x - p.px; p.vy = p.y - p.py;
    };
    const down = () => { pointer.current.down = true; pointer.current.impulse = 1; };
    const up = () => { pointer.current.down = false; };
    const click = (event: MouseEvent) => {
      if (!entered || focused) return;
      let nearest: { p: ProjectRecord; d: number } | null = null;
      for (const body of projectBodies) {
        const d = Math.hypot(event.clientX - body.x, event.clientY - body.y);
        if (d < body.radius + 24 && (!nearest || d < nearest.d)) nearest = { p: body.project, d };
      }
      if (nearest) onSelect(nearest.p);
    };
    const draw = (now: number) => {
      const dt = clamp((now - previous) / 16.67, 0.25, 2), frameMs = now - previous;
      previous = now; elapsed += frameMs / 1000; frame.current += 1;
      ctx.fillStyle = "#070807"; ctx.fillRect(0, 0, width, height);
      const p = pointer.current, speed = Math.hypot(p.vx, p.vy);
      p.impulse *= Math.pow(0.91, dt); p.vx *= Math.pow(0.72, dt); p.vy *= Math.pow(0.72, dt);
      for (let i = 0; i < nodes.current.length; i++) {
        const n = nodes.current[i], dx = p.x - n.x, dy = p.y - n.y, dist = Math.max(20, Math.hypot(dx, dy));
        if (dist < 210) {
          const force = (1 - dist / 210) * (p.down ? -1.8 : 0.28) * dt;
          n.vx += (dx / dist) * force + p.vx * 0.006 * (1 - dist / 210);
          n.vy += (dy / dist) * force + p.vy * 0.006 * (1 - dist / 210);
          if (p.impulse > 0.02) { n.vx -= (dx / dist) * p.impulse * 2.6; n.vy -= (dy / dist) * p.impulse * 2.6; }
        }
        const homeX = ((hash(`x${i}`) % 10000) / 10000) * width, homeY = ((hash(`y${i}`) % 10000) / 10000) * height;
        n.vx += (homeX - n.x) * 0.0007 * dt; n.vy += (homeY - n.y) * 0.0007 * dt;
        n.vx *= Math.pow(0.955, dt); n.vy *= Math.pow(0.955, dt); n.x += n.vx * dt; n.y += n.vy * dt;
        const alpha = entered ? 0.16 + Math.min(speed, 30) * 0.006 : 0.08;
        ctx.fillStyle = i % 31 === 0 ? `rgba(237,174,88,${alpha * 1.8})` : `rgba(227,230,222,${alpha})`;
        ctx.fillRect(n.x, n.y, i % 17 === 0 ? 1.5 : 1, i % 17 === 0 ? 1.5 : 1);
      }
      if (entered) {
        const cx = width * 0.5, cy = height * 0.52;
        projectBodies.forEach((body, index) => {
          const matches = !technology || body.project.technologies.includes(technology);
          const targetOrbit = technology ? (matches ? 95 + index * 34 : Math.min(width, height) * 0.52) : Math.min(width, height) * (0.22 + index * 0.09);
          const a = body.angle + elapsed * (index ? -0.035 : 0.045);
          const targetX = cx + Math.cos(a) * targetOrbit * (width < 700 ? 0.72 : 1.15), targetY = cy + Math.sin(a) * targetOrbit * 0.54;
          body.vx += (targetX - body.x) * 0.0022 * dt; body.vy += (targetY - body.y) * 0.0022 * dt;
          const pdx = body.x - p.x, pdy = body.y - p.y, pd = Math.max(30, Math.hypot(pdx, pdy));
          if (pd < 180) { body.vx += (pdx / pd) * (1 - pd / 180) * speed * 0.018; body.vy += (pdy / pd) * (1 - pd / 180) * speed * 0.018; }
          body.vx *= Math.pow(0.91, dt); body.vy *= Math.pow(0.91, dt); body.x += body.vx * dt; body.y += body.vy * dt;
          body.radius = (width < 700 ? 36 : 52) * body.project.size;
          const selected = focused?.id === body.project.id, fade = focused && !selected ? 0.1 : matches ? 1 : 0.16;
          ctx.save(); ctx.translate(body.x, body.y); ctx.globalAlpha = fade; ctx.rotate(elapsed * 0.05 * (index ? -1 : 1));
          for (let ring = 0; ring < 3; ring++) {
            ctx.beginPath(); const rr = body.radius * (0.52 + ring * 0.24) + Math.sin(elapsed * (0.6 + body.project.energy) + ring) * 3;
            ctx.ellipse(0, 0, rr, rr * (0.38 + ring * 0.1), body.angle + ring, 0, Math.PI * 2);
            ctx.strokeStyle = ring === 0 ? "rgba(237,174,88,.7)" : "rgba(223,226,216,.28)"; ctx.lineWidth = ring === 0 ? 1.2 : 0.7; ctx.stroke();
          }
          ctx.beginPath(); ctx.arc(0, 0, body.radius * 0.18, 0, Math.PI * 2); ctx.fillStyle = "rgba(237,174,88,.86)"; ctx.shadowBlur = 24; ctx.shadowColor = "rgba(237,174,88,.45)"; ctx.fill();
          if (raw) { ctx.shadowBlur = 0; ctx.strokeStyle = "rgba(112,220,180,.65)"; ctx.strokeRect(-body.radius, -body.radius, body.radius * 2, body.radius * 2); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(body.vx * 30, body.vy * 30); ctx.stroke(); }
          ctx.restore();
          if (!focused && matches) { ctx.fillStyle = "rgba(235,237,229,.78)"; ctx.font = "500 11px ui-monospace, monospace"; ctx.fillText(body.project.name, body.x + body.radius + 14, body.y + 4); }
        });
      }
      if (raw) {
        ctx.strokeStyle = "rgba(112,220,180,.08)"; ctx.lineWidth = 1;
        for (let x = 0; x < width; x += 48) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
        for (let y = 0; y < height; y += 48) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      }
      if (frame.current % 20 === 0) onMetrics({ fps: String(Math.round(1000 / Math.max(frameMs, 1))), frame: `${frameMs.toFixed(1)} ms`, points: String(nodes.current.length), pointer: `${Math.round(p.x)}, ${Math.round(p.y)}`, velocity: speed.toFixed(1), dpr: dpr.toFixed(2) });
      raf = requestAnimationFrame(draw);
    };
    resize(); window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true }); window.addEventListener("pointerdown", down); window.addEventListener("pointerup", up); window.addEventListener("click", click); raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", down); window.removeEventListener("pointerup", up); window.removeEventListener("click", click); };
  }, [entered, focused, technology, raw, onSelect, onMetrics, projectBodies]);
  return <canvas ref={canvasRef} className="field-canvas" aria-hidden="true" />;
}

export function CodefieldExperience() {
  const [mode, setMode] = useState<Mode>("ENTRY"), [project, setProject] = useState<ProjectRecord | null>(null), [technology, setTechnology] = useState<string | null>(null), [commandOpen, setCommandOpen] = useState(false), [query, setQuery] = useState(""), [exploded, setExploded] = useState(false), [metrics, setMetrics] = useState<Record<string, string>>({}), [compareA, setCompareA] = useState<ProjectRecord | null>(null), [comparison, setComparison] = useState<[ProjectRecord, ProjectRecord] | null>(null);
  const entered = mode !== "ENTRY";
  const allTechnologies = useMemo(() => [...new Set(projects.flatMap((item) => item.technologies))], []);
  const selectProject = useCallback((next: ProjectRecord) => {
    if (compareA && compareA.id !== next.id) { setComparison([compareA, next]); setCompareA(null); setProject(null); setMode("PROJECT"); return; }
    setComparison(null); setProject(next); setMode("PROJECT"); setExploded(false);
  }, [compareA]);
  const setFrameMetrics = useCallback((next: Record<string, string>) => setMetrics(next), []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen((value) => !value); }
      if (event.shiftKey && event.key.toLowerCase() === "r") { event.preventDefault(); setMode((value) => value === "RAW" ? "CODEFIELD" : "RAW"); }
      if (event.key === "Escape") { setCommandOpen(false); if (project) { setProject(null); setMode("CODEFIELD"); } }
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [project]);
  const execute = (input: string) => {
    const normalized = input.toLowerCase(), match = projects.find((item) => normalized.includes(item.name.toLowerCase())), tech = allTechnologies.find((item) => normalized.includes(item.toLowerCase()));
    if (match) selectProject(match); else if (normalized.includes("signal") || normalized.includes("profile")) setMode("SIGNALS"); else if (normalized.includes("raw") || normalized.includes("debug")) setMode("RAW"); else if (tech) { setTechnology(tech); setMode("CODEFIELD"); } else setMode("CODEFIELD");
    setCommandOpen(false); setQuery("");
  };
  return (
    <main className={`codefield ${entered ? "is-entered" : ""} ${mode === "RAW" ? "is-raw" : ""}`}>
      <FieldCanvas entered={entered} focused={project} technology={technology} raw={mode === "RAW"} onSelect={selectProject} onMetrics={setFrameMetrics} />
      <div className="grain" aria-hidden="true" />
      <header className="system-header"><button className="wordmark" onClick={() => { setProject(null); setMode(entered ? "CODEFIELD" : "ENTRY"); }}>CF<span>/26</span></button><div className="mode-indicator"><i /> {mode}</div><button className="command-trigger" onClick={() => setCommandOpen(true)} aria-label="Open command interface">COMMAND <kbd>⌘ K</kbd></button></header>
      <section className="entry" aria-label="Introduction"><div className="entry-index">PORTFOLIO / COMPUTATIONAL FIELD</div><h1><span>ATHAR</span><span>AKRAM</span></h1><div className="entry-bottom"><p>{portfolioConfig.role}</p><button className="enter-button" onClick={() => setMode("CODEFIELD")}><span>ENTER FIELD</span><i aria-hidden="true">↗</i></button></div></section>
      {entered && !project && mode !== "SIGNALS" && <section className="field-ui" aria-label="Project field controls"><div className="field-title"><span>{compareA ? `COLLIDER / SELECT PARTNER FOR ${compareA.name}` : "ACTIVE MATTER"}</span><strong>{projects.length.toString().padStart(2, "0")}</strong></div><div className="field-help">MOVE TO DISTURB · CLICK MATTER TO INSPECT</div><div className="tech-strip" aria-label="Technology gravity"><span>GRAVITY</span><button className={!technology ? "active" : ""} onClick={() => setTechnology(null)}>ALL</button>{allTechnologies.map((item) => <button key={item} className={technology === item ? "active" : ""} onClick={() => setTechnology(item)}>{item}</button>)}</div><nav className="state-nav" aria-label="System states"><button onClick={() => setMode("CODEFIELD")}>FIELD</button><button onClick={() => setMode("SIGNALS")}>SIGNALS</button><button onClick={() => setMode("RAW")}>RAW</button></nav><div className="project-fallback">{projects.map((item) => <button key={item.id} onClick={() => selectProject(item)}>{item.name}<span>{item.kind}</span></button>)}</div></section>}
      {project && <section className={`project-interface ${exploded ? "exploded" : ""}`} aria-label={`${project.name} project details`}><button className="back-button" onClick={() => { setProject(null); setMode("CODEFIELD"); }}>← RETURN TO FIELD</button><div className="project-sequence">OBJECT / {project.id.toUpperCase()} / {project.year}</div><div className="project-copy"><p>{project.kind}</p><h2>{project.name}</h2><p className="description">{project.description}</p><div className="project-tech">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div><button className="compare-button" onClick={() => { setCompareA(project); setProject(null); setMode("CODEFIELD"); }}>SEND TO COLLIDER</button></div><button className="explode-button" onClick={() => setExploded((value) => !value)}>{exploded ? "RECONSTRUCT" : "EXPLODE PROJECT"}<span>{exploded ? "−" : "+"}</span></button>{exploded && <div className="source-graph" aria-label="Conceptual source architecture">{["interface", "renderer", "data", "system", "input", "output"].map((name, index) => <div key={name} style={{ "--i": index } as React.CSSProperties}><i />{name}<small>{index % 2 ? "module" : "cluster"}</small></div>)}</div>}</section>}
      {comparison && <section className="collision-panel" aria-label="Project collider comparison"><button className="back-button" onClick={() => { setComparison(null); setMode("CODEFIELD"); }}>← SEPARATE OBJECTS</button><div className="collision-matter"><div><i />{comparison[0].name}</div><b>×</b><div><i />{comparison[1].name}</div></div><div className="shared-dna"><span>SHARED TECHNICAL DNA</span>{comparison[0].technologies.filter((item) => comparison[1].technologies.includes(item)).map((item) => <strong key={item}>{item}</strong>)}</div></section>}
      {mode === "SIGNALS" && !project && <section className="signals-panel"><button className="back-button" onClick={() => setMode("CODEFIELD")}>← RETURN TO FIELD</button><div className="signals-heading"><span>REMOTE ACTIVITY</span><h2>SIGNALS</h2><p>Adapters translate developer profiles into a shared telemetry layer.</p></div><div className="signal-list">{signals.map((signal) => <div key={signal.name}><strong>{signal.name}</strong><div className="signal-line"><i style={{ left: `${signal.strength * 100}%` }} /></div><span>{signal.label}</span></div>)}</div></section>}
      {mode === "RAW" && <aside className="debug-panel" aria-label="Renderer diagnostics"><strong>RAW / RENDER STATE</strong>{Object.entries(metrics).map(([key, value]) => <div key={key}><span>{key}</span><b>{value}</b></div>)}<div><span>renderer</span><b>Canvas 2D</b></div><div><span>quality</span><b>{Number(metrics.points ?? 0) < 200 ? "MOBILE" : "HIGH"}</b></div></aside>}
      {commandOpen && <div className="command-layer" role="dialog" aria-modal="true" aria-label="Command interface" onMouseDown={(event) => { if (event.currentTarget === event.target) setCommandOpen(false); }}><form className="command-box" onSubmit={(event) => { event.preventDefault(); execute(query); }}><label htmlFor="command">FIELD COMMAND</label><input id="command" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="show TypeScript projects" /><div className="command-suggestions">{["open VyaparSathi", "show React projects", "signals", "raw mode"].map((item) => <button type="button" key={item} onClick={() => execute(item)}>{item}<span>↵</span></button>)}</div></form></div>}
      <footer className="system-footer"><span>ATHAR AKRAM © 2026</span><span>SHIFT + R / RAW</span><a href={portfolioConfig.email ? `mailto:${portfolioConfig.email}` : "#"}>BUILD SOMETHING <b>↗</b></a></footer><div className="sr-only" aria-live="polite">Current system state: {mode}{technology ? `. Technology gravity: ${technology}` : ""}</div>
    </main>
  );
}
