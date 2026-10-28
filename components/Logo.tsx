/**
 * SVG recreation of the neon-ring logo: a gradient ring around an outlined "SR",
 * optionally with the two-line wordmark. Colours come from the theme's CSS variables.
 */
export function Logo({ variant = "full", className }: { variant?: "full" | "mark"; className?: string }) {
  const gid = `logo-gradient-${variant}`;
  const full = variant === "full";
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Strike Rate Cricket Coaching">
      <defs>
        <linearGradient id={gid} x1="12" y1="0" x2="188" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: "var(--color-accent-from)" }} />
          <stop offset="0.5" style={{ stopColor: "var(--color-accent-via)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-accent-to)" }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" stroke={`url(#${gid})`} strokeWidth={full ? 4 : 9} />
      <text
        x="100"
        y={full ? 98 : 124}
        textAnchor="middle"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth={full ? 3.2 : 5}
        strokeLinejoin="round"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "-1px" }}
        fontSize={full ? 66 : 84}
      >
        SR
      </text>
      {full && (
        <>
          <text
            x="100"
            y="128"
            textAnchor="middle"
            fill={`url(#${gid})`}
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "2px" }}
            fontSize="21"
          >
            STRIKE RATE
          </text>
          <text
            x="100"
            y="147"
            textAnchor="middle"
            fill={`url(#${gid})`}
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "1.5px" }}
            fontSize="11"
          >
            CRICKET COACHING
          </text>
        </>
      )}
    </svg>
  );
}
