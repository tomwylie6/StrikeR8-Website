import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/site";

const styles = {
  solid: "bg-gradient-accent text-on-accent glow",
  outline: "border-gradient text-text",
};

/**
 * Every booking (and membership) button on the site. Until its link is set it renders without one,
 * so it looks right but goes nowhere.
 */
export function BookButton({
  children = "Book your session",
  href = BOOKING_URL,
  variant = "solid",
  className = "",
}: {
  children?: ReactNode;
  href?: string;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const classes = `motion-lift inline-flex items-center justify-center rounded-full px-6 py-3 font-[family-name:var(--font-heading)] text-base font-bold uppercase tracking-wide ${styles[variant]} ${className}`;
  if (!href) {
    return (
      <a className={`${classes} cursor-pointer`} title="Opens soon">
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener" className={classes}>
      {children}
    </a>
  );
}
