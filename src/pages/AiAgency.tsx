import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopNav } from "@/components/TopNav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import vercelLogo from "@/assets/vercel-new.png";
import replitLogo from "@/assets/replit-new.png";
import figmaLogo from "@/assets/figma-new.png";
import githubLogo from "@/assets/github-new.png";
import lovableLogo from "@/assets/lovable-new.png";
import curveWave from "@/assets/curve-wave.svg";

const AiAgency = () => {
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
                Build fast. Run safe.{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Grow confidently.
                </span>
              </h1>

              <div className="text-lg font-sans max-w-2xl">
                <p className="text-muted-foreground">
                  Kreyo adds AI-powered QA and security to your vibe-coded app — automated code reviews, live smoke testing, and regression runs — so you can ship fast without fear.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Button onClick={() => navigate("/waitlist")} size="lg" className="rounded-full">
                  Run a Free Scan
                </Button>
                <Button onClick={() => navigate("#how")} variant="outline" size="lg" className="rounded-full">
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-card border border-border shadow-lg transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <h3 className="text-sm font-semibold font-display text-muted-foreground mb-4">
                  You → Replit / Vercel / Lovable → Kreyo
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-foreground">→</span>
                    <span>Code Review ✅</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-foreground">→</span>
                    <span>QA Tests ✅</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-foreground">→</span>
                    <span>Rollback ✅</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave separator */}
      <div className="w-full overflow-hidden leading-[0]">
        <img src={curveWave} alt="" className="w-full h-[50%] block" />
      </div>

      {/* The Problem */}
      <section id="problem" className="relative py-16 md:py-24" style={{ backgroundColor: '#a084dc' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display text-white">Vibe coding made building easy — not reliable.</h2>
            <p className="mt-3 text-white font-sans">
              Vibe-coded apps ship with zero QA and no guardrails. One hallucinated prompt or bad dependency can break production or leak data. You need something that keeps your app working after you deploy it.
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-accent/20 via-secondary/15 to-primary/10 border border-white/20">
            <p className="text-xl md:text-2xl font-semibold text-white text-center font-display">
              "We make sure your app still works after you ship it."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">The AI Agency for Production Apps</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Kreyo connects to your Vercel or Replit app and runs a full production confidence stack: code reviews, live smoke tests, regression testing, and auto rollback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                stage: "Build",
                what: "AI code reviews, security scans, auto-generated smoke tests",
                why: "Catch bugs and leaks before deploy"
              },
              {
                stage: "Run",
                what: "Continuous QA and dependency checks",
                why: "Stay online and error-free"
              },
              {
                stage: "Grow",
                what: "Automated regression and rollback",
                why: "Scale safely without downtime"
              },
            ].map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <h3 className="font-semibold font-display text-lg mb-2">{item.stage}</h3>
                <p className="text-sm text-foreground font-sans mb-2">{item.what}</p>
                <p className="text-sm text-muted-foreground font-sans italic">{item.why}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full" onClick={() => navigate("#how")}>
              Watch the Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">How it works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Connect",
                desc: "Link your Replit, Lovable, or Vercel project.",
              },
              {
                num: "02",
                title: "Review",
                desc: "Kreyo inspects your code for logic and security issues.",
              },
              {
                num: "03",
                title: "Test & Watch",
                desc: "Live Cypress-style tests run automatically.",
              },
              {
                num: "04",
                title: "Recover & Improve",
                desc: "Auto rollback on failure with plain-English logs.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl p-5 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-gray-900">{item.num}</span>
                </div>
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground font-sans">
            <p>Flow: build → test → detect issue → rollback → success</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: "AI Code Reviews",
                desc: "Detect logic and security flaws before release."
              },
              {
                title: "Live Smoke Testing",
                desc: "Continuous user-journey tests with Cypress or Playwright."
              },
              {
                title: "Automated Regression",
                desc: "Full UI and API test suites on every deploy."
              },
              {
                title: "Security Scans",
                desc: "Check code and dependencies for vulnerabilities."
              },
              {
                title: "Safe Rollbacks",
                desc: "Instant restore when a deploy fails."
              },
              {
                title: "Plain-English Logs",
                desc: "Explains what happened — no dashboards needed."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
              Run My First Scan
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
              <p className="text-lg font-sans text-foreground mb-4">"I built my first SaaS app in Replit. Kreyo keeps it alive."</p>
              <p className="text-sm text-muted-foreground font-sans italic">— Jason L., SaaS Founder</p>
            </div>
            <div className="rounded-2xl p-6 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
              <p className="text-lg font-sans text-foreground mb-4">"Feels like having a QA and security team on call."</p>
              <p className="text-sm text-muted-foreground font-sans italic">— Bhaskar, Indie Builder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">Who it's for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: "🧑‍💻",
                persona: "Prosumer Founders",
                useCase: "Shipping their first real SaaS product"
              },
              {
                icon: "🧑‍🎓",
                persona: "Indie Builders",
                useCase: "Need automated QA and security"
              },
              {
                icon: "🧑‍💼",
                persona: "Small Agencies",
                useCase: "Managing multiple client apps safely"
              },
            ].map((item) => (
              <div
                key={item.persona}
                className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold font-display mb-2">{item.persona}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.useCase}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
              Join Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-4 md:py-6 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-sm text-muted-foreground font-sans mb-4">
            Powered by: <strong>Semgrep · Snyk · Cypress · Datadog · Harness · Drata</strong>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Don't just ship. Stay up.</h2>
            <p className="text-lg text-muted-foreground font-sans">
              Kreyo runs your code reviews, QA, and security — automatically.<br />
              Build like a creator. Run like an engineer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
                Run a Free Scan
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
                Talk to the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Kreyo — The AI Agency for Production Apps</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="#problem">
              The Problem
            </a>
            <a className="hover:text-foreground" href="#solution">
              Solution
            </a>
            <a className="hover:text-foreground" href="#how">
              How it Works
            </a>
            <a className="hover:text-foreground" href="#features">
              Features
            </a>
            <a className="hover:text-foreground" href="#who">
              Who It's For
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AiAgency;
