import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopNav } from "@/components/TopNav";
import { useNavigate } from "react-router-dom";

const Website = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <TopNav />

      {/* Hero Section */}
      <section id="top" className="relative isolate pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(255,255,255,.03)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.03)_24px)] bg-[length:24px_24px] [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                <span className="text-muted-foreground">AI partner for serious builders</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
                Shit vibe‑coded apps with{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  production‑grade confidence
                </span>
                .
              </h1>

              <p className="text-lg text-muted-foreground font-sans max-w-2xl">
                You've planned in ChatGPT and designed in Figma. Cursor, Replit, v0, or Lovable got you 80% there. Kreyo
                takes you the last mile — reviews, QA, live & security testing, deployment hardening, monitoring, and
                incident response.
              </p>

              <div className="flex flex-col items-start gap-2">
                <Button onClick={() => navigate("/start")} size="lg" className="rounded-full">
                  Connect with GitHub and watch Kreyo in action now
                </Button>
                <p className="text-xs text-muted-foreground/60 pl-8">
                  60‑second time‑to‑value. No sales call required.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-card border border-border shadow-lg transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <h3 className="text-sm font-semibold font-display text-muted-foreground mb-4">
                  From repo to readiness
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    { num: "1", title: "Connect GitHub.", desc: "We scan your repo(s) and environment." },
                    {
                      num: "2",
                      title: "Automated checks + human review.",
                      desc: "Static analysis, dependency & secret checks, test coverage and usability QA.",
                    },
                    {
                      num: "3",
                      title: "Harden & ship.",
                      desc: "Security testing, live testing, prod‑safe configs, rollbacks.",
                    },
                    {
                      num: "4",
                      title: "Monitor & respond.",
                      desc: "Ongoing maintenance, observability, and incident response.",
                    },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary text-[10px] font-bold grid place-items-center flex-shrink-0">
                        {step.num}
                      </span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{step.title}</strong> {step.desc}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Kreyo fits your stack */}
      <section id="fit" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">How Kreyo fits your stack</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Bring your existing tools — we meet you where you build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Plan & Design", desc: "ChatGPT • Figma • Canva • Lovable" },
              { title: "Code & Compose", desc: "Cursor • Replit • v0 • Lovable" },
              {
                title: "Production Readiness",
                desc: "Kreyo layers QA, security, live testing, and monitoring on top — so you can ship with confidence.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-5 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <h3 className="font-semibold font-display">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-sans">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="services" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">What we do</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Everything between your AI‑written code and a resilient production app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {[
              {
                title: "Code reviews",
                desc: "Structure, readability, tests, and maintainability for AI‑assisted codebases.",
              },
              { title: "QA & live testing", desc: "Automated and human QA, device/browser matrices, edge‑case hunts." },
              {
                title: "Security testing",
                desc: "Dependency & secret scanning, auth/session hardening, OWASP‑minded fixes.",
              },
              {
                title: "Deployment & configs",
                desc: "Staging/prod parity, env management, rollbacks, migrations, backups.",
              },
              { title: "Monitoring", desc: "Logs, metrics, tracing, uptime checks, alert hygiene." },
              {
                title: "Incident response",
                desc: "Runbooks, on‑call, rapid patching, post‑mortems — without the panic.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <h3 className="font-semibold font-display">{item.title}</h3>
                <p className="mt-2 text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">How it works</h2>
            <p className="mt-3 text-muted-foreground font-sans">SaaS onboarding with a 60‑second time‑to‑value.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              {
                num: "01",
                title: "Connect GitHub",
                desc: "OAuth into Kreyo, select repos, set scopes. We create a safe read path.",
              },
              {
                num: "02",
                title: "Baseline checks",
                desc: "Static analysis, dependencies, tests, secrets, perf budget, accessibility.",
              },
              {
                num: "03",
                title: "Harden & validate",
                desc: "Security testing, live test runs, staging approvals, release notes.",
              },
              {
                num: "04",
                title: "Monitor & respond",
                desc: "Observability dashboards, alerts, on‑call, incident response.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <div className="text-xs text-muted-foreground mb-2">{item.num}</div>
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kreyo / Trust */}
      <section id="trust" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold font-display mb-5">Why Kreyo</h2>
              <ul className="space-y-3 text-sm text-muted-foreground font-sans">
                <li>
                  <strong className="text-foreground">Built for the serious builder.</strong> Not enterprise bloat, not
                  hobby‑toy. Just production‑grade craft.
                </li>
                <li>
                  <strong className="text-foreground">Calm, intentional, human.</strong> Minimal UI, clear guidance, no
                  hype — just intelligent flow.
                </li>
                <li>
                  <strong className="text-foreground">Own your stack.</strong> Keep your tools and repos. We add the
                  layer that makes them safe to ship.
                </li>
                <li>
                  <strong className="text-foreground">From 0→Prod fast.</strong> Time‑to‑first‑value in 60 seconds.
                  Focus on outcomes: paid beta, hardened MVP, API to prod.
                </li>
              </ul>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <h3 className="font-semibold font-display mb-4">What success looks like</h3>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>✔ Paid beta‑ready release with auth/payments configured</li>
                  <li>✔ Hardened MVP with rollback/versioning and observability</li>
                  <li>✔ API wrapper shipped to production with incident playbooks</li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground/70">Case studies and demos coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold font-display">Ready to ship with confidence?</h2>
              <p className="mt-3 text-muted-foreground font-sans">
                Connect your repo and see Kreyo baseline, harden, and monitor your app — right away.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <form
                  className="grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/start");
                  }}
                >
                  <Input
                    className="bg-muted border-border rounded-xl px-4 py-3 h-12"
                    placeholder="Work email"
                    type="email"
                    required
                  />
                  <Input
                    className="bg-muted border-border rounded-xl px-4 py-3 h-12"
                    placeholder="GitHub org or repo URL"
                    required
                  />
                  <Button type="submit" className="rounded-xl h-12">
                    Connect with GitHub
                  </Button>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground text-center"
                    href="#how"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Or watch Kreyo build in real time →
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Kreyo — intelligent flow for production‑grade apps</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="#fit">
              How Kreyo fits
            </a>
            <a className="hover:text-foreground" href="#services">
              What we do
            </a>
            <a className="hover:text-foreground" href="#how">
              How it works
            </a>
            <a className="hover:text-foreground" href="#trust">
              Why Kreyo
            </a>
            <a className="hover:text-foreground" href="#cta">
              Start
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
