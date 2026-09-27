import type { ReactNode } from "react";

// Shared fills so cards and neutral shapes follow light/dark theme.
const CARD = "fill-white dark:fill-slate-800";
const CARD_STROKE = "stroke-slate-200 dark:stroke-slate-700";
const LINE = "fill-slate-200 dark:fill-slate-700";

function Frame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 480 400" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-brand`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="60%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={`${id}-horn`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      <circle cx="240" cy="200" r="150" fill="#7C3AED" fillOpacity="0.07" />
      <circle cx="400" cy="80" r="46" fill="#EC4899" fillOpacity="0.08" />
      <circle cx="70" cy="330" r="40" fill="#F59E0B" fillOpacity="0.1" />
      {children}
    </svg>
  );
}

function Sparkle({ x, y, size = 1, fill = "#F59E0B" }: { x: number; y: number; size?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${size})`}
      d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3Z"
      fill={fill}
    />
  );
}

function Heart({ x, y, size = 1, fill = "#EC4899" }: { x: number; y: number; size?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${size})`}
      d="M0 6 C-12 -2 -12 -12 -5 -12 C-2 -12 0 -9 0 -8 C0 -9 2 -12 5 -12 C12 -12 12 -2 0 6Z"
      fill={fill}
    />
  );
}

/* 01 — Strategy & Planning: roadmap board with milestones and an idea bulb */
function Strategy() {
  const id = "svc1";
  return (
    <Frame id={id}>
      <rect x="90" y="80" width="300" height="220" rx="22" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="116" cy="104" r="5" fill="#F87171" />
      <circle cx="132" cy="104" r="5" fill="#FBBF24" />
      <circle cx="148" cy="104" r="5" fill="#34D399" />
      <path
        d="M130 262 C170 200 220 290 262 214 S320 150 340 142"
        stroke={`url(#${id}-brand)`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="10 9"
      />
      <circle cx="130" cy="262" r="12" fill="#7C3AED" />
      <circle cx="130" cy="262" r="5" className={CARD} />
      <circle cx="262" cy="214" r="12" fill="#EC4899" />
      <circle cx="262" cy="214" r="5" className={CARD} />
      <path d="M340 146 L340 96" stroke="#4C1D95" strokeWidth="4" strokeLinecap="round" />
      <path d="M340 96 L376 108 L340 122 Z" fill="#F59E0B" />
      <rect x="180" y="140" width="60" height="8" rx="4" className={LINE} />
      <rect x="180" y="156" width="40" height="8" rx="4" className={LINE} />
      {/* Idea bulb */}
      <circle cx="78" cy="110" r="44" fill="#FCD34D" fillOpacity="0.25" />
      <circle cx="78" cy="104" r="26" fill="#FBBF24" />
      <rect x="66" y="126" width="24" height="16" rx="5" fill="#4C1D95" />
      <path d="M70 100 Q78 88 86 100" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {/* Checklist chip */}
      <rect x="320" y="270" width="124" height="54" rx="18" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="344" cy="297" r="11" fill="#7C3AED" />
      <path d="M339 297 l3.5 3.5 l6 -7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="364" y="286" width="62" height="7" rx="3.5" fill="#7C3AED" fillOpacity="0.35" />
      <rect x="364" y="300" width="40" height="7" rx="3.5" fill="#7C3AED" fillOpacity="0.2" />
      <Sparkle x={420} y={60} />
      <Sparkle x={60} y={300} size={0.7} fill="#EC4899" />
    </Frame>
  );
}

/* 02 — Content & Creative: short-form video on a phone, clapperboard, reactions */
function Content() {
  const id = "svc2";
  return (
    <Frame id={id}>
      <rect x="170" y="44" width="144" height="292" rx="28" fill="#1E1B4B" />
      <rect x="181" y="58" width="122" height="264" rx="18" fill={`url(#${id}-brand)`} />
      <circle cx="242" cy="178" r="28" fill="#fff" fillOpacity="0.92" />
      <path d="M234 164 L256 178 L234 192 Z" fill="#7C3AED" />
      <rect x="194" y="296" width="96" height="5" rx="2.5" fill="#fff" fillOpacity="0.35" />
      <rect x="194" y="296" width="58" height="5" rx="2.5" fill="#fff" />
      <rect x="194" y="266" width="64" height="7" rx="3.5" fill="#fff" fillOpacity="0.85" />
      <rect x="194" y="280" width="42" height="6" rx="3" fill="#fff" fillOpacity="0.55" />
      <Heart x={286} y={222} size={0.9} fill="#fff" />
      <circle cx="286" cy="246" r="7" fill="#fff" fillOpacity="0.85" />
      {/* Clapperboard */}
      <g transform="rotate(-8 110 270)">
        <rect x="52" y="244" width="110" height="74" rx="12" fill="#4C1D95" />
        <rect x="52" y="222" width="110" height="24" rx="6" fill="#F59E0B" />
        <path d="M66 222 L78 246 M92 222 L104 246 M118 222 L130 246 M144 222 L156 246" stroke="#1E1B4B" strokeWidth="8" />
        <rect x="68" y="266" width="60" height="7" rx="3.5" fill="#fff" fillOpacity="0.5" />
        <rect x="68" y="282" width="40" height="7" rx="3.5" fill="#fff" fillOpacity="0.3" />
      </g>
      <Heart x={372} y={128} size={2} />
      <Heart x={410} y={188} size={1.3} fill="#F472B6" />
      <Heart x={360} y={226} size={1} fill="#A78BFA" />
      {/* Views chip */}
      <rect x="326" y="270" width="118" height="48" rx="16" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="350" cy="294" r="11" fill="#EC4899" />
      <path d="M346 288 L356 294 L346 300 Z" fill="#fff" />
      <rect x="370" y="284" width="56" height="7" rx="3.5" fill="#EC4899" fillOpacity="0.4" />
      <rect x="370" y="298" width="34" height="7" rx="3.5" fill="#EC4899" fillOpacity="0.2" />
      <Sparkle x={120} y={90} />
      <Sparkle x={440} y={70} size={0.7} fill="#7C3AED" />
    </Frame>
  );
}

/* 03 — Performance Ads: ad banner, click cursor, ROAS bars, coins */
function Ads() {
  const id = "svc3";
  return (
    <Frame id={id}>
      <rect x="50" y="64" width="310" height="220" rx="22" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="76" cy="88" r="5" fill="#F87171" />
      <circle cx="92" cy="88" r="5" fill="#FBBF24" />
      <circle cx="108" cy="88" r="5" fill="#34D399" />
      <rect x="130" y="82" width="200" height="12" rx="6" className={LINE} />
      <rect x="72" y="110" width="266" height="116" rx="16" fill={`url(#${id}-brand)`} />
      <rect x="92" y="130" width="110" height="12" rx="6" fill="#fff" />
      <rect x="92" y="150" width="76" height="9" rx="4.5" fill="#fff" fillOpacity="0.65" />
      <rect x="92" y="180" width="84" height="28" rx="14" fill="#fff" />
      <rect x="104" y="190" width="60" height="8" rx="4" fill="#7C3AED" />
      <circle cx="286" cy="168" r="34" fill="#fff" fillOpacity="0.18" />
      <rect x="72" y="240" width="140" height="9" rx="4.5" className={LINE} />
      <rect x="72" y="256" width="96" height="9" rx="4.5" className={LINE} />
      {/* Click */}
      <circle cx="170" cy="204" r="22" fill="#fff" fillOpacity="0.35" />
      <path d="M166 198 L166 236 L176 226 L184 244 L192 240 L184 222 L198 222 Z" fill="#1E1B4B" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      {/* ROAS card */}
      <rect x="300" y="214" width="146" height="120" rx="20" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <rect x="318" y="232" width="54" height="8" rx="4" fill="#7C3AED" fillOpacity="0.35" />
      <rect x="320" y="290" width="18" height="26" rx="5" fill="#7C3AED" fillOpacity="0.3" />
      <rect x="346" y="276" width="18" height="40" rx="5" fill="#7C3AED" fillOpacity="0.5" />
      <rect x="372" y="262" width="18" height="54" rx="5" fill="#EC4899" fillOpacity="0.7" />
      <rect x="398" y="244" width="18" height="72" rx="5" fill={`url(#${id}-brand)`} />
      {/* Coins */}
      <ellipse cx="96" cy="336" rx="30" ry="10" fill="#D97706" />
      <rect x="66" y="316" width="60" height="20" fill="#F59E0B" />
      <ellipse cx="96" cy="316" rx="30" ry="10" fill="#FBBF24" />
      <ellipse cx="96" cy="306" rx="30" ry="10" fill="#D97706" />
      <rect x="66" y="290" width="60" height="16" fill="#F59E0B" />
      <ellipse cx="96" cy="290" rx="30" ry="10" fill="#FCD34D" />
      <Sparkle x={420} y={120} />
      <Sparkle x={30} y={200} size={0.7} fill="#EC4899" />
    </Frame>
  );
}

/* 04 — SEO: search bar, #1 ranked result, rising arrow */
function Seo() {
  const id = "svc4";
  return (
    <Frame id={id}>
      <rect x="50" y="56" width="370" height="58" rx="29" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="84" cy="83" r="11" stroke="#7C3AED" strokeWidth="4" />
      <path d="M92 91 L100 99" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
      <rect x="114" y="79" width="160" height="10" rx="5" className={LINE} />
      <circle cx="390" cy="85" r="20" fill={`url(#${id}-brand)`} />
      <path d="M383 85 L397 85 M391 79 L397 85 L391 91" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Results */}
      <rect x="50" y="138" width="300" height="58" rx="16" className={CARD} stroke={`url(#${id}-brand)`} strokeWidth="3" />
      <circle cx="82" cy="167" r="16" fill="#F59E0B" />
      <text x="82" y="173" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">1</text>
      <rect x="110" y="156" width="150" height="9" rx="4.5" fill="#7C3AED" fillOpacity="0.55" />
      <rect x="110" y="172" width="210" height="7" rx="3.5" className={LINE} />
      <rect x="50" y="212" width="300" height="50" rx="16" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="82" cy="237" r="12" className={LINE} />
      <rect x="110" y="228" width="120" height="8" rx="4" className={LINE} />
      <rect x="110" y="242" width="170" height="6" rx="3" className={LINE} />
      <rect x="50" y="278" width="300" height="50" rx="16" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" opacity="0.7" />
      <circle cx="82" cy="303" r="12" className={LINE} />
      <rect x="110" y="294" width="100" height="8" rx="4" className={LINE} />
      <rect x="110" y="308" width="150" height="6" rx="3" className={LINE} />
      {/* Rank arrow */}
      <path d="M398 320 L398 168" stroke="#EC4899" strokeWidth="12" strokeLinecap="round" />
      <path d="M372 190 L398 160 L424 190" stroke="#7C3AED" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <Sparkle x={440} y={140} />
      <Sparkle x={30} y={170} size={0.7} fill="#EC4899" />
    </Frame>
  );
}

