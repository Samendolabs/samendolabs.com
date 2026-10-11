import Link from "next/link";
import { Logo } from "@/components/Logo";

const CONTACT_EMAIL = "hello@samendolabs.com";

const nav = [
  { label: "What we do", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const whyUs = [
  {
    title: "We build, we don't just advise",
    body: "Every recommendation comes from something we have shipped ourselves, not from a textbook or a template deck.",
  },
  {
    title: "Our own products are the proof",
    body: "We build and run AI products that make money. That is how we know what actually works in the real world.",
  },
  {
    title: "Priced for small business",
    body: "Senior, hands-on AI help without Big Four rates. We charge in a way a growing company can actually justify.",
  },
  {
    title: "Forward-deployed engineers",
    body: "We embed our engineers straight into your business to build with you, side by side, until the AI is live and working.",
  },
  {
    title: "Fast and practical",
    body: "A small team, close to your problem, moving quickly and focused on the few things that pay off.",
  },
  {
    title: "We sweat the details",
    body: "Quality is a choice. We care about the small things other people skip, because you feel them even when you cannot name them.",
  },
];

const services = [
  {
    step: "01",
    title: "AI strategy",
    body: "We help you find where AI actually moves the needle in your business, and where it does not, so you spend only on what pays off.",
  },
  {
    step: "02",
    title: "Build and ship",
    body: "We do not stop at a plan. Our engineers embed with your team, build the AI, and put it into your day to day with a person in control.",
  },
  {
    step: "03",
    title: "Make it pay",
    body: "We stay on after launch, measure what it earns, and keep improving it as your business grows.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-[color:var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Samendo Labs home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          {/* ambient background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="animate-drift absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent opacity-[0.12] blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Builders, not consultants
              </span>
            </div>
            <h1
              className="animate-fade-up mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "60ms" }}
            >
              We build AI for a living. Let us build yours.
            </h1>
            <p
              className="animate-fade-up mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              Samendo Labs runs its own AI products at a profit. We put those
              same engineers inside your business to build real, working AI with
              you, at a price small companies can actually afford.
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=AI%20strategy%20for%20my%20business`}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Book a call
              </a>
              <a
                href="#services"
                className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
              >
                See what we do
              </a>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="max-w-4xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              We don&rsquo;t just advise on AI. We build it, ship it, and make it{" "}
              <span className="text-accent">profitable</span>. Everything we tell
              you, we have already done ourselves.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section id="services" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                What we do
              </span>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                From strategy to AI that is live and paying off.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-line md:grid-cols-3">
              {services.map((item) => (
                <div key={item.step} className="flex flex-col gap-4 bg-card p-8">
                  <span className="font-mono text-sm text-accent">{item.step}</span>
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Why us
              </span>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Serious AI help for the businesses the big firms price out.
              </h2>
            </div>

            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 border-t pt-6">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="relative overflow-hidden rounded-3xl border bg-card px-8 py-16 sm:px-14 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="animate-drift absolute right-[-10%] top-[-40%] h-[420px] w-[420px] rounded-full bg-accent opacity-[0.1] blur-[110px]" />
              </div>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&rsquo;s figure out where AI fits in your business.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Tell us what you are trying to do. We will give you a straight
                answer on where AI can help, what it would take, and what it is
                worth, with no jargon and no obligation.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=AI%20strategy%20for%20my%20business`}
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Book a call
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Logo />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Samendo Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
