import { BookButton } from "@/components/BookButton";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-gradient mb-3 text-sm font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
      <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-accent-via), transparent 65%)" }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
            <div>
              <p className="text-gradient mb-4 text-sm font-semibold uppercase tracking-[0.2em]">{site.hero.eyebrow}</p>
              <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">{site.hero.heading}</h1>
              <p className="mt-6 max-w-xl text-lg text-muted">{site.hero.subheading}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BookButton />
                <a
                  href="#programmes"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 font-[family-name:var(--font-heading)] font-bold uppercase tracking-wide transition-colors hover:border-muted"
                >
                  Our programmes
                </a>
              </div>
            </div>
            <div className="ring-pulse mx-auto w-64 sm:w-80">
              <Logo className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <h2 className="text-3xl font-bold sm:text-4xl">{site.intro.heading}</h2>
            <div className="space-y-4 text-lg text-muted">
              {site.intro.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section id="programmes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            eyebrow="Our programmes"
            title="Choose the coaching that's right for you"
            intro="From one-off sessions to structured blocks, there's a way in for every player."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {site.programmes.map((p) => (
              <article key={p.title} className="border-gradient flex flex-col rounded-3xl p-7">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.body}</p>
                <BookButton variant="outline" className="mt-6 self-start !px-5 !py-2 !text-sm">
                  {p.cta}
                </BookButton>
              </article>
            ))}
          </div>
        </section>

        {/* Why Strike Rate */}
        <section id="why" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <SectionHeading eyebrow="Why Strike Rate?" title="More than time in the nets" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {site.why.map((w, i) => (
                <div key={w.title}>
                  <p className="text-gradient font-[family-name:var(--font-heading)] text-5xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{w.title}</h3>
                  <p className="mt-2 text-muted">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaches */}
        <section id="coaches" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading eyebrow="Meet the coaches" title="Who you'll be working with" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.coaches.map((c) => (
              <article key={c.name} className="overflow-hidden rounded-3xl border border-border bg-surface">
                {/* Photo placeholder until there's a real picture. */}
                <div className="grid aspect-[4/3] place-items-center bg-bg">
                  <Logo variant="mark" className="h-24 w-24 opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{c.name}</h3>
                  <p className="text-gradient mt-1 text-sm font-semibold uppercase tracking-wider">{c.role}</p>
                  <p className="mt-1 text-sm text-muted">{c.specialisms}</p>
                  <p className="mt-4 text-muted">{c.bio}</p>
                  <BookButton variant="outline" className="mt-6 !px-5 !py-2 !text-sm">
                    Book with {c.name.split(" ")[0]}
                  </BookButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Closing call to action */}
        <section className="px-4 sm:px-6">
          <div className="border-gradient mx-auto max-w-6xl rounded-3xl px-6 py-16 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Serious about getting <span className="text-gradient">better?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">Pick a time that suits you and start working on your game.</p>
            <BookButton className="mt-8" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Contact us" title={site.contact.heading} intro={site.contact.intro} />
              <ul className="space-y-3 text-lg">
                <li>
                  <span className="text-muted">Email: </span>
                  <a href={`mailto:${site.email}`} className="underline decoration-accent-via underline-offset-4">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Instagram: </span>
                  <a href={site.instagram} className="underline decoration-accent-via underline-offset-4">
                    @strikeratecricket
                  </a>
                </li>
                <li>
                  <span className="text-muted">TikTok: </span>
                  <a href={site.tiktok} className="underline decoration-accent-via underline-offset-4">
                    @strikeratecricket
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="mark" className="h-9 w-9" />
            <p className="text-sm text-muted">
              © 2026 {site.name}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </a>
            ))}
            <a href="#top" className="hover:text-text">
              Back to top ↑
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
