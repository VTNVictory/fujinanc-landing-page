interface LogoProps {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function Logo({ size = "md", dark = false }: LogoProps) {
  const scales: Record<string, number> = { sm: 0.6, md: 0.9, lg: 1.1 };
  const s = scales[size];

  const w = Math.round(220 * s);
  const h = Math.round(82 * s);

  const mainTextFill  = dark ? "#001235" : "#ffffff";
  const mainTextStroke = dark ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.85)";
  const jpColor = dark ? "#005aaa" : "#5ad4ff";
  const badgeStroke = dark ? "rgba(0,60,150,0.5)" : "rgba(255,255,255,0.6)";
  const badgeText   = dark ? "#003399" : "#e8f4ff";

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 220 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* ── Sun + Mountain centered above text ── */}

      {/* Red Sun */}
      <circle cx="110" cy="9" r="9" fill="#e60012" />
      {/* Sun inner highlight */}
      <circle cx="107" cy="6" r="3" fill="rgba(255,255,255,0.15)" />

      {/* Mountain main peak — white with stroke */}
      <polygon
        points="110,1 92,24 128,24"
        fill={mainTextFill}
        stroke={mainTextStroke}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Snow cap shading */}
      <polygon points="110,2 105,13 115,13" fill="rgba(180,210,255,0.3)" />

      {/* Left lower slope */}
      <polygon
        points="92,24 80,32 110,32 110,24"
        fill={mainTextFill}
        stroke={mainTextStroke}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Right lower slope */}
      <polygon
        points="128,24 140,32 110,32 110,24"
        fill={mainTextFill}
        stroke={mainTextStroke}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* ── FUJI + NANO — single text, two tspans, no gap ── */}
      {/* Outline/stroke pass — white outline for Fuji, dark for nano */}
      <text
        x="32"
        y="56"
        fontFamily="'Montserrat', 'Arial Black', Arial, sans-serif"
        fontSize="32"
        fontWeight="900"
        letterSpacing="-0.5"
        fill="none"
      >
        <tspan stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinejoin="round">Fuji</tspan>
        <tspan stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinejoin="round">nano</tspan>
      </text>
      {/* Fill pass */}
      <text
        x="32"
        y="56"
        fontFamily="'Montserrat', 'Arial Black', Arial, sans-serif"
        fontSize="32"
        fontWeight="900"
        letterSpacing="-0.5"
        fill="none"
      >
        <tspan fill="#111111">Fuji</tspan><tspan fill="#e60012">nano</tspan>
      </text>

      {/* ── Japanese tagline ── */}
      <text
        x="110"
        y="67"
        fontFamily="'Noto Sans JP', 'Yu Gothic', sans-serif"
        fontSize="11.5"
        fontWeight="500"
        letterSpacing="3"
        textAnchor="middle"
        fill={jpColor}
      >
        日本の技術
      </text>

      {/* ── NANO PAINT & WATERPROOF badge ── */}
      <rect
        x="18" y="69" width="184" height="11" rx="2"
        fill={dark ? "rgba(0,40,120,0.15)" : "rgba(10,30,80,0.35)"}
        stroke={badgeStroke}
        strokeWidth="0.8"
      />
      {/* Corner accent lines */}
      <line x1="20" y1="70" x2="28" y2="70" stroke={badgeStroke} strokeWidth="1" />
      <line x1="192" y1="70" x2="200" y2="70" stroke={badgeStroke} strokeWidth="1" />
      <text
        x="110"
        y="77"
        fontFamily="'DM Sans', 'Arial', sans-serif"
        fontSize="6.5"
        fontWeight="800"
        letterSpacing="1.5"
        textAnchor="middle"
        fill={badgeText}
      >
        NANO PAINT &amp; WATERPROOF
      </text>
    </svg>
  );
}
