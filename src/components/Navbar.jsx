import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navLinks as links, toId } from './navData';
import useDarkMode from '../hooks/useDarkMode';
import { Sun, Moon, Menu as MenuIcon } from './Icons';

const DarkToggle = ({ dark, onToggle }) => (
  <button
    onClick={onToggle}
    className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-all shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
    aria-label="Toggle dark mode"
  >
    {dark ? <Sun /> : <Moon />}
  </button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dark, setDark] = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ['hero', ...links.map(toId)].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 ${scrolled ? 'backdrop-blur-sm shadow-sm' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => { window.location.href = '/'; }} className="font-bold text-xl tracking-tight cursor-pointer"><span className="text-gray-400 dark:text-gray-500">[</span> <span className="text-gray-900 dark:text-white">ar</span><span className="text-gray-400 dark:text-gray-500">tariq</span> <span className="text-gray-900 dark:text-white">]</span></button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(toId(link))}
              className={`text-xs tracking-wider uppercase transition-all hover:-translate-y-0.5 cursor-pointer ${activeSection === toId(link) ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              {activeSection === toId(link) ? `[${link}]` : link}
            </button>
          ))}
          <a
            href="https://ask.artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase transition-all hover:-translate-y-0.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            ask →
          </a>
          <DarkToggle dark={dark} onToggle={() => setDark(!dark)} />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <DarkToggle dark={dark} onToggle={() => setDark(!dark)} />
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-all shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => { setMenuOpen(false); scrollTo(toId(link)); }}
              className={`text-sm font-medium text-left cursor-pointer ${activeSection === toId(link) ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {link}
            </button>
          ))}
          <a
            href="https://ask.artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-left text-blue-600 dark:text-blue-400"
          >
            ask.artariq →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
