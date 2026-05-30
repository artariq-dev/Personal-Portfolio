import useFadeIn from '../hooks/useFadeIn';
import DomainCard from './DomainCard';
import { domains } from './experienceData';

const Experience = () => {
  const ref = useFadeIn();
  return (
    <section id="expertise" className="pt-16 sm:pt-24 pb-10 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700">
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Engineering Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            Real problems.<br />Practical fixes.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl">
            See how I approach common tech challenges — just the problem and the fix.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-stretch">
          {domains.map((d, i) => <DomainCard key={i} d={d} />)}
        </div>
      </div>
    </section>
  );
};

export default Experience;

