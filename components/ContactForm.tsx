"use client";

import { site } from "@/lib/site";

/**
 * No server needed: sending opens the visitor's email app with the message filled in, addressed to Strike Rate.
 */
export function ContactForm() {
  function send(form: FormData) {
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Coaching enquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted/60 focus:border-accent-via focus:outline-none";

  return (
    <form action={send} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button
        type="submit"
        className="motion-lift bg-gradient-accent glow justify-self-start rounded-full px-6 py-3 font-[family-name:var(--font-heading)] font-bold uppercase tracking-wide text-on-accent"
      >
        Send message
      </button>
    </form>
  );
}
