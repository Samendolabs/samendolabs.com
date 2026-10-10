import Link from "next/link";
import { Logo } from "@/components/Logo";

const CONTACT_EMAIL = "hello@samendolabs.com";

const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Principles", href: "#principles" },
  { label: "Careers", href: "#careers" },
];

const principles = [
  {
    title: "We build the whole thing",
    body: "We design the tool around the job from the start, instead of bolting features onto something that never really fit.",
  },
  {
    title: "Made for the people using it",
    body: "The people doing the work come first. A good tool fades into the background and makes the hard parts easy.",
  },
  {
    title: "We earn the trust",
    body: "People only rely on a tool they can count on. We build for accuracy and for the moments that really matter.",
  },
  {
    title: "Small teams who care",
    body: "Small groups, close to the problem, shipping quickly and standing behind what they make.",
  },
  {
    title: "Better over time",
    body: "Our tools get sharper the more they are used, so everyday work turns into a lasting advantage.",
  },
  {
    title: "We sweat the details",
    body: "Quality is a choice. We care about the small things other people skip, because you feel them even when you cannot name them.",
  },
];

const approach = [
  {
    step: "01",
    title: "We start with the work",
    body: "We sit with the people doing the job and learn where the day gets hard: the waiting, the handoffs, the same task done over and over.",
  },
  {
    step: "02",
    title: "We build the tool",
    body: "Then we build something that takes that work off their plate, keeps a person in charge, and holds up when things get busy.",
  },
  {
    step: "03",
    title: "We stick around",
    body: "We do not disappear after launch. We watch how it is used, listen to what breaks, and keep making it better.",
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
                A small software company
              </span>
            </div>
            <h1
              className="animate-fade-up mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "60ms" }}
            >
              We build software that does the work, not just keeps track of it.
            </h1>
            <p
              className="animate-fade-up mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              Samendo Labs makes tools for the businesses that keep everyday
              life running. We stay close to the people who use them, and we
              fix what gets in their way.
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Work with us
              </a>
              <a
                href="#approach"
                className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
              >
                How we think
              </a>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="max-w-4xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              Most software just keeps records. We build software that actually{" "}
              <span className="text-accent">does</span> the job, and gets better
              the more people use it.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Approach
              </span>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                We learn the work, then build the tool it needs.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-line md:grid-cols-3">
              {approach.map((item) => (
                <div key={item.step} className="flex flex-col gap-4 bg-card p-8">
                  <span className="font-mono text-sm text-accent">{item.step}</span>
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Principles
              </span>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                How we build.
              </h2>
            </div>

            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 border-t pt-6">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers / CTA */}
        <section id="careers" className="border-b">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="relative overflow-hidden rounded-3xl border bg-card px-8 py-16 sm:px-14 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="animate-drift absolute right-[-10%] top-[-40%] h-[420px] w-[420px] rounded-full bg-accent opacity-[0.1] blur-[110px]" />
              </div>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                We&rsquo;re a small team, here for the long run.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                If you like real ownership, hard problems, and building things
                people actually use, we&rsquo;d like to meet you.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Joining%20Samendo%20Labs`}
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Join the team
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
                >
                  Say hello
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
