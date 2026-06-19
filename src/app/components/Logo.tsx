interface LogoProps {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function Logo({ size = "md", dark = false }: LogoProps) {
  const heights: Record<string, number> = { sm: 32, md: 40, lg: 52 };
  const h = heights[size];

  return (
    <svg
      height={h}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Paint-brush mark: angled rectangle + drip */}
      <rect x="2" y="4" width="10" height="22" rx="2" fill="#e60012" />
      <rect x="2" y="24" width="10" height="6" rx="1" fill="#b5000e" opacity="0.8" />
      {/* Drip */}
      <ellipse cx="7" cy="33" rx="3" ry="4" fill="#e60012" opacity="0.85" />
      <ellipse cx="7" cy="36.5" rx="1.5" ry="2" fill="#e60012" opacity="0.5" />

      {/* F */}
      <text
        x="20"
        y="30"
        fontFamily="'Montserrat', 'Be Vietnam Pro', Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.5"
        fill={dark ? "#001235" : "#ffffff"}
      >
        FUJI
      </text>
      <text
        x="80"
        y="30"
        fontFamily="'Montserrat', 'Be Vietnam Pro', Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="#0055cc"
      >
        NANO
      </text>

      {/* Tagline dot */}
      <circle cx="155" cy="10" r="3" fill="#e60012" />
    </svg>
  );
}
