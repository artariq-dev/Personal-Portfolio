import { useEffect, useState } from "react";
import { AuditDot, ArrowUpRight } from "./Icons";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  const triggers = [
    { label: "Revenue's flat", href: "https://ask.artariq.dev/audit/fullstack" },
    { label: "Leads slip through the cracks", href: "https://ask.artariq.dev/audit/crm" },
    { label: "Invisible to new customers", href: "https://ask.artariq.dev/audit/growth" },
    { label: "Outgrowing our tools", href: "https://ask.artariq.dev/audit/growth" },
    { label: "Cloud bill too high", href: "https://ask.artariq.dev/audit/cloud" },
    { label: "Worried about losing data", href: "https://ask.artariq.dev/audit/backend" },
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
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  FullStack Developer · Cloud Engineer
                </p>
              </div>
            </div>
            <h1
              className={`text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-[1.3] mb-2 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <span className="block mb-1">First understands your business,</span>
              <span className="block mb-1 text-blue-600">then builds the solution.</span>
              <span className="block">That&apos;s how I work.</span>
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
          <div className="flex flex-col items-center md:items-end gap-5">
            <a
              href="https://ask.artariq.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 shadow-[3px_3px_0px_#374151] dark:shadow-[3px_3px_0px_#e5e7eb] hover:shadow-[5px_5px_0px_#1e3a5f] dark:hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Accent top bar — thickens on hover */}
              <div className="h-1.5 group-hover:h-2.5 w-full bg-blue-500 transition-all duration-200" />

              {/* Arrow — top right */}
              <span className="absolute top-5 right-5 text-3xl text-white dark:text-gray-900 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                →
              </span>

              <div className="flex flex-col flex-1 p-4 sm:p-5">
                {/* Dot-art icon */}
                <div className="mb-3">
                  <span className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 text-gray-900 dark:text-white">
                    <AuditDot />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white dark:text-gray-900 leading-snug mb-2">
                  Not sure what needs fixing?
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {[
                    "Cloud",
                    "Fullstack",
                    "Frontend",
                    "Backend",
                    "CRM",
                    "Delivery",
                    "Growth",
                  ].map((label) => (
                    <span
                      key={label}
                      className="text-[9px] px-1 py-0.5 bg-gray-800 text-gray-300 dark:bg-gray-100 dark:text-gray-500"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-blue-500 text-white">
                    Free Audit
                  </span>
                </div>
              </div>
            </a>

            {/* Triggers */}
            <div className="w-full bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 p-4 sm:p-5">
              <div className="text-sm font-bold text-white dark:text-gray-900 leading-snug mb-2">
                Or just pick a trigger
              </div>
              <div className="flex flex-wrap gap-1.5">
                {triggers.map((t) => (
                  <a
                    key={t.label}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-800 text-gray-300 dark:bg-gray-100 dark:text-gray-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                  >
                    {t.label}
                    <ArrowUpRight className="w-2 h-2 ml-1" />
                  </a>
                ))}
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
