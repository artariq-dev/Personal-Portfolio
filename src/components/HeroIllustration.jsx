import { useEffect, useRef } from "react";

// Node positions in a 400x500 viewBox
const NODES = [
  { id: "browser",  x: 200, y: 40,  label: "Browser",  sub: "client",    color: "#3b82f6" },
  { id: "cdn",      x: 340, y: 130, label: "CDN",       sub: "edge",      color: "#8b5cf6" },
  { id: "api",      x: 200, y: 200, label: "API",       sub: "gateway",   color: "#3b82f6" },
  { id: "auth",     x: 60,  y: 200, label: "Auth",      sub: "service",   color: "#10b981" },
  { id: "db",       x: 100, y: 330, label: "DB",        sub: "postgres",  color: "#f59e0b" },
  { id: "cache",    x: 260, y: 310, label: "Cache",     sub: "redis",     color: "#ef4444" },
  { id: "queue",    x: 360, y: 230, label: "Queue",     sub: "rabbitmq",  color: "#f97316" },
  { id: "worker",   x: 340, y: 390, label: "Worker",    sub: "celery",    color: "#6366f1" },
  { id: "storage",  x: 120, y: 440, label: "Storage",   sub: "s3",        color: "#14b8a6" },
];

const EDGES = [
  ["browser", "cdn"],
  ["browser", "api"],
  ["cdn",     "api"],
  ["api",     "auth"],
  ["api",     "cache"],
  ["api",     "queue"],
  ["api",     "db"],
  ["queue",   "worker"],
  ["worker",  "db"],
  ["worker",  "storage"],
  ["db",      "storage"],
  ["cache",   "worker"],
];

// Look up node by id
const n = (id) => NODES.find((node) => node.id === id);

// Pre-compute random packet pause lengths once so they don't change on re-render
const PACKET_DELAYS = EDGES.map(() => Math.random() * 4 + 2);

// ── CSS keyframes, generated once at module load ──────────────────────────────
// All loops animate transform (translate/scale) + opacity → compositor thread,
// near-zero main-thread cost. One-shot draw-in uses `forwards` fill.

function buildAnimationCSS() {
  const parts = [];

  // Edge draw-in (dash-draw)
  EDGES.forEach(([from, to], i) => {
    parts.push(`
      @keyframes edge-in-${i} {
        from { stroke-dashoffset: 1; }
        to   { stroke-dashoffset: 0; }
      }
      .edge-${i} {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: edge-in-${i} 0.6s ease-out ${(0.2 + i * 0.06).toFixed(2)}s forwards;
      }`);
  });

  // Data packets — travel, then hold invisibly for the repeat delay
  EDGES.forEach(([from, to], i) => {
    const a = n(from);
    const b = n(to);
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const travel = 1.4;
    const total = travel + PACKET_DELAYS[i];
    const endPct = (travel / total) * 100;
    const delay = 1.5 + i * 0.3;
    parts.push(`
      @keyframes pkt-${i} {
        0%   { transform: translate(0, 0); opacity: 0; }
        10%  { opacity: 1; }
        55%  { opacity: 1; }
        ${endPct.toFixed(2)}% { transform: translate(${dx}px, ${dy}px); opacity: 0; }
        100% { transform: translate(${dx}px, ${dy}px); opacity: 0; }
      }
      .pkt-${i} {
        animation: pkt-${i} ${total.toFixed(2)}s ease-in-out ${delay.toFixed(2)}s infinite;
      }`);
  });

  parts.push(`
    @keyframes glow-pulse {
      0%, 100% { transform: scale(1);    opacity: 0.15; }
      50%      { transform: scale(1.25); opacity: 0.05; }
    }
    .glow { animation: glow-pulse 3s ease-in-out infinite; }

    @keyframes node-in {
      from { opacity: 0; transform: scale(0.6); }
      to   { opacity: 1; transform: scale(1); }
    }
    .node-in { animation: node-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .fade-in-500 {
      opacity: 0;
      animation: fade-in 0.5s ease-out forwards;
    }

    @keyframes svg-fade {
      from { opacity: 0; }
      to   { opacity: 0.8; }
    }
    .svg-fade {
      opacity: 0;
      animation: svg-fade 1s ease-out 0.3s forwards;
    }

    /* Pause infinite loops when the illustration is off-screen */
    .is-paused [class*="pkt-"],
    .is-paused .glow {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .svg-fade     { opacity: 0.8; animation: none; }
      [class*="edge-"] { stroke-dashoffset: 0; animation: none !important; }
      .node-in      { animation: none !important; }
      .fade-in-500  { opacity: 1; animation: none !important; }
      .glow         { animation: none !important; opacity: 0.15; }
      [class*="pkt-"] { animation: none !important; opacity: 0; }
    }`);

  return parts.join("\n");
}

