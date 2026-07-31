import useFadeIn from '../hooks/useFadeIn';
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
    <section id="expertise" className="pt-16 sm:pt-24 pb-10 bg-gray-800 dark:bg-gray-950 border-t border-gray-700 dark:border-gray-800">
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
    </section>
  );
};

export default Experience;
