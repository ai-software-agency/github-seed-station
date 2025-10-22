import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/TopNav";
import vercelLogo from "@/assets/vercel-new.png";
import replitLogo from "@/assets/replit-new.png";
import figmaLogo from "@/assets/figma-new.png";
import githubLogo from "@/assets/github-new.png";
import lovableLogo from "@/assets/lovable-new.png";

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

      {/* Integration logos */}
      <section id="integrations" className="py-7 md:py-10 bg-muted/30">
        <div className="mx-auto max-w-7xl px-[15%]">
          <h2 className="text-2xl font-bold font-display text-center mb-12">Kreyo works seamlessly with</h2>
          <div className="flex items-center justify-between gap-6">
            <img src={vercelLogo} alt="Vercel" className="h-32 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={replitLogo} alt="Replit" className="h-32 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={figmaLogo} alt="Figma" className="h-32 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={githubLogo} alt="GitHub" className="h-32 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={lovableLogo} alt="Lovable" className="h-32 object-contain opacity-60 hover:opacity-100 transition-opacity" />
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
