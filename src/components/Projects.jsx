import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";
import { coreProjects } from "./projectsData";

const ALL = "All";

const FILTERS = [
  ALL, "Full-Stack", "Cloud", "SaaS", "CRM",
  "E-Commerce", "CMS", "Automation", "DevOps",
];

const NICHE_TAG_CLASS =
  "absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600/90 px-2 py-0.5 rounded-sm backdrop-blur-sm";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const ProjectCard = ({ p, index }) => {
  const imgSrc = p.cover || p.images?.[0] || p.diagram;
  const imgClass = p.diagram && !p.cover ? "object-contain p-2" : "object-contain";

  return (
    <motion.div
      key={p.slug}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
    >
      <Link
        to={`/project/${p.slug}`}
        className="cursor-pointer bg-gray-900 border-2 border-gray-700 rounded p-2 transition-all duration-200 shadow-[4px_4px_0px_#374151] hover:shadow-[8px_8px_0px_#1e3a5f] hover:border-blue-500 hover:-translate-x-1 hover:-translate-y-1 flex flex-col"
      >
        {imgSrc && (
          <div className="relative w-full aspect-video mb-3 rounded border border-gray-200 dark:border-gray-700 overflow-hidden bg-white">
            <img src={imgSrc} alt={p.title} className={`w-full h-full ${imgClass}`} loading="lazy" />
            <span className={NICHE_TAG_CLASS}>{p.niche || p.tag.split(" · ")[0]}</span>
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
        <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-blue-600 text-white shadow-[2px_2px_0px_#1d4ed8] hover:shadow-[4px_4px_0px_#1d4ed8] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 mt-auto self-start mx-5 mb-2">
          Details →
        </span>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useFadeIn();
  const location = useLocation();
  const [active, setActive] = useState(() => {
    const param = new URLSearchParams(location.search).get("filter");
    return param && FILTERS.includes(param) ? param : ALL;
  });

  useEffect(() => {
    const param = new URLSearchParams(location.search).get("filter");
    if (param && FILTERS.includes(param)) setActive(param);
  }, [location.search]);

  const filtered = useMemo(
    () => active === ALL ? coreProjects : coreProjects.filter((p) => p.filters?.includes(active)),
    [active]
  );

  return (
    <section id="case-studies" className="bg-white dark:bg-gray-900">
      <div ref={ref} className="max-w-5xl mx-auto px-6 pt-20 pb-10 opacity-0 translate-y-6 transition-all duration-700">
        <div className="mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Case Studies</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Real problems.<br />Real fixes.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Full-stack products and cloud infrastructure — each documented with the problem, the architecture, and the outcome.
          </p>
        </div>

        <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 p-4 mb-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border transition-all duration-150 ${
                  active === f
                    ? "bg-blue-600 border-blue-600 text-white scale-125 shadow-[2px_2px_0px_#1d4ed8]"
                    : "bg-gray-800 border-gray-700 text-gray-300 dark:bg-gray-200 dark:border-gray-300 dark:text-gray-600 hover:border-blue-400 hover:text-blue-400 dark:hover:border-blue-600 dark:hover:text-blue-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Showing <span className="font-bold text-white dark:text-gray-900">{filtered.length}</span>
            {" "}of <span className="font-bold text-white dark:text-gray-900">{coreProjects.length}</span> projects
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={active}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-gray-400 dark:text-gray-600 text-sm"
            >
              No projects match this filter.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