/* 05 — Social Media: chat conversation, content calendar, 24/7 badge */
function Social() {
  const id = "svc5";
  return (
    <Frame id={id}>
      <circle cx="58" cy="108" r="18" fill="#A78BFA" />
      <rect x="86" y="80" width="190" height="58" rx="22" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <rect x="106" y="98" width="130" height="8" rx="4" className={LINE} />
      <rect x="106" y="114" width="86" height="8" rx="4" className={LINE} />
      <rect x="150" y="160" width="190" height="62" rx="22" fill={`url(#${id}-brand)`} />
      <rect x="170" y="180" width="132" height="8" rx="4" fill="#fff" />
      <rect x="170" y="196" width="90" height="8" rx="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="362" cy="192" r="18" fill="#EC4899" />
      <path d="M355 192 l5 5 l9 -10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="58" cy="270" r="18" fill="#F472B6" />
      <rect x="86" y="244" width="120" height="52" rx="22" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <circle cx="120" cy="270" r="6" fill="#7C3AED" />
      <circle cx="144" cy="270" r="6" fill="#7C3AED" fillOpacity="0.6" />
      <circle cx="168" cy="270" r="6" fill="#7C3AED" fillOpacity="0.3" />
      {/* Calendar */}
      <rect x="306" y="48" width="130" height="104" rx="18" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <path d="M306 66 a18 18 0 0 1 18 -18 h94 a18 18 0 0 1 18 18 v10 h-130 Z" fill="#EC4899" />
      {[0, 1, 2, 3].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={322 + col * 26}
            y={90 + row * 26}
            width="18"
            height="18"
            rx="5"
            fill={col === 2 && row === 0 ? "#7C3AED" : col === 0 && row === 1 ? "#F59E0B" : undefined}
            className={(col === 2 && row === 0) || (col === 0 && row === 1) ? undefined : LINE}
          />
        )),
      )}
      {/* 24/7 */}
      <circle cx="380" cy="300" r="46" fill="#F59E0B" />
      <circle cx="380" cy="300" r="46" stroke="#FCD34D" strokeWidth="6" strokeDasharray="6 8" />
      <text x="380" y="308" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff">24/7</text>
      <Sparkle x={250} y={320} fill="#7C3AED" />
      <Sparkle x={290} y={60} size={0.7} />
    </Frame>
  );
}

