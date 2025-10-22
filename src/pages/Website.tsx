import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopNav } from "@/components/TopNav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Website = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
                Ship vibe‑coded apps with{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  production‑grade confidence
                </span>
                .
              </h1>

              <div className="text-lg font-sans max-w-2xl space-y-1.5">
                <p className="text-muted-foreground">
                  You've planned, designed, and coded with AI tools — ChatGPT, Figma, Cursor, Replit, v0, Lovable. Now it's time to ship.
                </p>
                <p className="font-bold text-primary">
                  Kreyo makes your app production-ready — tested, secured, monitored, and maintained.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <Button onClick={() => navigate("/waitlist")} size="lg" className="rounded-full">
                  Join Waitlist
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-card border border-border shadow-lg transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <h3 className="text-sm font-semibold font-display text-muted-foreground mb-4">
                  From Repo to Ready
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    { num: "1️⃣", title: "Connect your app", desc: "Link your Vercel, Replit, or GitHub project — no setup needed." },
                    {
                      num: "2️⃣",
                      title: "We run 150+ checks",
                      desc: "Kreyo scans everything and finds what could go wrong.",
                    },
                    {
                      num: "3️⃣",
                      title: "Get clear next steps",
                      desc: "See simple fixes or let Kreyo handle them for you.",
                    },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">
                        {step.num}
                      </span>
                      <div className="text-muted-foreground">
                        <strong className="text-foreground block">{step.title}</strong>
                        <span>{step.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Kreyo fits your stack */}
      <section id="fit" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">How Kreyo fits your stack</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Bring your existing tools — we meet you where you build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { 
                title: "Plan & Design", 
                tools: "ChatGPT · Figma · Canva · Lovable",
                desc: "Turn your idea into a clear plan — describe what you want and visualize how it should look."
              },
              { 
                title: "Code & Compose", 
                tools: "Cursor · Replit · v0 · Lovable",
                desc: "Build the first working version of your app using simple AI-powered coding tools."
              },
              {
                title: "Production Readiness",
                tools: "Kreyo",
                desc: "Make your app safe, stable, and ready for real customers — with reviews, testing, and monitoring built in.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-5 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <h3 className="font-semibold font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.tools}</p>
                <p className="mt-1.5 text-sm text-muted-foreground font-sans">{item.desc}</p>
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
                title: "Code Reviews",
                desc: "We read your code so you don't have to — checking that it's clean, organized, and ready for the real world.",
                comingSoon: false,
              },
              {
                title: "Security Checks",
                desc: "We scan for hidden risks — from exposed passwords to weak logins — and make sure your customer data stays safe.",
                comingSoon: false,
              },
              {
                title: "Testing",
                desc: "We try your app the way real users will — finding bugs, slow screens, and anything that breaks under pressure.",
                comingSoon: true,
              },
              {
                title: "Deployments",
                desc: "We set up the right environments so your app runs smoothly in production — with safe backups and easy rollbacks if something goes wrong.",
                comingSoon: true,
              },
              {
                title: "Monitoring",
                desc: "We keep an eye on your live app — tracking performance, uptime, and errors so you can focus on your business.",
                comingSoon: true,
              },
              {
                title: "Incident Response",
                desc: "If something does break, we handle it fast — diagnose, fix, and document what happened so it doesn't happen again.",
                comingSoon: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] relative"
              >
                {item.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent border border-accent/20">
                      Coming Soon
                    </span>
                  </div>
                )}
                <h3 className="font-semibold font-display">{item.title}</h3>
                <p className="mt-2 text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-16 md:py-24 bg-blue-50/30">
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
      <section id="cta" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold font-display">Ready to ship with confidence?</h2>
              <p className="mt-3 text-muted-foreground font-sans">
                Join the waitlist — we'll help you connect your repo and secure your app in minutes.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <div data-tf-live="01K83NFP5ZQCW1JAF8JGA3GDXF"></div>
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
