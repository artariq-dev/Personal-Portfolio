const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-3 mb-6">
    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{label}</h3>
    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
  </div>
);

const Timeline = ({ steps }) => (
  <div className="rounded px-4 py-3 border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <span className="text-xs font-bold uppercase tracking-wider block mb-3 opacity-70 text-gray-700 dark:text-gray-300">Implementation</span>
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
            {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-300 dark:bg-gray-600 my-1" />}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pb-3">{step}</p>
        </div>
      ))}
    </div>
  </div>
);

const Block = ({ label, text, color }) => (
  <div className={`rounded px-4 py-3 border ${color}`}>
    <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70">{label}</span>
    <p className="text-sm leading-relaxed">{text}</p>
  </div>
);

export { SectionDivider, Timeline, Block };
