import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import useFadeIn from '../hooks/useFadeIn';
import { coreProjects } from './projectsData';
import PixelBtn from './PixelBtn';
import { GitHubIcon, ExternalIcon } from './Icons';
import { SectionDivider, Timeline, Block } from './ProjectHelpers';

const CoreProjectCard = ({ project, onLightbox }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5">

      {/* Always-visible header */}
      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-5">
        <div className="mb-4">
          {/* GitHub buttons — above capsule on mobile, inline on desktop */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2.5 py-0.5 rounded-[2px] inline-block self-start">
              {project.tag}
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
              {project.github && (
                <PixelBtn as="a" href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-xs font-semibold shadow-[3px_3px_0px_#4b5563] dark:shadow-[3px_3px_0px_#9ca3af] hover:shadow-[5px_5px_0px_#4b5563] dark:hover:shadow-[5px_5px_0px_#9ca3af] transition-all">
                  <GitHubIcon /> {project.githubLabel || "GitHub"}
                </PixelBtn>
              )}
              {project.githubAlt && (
                <PixelBtn as="a" href={project.githubAlt.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-[3px_3px_0px_#4b5563] dark:shadow-[3px_3px_0px_#9ca3af] hover:shadow-[5px_5px_0px_#4b5563] dark:hover:shadow-[5px_5px_0px_#9ca3af] transition-all">
                  <GitHubIcon /> {project.githubAlt.label}
                </PixelBtn>
              )}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
          {project.source && (
            <p className="text-xs mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{project.source.text}</span>
              {project.source.link ? (
                <a href={project.source.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-all hover:-translate-y-0.5 underline decoration-blue-400 underline-offset-2">{project.source.link}
                    <ExternalIcon />
                  </a>
              ) : (
                <a href={project.source.url} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">{project.source.label}</a>
              )}
            </p>
          )}
          <p className="text-xs text-blue-600 dark:text-blue-400 mb-3 font-medium">{project.subtitle}</p>
          <div className="rounded px-3 py-2.5 border bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70 text-red-800 dark:text-red-300">Problem It Fixes</span>
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
        <PixelBtn
          onClick={() => setOpen(o => !o)}
          className={`mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 transition-colors ${open ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 border border-gray-300 dark:border-gray-600 shadow-[3px_3px_0px_#d1d5db] dark:shadow-[3px_3px_0px_#4b5563] hover:shadow-[5px_5px_0px_#d1d5db] dark:hover:shadow-[5px_5px_0px_#4b5563]' : 'bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd]'}`}
        >
          {open ? 'Collapse case story' : 'View full case story'}
          <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </PixelBtn>
      </div>

      {/* Expandable detail */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[5000px]' : 'max-h-0'}`}>
        <div className="bg-white dark:bg-gray-900 px-6 py-6 border-t border-gray-200 dark:border-gray-700">

          {/* Solution + Impact side by side */}
          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <Block label="How It Fixes" text={project.solution}
              color="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 text-blue-800 dark:text-blue-300" />
            <Block label="Result It Delivers" text={project.impact}
              color="bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300" />
          </div>

          {/* Tech Stack & Phases + Implementation side by side */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <div className="flex flex-col gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded p-5">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t, i) => (
                    <span key={i} className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-[2px]">{t}</span>
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
    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded overflow-hidden transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5">
      <div className="relative p-4 flex flex-col gap-2 min-h-36 sm:min-h-48 pb-8">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">{project.title}</p>
          {badge && <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-[2px] shrink-0">{badge}</span>}
        </div>
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((t, i) => (
            <span key={i} className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded-[2px]">{t}</span>
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
    <section id="case-stories" className="bg-white dark:bg-gray-900">
      <div ref={ref} className="max-w-5xl mx-auto px-6 pt-20 pb-10 opacity-0 translate-y-6 transition-all duration-700">

        <div className="mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Case Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Real problems.<br />Real fixes. No jargon.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Each project shows how I identified a business risk and eliminated it — with measurable results you can see. No fluff, no theory, just what was broken and how we fixed it.
          </p>
        </div>

        <div className="mb-6">
          <SectionDivider label="Cloud Infrastructure & Platform Engineering Case Stories" />
          {/* Tech strip */}
          <div className="tech-strip w-full border-t border-b border-gray-100 dark:border-gray-800 py-3 bg-gray-50 dark:bg-gray-900 mb-6">
            <Marquee speed={80} pauseOnHover gradient={false}>
              {["Kubernetes", "Terraform", "Multi-Cloud", "ArgoCD", "Istio", "Helm", "GitHub Actions", "Prometheus", "Grafana", "Falco", "Kyverno", "Cosign", "OPA"].map((t, i) => (
                <span key={i} className="text-xs text-gray-400 dark:text-gray-500 mx-6 whitespace-nowrap tracking-wider uppercase">{t}</span>
              ))}
            </Marquee>
          </div>
          <div className="space-y-4">
            {coreProjects.map((p, i) => (
              <CoreProjectCard key={i} project={p} onLightbox={setLightbox} />
            ))}
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
