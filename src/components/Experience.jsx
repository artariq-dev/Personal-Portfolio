import { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { domains } from './experienceData';

const DomainCard = ({ d }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded overflow-hidden cursor-pointer transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5"
      onClick={() => setOpen(o => !o)}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{d.title}</h3>
            <p className="text-sm text-red-500 dark:text-red-400 leading-relaxed">{d.problem}</p>
          </div>
          <svg className={`w-4 h-4 shrink-0 text-gray-400 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40' : 'max-h-0'}`}>
        <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-700 pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{d.capability}</p>
        </div>
      </div>
    </div>
  );
};

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
            Click any domain to see how I'd approach it — no jargon, just what the problem is and what we'd do about it.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-start">
          {domains.map((d, i) => <DomainCard key={i} d={d} />)}
        </div>
      </div>
    </section>
  );
};

export default Experience;

