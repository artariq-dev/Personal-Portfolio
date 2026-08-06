import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { Sun, Moon } from './Icons';

const SERVICES = [
  "Full-Stack", "Cloud", "SaaS", "CRM",
  "E-Commerce", "CMS", "Automation", "DevOps",
];

const DarkToggle = ({ dark, onToggle }) => (
  <button
    onClick={onToggle}
    className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors"
    aria-label="Toggle dark mode"
  >
    {dark ? <Sun /> : <Moon />}
  </button>
);

const Navbar = () => {
  const [dark, setDark] = useDarkMode();
  const navigate = useNavigate();

  const goToFilter = (filter) => {
    navigate(`/?filter=${encodeURIComponent(filter)}`);
    setTimeout(() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const goToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const divider = <div className="w-px h-3 bg-white/10 dark:bg-black/10 shrink-0 hidden sm:block" />;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-gray-950 dark:bg-white rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Logo */}
          <button
            onClick={() => { window.location.href = '/'; }}
            className="font-semibold text-xs sm:font-bold sm:text-sm tracking-tight shrink-0"
          >
            <span className="text-gray-500 dark:text-gray-400">[</span>
            <span className="text-white dark:text-gray-900 font-display">ar</span>
            <span className="text-gray-500 dark:text-gray-400 font-display">tariq.</span>
            <span className="text-gray-500 dark:text-gray-400">]</span>
          </button>

          {divider}

          {/* Services — hover group, no JS needed */}
          <div className="group relative shrink-0">
            <button className="flex items-center gap-1 text-[10px] sm:text-xs font-medium sm:font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 group-hover:text-white dark:group-hover:text-gray-900 transition-colors">
              Services <span className="text-xs sm:text-sm font-bold group-hover:rotate-45 transition-transform duration-150 inline-block">+</span>
            </button>

            {/* Invisible bridge fills the gap between button and dropdown */}
            <div className="absolute left-0 right-0 h-3 top-full" />

            {/* Dropdown */}
            <div className="absolute left-0 top-[calc(100%+12px)] w-44 bg-gray-950 dark:bg-white border border-white/10 dark:border-black/10 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.1)] rounded-lg py-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => goToFilter(s)}
                  className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 hover:bg-white/5 dark:hover:bg-black/5 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <button
            onClick={goToContact}
            className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium sm:font-bold uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Contact
          </button>

          {divider}

          <DarkToggle dark={dark} onToggle={() => setDark(!dark)} />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