/* 06 — Website & MarTech: laptop landing page, gear, code, CRM nodes */
function Website() {
  const id = "svc6";
  return (
    <Frame id={id}>
      <rect x="90" y="62" width="300" height="200" rx="16" fill="#1E1B4B" />
      <rect x="102" y="74" width="276" height="176" rx="9" className={CARD} />
      <rect x="116" y="92" width="130" height="14" rx="7" fill={`url(#${id}-brand)`} />
      <rect x="116" y="114" width="110" height="8" rx="4" className={LINE} />
      <rect x="116" y="128" width="90" height="8" rx="4" className={LINE} />
      <rect x="116" y="148" width="72" height="22" rx="11" fill="#EC4899" />
      <rect x="268" y="90" width="96" height="80" rx="10" fill="#7C3AED" fillOpacity="0.15" />
      <circle cx="298" cy="116" r="10" fill="#F59E0B" />
      <path d="M272 164 L304 132 L326 150 L340 138 L362 164 Z" fill="#7C3AED" fillOpacity="0.5" />
      <rect x="116" y="188" width="76" height="46" rx="8" className={LINE} />
      <rect x="202" y="188" width="76" height="46" rx="8" className={LINE} />
      <rect x="288" y="188" width="76" height="46" rx="8" className={LINE} />
      <path d="M56 264 L424 264 L404 292 Q400 298 392 298 L88 298 Q80 298 76 292 Z" className="fill-slate-300 dark:fill-slate-600" />
      <rect x="210" y="264" width="60" height="8" rx="4" className="fill-slate-400 dark:fill-slate-500" />
      {/* Gear */}
      <circle cx="416" cy="90" r="26" stroke="#7C3AED" strokeWidth="12" strokeDasharray="9 7.3" />
      <circle cx="416" cy="90" r="20" fill="#7C3AED" />
      <circle cx="416" cy="90" r="8" className={CARD} />
      {/* Code chip */}
      <rect x="34" y="300" width="112" height="52" rx="18" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <path d="M68 316 L56 326 L68 336 M112 316 L124 326 L112 336 M96 312 L84 340" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* CRM nodes */}
      <path d="M350 340 L404 318 M350 340 L428 358" stroke="#EC4899" strokeWidth="3" />
      <circle cx="350" cy="340" r="14" fill="#EC4899" />
      <circle cx="404" cy="318" r="10" fill="#F59E0B" />
      <circle cx="428" cy="358" r="10" fill="#7C3AED" />
      <Sparkle x={60} y={80} />
    </Frame>
  );
}

