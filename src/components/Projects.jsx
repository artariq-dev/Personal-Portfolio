import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import useFadeIn from '../hooks/useFadeIn';
import { coreProjects, fullStackProjects, contributions, tools } from './projectsData';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-3 mb-6">
    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{label}</h3>
    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
  </div>
);

const Timeline = ({ steps }) => (
  <div className="rounded px-4 py-3 border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <span className="text-xs font-bold uppercase tracking-wider block mb-3 opacity-70 text-gray-700 dark:text-gray-300">Implementation</span>
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
            {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 my-1" />}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pb-3">{step}</p>
        </div>
      ))}
    </div>
  </div>
);

const Block = ({ label, text, color }) => (
  <div className={`rounded px-4 py-3 border ${color}`}>
    <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70">{label}</span>
    <p className="text-sm leading-relaxed">{text}</p>
  </div>
);

const CoreProjectCard = ({ project, onLightbox }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden transition-all duration-200 hover:border-blue-200 dark:hover:border-blue-800">

      {/* Always-visible header */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-5">
        <div className="mb-4">
          {/* GitHub buttons — above capsule on mobile, inline on desktop */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2.5 py-0.5 rounded-[2px] inline-block self-start">
              {project.tag}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-900 text-white border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition-colors text-xs font-semibold">
                  <GitHubIcon /> GitHub
                </a>
              )}
              {project.githubAlt && (
                <a href={project.githubAlt.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-700 text-white border border-gray-500 px-3 py-1 rounded hover:bg-gray-600 transition-colors text-xs font-semibold">
                  <GitHubIcon /> {project.githubAlt.label}
                </a>
              )}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
          {project.source && (
            <a href={project.source.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-blue-600 transition-colors mb-1">
              <ExternalIcon /> {project.source.label}
            </a>
          )}
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-3 font-medium">{project.subtitle}</p>
          <div className="rounded px-3 py-2.5 border bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70 text-red-800 dark:text-red-300">Problem</span>
            <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">{project.problem}</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {project.stats.map((s, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
              <div className="text-sm font-bold text-blue-600">{s.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setOpen(o => !o)}
          className={`mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold rounded py-2 transition-colors ${open ? 'text-gray-500 dark:text-gray-400 hover:text-blue-600 border border-gray-200 dark:border-gray-700 hover:border-blue-300' : 'text-blue-600 dark:text-blue-400 hover:text-blue-500 border border-blue-200 dark:border-blue-800 hover:border-blue-400'}`}
        >
          {open ? 'Collapse case study' : 'View full case study'}
          <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expandable detail */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[5000px]' : 'max-h-0'}`}>
        <div className="bg-white dark:bg-gray-900 px-6 py-6 border-t border-gray-200 dark:border-gray-700">

          {/* Solution + Impact side by side */}
          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <Block label="Solution" text={project.solution}
              color="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 text-blue-800 dark:text-blue-300" />
            <Block label="Impact" text={project.impact}
              color="bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300" />
          </div>

          {/* Tech Stack & Phases + Implementation side by side */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div className="flex flex-col gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded p-5">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-[2px]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded p-5">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Build Phases</h4>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                  {project.phases.map((p, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs">
                      <span className={p.done ? "text-emerald-500 font-bold" : "text-gray-300 dark:text-gray-600"}>{p.done ? "✓" : "○"}</span>
                      <span className={p.done ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Timeline steps={project.implementation} />
          </div>

          {/* Architecture Diagram */}
          {project.diagram && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Architecture Diagram</h4>
              <img src={project.diagram} alt={`${project.title} Architecture`}
                className="w-full rounded border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-[1.01] transition-transform duration-200"
                onClick={() => onLightbox({ src: project.diagram, alt: `${project.title} Architecture` })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CompactCard = ({ project, badge }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
      <div className="relative p-4 flex flex-col gap-2 min-h-36 sm:min-h-48 pb-8">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">{project.title}</p>
          {badge && <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-[2px] shrink-0">{badge}</span>}
        </div>
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((t, i) => (
            <span key={i} className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded-[2px]">{t}</span>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pr-6">{project.highlight}</p>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            className="absolute bottom-3 left-4 inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-500 font-medium">
            <ExternalIcon /> Live
          </a>
        )}
        {project.images && (
          <svg className={`absolute bottom-3 right-3 w-4 h-4 text-gray-400 transition-transform duration-200 cursor-pointer hover:text-blue-600 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
            onClick={() => setOpen(o => !o)}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        {project.images && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 border-t border-gray-100 dark:border-gray-700">
            {project.images.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} ${i + 1}`}
                className="rounded border border-gray-200 dark:border-gray-700 w-full object-cover aspect-video" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = useFadeIn();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="case-studies" className="bg-white dark:bg-gray-900">
      <div ref={ref} className="max-w-5xl mx-auto px-6 pt-20 pb-10 opacity-0 translate-y-6 transition-all duration-700">

        <div className="mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Case Studies</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Engineering decisions.<br />Production outcomes.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Each system addresses a concrete infrastructure, security, or scalability challenge — documented from problem context through architecture design to measurable operational impact.
          </p>
        </div>

        <div className="mb-6">
          <SectionDivider label="Cloud Infrastructure & DevSecOps Case Studies" />
          {/* Tech strip */}
          <div className="tech-strip w-full border-t border-b border-gray-100 dark:border-gray-800 py-3 bg-gray-50 dark:bg-gray-900 mb-6">
            <Marquee speed={80} pauseOnHover gradient={false}>
              {["AWS", "Azure AKS", "Kubernetes", "Terraform", "Docker", "GitOps (ArgoCD)", "GitHub Actions", "Prometheus", "Grafana", "Trivy", "OPA"].map((t, i) => (
                <span key={i} className="text-xs text-gray-400 dark:text-gray-500 font-mono mx-6 whitespace-nowrap tracking-wider uppercase">{t}</span>
              ))}
            </Marquee>
          </div>
          <div className="space-y-4">
            {coreProjects.map((p, i) => (
              <CoreProjectCard key={i} project={p} onLightbox={setLightbox} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <SectionDivider label="Additional Engineering Experience" />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 mb-4">Full stack projects — built solo or as part of a team.</p>
          <div className="grid sm:grid-cols-2 gap-3 items-start">
            {fullStackProjects.map((p, i) => <CompactCard key={i} project={p} />)}
            {contributions.map((p, i) => <CompactCard key={i} project={p} badge="Shipped with Team" />)}
          </div>
        </div>

      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt}
            className="max-w-full max-h-[90vh] rounded shadow-2xl"
            onClick={e => e.stopPropagation()} />
          <button className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300" onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
