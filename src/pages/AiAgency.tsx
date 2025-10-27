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
      <section id="top" className="relative isolate pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(255,255,255,.03)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.03)_24px)] bg-[length:24px_24px] [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold font-display leading-[1.05] tracking-tight mb-6">
            Keep your app{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              alive after launch.
            </span>
          </h1>

          <p className="text-xl font-sans text-muted-foreground max-w-2xl mx-auto mb-8">
            Building is easy. Keeping your app secure, stable, and bug-free isn't. Kreyo is your AI team that watches your app and tells you what to fix — before it breaks.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold font-display mb-4">No dashboards. No setup. Just results.</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                num: "1",
                title: "Connect your repo",
                desc: "Kreyo scans your code."
              },
              {
                num: "2",
                title: "Get a report",
                desc: "You'll receive a .md file with clear \"what to fix\" notes."
              },
              {
                num: "3",
                title: "Fix it fast",
                desc: "Copy the suggestions straight into Replit, Lovable, or V0."
              },
            ].map((item) => (
              <div key={item.num} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-gray-900">{item.num}</span>
                </div>
                <h3 className="font-semibold font-display text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try It Now - VibeSec */}
      <section id="vibesec" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold font-display mb-4">Try VibeSec — free beta</h2>
          <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
            Instantly see what to fix in your code. Connect your GitHub repo and get a ready-to-use report.
          </p>
          
          <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
            Connect with GitHub
          </Button>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="relative py-16 md:py-24 bg-blue-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold font-display mb-4">Your full AI Agency for Production Apps</h2>
          <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
            Soon, Kreyo will review every change, test your live app, and safely roll back bad updates.
          </p>
          
          <Button size="lg" className="rounded-full" onClick={() => navigate("/waitlist")}>
            Join the Waitlist
          </Button>
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
