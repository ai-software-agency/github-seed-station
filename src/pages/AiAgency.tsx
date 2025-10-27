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
      <section id="top" className="relative isolate pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(255,255,255,.03)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.03)_24px)] bg-[length:24px_24px] [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            Kreyo Confidence Stack
          </span>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold font-display leading-[1.05] tracking-tight mb-6">
            Build fast. Run safe.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Grow confidently.
            </span>
          </h1>

          <p className="text-xl font-sans text-muted-foreground max-w-3xl mx-auto mb-8">
            One orchestrator that reviews, tests, and protects every deploy. Start with <strong className="text-foreground">Vibe Sec — Code & Security Reviewer</strong>: we scan your repo and deliver a crisp <code className="px-1.5 py-0.5 rounded bg-muted/20 text-sm">.md</code> checklist with exact fixes for Replit, Lovable, and V0.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
              ⚡ Connect via GitHub
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" onClick={() => {
              document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              See how it works
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No dashboards, no setup — plug in and it runs behind the scenes.
          </p>

          <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-sm font-semibold text-foreground">
              <strong>Kreyo Confidence Stack</strong> — one orchestrator that reviews, tests, and protects every deploy.
            </p>
          </div>
        </div>
      </section>

      {/* Build → Run → Grow */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-3xl font-bold font-display">Build → Run → Grow</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Optimized for conversion: Try now or join waitlists
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* BUILD */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold font-display">🧠 Build — Code & Security Reviewer</h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20 whitespace-nowrap">
                  Ready
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Automated code review, hard-coded secret detection, and auto-generated smoke tests. Delivers a <code className="px-1 py-0.5 rounded bg-muted/20 text-xs">fixes.md</code> with step-by-step actions for Replit/Lovable/V0.
              </p>
              <Button className="w-full rounded-full" onClick={() => navigate("/waitlist")}>
                Test / Connect your app
              </Button>
            </div>

            {/* RUN */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">🧪 Run — QA & Stability Agent</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Live smoke tests on your critical flows, UI/API monitoring, and dependency health — before users hit issues.
              </p>
              <div className="flex flex-col gap-2">
                <Input type="email" placeholder="you@company.com" className="rounded-xl" />
                <Button variant="outline" className="w-full rounded-full">
                  Join QA Waitlist
                </Button>
              </div>
            </div>

            {/* GROW */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">🔁 Grow — Regression & Resilience Agent</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full regression runs, safe rollbacks, and compliance scans to keep scale from killing stability.
              </p>
              <div className="flex flex-col gap-2">
                <Input type="email" placeholder="you@company.com" className="rounded-xl" />
                <Button variant="outline" className="w-full rounded-full">
                  Join Regression Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-3xl font-bold font-display">How it works</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Zero-dashboard setup
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-background/50 border border-dashed border-border p-5">
              <strong className="block mb-2 text-foreground">1) While you Build</strong>
              <p className="text-sm text-muted-foreground">
                Kreyo reviews commits, flags insecure code, and writes smoke tests automatically.
              </p>
            </div>
            <div className="rounded-xl bg-background/50 border border-dashed border-border p-5">
              <strong className="block mb-2 text-foreground">2) While you Run</strong>
              <p className="text-sm text-muted-foreground">
                Continuous smoke tests catch breakage instantly across real user flows.
              </p>
            </div>
            <div className="rounded-xl bg-background/50 border border-dashed border-border p-5">
              <strong className="block mb-2 text-foreground">3) While you Grow</strong>
              <p className="text-sm text-muted-foreground">
                Automated regression & rollback keep releases safe at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Mini FAQ */}
      <section id="waitlists" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold font-display mb-8">
            Skip the hiring queue — get production-grade confidence today
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">Why Vibe Sec first?</h3>
              <p className="text-sm text-muted-foreground">
                It's the fastest lift in confidence: immediate code review + a clear <code className="px-1 py-0.5 rounded bg-muted/20 text-xs">fixes.md</code> of fixes. No vendor lock-in, works with your stack.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">What do I get?</h3>
              <p className="text-sm text-muted-foreground">
                A private PR comment + a <code className="px-1 py-0.5 rounded bg-muted/20 text-xs">fixes.md</code> file listing exact steps to remediate issues in Replit/Lovable/V0.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">What's next?</h3>
              <p className="text-sm text-muted-foreground">
                QA & Stability Agent and Regression & Resilience Agent. Join the waitlists to get early access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-center text-sm text-muted-foreground">
          <p>Kreyo — Keep your app alive.</p>
        </div>
      </footer>
    </div>
  );
};

export default AiAgency;
