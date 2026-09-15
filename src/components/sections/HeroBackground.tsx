const sparkles = [
  { pos: "top-12 left-[11%]", size: "text-3xl", color: "#7C3AED", glow: "rgba(124,58,237,0.7)", glyph: "✦", pulse: true },
  { pos: "top-24 left-[18%]", size: "text-lg", color: "#4F46E5", glow: "rgba(79,70,229,0.6)", glyph: "✧" },
  { pos: "top-44 left-[7%]", size: "text-2xl", color: "#EC4899", glow: "rgba(236,72,153,0.7)", glyph: "✧" },
  { pos: "top-16 left-[25%]", size: "text-base", color: "#F97316", glow: "rgba(249,115,22,0.7)", glyph: "★" },
  { pos: "top-10 right-[13%]", size: "text-4xl", color: "#EC4899", glow: "rgba(236,72,153,0.8)", glyph: "✦", pulse: true },
  { pos: "top-32 right-[8%]", size: "text-xl", color: "#7C3AED", glow: "rgba(124,58,237,0.7)", glyph: "✧" },
  { pos: "top-52 right-[18%]", size: "text-2xl", color: "#F97316", glow: "rgba(245,158,11,0.8)", glyph: "★" },
  { pos: "top-24 right-[28%]", size: "text-sm", color: "#4F46E5", glow: "rgba(79,70,229,0.6)", glyph: "✧" },
  { pos: "bottom-24 left-[13%]", size: "text-2xl", color: "#F97316", glow: "rgba(245,158,11,0.7)", glyph: "✦" },
  { pos: "bottom-40 left-[8%]", size: "text-lg", color: "#7C3AED", glow: "rgba(124,58,237,0.6)", glyph: "✧" },
  { pos: "bottom-16 left-[22%]", size: "text-sm", color: "#EC4899", glow: "rgba(236,72,153,0.6)", glyph: "★" },
  { pos: "bottom-28 right-[11%]", size: "text-2xl", color: "#EC4899", glow: "rgba(236,72,153,0.7)", glyph: "✦" },
  { pos: "bottom-20 right-[24%]", size: "text-lg", color: "#4F46E5", glow: "rgba(79,70,229,0.6)", glyph: "✧" },
  { pos: "bottom-12 right-[17%]", size: "text-sm", color: "#F97316", glow: "rgba(245,158,11,0.6)", glyph: "✧" },
  { pos: "top-1/2 left-[4%]", size: "text-lg", color: "#F97316", glow: "rgba(245,158,11,0.7)", glyph: "✧" },
  { pos: "top-2/3 right-[5%]", size: "text-3xl", color: "#EC4899", glow: "rgba(236,72,153,0.7)", glyph: "✦", pulse: true },
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(124, 58, 237, 0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 45%, black 30%, transparent 80%)",
        }}
      />
      {/* Fine graph grid */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(79, 70, 229, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(236, 72, 153, 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 65% 60% at 50% 40%, black 25%, transparent 75%)",
        }}
      />

      {/* Ambient glow blobs — blue → purple → magenta → peach, echoing the logo gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79,70,229,0.28) 0%, rgba(124,58,237,0.28) 30%, rgba(236,72,153,0.22) 60%, rgba(249,115,22,0.16) 82%, transparent 92%)",
          filter: "blur(55px)",
        }}
      />
      <div
        className="absolute -top-12 -left-16 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.38) 0%, rgba(124,58,237,0.22) 50%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-4 -right-20 w-[540px] h-[540px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.32) 0%, rgba(249,115,22,0.22) 55%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[800px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(236,72,153,0.22) 0%, rgba(124,58,237,0.2) 45%, rgba(79,70,229,0.16) 65%, rgba(245,158,11,0.16) 85%, transparent 95%)",
          filter: "blur(50px)",
        }}
      />

      {/* Orbit rings + streak, echoing the logo's swoosh mark */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1240px] h-[720px] max-w-none"
        viewBox="0 0 1240 720"
        fill="none"
      >
        <defs>
          <linearGradient id="cosmicGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#EC4899" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="cosmicGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="streakGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#EC4899" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
          </linearGradient>
          <filter id="strongGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse
          cx="620"
          cy="360"
          rx="560"
          ry="280"
          stroke="url(#cosmicGrad1)"
          strokeWidth="2"
          strokeDasharray="10 14"
          opacity="0.75"
          transform="rotate(-8 620 360)"
          className="motion-safe:animate-spin-slow"
          style={{ transformOrigin: "620px 360px" }}
        />
        <ellipse
          cx="620"
          cy="360"
          rx="460"
          ry="225"
          stroke="url(#cosmicGrad2)"
          strokeWidth="1.8"
          strokeDasharray="6 10"
          opacity="0.65"
          transform="rotate(11 620 360)"
        />
        <ellipse
          cx="620"
          cy="360"
          rx="350"
          ry="165"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          opacity="0.55"
          transform="rotate(-16 620 360)"
        />

        <path
          d="M140,460 C260,220 520,170 800,210 C960,235 1100,340 1160,460"
          stroke="url(#streakGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
          filter="url(#strongGlow)"
        />
        <path
          d="M200,200 C390,110 820,100 1040,270"
          stroke="url(#cosmicGrad1)"
          strokeWidth="1.8"
          strokeDasharray="12 16"
          strokeLinecap="round"
          opacity="0.7"
        />

        <circle cx="220" cy="310" r="5" fill="#4F46E5" filter="url(#strongGlow)" />
        <circle cx="220" cy="310" r="2.5" fill="#FFFFFF" />
        <circle cx="1000" cy="235" r="6" fill="#EC4899" filter="url(#strongGlow)" />
        <circle cx="1000" cy="235" r="3" fill="#FFFFFF" />
        <circle cx="810" cy="520" r="5" fill="#F97316" filter="url(#strongGlow)" />
        <circle cx="810" cy="520" r="2.5" fill="#FFFFFF" />
        <circle cx="420" cy="145" r="4" fill="#7C3AED" filter="url(#strongGlow)" />
        <circle cx="420" cy="145" r="2" fill="#FFFFFF" />
      </svg>

      {sparkles.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.size} select-none ${s.pulse ? "motion-safe:animate-pulse" : ""}`}
          style={{ color: s.color, filter: `drop-shadow(0 0 10px ${s.glow})` }}
        >
          {s.glyph}
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent" />
    </div>
  );
}
