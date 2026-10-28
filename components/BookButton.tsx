import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/site";

const styles = {
  solid: "bg-gradient-accent text-on-accent glow",
  outline: "border-gradient text-text",
};

/**
 * Every booking button on the site. Until BOOKING_URL is set it renders without a link,
 * so it looks right but goes nowhere.
 */
export function BookButton({
  children = "Book your session",
  variant = "solid",
  className = "",
}: {
  children?: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const classes = `motion-lift inline-flex items-center justify-center rounded-full px-6 py-3 font-[family-name:var(--font-heading)] text-base font-bold uppercase tracking-wide ${styles[variant]} ${className}`;
  if (!BOOKING_URL) {
    return (
      <a className={`${classes} cursor-pointer`} title="Online booking opens soon">
        {children}
      </a>
    );
  }
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener" className={classes}>
      {children}
    </a>
  );
}
