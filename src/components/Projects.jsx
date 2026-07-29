import { useState } from "react";
import { Link } from "react-router-dom";
import useFadeIn from "../hooks/useFadeIn";
import { coreProjects } from "./projectsData";
import { SectionDivider } from "./ProjectHelpers";

const CARD_CLASS =
  "cursor-pointer bg-gray-900 border-2 border-gray-700 rounded p-5 transition-all duration-200 shadow-[4px_4px_0px_#374151] hover:shadow-[8px_8px_0px_#1e3a5f] hover:border-blue-500 hover:-translate-x-1 hover:-translate-y-1 flex flex-col";

const NICHE_TAG_CLASS =
  "absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600/90 px-2 py-0.5 rounded-sm backdrop-blur-sm";

const ProjectCard = ({ p }) => {
  const imgSrc = p.cover || p.images?.[0] || p.diagram;
  const imgClass = p.cover
    ? "object-contain"
    : p.diagram
    ? "object-contain p-2"
    : "object-cover";

  return (
    <Link to={`/project/${p.slug}`} className={CARD_CLASS}>
      {imgSrc && (
        <div className="relative w-full aspect-video mb-3 rounded border border-gray-200 dark:border-gray-700 overflow-hidden bg-white">
          <img
            src={imgSrc}
            alt={p.title}
            className={`w-full h-full ${imgClass}`}
            loading="lazy"
          />
          <span className={NICHE_TAG_CLASS}>
            {p.niche || p.tag.split(" · ")[0]}
          </span>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pt-6 pb-2.5">
            <h3 className="text-sm font-bold text-white leading-snug mb-1">{p.title}</h3>
            {p.stats?.[0] && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-bold text-blue-300 leading-none">{p.stats[0].value}</span>
                <span className="text-[10px] text-gray-300 leading-none">{p.stats[0].label}</span>
              </div>
            )}
          </div>
        </div>
      )}
      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-blue-600 text-white shadow-[2px_2px_0px_#1d4ed8] hover:shadow-[4px_4px_0px_#1d4ed8] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 mt-auto self-start">
        Full technical details →
      </span>
    </Link>
  );
};

const ProjectGroup = ({ label, projects, open, onToggle }) => (
  <div className="mb-6">
    <SectionDivider
      label={label}
      count={projects.length}
      open={open}
      onToggle={onToggle}
      bg="bg-blue-600 dark:bg-blue-600"
    />
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const ref = useFadeIn();
  const [openFullstack, setOpenFullstack] = useState(
    () => sessionStorage.getItem("projects_openFullstack") === "true"
  );
  const [openCloud, setOpenCloud] = useState(
    () => sessionStorage.getItem("projects_openCloud") === "true"
  );

  const toggle = (key, setter) =>
    setter((v) => {
      const next = !v;
      sessionStorage.setItem(key, next);
      return next;
    });

  const fullstackProjects = coreProjects.filter(p => p.category === "fullstack");
  const cloudProjects = coreProjects.filter(p => p.category === "cloud");

  return (
    <section id="case-studies" className="bg-white dark:bg-gray-900">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 pt-20 pb-10 opacity-0 translate-y-6 transition-all duration-700"
      >
        <div className="mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Real problems.
            <br />
            Real fixes.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Each project shows a real business problem — and how it was solved.
          </p>
        </div>

        <ProjectGroup
          label="Full-Stack Application Development"
          projects={fullstackProjects}
          open={openFullstack}
          onToggle={() => toggle("projects_openFullstack", setOpenFullstack)}
        />
        <ProjectGroup
          label="Cloud Infrastructure & Platform Engineering"
          projects={cloudProjects}
          open={openCloud}
          onToggle={() => toggle("projects_openCloud", setOpenCloud)}
        />
      </div>
    </section>
  );
};

export default Projects;
