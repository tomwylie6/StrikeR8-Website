import { nav } from "@/lib/site";
import { BookButton } from "./BookButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo variant="mark" className="h-10 w-10" />
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide">
            Strike Rate
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
          <BookButton className="!px-5 !py-2 !text-sm" />
        </nav>

        {/* Mobile menu: a native disclosure, so it works without JavaScript. */}
        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-border px-4 py-2 text-sm [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 mt-2 flex w-64 flex-col gap-1 rounded-2xl border border-border bg-surface p-3 shadow-2xl"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 hover:bg-bg">
                {item.label}
              </a>
            ))}
            <BookButton className="mt-2 !py-2.5 !text-sm" />
          </nav>
        </details>
      </div>
    </header>
  );
}
