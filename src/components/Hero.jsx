import { useEffect, useState } from "react";
import { AuditDot, ArrowUpRight } from "./Icons";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  const triggers = [
    { label: "Cloud bill keeps climbing", href: "https://ask.artariq.dev/audit/cloud" },
    { label: "Can't scale without breaking things", href: "https://ask.artariq.dev/audit/cloud" },
    { label: "Tech debt is slowing everything down", href: "https://ask.artariq.dev/audit/fullstack" },
    { label: "Our software can't handle the load", href: "https://ask.artariq.dev/audit/fullstack" },
    { label: "Leads come in, nothing converts", href: "https://ask.artariq.dev/audit/growth" },
    { label: "Competitors are moving faster", href: "https://ask.artariq.dev/audit/growth" },
    { label: "We have data but no insight", href: "https://ask.artariq.dev/audit/growth" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div
        className={`max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-6 w-full flex-1 flex flex-col justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/portfolio.jpeg`}
                alt="Abdur Rehman"
                className="w-10 h-10 border-2 border-blue-500/20 object-cover shrink-0"
              />
              <div>
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  <span className="text-base text-gray-800 dark:text-gray-100 font-bold">
                    a
                  </span>
                  bdur{" "}
                  <span className=" text-base text-gray-800 dark:text-gray-100 font-bold">
                    r
                  </span>
                  ehman{" "}
                  <span className=" text-base text-gray-800 dark:text-gray-100 font-bold">
                    tariq
                  </span>
                </h2>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 tracking-wide">
                  cloud X full-stack
                </p>
              </div>
            </div>
            <h1
              className={`text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-[1.3] mb-2 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <span className="block mb-1">your <span className="text-blue-600">VISION</span> x my <span className="text-blue-600">GUIDE</span></span>
              <span className="block">real <span className="text-blue-600">RESULTS</span></span>
            </h1>
            <div
              className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: "450ms" }}
            >
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Nearly 6 years shipping production systems for 13+ international
                clients across 5+ teams worldwide. After owning multiple
                projects from start to finish, I realised most tech problems
                aren't technical — they're mismatches between what a business
                needs and what was built. Before I touch anything, I take the
                time to understand your business, your constraints, and what
                actually matters. Then I fix what's broken.
                <br /><br />
                <span className="font-bold text-gray-900 dark:text-white">You focus on the goal. </span><span className="font-bold text-blue-600">I'll align the systems.</span>
              </p>
            </div>
          </div>

          {/* Right — assessment CTA */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-200 shadow-[4px_4px_0px_#1e3a5f] dark:shadow-[4px_4px_0px_#bfdbfe]">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-blue-500" />

              <div className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 dark:text-blue-500 mb-1">
                      Free Audit
                    </p>
                    <h3 className="text-base font-bold text-white dark:text-gray-900 leading-snug">
                      What's your situation?
                    </h3>
                  </div>
                  <span className="w-9 h-9 bg-gray-800 dark:bg-gray-100 flex items-center justify-center shrink-0 text-white dark:text-gray-900">
                    <AuditDot />
                  </span>
                </div>

                {/* Triggers */}
                <div className="flex flex-col gap-2 mb-5">
                  {triggers.map((t) => (
                    <a
                      key={t.label}
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/trigger flex items-center justify-between px-3 py-2.5 bg-gray-800 dark:bg-gray-50 border border-gray-700 dark:border-gray-200 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-gray-700 dark:hover:bg-blue-50 transition-all duration-150"
                    >
                      <span className="text-xs font-medium text-gray-300 dark:text-gray-700 group-hover/trigger:text-white dark:group-hover/trigger:text-blue-600 transition-colors">
                        {t.label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-gray-500 dark:text-gray-400 group-hover/trigger:text-blue-400 dark:group-hover/trigger:text-blue-500 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>

                {/* CTA button */}
                <a
                  href="https://ask.artariq.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta flex items-center justify-between w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-150"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Not sure? Get a full audit
                  </span>
                  <span className="text-white transition-transform duration-200 group-hover/cta:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex justify-center py-4">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="w-9 h-9 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
        >
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 animate-bounce"
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
        </button>
      </div>
    </section>
  );
};

export default Hero;