const ANIMATION_CSS = buildAnimationCSS();

// ── SVG elements ──────────────────────────────────────────────────────────────

// Animated edge line (drawn in once)
const Edge = ({ from, to, i }) => {
  const a = n(from);
  const b = n(to);
  return (
    <line
      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
      stroke="rgba(100,116,139,0.4)"
      strokeWidth="1"
      pathLength={1}
      className={`edge-${i}`}
    />
  );
};

// Data packet travelling along an edge (CSS transform → compositor)
const Packet = ({ from, to, i, color }) => {
  const a = n(from);
  return (
    <circle r="2.5" fill={color} cx={a.x} cy={a.y} className={`pkt-${i}`} />
  );
};

// Node box
const Node = ({ id, x, y, label, sub, color, index }) => (
  <g
    className={`node-in node-${index}`}
    style={{ transformOrigin: `${x}px ${y}px` }}
  >
    {/* Outer glow ring — pulses idle */}
    <circle
      cx={x} cy={y} r="18"
      fill="none"
      stroke={color}
      strokeWidth="1"
      className="glow"
      style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${index + 1}s` }}
    />

    {/* Node circle */}
    <circle cx={x} cy={y} r="12" fill="white" className="dark:fill-[#0f172a]" stroke={color} strokeWidth="1.5" />

    {/* Label above */}
    <text
      x={x} y={y - 18}
      textAnchor="middle"
      fill="currentColor"
      fontSize="8"
      fontFamily="ui-monospace, monospace"
      fontWeight="700"
      letterSpacing="0.05em"
      className="fill-gray-800 dark:fill-slate-200"
    >
      {label}
    </text>

    {/* Sub label below */}
    <text
      x={x} y={y + 26}
      textAnchor="middle"
      fontSize="6"
      fontFamily="ui-monospace, monospace"
      letterSpacing="0.08em"
      className="fill-gray-500 dark:fill-slate-500"
    >
      {sub}
    </text>
  </g>
);

// Corner bracket decoration
const Corner = ({ x, y, rotate, delay }) => (
  <g
    className="fade-in-500"
    style={{ animationDelay: delay, transform: `rotate(${rotate}deg)`, transformOrigin: `${x}px ${y}px` }}
  >
    <path
      d={`M ${x + 10} ${y} L ${x} ${y} L ${x} ${y + 10}`}
      fill="none"
      stroke="rgba(59,130,246,0.6)"
      strokeWidth="1.5"
    />
  </g>
);

const IllustrationSVG = ({ className = "" }) => {
  const svgRef = useRef(null);

  // Pause the infinite loops when the hero scrolls off-screen
  useEffect(() => {
    const el = svgRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      el.classList.toggle("is-paused", !entries[0].isIntersecting);
    }, { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{ANIMATION_CSS}</style>
      <svg
        ref={svgRef}
        viewBox="0 0 400 500"
        className={`w-[340px] xl:w-[400px] svg-fade ${className}`}
        role="img"
        aria-label="System architecture illustration"
      >
        {/* Edges — draw in first */}
        {EDGES.map(([from, to], i) => (
          <Edge key={`${from}-${to}`} from={from} to={to} i={i} />
        ))}

        {/* Data packets travelling along edges */}
        {EDGES.map(([from, to], i) => (
          <Packet key={`pkt-${from}-${to}`} from={from} to={to} i={i} color={n(from).color} />
        ))}

        {/* Nodes — appear after edges */}
        {NODES.map((node, i) => (
          <Node key={node.id} {...node} index={i} />
        ))}

        {/* Corner brackets */}
        <Corner x={10}  y={10}  rotate={0}   delay="1.2s" />
        <Corner x={390} y={10}  rotate={90}  delay="1.3s" />
        <Corner x={10}  y={490} rotate={270} delay="1.4s" />
        <Corner x={390} y={490} rotate={180} delay="1.5s" />

        {/* Coordinate labels */}
        <text
          x="14" y="498"
          fill="rgba(59,130,246,0.6)"
          fontSize="6"
          fontFamily="ui-monospace, monospace"
          className="fade-in-500"
          style={{ animationDelay: "1.6s" }}
        >
          SYS.ARCH v2.4
        </text>
        <text
          x="310" y="498"
          fill="rgba(59,130,246,0.6)"
          fontSize="6"
          fontFamily="ui-monospace, monospace"
          className="fade-in-500"
          style={{ animationDelay: "1.7s" }}
        >
          PROD · LIVE
        </text>
      </svg>
    </>
  );
};

const HeroIllustration = () => (
  <div className="absolute inset-0 pointer-events-none select-none hidden lg:flex items-center justify-end pr-8 xl:pr-16">
    <IllustrationSVG />
  </div>
);

export default HeroIllustration;