/* 07 — Influencer & KOL: star creator connected to an audience network */
function Influencer() {
  const id = "svc7";
  const satellites = [
    { x: 90, y: 104, c: "#7C3AED" },
    { x: 392, y: 104, c: "#EC4899" },
    { x: 96, y: 300, c: "#F59E0B" },
    { x: 386, y: 300, c: "#4F46E5" },
  ];
  return (
    <Frame id={id}>
      {satellites.map((s) => (
        <path key={`l${s.x}`} d={`M240 190 L${s.x} ${s.y}`} stroke={s.c} strokeOpacity="0.45" strokeWidth="3" strokeDasharray="6 7" />
      ))}
      <circle cx="240" cy="190" r="88" stroke={`url(#${id}-brand)`} strokeWidth="3" strokeDasharray="4 10" strokeLinecap="round" />
      <circle cx="240" cy="190" r="64" fill={`url(#${id}-brand)`} />
      <circle cx="240" cy="172" r="22" fill="#fff" />
      <path d="M200 232 Q200 202 240 202 Q280 202 280 232 Z" fill="#fff" />
      <circle cx="288" cy="138" r="20" fill="#F59E0B" stroke="#fff" strokeWidth="4" />
      <path d="M288 126 L291.5 134 L300 134.5 L293.5 140 L295.5 148.5 L288 144 L280.5 148.5 L282.5 140 L276 134.5 L284.5 134 Z" fill="#fff" />
      {satellites.map((s) => (
        <g key={s.x}>
          <circle cx={s.x} cy={s.y} r="32" className={CARD} stroke={s.c} strokeWidth="3" />
          <circle cx={s.x} cy={s.y - 8} r="10" fill={s.c} />
          <path d={`M${s.x - 17} ${s.y + 18} Q${s.x - 17} ${s.y + 4} ${s.x} ${s.y + 4} Q${s.x + 17} ${s.y + 4} ${s.x + 17} ${s.y + 18} Z`} fill={s.c} />
        </g>
      ))}
      {/* Followers pill */}
      <rect x="168" y="300" width="144" height="46" rx="23" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <Heart x={196} y={325} size={1.1} />
      <text x="258" y="330" textAnchor="middle" fontSize="18" fontWeight="800" fill="#7C3AED">1.2M</text>
      <Sparkle x={240} y={60} />
      <Sparkle x={440} y={200} size={0.7} fill="#EC4899" />
    </Frame>
  );
}

