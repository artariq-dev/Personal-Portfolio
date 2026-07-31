import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coreProjects } from './projectsData';
import PixelBtn from './PixelBtn';
import { GitHub } from './Icons';
import { Timeline } from './ProjectHelpers';
import { techNames, iconUrl } from './techIcons';
import Lightbox from './Lightbox';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = coreProjects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="mb-6">
          <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">← Back to projects</button>
        </div>

          <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2.5 py-0.5 inline-block mb-3">
            {project.tag}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
          {project.subtitle && <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">{project.subtitle}</p>}

          <div className="flex gap-2 mb-6">
            {project.github && (
              <PixelBtn as="a" href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1.5 text-xs font-semibold">
                <GitHub /> {project.githubLabel || "GitHub"}
              </PixelBtn>
            )}
            {project.githubAlt && (
              <PixelBtn as="a" href={project.githubAlt.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-900 dark:bg-gray-700 text-white px-3 py-1.5 text-xs font-semibold">
                <GitHub /> {project.githubAlt.label}
              </PixelBtn>
            )}
            {project.live && (
              <PixelBtn as="a" href={project.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold">
                View live site →
              </PixelBtn>
            )}
            {project.dribbble && (
              <PixelBtn as="a" href={project.dribbble} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#ea4c89] text-white px-3 py-1.5 text-xs font-semibold">
                Dribbble →
              </PixelBtn>
            )}
          </div>

        {project.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {project.stats.map((s, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                <div className="text-sm font-bold text-blue-600">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>
        )}

        {project.techs && project.techs.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2 py-1">
                  {iconUrl(tech) && (
                    <img src={iconUrl(tech)} alt={tech}
                      className="w-5 h-5" loading="lazy"
                      onError={(e) => { e.target.style.display = 'none' }} />
                  )}
                  <span className="text-xs text-gray-600 dark:text-gray-300">{techNames[tech] || tech}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <Timeline steps={project.implementation} problem={project.problem} impact={project.impact} />

        {project.images && project.images.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Screenshots</h4>
            <div className={`grid gap-2 ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-4'}`}>
              {project.images.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} ${i + 1}`}
                  className="w-full rounded border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => setLightbox({ src, alt: `${project.title} ${i + 1}`, invert: false })}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        {project.diagram && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Architecture Diagram</h4>
            <div className="w-full rounded border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-[1.01] transition-transform"
              onClick={() => setLightbox({ src: project.diagram, alt: `${project.title} Architecture`, invert: true })}>
              <img src={project.diagram} alt={`${project.title} Architecture`}
                className="w-full dark:invert-[.85]"
                loading="lazy"
              />
            </div>
          </div>
        )}

      </div>

      {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
};

export default ProjectDetail;
