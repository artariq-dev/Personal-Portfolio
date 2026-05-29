import { useRoute } from '../lib/router';
import Marquee from 'react-fast-marquee';
import useFadeIn from '../hooks/useFadeIn';
import { coreProjects } from './projectsData';
import { SectionDivider } from './ProjectHelpers';

const Projects = () => {
  const ref = useFadeIn();
  const { navigate } = useRoute();

  return (
    <section id="case-stories" className="bg-white dark:bg-gray-900">
      <div ref={ref} className="max-w-5xl mx-auto px-6 pt-20 pb-10 opacity-0 translate-y-6 transition-all duration-700">

        <div className="mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Case Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Real problems.<br />Real fixes. No jargon.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            Each project shows how I identified a business risk and eliminated it — with measurable results.
          </p>
        </div>

        <div className="mb-6">
          <SectionDivider label="Cloud Infrastructure & Platform Engineering Case Stories" />
          <div className="tech-strip w-full border-t border-b border-gray-100 dark:border-gray-800 py-3 bg-gray-50 dark:bg-gray-900 mb-6">
            <Marquee speed={80} pauseOnHover gradient={false}>
              {["Kubernetes", "Terraform", "Multi-Cloud", "ArgoCD", "Istio", "Helm", "GitHub Actions", "Prometheus", "Grafana", "Falco", "Kyverno", "Cosign", "OPA"].map((t, i) => (
                <span key={i} className="text-xs text-gray-400 dark:text-gray-500 mx-6 whitespace-nowrap tracking-wider uppercase">{t}</span>
              ))}
            </Marquee>
          </div>
          <div className="space-y-4">
            {coreProjects.map((p, i) => (
              <div
                key={i}
                onClick={() => navigate(`/project/${p.slug}`)}
                className="cursor-pointer bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded p-5 transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 px-2 py-0.5 inline-block mb-2">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{p.problem}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {p.stats.map((s, j) => (
                    <div key={j} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                      <div className="text-sm font-bold text-blue-600">{s.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mt-3 bg-blue-600 text-white shadow-[2px_2px_0px_#1d4ed8] hover:shadow-[4px_4px_0px_#1d4ed8] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">View full case story →</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