/* 08 — Product & Packaging: branded box, bottle, price tag */
function Packaging() {
  return (
    <Frame id="svc8">
      <ellipse cx="240" cy="330" rx="150" ry="16" fill="#4C1D95" fillOpacity="0.12" />
      <path d="M222 86 L330 140 L222 194 L114 140 Z" fill="#F9A8D4" />
      <path d="M114 140 L222 194 L222 318 L114 264 Z" fill="#EC4899" />
      <path d="M222 194 L330 140 L330 264 L222 318 Z" fill="#BE185D" />
      <path d="M168 113 L276 167 L276 180 L168 126 Z" fill="#FCE7F3" fillOpacity="0.8" />
      <path d="M134 190 L202 224 L202 270 L134 236 Z" fill="#fff" fillOpacity="0.92" />
      <circle cx="168" cy="224" r="12" fill="#7C3AED" />
      <Sparkle x={168} y={224} size={0.6} fill="#fff" />
      {/* Bottle */}
      <rect x="352" y="176" width="66" height="148" rx="20" fill="#7C3AED" />
      <rect x="370" y="146" width="30" height="36" rx="4" fill="#6D28D9" />
      <rect x="364" y="126" width="42" height="24" rx="7" fill="#F59E0B" />
      <rect x="352" y="226" width="66" height="50" fill="#fff" fillOpacity="0.92" />
      <rect x="364" y="240" width="42" height="7" rx="3.5" fill="#7C3AED" fillOpacity="0.6" />
      <rect x="364" y="254" width="28" height="7" rx="3.5" fill="#EC4899" fillOpacity="0.5" />
      <rect x="362" y="190" width="8" height="26" rx="4" fill="#fff" fillOpacity="0.35" />
      {/* Tag */}
      <g transform="rotate(-18 80 96)">
        <path d="M44 76 L100 76 L124 96 L100 116 L44 116 Q36 116 36 108 L36 84 Q36 76 44 76 Z" fill="#F59E0B" />
        <circle cx="104" cy="96" r="6" className={CARD} />
        <rect x="50" y="90" width="36" height="12" rx="6" fill="#fff" fillOpacity="0.85" />
      </g>
      <Sparkle x={330} y={80} />
      <Sparkle x={60} y={260} size={0.8} fill="#7C3AED" />
    </Frame>
  );
}

