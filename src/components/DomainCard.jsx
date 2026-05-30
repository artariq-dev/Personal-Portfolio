const DomainCard = ({ d }) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded overflow-hidden transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5">
    <div className="p-5 flex flex-col gap-3">
      <h3 className="text-base font-bold text-gray-900 dark:text-white">{d.title}</h3>
      <p className="text-sm text-red-500 dark:text-red-400 leading-relaxed">{d.problem}</p>
      <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{d.capability}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {d.tags.slice(0, 4).map((t, i) => (
          <span key={i} className="text-[10px] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5">{t}</span>
        ))}
        {d.tags.length > 4 && (
          <span className="text-[10px] text-gray-400 dark:text-gray-500">+{d.tags.length - 4}</span>
        )}
      </div>
    </div>
  </div>
);

export default DomainCard;
