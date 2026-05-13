import { useState } from 'react';

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

export default DomainCard;
