import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/TopNav";

const Aisec = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <TopNav />

      {/* Hero */}
      <section id="top" className="relative isolate pt-28 md:pt-36 pb-14 md:pb-20 bg-gradient-to-br from-primary/10 via-purple/10 to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left column - 60% width */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                <span className="text-muted-foreground">Get results in 60 seconds</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight font-display mt-6">
                Run <span className="bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">150+ Security Checks</span> on Your Vibe‑Coded App — Free.
              </h1>
              <p className="mt-4 text-muted-foreground text-lg">
                We fire up Semgrep, Snyk, and other top‑tier scanners — so you don't ship vulnerabilities. 
                Works with Vercel, Replit, and Cursor projects.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#cta">Run Free Scan</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="#demo">Watch Kreyo Block an Attack →</a>
                </Button>
              </div>
            </div>

            {/* Right column - Signup box */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold font-display mb-4">Start your free scan</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" size="lg" className="w-full justify-start gap-3">
                  <a href="#github">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Start for free with GitHub
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full justify-start gap-3">
                  <a href="#replit">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 3.5h5.5v5.5H7V3.5zm0 11.5h5.5V21H7v-6zm11.5 0v6H13v-6h5.5zM13 3.5h5.5v5.5H13V3.5z"/>
                    </svg>
                    Start for free with Replit
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full justify-start gap-3">
                  <a href="#vercel">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1.5l12 21H0z"/>
                    </svg>
                    Start for free with Vercel
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                No commitments, cancel anytime. Begin your free trial and see the impact on your projects in minutes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scanners logos */}
      <section id="scanners" className="py-14 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Semgrep */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="font-semibold">Semgrep</span>
            </div>

            {/* Snyk */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-semibold">Snyk</span>
            </div>

            {/* OWASP ZAP */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
              </svg>
              <span className="font-semibold">OWASP ZAP</span>
            </div>

            {/* Trivy */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/>
              </svg>
              <span className="font-semibold">Trivy</span>
            </div>

            {/* ESLint Security */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 12l11 10 11-10L12 2zm0 3.84L19.53 12 12 18.16 4.47 12 12 5.84z"/>
              </svg>
              <span className="font-semibold">ESLint Security</span>
            </div>

            {/* GitLeaks */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
              </svg>
              <span className="font-semibold">GitLeaks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security categories */}
      <section id="categories" className="py-14 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold font-display">Top security categories we fix</h2>
          <div className="mt-8 relative">
            <div className="flex gap-5 animate-scroll-left">
              {/* First set of cards */}
              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Hardcoded Secrets</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: keys/tokens committed to code.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: detects, quarantines, and guides rotation; adds secret scanning to CI.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Broken Auth / Access Control</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: missing checks, privilege escalation.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: enforces session rules, RBAC hints, and sensible defaults.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Input Validation (XSS / SQLi)</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: unsafe inputs reach sinks.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: sanitizes, parameterizes, and adds tests.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Outdated Dependencies</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: known CVEs in your deps.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: upgrades with lockfile diffs and rollback plan.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Missing Security Headers</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: CSP, HSTS, frameguard, etc.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: patches headers and verifies in staging.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Misconfigurations</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: debug mode, public buckets, weak TLS.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: checks envs, hardens infra, sets sane defaults.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Package Supply Chain</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: typosquats, compromised libs.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: pin/verify sources and add provenance.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Rate Limit & DDoS</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: abuse of public endpoints.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: sensible rate‑limits + IP banlist automation.
                </p>
              </article>

              {/* Duplicate set for seamless loop */}
              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Hardcoded Secrets</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: keys/tokens committed to code.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: detects, quarantines, and guides rotation; adds secret scanning to CI.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Broken Auth / Access Control</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: missing checks, privilege escalation.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: enforces session rules, RBAC hints, and sensible defaults.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Input Validation (XSS / SQLi)</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: unsafe inputs reach sinks.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: sanitizes, parameterizes, and adds tests.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Outdated Dependencies</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: known CVEs in your deps.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: upgrades with lockfile diffs and rollback plan.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Missing Security Headers</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: CSP, HSTS, frameguard, etc.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: patches headers and verifies in staging.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Misconfigurations</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: debug mode, public buckets, weak TLS.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: checks envs, hardens infra, sets sane defaults.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Package Supply Chain</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: typosquats, compromised libs.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: pin/verify sources and add provenance.
                </p>
              </article>

              <article className="rounded-xl p-5 bg-card border border-border min-w-[224px] flex-shrink-0 hover:border-accent/50 transition-all">
                <h3 className="font-semibold font-display">Rate Limit & DDoS</h3>
                <p className="mt-2 text-sm text-muted-foreground">What it is: abuse of public endpoints.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kreyo: sensible rate‑limits + IP banlist automation.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Live demo preview */}
      <section id="demo" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold font-display">Watch Kreyo Block an Attack — Live.</h2>
              <p className="mt-3 text-muted-foreground">
                Attacker floods endpoint → Agent blocks IP → Log:{" "}
                <span className="font-mono text-sm">Blocked 1.2.3.4 after 300 failed requests</span>.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-card p-4">
                <pre className="font-mono text-xs leading-6 text-muted-foreground overflow-x-auto">
                  <code>{`[12:01:10] WARN  /api/login 429s spiked (ip 1.2.3.4)
[12:01:11] ACTION add ban 1.2.3.4 (900s)
[12:01:11] OK     rate‑limit policy applied (login)
[12:01:12] INFO   service healthy — no downtime`}</code>
                </pre>
              </div>
            </div>
            <div className="md:col-span-6">
              {/* Placeholder video box */}
              <div className="aspect-video rounded-xl border border-border bg-card grid place-items-center text-muted-foreground">
                Demo video / GIF placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold font-display">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl p-6 bg-card border border-border">
              <div className="text-xs text-muted-foreground">01</div>
              <h3 className="font-semibold font-display mt-1">Connect your app</h3>
              <p className="mt-2 text-muted-foreground">
                Vercel / Replit / GitHub. Read‑only permission by default.
              </p>
            </div>
            <div className="rounded-xl p-6 bg-card border border-border">
              <div className="text-xs text-muted-foreground">02</div>
              <h3 className="font-semibold font-display mt-1">Run 150+ checks</h3>
              <p className="mt-2 text-muted-foreground">
                Multiple engines in parallel, normalized into one clear report.
              </p>
            </div>
            <div className="rounded-xl p-6 bg-card border border-border">
              <div className="text-xs text-muted-foreground">03</div>
              <h3 className="font-semibold font-display mt-1">See fixes instantly</h3>
              <p className="mt-2 text-muted-foreground">
                Non‑destructive enforcement. We propose PRs, logs in plain English.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Safe by design — Kreyo never breaks your app, it just fixes what's unsafe.
          </p>
        </div>
      </section>

      {/* Why trust */}
      <section id="trust" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold font-display">Why trust Kreyo</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>✔ Powered by Semgrep, Snyk, OWASP ZAP, Trivy, ESLint Security, and AWS APIs.</li>
              <li>✔ Non‑destructive enforcement with one‑click rollback.</li>
              <li>✔ Every action logged in plain English.</li>
              <li>✔ Designed for production‑grade Vercel apps.</li>
            </ul>
            <div className="rounded-xl p-6 bg-card border border-border text-sm text-muted-foreground">
              <blockquote className="italic">
                "Smart but safe. Kreyo fixes what other AI agents break."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="cta" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border border-border bg-card rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display">
              Protect your vibe‑coded app before it ships.
            </h2>
            <Button size="lg" className="mt-5 rounded-full">
              Run a Free Scan Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex items-center justify-between text-sm text-muted-foreground">
          <span>Kreyo — AI Security Agent for Vibe‑Coded Apps</span>
          <a className="hover:text-foreground transition-colors" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Aisec;
