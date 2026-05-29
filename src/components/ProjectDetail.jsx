import { useState } from 'react';
import { useRoute } from '../lib/router';
import { coreProjects } from './projectsData';
import PixelBtn from './PixelBtn';
import { GitHubIcon } from './Icons';
import { Timeline, Block } from './ProjectHelpers';

const ProjectDetail = () => {
  const { route, navigate } = useRoute();
  const slug = route.replace('/project/', '');
  const project = coreProjects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project not found</h1>
          <button onClick={() => navigate('/')} className="text-blue-600 underline text-sm cursor-pointer">← Back home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors mb-6 cursor-pointer">← Back to projects</button>

        <div className="mb-6">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2.5 py-0.5 inline-block mb-3">
            {project.tag}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
          {project.subtitle && <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">{project.subtitle}</p>}

          <div className="flex gap-2 mb-6">
            {project.github && (
              <PixelBtn as="a" href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1.5 text-xs font-semibold">
                <GitHubIcon /> {project.githubLabel || "GitHub"}
              </PixelBtn>
            )}
            {project.githubAlt && (
              <PixelBtn as="a" href={project.githubAlt.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1.5 text-xs font-semibold">
                <GitHubIcon /> {project.githubAlt.label}
              </PixelBtn>
            )}
          </div>

          <div className="rounded px-4 py-3.5 border bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-red-800 dark:text-red-300">Problem It Fixes</span>
            <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {project.stats.map((s, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                <div className="text-sm font-bold text-blue-600">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <Block label="How It Fixes" text={project.solution}
            color="bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 text-blue-800 dark:text-blue-300" />
          <Block label="Result It Delivers" text={project.impact}
            color="bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded p-5">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t, i) => (
                <span key={i} className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5">{t}</span>
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

        {project.diagram && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Architecture Diagram</h4>
            <img src={project.diagram} alt={`${project.title} Architecture`}
              className="w-full rounded border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-[1.01] transition-transform dark:invert-[.85]"
              onClick={() => setLightbox({ src: project.diagram, alt: `${project.title} Architecture` })}
            />
          </div>
        )}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt}
            className="max-w-full max-h-[90vh] rounded shadow-2xl dark:invert-[.85]"
            onClick={e => e.stopPropagation()} />
          <button className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300" onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
