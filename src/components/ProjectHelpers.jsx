const SectionDivider = ({ label, open, onToggle, count, bg }) =>
  onToggle ? (
    <button onClick={onToggle} className="w-full text-left group">
      <div className={`flex flex-col gap-2 px-4 py-2.5 ${bg || "bg-gray-50 dark:bg-gray-800"} border border-blue-700 dark:border-blue-500 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200`}>
        <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
          {label}
        </h3>
        <div className="flex items-center justify-end gap-3">
          {count !== undefined && (
            <span className="text-xs font-bold text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 px-2.5 h-5 flex items-center">
              {count} {count === 1 ? "project" : "projects"}
            </span>
          )}
          <span className="inline-flex items-center justify-center w-5 h-5 text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300">
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
          </span>
        </div>
      </div>
    </button>
  ) : (
    <div className="flex flex-col gap-2 mb-6 px-4 py-2.5 bg-blue-600 dark:bg-blue-600 border border-blue-700 dark:border-blue-500">
      <h3 className="text-xs font-semibold text-white uppercase tracking-widest">
        {label}
      </h3>
      <div className="flex items-center justify-end gap-3">
        {count !== undefined && (
          <span className="text-xs font-bold text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 px-2.5 h-5 flex items-center">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        )}
      </div>
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
