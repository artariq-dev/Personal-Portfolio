import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { iconUrl } from "./techIcons";
import { groups } from "./expertiseData";

// Only show these 3 categories in the hero
const HERO_CATEGORIES = ["Cloud", "Cloud Services", "Full-Stack", "DevOps"];
const filtered = groups.filter((g) => HERO_CATEGORIES.includes(g.label));

const StackBar = () => {
  const [open, setOpen] = useState(null); // label of open category
  const [dropdownStyle, setDropdownStyle] = useState({});
  const buttonRefs = useRef({});

  const toggle = (label) => {
    if (open === label) {
      setOpen(null);
      return;
    }
    // Calculate position from the button's bounding rect
    const btn = buttonRefs.current[label];
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const dropdownWidth = 320; // max-w-sm ~= 384px, use 320 as safe estimate
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 16);
      setDropdownStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left: Math.max(left, 16),
      });
    }
    setOpen(label);
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const isButton = Object.values(buttonRefs.current).some((btn) => btn?.contains(e.target));
      if (!isButton) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close and reposition on scroll/resize
  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(null);
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [open]);

  const openGroup = filtered.find((g) => g.label === open);

  return (
    <div className="my-8">
      {/* ── Header row ── */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white shrink-0">
          Stack /
        </span>

        {filtered.map((g) => (
          <button
            key={g.label}
            ref={(el) => (buttonRefs.current[g.label] = el)}
            onClick={() => toggle(g.label)}
            className={`group flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-bold uppercase tracking-wider transition-all duration-150
              ${open === g.label
                ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-gray-900 shadow-[2px_2px_0px_#374151] dark:shadow-[2px_2px_0px_#d1d5db]"
                : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:shadow-[2px_2px_0px_#d1d5db] dark:hover:shadow-[2px_2px_0px_#374151]"
              }`}
          >
            {g.label}
            <svg
              className={`w-2.5 h-2.5 transition-transform duration-200 ${open === g.label ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ))}
      </div>

      {/* ── Dropdown portalled to document.body to escape overflow/z-index ── */}
      {open && openGroup && createPortal(
        <div
          style={dropdownStyle}
          className="z-[9999] bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] p-4 flex flex-wrap gap-2 w-80"
        >
          {openGroup.tags.map((t) => {
            const url = iconUrl(t.key);
            return (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1"
              >
                {url && <img src={url} alt={t.label} className="w-3 h-3 object-contain opacity-70 shrink-0" />}
                {t.label}
              </span>
            );
          })}
        </div>,
        document.body
      )}
    </div>
  );
};

export default StackBar;
