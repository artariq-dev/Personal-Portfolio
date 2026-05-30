const SectionDivider = ({ label, open, onToggle, count }) =>
  onToggle ? (
    <button onClick={onToggle} className="w-full text-left group">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
        <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-widest flex-1">
          {label}
        </h3>
        {count !== undefined && (
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 px-2 py-0.5">
            {count}
          </span>
        )}
        <svg
          className={`w-3 h-3 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
  ) : (
    <div className="flex items-center gap-3 mb-6 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex-1">
        {label}
      </h3>
      {count !== undefined && (
        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-0.5">
          {count}
        </span>
      )}
    </div>
  );

const Timeline = ({ steps, problem, impact }) => {
  const total = steps.length + (problem ? 1 : 0) + (impact ? 1 : 0);
  let idx = 0;
  return (
    <div className="rounded px-4 py-3 border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <span className="text-xs font-bold uppercase tracking-wider block mb-3 opacity-70 text-gray-700 dark:text-gray-300">
        Implementation
      </span>
      <div className="flex flex-col">
        {problem && (
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0 bg-red-500" />
              {total > 1 && (
                <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 my-1" />
              )}
            </div>
            <div className="pb-4 flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
                Problem It Fixes
              </p>
              <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
                {problem}
              </p>
            </div>
          </div>
        )}

        {steps.map((step, i) => {
          idx++;
          const isLast = idx >= total - (impact ? 1 : 0);
          return (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full mt-1 shrink-0 bg-blue-500" />
                {!isLast && (
                  <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 my-1" />
                )}
              </div>
              <div className={`flex-1 min-w-0 ${!isLast ? "pb-3" : ""}`}>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          );
        })}
        {impact && (
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0 bg-emerald-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                Result It Delivers
              </p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                {impact}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Block = ({ label, text, color }) => (
  <div className={`rounded px-4 py-3 border ${color}`}>
    <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70">
      {label}
    </span>
    <p className="text-sm leading-relaxed">{text}</p>
  </div>
);

export { SectionDivider, Timeline, Block };
