import { motion } from "framer-motion";
import CyclingWord from "./CyclingWord";
import StackBar from "./StackBar";
import PixelBtn from "./PixelBtn";
import { AuditDot, ArrowUpRight } from "./Icons";
import HeroIllustration from "./HeroIllustration";

const auditBtnClass = "flex items-center gap-4 p-5 bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 hover:border-blue-400 dark:hover:border-blue-300 transition-all group shadow-[3px_3px_0px_#374151] dark:shadow-[3px_3px_0px_#e5e7eb] hover:shadow-[5px_5px_0px_#1e3a5f] dark:hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-x-0.5 hover:-translate-y-0.5";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-950 dark:to-gray-950"
  >
    <HeroIllustration />

    {/* Dot grid overlay */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none dark:hidden"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none hidden dark:block"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.25) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
    />

    <motion.div
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-6 w-full flex-1 flex flex-col justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-2xl">

        {/* Eyebrow */}
        <motion.p variants={item} className="text-xs font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4 inline-flex px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
          CLOUD x FULL-STACK
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-extrabold text-gray-900 dark:text-white mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 1.05 }}
        >
          <span className="block"><span className="text-blue-600">i</span> <CyclingWord /></span>
          <span className="block text-gray-900 dark:text-white whitespace-nowrap">with you</span>
        </motion.h1>

        {/* Bio */}
        <motion.p variants={item} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Websites, apps and cloud infrastructure — plus the systems, pipelines and architecture that keep them running. One engineer, end-to-end stack.
        </motion.p>

        {/* Stack bar */}
        <motion.div variants={item}>
          <StackBar />
        </motion.div>

        {/* Audit CTA */}
        <motion.div variants={item} className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 max-w-sm">
          <PixelBtn as="a" href="https://ask.artariq.dev" target="_blank" rel="noopener noreferrer" className={auditBtnClass}>
            <div className="w-10 h-10 rounded bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0 text-gray-900 dark:text-white">
              <AuditDot />
            </div>
            <div>
              <div className="text-sm font-semibold text-white dark:text-gray-900 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors">Let's figure out your system's cracks.</div>
              <div className="text-xs text-gray-300 dark:text-gray-500 font-medium mt-0.5">A quick audit · Instant report</div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 ml-auto shrink-0 text-white dark:text-gray-900" />
          </PixelBtn>
        </motion.div>

      </div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      className="hidden sm:flex justify-center py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="w-9 h-9 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
      >
        <svg className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </motion.div>
  </section>
);

export default Hero;
