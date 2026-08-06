import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import PixelBtn from './PixelBtn';
import { Email, LinkedIn, GitHub, Download } from './Icons';

const METRICS = [
  { value: 23, suffix: "+", label: "Projects" },
  { value: 13, suffix: "+", label: "Clients" },
  { value: 5,  suffix: "+", label: "Countries" },
];

const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const contacts = [
  { href: "mailto:artariq.dev.1@gmail.com", label: "Email", value: "artariq.dev.1@gmail.com", icon: Email, bg: "bg-blue-600" },
  { href: "https://www.linkedin.com/in/artariq-dev/", label: "LinkedIn", value: "artariq-dev", icon: LinkedIn, bg: "bg-[#0077B5]" },
  { href: "https://github.com/artariq-dev", label: "GitHub", value: "artariq-dev", icon: GitHub, bg: "bg-gray-800" },
];

const btnClass = "flex items-center gap-4 p-4 bg-gray-900 border border-gray-700 hover:border-blue-500 transition-all group shadow-[3px_3px_0px_#374151] hover:shadow-[5px_5px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5";

const Footer = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('footer-name-visible');
          observer.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="bg-gray-950 overflow-hidden relative">

      {/* ── Dot grid ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Y-axis line + ticks ── */}
      <div aria-hidden className="absolute top-0 bottom-0 left-6 sm:left-10 flex flex-col justify-between pointer-events-none">
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-white/10 relative">
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 flex items-center gap-1"
              style={{ top: `${pct}%` }}
            >
              <div className="w-1.5 h-px bg-white/20" />
              <span className="text-[7px] text-white/15 tabular-nums">{pct}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Top row ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-4">
        <a
          href="https://ask.artariq.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[8px] sm:text-[9px] tracking-widest text-gray-500 hover:text-white transition-colors duration-200"
        >
          ask.artariq.dev ↗
        </a>
      </div>

      {/* ── Contact block ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — heading + tagline */}
          <div>
            <h2 className="text-3xl font-bold text-white leading-tight mb-4">Let's talk.</h2>
            {/* Profile */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/portfolio.jpeg"
                alt="Abdur Rehman"
                className="w-16 h-16 border-2 border-blue-500/20 object-cover shrink-0"
              />
              <div>
                <h3 className="text-xs font-bold text-gray-500">
                  <span className="text-base text-white font-bold">a</span>bdur{" "}
                  <span className="text-base text-white font-bold">r</span>ehman{" "}
                  <span className="text-base text-white font-bold">tariq</span>
                </h3>
                <p className="text-xs font-semibold text-gray-400 tracking-wide">6 yrs · cloud x full-stack</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I'm Abdur Rehman, a cloud engineer and full-stack developer who builds digital products end to end. From web apps and APIs to cloud infrastructure and CI/CD pipelines, I handle the full stack — so everything ships production-ready and stays running.
            </p>
            <p className="text-sm font-semibold text-white mb-6">
              Based online, working with clients worldwide.
            </p>
            <div className="flex gap-6">
              {METRICS.map((m, i) => (
                <>
                  {i > 0 && <div key={`div-${i}`} className="w-px bg-gray-800" />}
                  <div key={m.label}>
                    <p className="text-2xl font-extrabold text-white">
                      <CountUp value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">{m.label}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Right — buttons */}
          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <PixelBtn key={c.label} as="a" href={c.href} target="_blank" rel="noopener noreferrer" className={btnClass}>
                <div className={`w-8 h-8 rounded ${c.bg} flex items-center justify-center shrink-0 text-white`}>
                  <c.icon />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium mb-0.5">{c.label}</div>
                  <div className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{c.value}</div>
                </div>
              </PixelBtn>
            ))}
            <PixelBtn
              as="a"
              href={`${process.env.PUBLIC_URL}/dev-artariq-resume.pdf`}
              download="dev-artariq-resume.pdf"
              className="flex items-center justify-center gap-2 w-full p-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8] transition-colors"
            >
              <Download size="md" />
              Download Resume
            </PixelBtn>
          </div>
        </div>
      </div>

      {/* ── Big name ── */}
      <div
        ref={nameRef}
        className="footer-name relative z-10 px-4 pb-0 select-none"
      >
        <span
          className="block w-full text-transparent font-extrabold leading-none cursor-default hover:text-white transition-colors duration-500"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.18)",
            fontSize: "clamp(4rem, 22vw, 18rem)",
            letterSpacing: "-0.04em",
          }}
        >
          artariq
        </span>
      </div>

      {/* ── Baseline (x-axis) ── */}
      <div aria-hidden className="relative z-10 mx-4 h-px bg-white/10" />

      {/* ── Bottom row ── */}
      <div className="relative z-10 flex items-center justify-end px-6 py-3">
        <span className="text-[9px] text-white/10 font-mono tracking-widest">x →</span>
      </div>

    </footer>
  );
};

export default Footer;
