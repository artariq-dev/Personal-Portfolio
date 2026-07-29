import { Chevron } from './Icons';

const SectionDivider = ({ label, open, onToggle, count }) =>
  onToggle ? (
    <button onClick={onToggle} className="w-full text-left group">
      <div className="flex flex-col gap-2 px-4 py-2.5 bg-blue-600 border border-blue-700 dark:border-blue-500 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
        <h3 className="text-xs font-semibold text-white uppercase tracking-widest">{label}</h3>
        <div className="flex items-center justify-end gap-3">
          {count !== undefined && (
            <span className="text-xs font-bold text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 px-2.5 h-5 flex items-center">
              {count} {count === 1 ? "project" : "projects"}
            </span>
          )}
          <span className="inline-flex items-center justify-center w-5 h-5 text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300">
            <Chevron open={open} />
          </span>
        </div>
      </div>
    </button>
  ) : (
    <div className="flex flex-col gap-2 mb-6 px-4 py-2.5 bg-blue-600 border border-blue-700 dark:border-blue-500">
      <h3 className="text-xs font-semibold text-white uppercase tracking-widest">{label}</h3>
      {count !== undefined && (
        <div className="flex items-center justify-end">
          <span className="text-xs font-bold text-white dark:text-gray-900 bg-gray-900 dark:bg-white border border-gray-600 dark:border-gray-300 px-2.5 h-5 flex items-center">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        </div>
      )}
    </div>
  );

const Timeline = ({ steps, problem, impact }) => {
  const items = [
    ...(problem ? [{ type: "problem", text: problem }] : []),
    ...steps.map((text) => ({ type: "step", text })),
    ...(impact ? [{ type: "impact", text: impact }] : []),
  ];

  const dotColor = { problem: "bg-red-500", step: "bg-blue-500", impact: "bg-emerald-500" };
  const labelColor = { problem: "text-red-600 dark:text-red-400", impact: "text-emerald-600 dark:text-emerald-400" };
  const textColor = { problem: "text-red-700 dark:text-red-300", step: "text-gray-700 dark:text-gray-300", impact: "text-emerald-700 dark:text-emerald-300" };
  const labelText = { problem: "Problem It Fixes", impact: "Result It Delivers" };

  return (
    <div className="rounded px-4 py-3 border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <span className="text-xs font-bold uppercase tracking-wider block mb-3 opacity-70 text-gray-700 dark:text-gray-300">
        Implementation
      </span>
      <div className="flex flex-col">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${dotColor[item.type]}`} />
                {!isLast && <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 my-1" />}
              </div>
              <div className={`flex-1 min-w-0 ${!isLast ? "pb-3" : ""}`}>
                {labelText[item.type] && (
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelColor[item.type]}`}>
                    {labelText[item.type]}
                  </p>
                )}
                <p className={`text-sm leading-relaxed ${textColor[item.type]}`}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SectionDivider, Timeline };