/* 09 — Event & Activation: stage with spotlights, banners, confetti */
function Event() {
  const id = "svc9";
  const confetti = [
    { x: 120, y: 70, r: 20, c: "#EC4899" },
    { x: 180, y: 50, r: -30, c: "#F59E0B" },
    { x: 300, y: 56, r: 40, c: "#7C3AED" },
    { x: 360, y: 80, r: -15, c: "#34D399" },
    { x: 90, y: 150, r: 60, c: "#F59E0B" },
    { x: 400, y: 160, r: -50, c: "#EC4899" },
    { x: 250, y: 36, r: 10, c: "#4F46E5" },
  ];
  return (
    <Frame id={id}>
      <path d="M40 30 L110 30 L300 310 L150 310 Z" fill="#F59E0B" fillOpacity="0.14" />
      <path d="M440 30 L370 30 L180 310 L330 310 Z" fill="#EC4899" fillOpacity="0.14" />
      <rect x="44" y="18" width="62" height="26" rx="8" fill="#1E1B4B" />
      <rect x="374" y="18" width="62" height="26" rx="8" fill="#1E1B4B" />
      {/* Backdrop */}
      <rect x="140" y="104" width="200" height="130" rx="16" className={`${CARD} ${CARD_STROKE}`} strokeWidth="2" />
      <rect x="140" y="104" width="200" height="30" rx="16" fill={`url(#${id}-brand)`} />
      <rect x="140" y="120" width="200" height="14" fill={`url(#${id}-brand)`} />
      <Sparkle x={240} y={172} size={2.2} fill="#7C3AED" />
      <rect x="190" y="204" width="100" height="9" rx="4.5" className={LINE} />
      {/* Stage */}
      <ellipse cx="240" cy="318" rx="196" ry="34" fill="#4C1D95" />
      <ellipse cx="240" cy="304" rx="186" ry="28" fill={`url(#${id}-brand)`} />
      {/* Roll-up banners */}
      <rect x="72" y="176" width="42" height="120" rx="6" fill="#7C3AED" />
      <rect x="80" y="192" width="26" height="26" rx="13" fill="#fff" fillOpacity="0.85" />
      <rect x="80" y="230" width="26" height="6" rx="3" fill="#fff" fillOpacity="0.6" />
      <rect x="366" y="176" width="42" height="120" rx="6" fill="#EC4899" />
      <rect x="374" y="192" width="26" height="26" rx="13" fill="#fff" fillOpacity="0.85" />
      <rect x="374" y="230" width="26" height="6" rx="3" fill="#fff" fillOpacity="0.6" />
      {confetti.map((p) => (
        <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width="10" height="16" rx="2" fill={p.c} transform={`rotate(${p.r} ${p.x + 5} ${p.y + 8})`} />
      ))}
    </Frame>
  );
}

export const SERVICE_ILLUSTRATIONS = [
  Strategy,
  Content,
  Ads,
  Seo,
  Social,
  Website,
  Influencer,
  Packaging,
  Event,
];
