import useFadeIn from '../hooks/useFadeIn';
import Marquee from 'react-fast-marquee';
import { iconUrl } from './techIcons';
import { groups } from './expertiseData';

const Tag = ({ label, iconKey }) => {
  const url = iconUrl(iconKey);
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-white border border-gray-200 px-2 py-1">
      {url && <img src={url} alt={label} className="w-3.5 h-3.5 object-contain shrink-0" />}
      {label}
    </span>
  );
};

const Experience = () => {
  const ref = useFadeIn();
  return (
    <section id="expertise" className="pt-16 sm:pt-24 bg-gray-800 dark:bg-gray-950 border-t border-gray-700 dark:border-gray-800">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Engineering Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-3">
            The stack.<br />Pick your problem.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl">
            If your stack isn't listed, ask.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {g.tags.map((t) => (
                  <Tag key={t.label} label={t.label} iconKey={t.key} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-strip w-full mt-16 border-t border-b border-gray-700 dark:border-gray-800 py-3 bg-gray-900 dark:bg-gray-900">
        <Marquee direction="right" speed={90} pauseOnHover gradient={false}>
          {[
            { label: "Full-Stack Development", icon: "react" },
            { label: "API Design",             icon: "graphql" },
            { label: "Database Architecture",  icon: "postgresql" },
            { label: "User Interfaces",        icon: "tailwindcss" },
            { label: "Product Engineering",    icon: "docker" },
            { label: "System Integration",     icon: "nodedotjs" },
            { label: "CI/CD Pipelines",        icon: "githubactions" },
            { label: "Cloud Infrastructure",   icon: "aws" },
            { label: "Automation",             icon: "ansible" },
            { label: "Containerization",       icon: "kubernetes" },
            { label: "Scalability",            icon: "terraform" },
            { label: "Security Integration",   icon: "falco" },
            { label: "Observability",          icon: "grafana" },
            { label: "GitOps",                 icon: "argo" },
            { label: "Infrastructure Reliability", icon: "prometheus" },
            { label: "System Resilience",      icon: "helm" },
          ].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mx-6 whitespace-nowrap tracking-wider uppercase"
            >
              <img
                src={iconUrl(t.icon)}
                alt={t.label}
                className="w-3.5 h-3.5 object-contain opacity-50"
              />
              {t.label}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Experience;
