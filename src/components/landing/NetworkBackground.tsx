import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: 20, y: 30 },
  { id: 2, x: 70, y: 20 },
  { id: 3, x: 50, y: 55 },
  { id: 4, x: 85, y: 60 },
  { id: 5, x: 35, y: 80 },
  { id: 6, x: 75, y: 85 },
  { id: 7, x: 55, y: 35 },
  { id: 8, x: 25, y: 60 },
  { id: 9, x: 90, y: 35 },
];

const links = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 8 },
  { from: 2, to: 3 },
  { from: 2, to: 7 },
  { from: 2, to: 9 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 7 },
  { from: 4, to: 6 },
  { from: 4, to: 9 },
  { from: 5, to: 6 },
  { from: 5, to: 8 },
  { from: 6, to: 9 },
  { from: 7, to: 9 },
];

export const NetworkBackground = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.22]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {links.map((link, i) => {
        const a = nodes.find((n) => n.id === link.from)!;
        const b = nodes.find((n) => n.id === link.to)!;
        return (
          <motion.line
            key={`link-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="hsl(var(--primary))"
            strokeWidth="0.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0.6, 1, 0.6],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      })}

      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          r="1.4"
          fill="hsl(var(--primary))"
          filter="url(#node-glow)"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.25, 0.6, 0.25],
            scale: [0.9, 1.25, 0.9],
            x: [0, node.id % 2 === 0 ? 1.5 : -1.5, 0],
            y: [0, node.id % 3 === 0 ? -1.5 : 1.5, 0],
          }}
          transition={{
            duration: 6 + (node.id % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.id * 0.3,
          }}
          cx={node.x}
          cy={node.y}
        />
      ))}
    </svg>
  );
};
