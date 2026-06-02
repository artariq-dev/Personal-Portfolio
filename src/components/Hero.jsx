import { useEffect, useState, useCallback } from "react";
import Marquee from "react-fast-marquee";
import { questions } from "./heroData";
import PixelBtn from "./PixelBtn";

const TIMER = 5;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const [countdown, setCountdown] = useState(TIMER);
  const [paused, setPaused] = useState(false);

  const typeQuestion = useCallback((text) => {
    setDisplayed("");
    setTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 22);
    return () => clearInterval(interval);
  }, []);

  const goNext = useCallback(
    (currentIdx) => {
      setTimeout(() => {
        const n = (currentIdx + 1) % questions.length;
        setIdx(n);
        setCountdown(TIMER);
        typeQuestion(questions[n].q);
      }, 300);
    },
    [typeQuestion],
  );

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      typeQuestion(questions[0].q);
    }, 300);
    return () => clearTimeout(t);
  }, [typeQuestion]);

  // auto-advance timer
  useEffect(() => {
    if (typing || paused) return;
    if (countdown <= 0) {
      goNext(idx);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, typing, paused, idx, goNext]);

  const next = () => {
    if (typing) return;
    goNext(idx);
  };
  const prev = () => {
    if (typing) return;
    setTimeout(() => {
      const n = (idx - 1 + questions.length) % questions.length;
      setIdx(n);
      setCountdown(TIMER);
      typeQuestion(questions[n].q);
    }, 300);
  };

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
                  Cloud · Fullstack Engineer
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
                I started in full-stack development and realised most tech
                problems aren't technical — they're mismatches between what a
                business needs and what was built. Before I touch anything, I
                take the time to understand your business, your constraints, and
                what actually matters. Then I fix what's broken. Experience of
                5+ years so you can focus on the business, not what's running
                it.
              </p>
            </div>
          </div>

          {/* Right — quiz */}
          <div>
            <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-4 sm:p-6 transition-all duration-200 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#bfdbfe] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-x-0.5 hover:-translate-y-0.5">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-400 dark:text-gray-500 truncate">
                  business-challenges.sh
                </span>
              </div>

              {/* Question */}
              <div className="flex items-start gap-2 mb-5 min-h-[80px]">
                <span className="text-green-600 dark:text-green-400 text-sm mt-0.5 shrink-0">
                  $
                </span>
                <p className="text-gray-800 dark:text-gray-100 text-xs sm:text-sm leading-relaxed">
                  {displayed}
                  {typing && (
                    <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex flex-col gap-2">
                  <PixelBtn
                    onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-xs font-semibold px-3 py-1.5 shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] transition-colors"
                  >
                    Explore Projects →
                  </PixelBtn>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <PixelBtn
                    onClick={prev}
                    disabled={typing}
                    className="w-8 h-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-gray-500 transition-colors disabled:opacity-30 shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[3px_3px_0px_#bfdbfe] dark:hover:shadow-[3px_3px_0px_#1e3a5f]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </PixelBtn>
                  <PixelBtn
                    onClick={() => setPaused((p) => !p)}
                    className="w-8 h-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-blue-400 dark:hover:border-gray-500 transition-colors shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[3px_3px_0px_#bfdbfe] dark:hover:shadow-[3px_3px_0px_#1e3a5f]"
                  >
                    {paused ? (
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    )}
                  </PixelBtn>
                  <PixelBtn
                    onClick={next}
                    disabled={typing}
                    className="w-8 h-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-gray-500 transition-colors disabled:opacity-30 shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[3px_3px_0px_#bfdbfe] dark:hover:shadow-[3px_3px_0px_#1e3a5f]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </PixelBtn>
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1 flex-1 overflow-hidden">
                  {questions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 transition-all duration-300 shrink-0 ${i === idx ? "w-4 bg-blue-500" : "w-1 bg-gray-300 dark:bg-gray-700"}`}
                    />
                  ))}
                </div>
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

      <div className="tech-strip w-full border-t border-b border-gray-100 dark:border-gray-800 py-3 bg-gray-50 dark:bg-gray-900">
        <Marquee direction="right" speed={90} pauseOnHover gradient={false}>
          {[
            "Architecture",
            "CI/CD Pipelines",
            "Automation",
            "Containerization",
            "Infrastructure",
            "Scalability",
            "Security Integration",
            "Infrastructure Reliability",
            "Deployment Integrity",
            "System Resilience",
            "Security Enforcement",
            "Observability",
            "GitOps",
            "Zero-Trust",
            "Supply Chain Security",
            "Cloud Native",
          ].map((t, i) => (
            <span
              key={i}
              className="text-xs text-gray-400 dark:text-gray-500 mx-6 whitespace-nowrap tracking-wider uppercase"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
