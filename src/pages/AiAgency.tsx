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
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
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
            Your AI Agency for Production Grade Apps
          </span>

          <h1 className="text-5xl sm:text-7xl font-extrabold font-display leading-[1.05] tracking-tight mb-6">
            Ship fast. Stay safe.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sleep well.
            </span>
          </h1>

          <p className="text-xl font-sans text-muted-foreground max-w-3xl mx-auto mb-8">
            Vibe coding platforms like Vercel, Replit, and Lovable make it easy to ship apps fast. But fast doesn't mean
            safe or stable. <strong className="text-foreground">Kreyo is your AI Agency</strong> — AI reviewers that
            secure, test, and stabilize your vibe-coded projects so you can move fast without fear.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {/* <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
              ⚡ Connect via GitHub
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => {
                document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See how it works
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No dashboards, no setup — plug in and it runs behind the scenes.
          </p>

          <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-sm font-semibold text-foreground">
              Every push reviewed. Every deploy tested. Every failure caught — before it hits production.
            </p>
          </div>
        </div>
      </section>

      {/* Two AI Agents */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-3xl font-bold font-display">Two AI Agents — Not Ten</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              No dashboards. No complexity.
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Code & Security Reviewer */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold font-display">🧠 Code & Security Reviewer</h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 border border-green-500/20 whitespace-nowrap">
                  Ready
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Stage: Build
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">AI Code Reviews</strong> — style, maintainability, best practices
                <br />
                <strong className="text-foreground">Code Security Checks</strong> — scans source files for security
                flaws
                <br />
                <strong className="text-foreground">Dependency Safety</strong> — audits for outdated or hijacked
                packages
              </p>
              <p className="text-sm italic text-muted-foreground mb-4">
                "Your AI code reviewer that actually keeps your app safe. No mystery edits — just clean, secure,
                reviewed code."
              </p>
              {/* <Button className="w-full rounded-full" onClick={() => navigate("/waitlist")}>
                Connect Your App
              </Button> */}
            </div>

            {/* Application Quality Reviewer */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">🧪 Application Quality Reviewer</h3>
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Stage: Run</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Live Smoke Tests</strong> — real user flow tests pre- and
                post-deploy
                <br />
                <strong className="text-foreground">Automated QA</strong> — regression and UI verification
                <br />
                <strong className="text-foreground">Stability & Performance</strong> — ensure every release still works
              </p>
              <p className="text-sm italic text-muted-foreground mb-4">
                "Your AI tester that runs your app like a user — catching bugs before your users do."
              </p>
              <div className="flex flex-col gap-2">
                <Input type="email" placeholder="you@company.com" className="rounded-xl" />
                <Button variant="outline" className="w-full rounded-full">
                  Join Waitlist
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
              Just AI reviewers that work
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-background/50 border border-dashed border-border p-5">
              <strong className="block mb-2 text-foreground">1) Connect Your Repo</strong>
              <p className="text-sm text-muted-foreground">
                One agent keeps your codebase clean and secure — reviews every push for vulnerabilities, code quality,
                and dependency risks.
              </p>
            </div>
            <div className="rounded-xl bg-background/50 border border-dashed border-border p-5">
              <strong className="block mb-2 text-foreground">2) Run Your App Live</strong>
              <p className="text-sm text-muted-foreground">
                One agent ensures your app behaves correctly in production — runs real user flows, catches what breaks
                before your users do.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">That's it. Two agents, zero noise.</p>
            <p className="text-sm text-muted-foreground">
              No dashboards. No complexity. Just AI reviewers that work — live, safe, explainable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kreyo */}
      <section id="waitlists" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold font-display mb-8">
            The speed of vibe coding. The confidence of production-grade software.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">Why Two Agents?</h3>
              <p className="text-sm text-muted-foreground">
                You don't need a 'platform'. You need clarity and trust. One agent keeps your codebase clean and secure.
                One agent ensures your app behaves correctly. That's it.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">Who is this for?</h3>
              <p className="text-sm text-muted-foreground">
                Prosumer coders like Lemkin and Bhaskar who ship fast but hate when AI tools break their app or silently
                add risk. Move fast without fear.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg">
              <h3 className="text-lg font-semibold font-display mb-3">The Promise</h3>
              <p className="text-sm text-muted-foreground">
                Ship fast. Stay safe. Sleep well. Kreyo gives you the speed of vibe coding with the confidence of
                production-grade software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-center text-sm text-muted-foreground">
          <p>Kreyo.ai — Your AI Safety Net for Vibe-Coded Apps.</p>
        </div>
      </footer>
    </div>
  );
};

export default AiAgency;
