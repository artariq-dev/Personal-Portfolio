import { motion } from "framer-motion";

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

// Animated edge line
const Edge = ({ from, to, delay }) => {
  const a = n(from);
  const b = n(to);
  return (
    <motion.line
      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
      stroke="rgba(100,116,139,0.4)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    />
  );
};

// Pre-compute random delays once so they don't change on re-render
const PACKET_DELAYS = EDGES.map(() => Math.random() * 4 + 2);

// Animated data packet travelling along an edge
const Packet = ({ from, to, delay, color, repeatDelay }) => {
  const a = n(from);
  const b = n(to);
  return (
    <motion.circle
      r="2.5"
      fill={color}
      initial={{ x: a.x, y: a.y, opacity: 0 }}
      animate={{
        x: [a.x, b.x, b.x],
        y: [a.y, b.y, b.y],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.4,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: "easeInOut",
      }}
    />
  );
};

// Node box
const Node = ({ id, x, y, label, sub, color, delay }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ originX: `${x}px`, originY: `${y}px` }}
  >
    {/* Outer glow ring — pulses idle */}
    <motion.circle
      cx={x} cy={y} r="18"
      fill="none"
      stroke={color}
      strokeWidth="1"
      opacity={0.15}
      animate={{ r: [18, 22, 18], opacity: [0.15, 0.05, 0.15] }}
      transition={{ duration: 3, repeat: Infinity, delay: delay + 1, ease: "easeInOut" }}
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
  </motion.g>
);

// Corner bracket decoration
const Corner = ({ x, y, rotate, delay }) => (
  <motion.g
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{ transform: `rotate(${rotate}deg)`, transformOrigin: `${x}px ${y}px` }}
  >
    <path
      d={`M ${x + 10} ${y} L ${x} ${y} L ${x} ${y + 10}`}
      fill="none"
      stroke="rgba(59,130,246,0.6)"
      strokeWidth="1.5"
    />
  </motion.g>
);

const IllustrationSVG = ({ className = "" }) => (
  <motion.svg
    viewBox="0 0 400 500"
    className={`w-[340px] xl:w-[400px] opacity-80 ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {/* Edges — draw in first */}
    {EDGES.map(([from, to], i) => (
      <Edge key={`${from}-${to}`} from={from} to={to} delay={0.2 + i * 0.06} />
    ))}

    {/* Data packets travelling along edges */}
    {EDGES.map(([from, to], i) => (
      <Packet
        key={`pkt-${from}-${to}`}
        from={from} to={to}
        delay={1.5 + i * 0.3}
        color={n(from).color}
        repeatDelay={PACKET_DELAYS[i]}
      />
    ))}

    {/* Nodes — appear after edges */}
    {NODES.map((node, i) => (
      <Node key={node.id} {...node} delay={0.5 + i * 0.08} />
    ))}

    {/* Corner brackets */}
    <Corner x={10}  y={10}  rotate={0}   delay={1.2} />
    <Corner x={390} y={10}  rotate={90}  delay={1.3} />
    <Corner x={10}  y={490} rotate={270} delay={1.4} />
    <Corner x={390} y={490} rotate={180} delay={1.5} />

    {/* Coordinate labels */}
    <motion.text
      x="14" y="498"
      fill="rgba(59,130,246,0.6)"
      fontSize="6"
      fontFamily="ui-monospace, monospace"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
    >
      SYS.ARCH v2.4
    </motion.text>
    <motion.text
      x="310" y="498"
      fill="rgba(59,130,246,0.6)"
      fontSize="6"
      fontFamily="ui-monospace, monospace"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7 }}
    >
      PROD · LIVE
    </motion.text>
  </motion.svg>
);

const HeroIllustration = () => (
  <div className="absolute inset-0 pointer-events-none select-none hidden lg:flex items-center justify-end pr-8 xl:pr-16">
    <IllustrationSVG />
  </div>
);

export default HeroIllustration;
