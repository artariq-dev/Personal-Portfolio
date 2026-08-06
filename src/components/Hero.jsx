import { useEffect, useState } from "react";
import CyclingWord from "./CyclingWord";
import StackBar from "./StackBar";
import PixelBtn from "./PixelBtn";
import { AuditDot, ArrowUpRight } from "./Icons";

const auditBtnClass = "flex items-center gap-4 p-5 bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 hover:border-blue-400 dark:hover:border-blue-300 transition-all group shadow-[3px_3px_0px_#374151] dark:shadow-[3px_3px_0px_#e5e7eb] hover:shadow-[5px_5px_0px_#1e3a5f] dark:hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-x-0.5 hover:-translate-y-0.5";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = (delay = 0) =>
    `transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className={`max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-6 w-full flex-1 flex flex-col justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className={`text-xs font-bold tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4 ${fadeIn()}`}>
            CLOUD x FULL-STACK
          </p>

          {/* Heading */}
          <h1
            className={`font-extrabold text-gray-900 dark:text-white mb-8 ${fadeIn()}`}
            style={{ transitionDelay: "150ms", fontSize: "clamp(4rem, 12vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            <span className="block">i <CyclingWord /></span>
            <span className="block text-gray-400 dark:text-gray-600 whitespace-nowrap">with you</span>
          </h1>

          {/* Body */}
          <div className={fadeIn()} style={{ transitionDelay: "300ms" }}>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Websites, apps and cloud infrastructure — plus the systems, pipelines and architecture that keep them running. One engineer, end-to-end stack.
            </p>

            <StackBar />

            {/* Audit CTA */}
            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 max-w-sm">
              <PixelBtn as="a" href="https://ask.artariq.dev" target="_blank" rel="noopener noreferrer" className={auditBtnClass}>
                <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 text-gray-900 dark:text-white">
                  <AuditDot />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white dark:text-gray-900 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors">Tell me what's broken. I'll tell you why.</div>
                  <div className="text-xs text-gray-300 dark:text-gray-500 font-medium mt-0.5">Free 2-minute audit</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto shrink-0 text-white dark:text-gray-900" />
              </PixelBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex justify-center py-4">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="w-9 h-9 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
        >
          <svg className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
