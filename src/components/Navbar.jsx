import { useState, useEffect } from 'react';
import { navLinks as links, toId } from './navData';
import useDarkMode from '../hooks/useDarkMode';
import PixelBtn from './PixelBtn';
import { GitHubIcon } from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dark, setDark] = useDarkMode();

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
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl tracking-tight"><span className="text-gray-400 dark:text-gray-500">[</span> <span className="text-gray-900 dark:text-white">AR</span><span className="text-gray-400">Tariq</span> <span className="text-gray-900 dark:text-white">]</span></a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link}
              href={`#${toId(link)}`}
              className={`text-xs tracking-wider uppercase transition-all hover:-translate-y-0.5 ${activeSection === toId(link) ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              {activeSection === toId(link) ? `[${link}]` : link}
            </a>
          ))}
          <PixelBtn as="a" href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 shadow-[3px_3px_0px_#4b5563] dark:shadow-[3px_3px_0px_#9ca3af] hover:shadow-[5px_5px_0px_#4b5563] dark:hover:shadow-[5px_5px_0px_#9ca3af]">
            <GitHubIcon /> GitHub
          </PixelBtn>
          <PixelBtn as="a" href={`${process.env.PUBLIC_URL}/Abdur-Rehman-Platform.pdf`} download="Abdur-Rehman-Platform.pdf"
            className="text-xs font-medium bg-blue-600 text-white px-3 py-1 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd]">
            Technical Profile
          </PixelBtn>
          <button
            onClick={() => setDark(!dark)}
            className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-all shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
            aria-label="Toggle dark mode"
          >
            {dark
              ? <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
              : <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            }
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-all shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
            aria-label="Toggle dark mode"
          >
            {dark
              ? <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
              : <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            }
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 transition-all shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${toId(link)}`}
              className={`text-sm font-medium ${activeSection === toId(link) ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <PixelBtn as="a" href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-900 dark:bg-gray-700 text-white px-3 py-1.5 shadow-[3px_3px_0px_#4b5563] dark:shadow-[3px_3px_0px_#9ca3af] hover:shadow-[5px_5px_0px_#4b5563] dark:hover:shadow-[5px_5px_0px_#9ca3af]"><GitHubIcon /> GitHub</PixelBtn>
          <PixelBtn as="a" href={`${process.env.PUBLIC_URL}/Abdur-Rehman-Platform.pdf`} download="Abdur-Rehman-Platform.pdf"
            className="text-xs font-medium bg-blue-600 text-white px-3 py-1.5 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd]">Technical Profile</PixelBtn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
