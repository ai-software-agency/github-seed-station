import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TopNav } from "@/components/TopNav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import vercelLogo from "@/assets/vercel-new.png";
import replitLogo from "@/assets/replit-new.png";
import figmaLogo from "@/assets/figma-new.png";
import githubLogo from "@/assets/github-new.png";
import lovableLogo from "@/assets/lovable-new.png";
import curveWave from "@/assets/curve-wave.svg";

const MetricCounter = ({ label, end }: { label: string; end: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="space-y-1">
      <h3 className="text-4xl xl:text-5xl font-extrabold font-display tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        {count.toLocaleString()}
      </h3>
      <p className="text-sm text-muted-foreground font-sans">{label}</p>
    </div>
  );
};

const Website = () => {
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
      <section
        id="top"
        className="relative isolate pt-28 md:pt-36 xl:pt-44 2xl:pt-52 pb-16 md:pb-24 xl:pb-32 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(255,255,255,.03)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.03)_24px)] bg-[length:24px_24px] [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 2xl:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                <span className="text-muted-foreground">AI partner for builders</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold font-display leading-[1.05] xl:leading-[1.1] tracking-tight max-w-5xl">
                Ship vibe‑coded apps with{" "}
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  production grade
                </span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  confidence
                </span>
              </h1>

              <div className="text-lg font-sans max-w-2xl space-y-1.5">
                <p className="text-muted-foreground">
                  You build with AI tools like ChatGPT, Figma, Cursor, Replit, v0, Lovable. Now it's time to ship.
                </p>
                <p className="font-bold text-primary">
                  Kreyo makes your app production-ready — tested, secured, monitored, and maintained.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                {/* <Button onClick={() => navigate("/waitlist")} size="lg" className="rounded-full">
                  Join Waitlist
                </Button> */}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-6 bg-card border border-border shadow-lg transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                <h3 className="text-sm font-semibold font-display text-muted-foreground mb-4">
                  From connect to confident
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    {
                      num: "1",
                      title: "Connect your app",
                      desc: "Link your GitHub, Replit, or Lovable project in seconds.",
                    },
                    {
                      num: "2",
                      title: "Scan for issues",
                      desc: "Kreyo runs 150+ checks to find security and quality issues.",
                    },
                    {
                      num: "3",
                      title: "Get clear next steps",
                      desc: "Get fix prompts you can apply in your own environment.",
                    },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-900">{step.num}</span>
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

      {/* Wave separator */}
      <div className="w-full overflow-hidden leading-[0]">
        <img src={curveWave} alt="" className="w-full h-[50%] block" />
      </div>

      {/* How Kreyo fits your stack */}
      <section id="fit" className="relative py-16 md:py-24 xl:py-32 2xl:py-40" style={{ backgroundColor: "#a084dc" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display text-white">How Kreyo fits your stack</h2>
            <p className="mt-3 text-white font-sans">Bring your existing tools — we meet you where you build.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10">
            {[
              {
                title: "Plan & Design",
                tools: "ChatGPT · Figma · Canva · Lovable",
                desc: "Turn your idea into a clear plan — describe what you want and visualize how it should look.",
                isHighlighted: false,
              },
              {
                title: "Code & Compose",
                tools: "Cursor · Replit · v0 · Lovable",
                desc: "Build the first working version of your app using simple AI-powered coding tools.",
                isHighlighted: false,
              },
              {
                title: "Production Readiness",
                tools: "Kreyo",
                desc: "Make your app safe, stable, and ready to ship — with automated checks, testing, and monitoring.",
                isHighlighted: true,
                whiteText: true,
              },
            ].map((item) => (
              <article
                key={item.title}
                className={`rounded-2xl p-5 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] ${
                  item.isHighlighted ? "bg-gradient-to-br from-accent/20 via-secondary/15 to-primary/10" : "bg-card"
                }`}
              >
                <h3 className={`font-semibold font-display ${item.whiteText ? "text-white" : ""}`}>{item.title}</h3>
                <p className={`text-sm font-sans ${item.whiteText ? "text-white" : "text-muted-foreground"}`}>
                  {item.tools}
                </p>
                <p className={`mt-1.5 text-sm font-sans ${item.whiteText ? "text-white" : "text-muted-foreground"}`}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How Kreyo works */}
      <section id="how" className="relative py-16 md:py-24 xl:py-32 2xl:py-40 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">How Kreyo works</h2>
            <p className="mt-3 text-muted-foreground font-sans">From connection to continuous protection in minutes.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 xl:gap-8 2xl:gap-10">
            {[
              {
                num: "01",
                title: "Connect your app",
                desc: "Link your GitHub, Replit, or Lovable project in seconds. Read-only access.",
                comingSoon: false,
              },
              {
                num: "02",
                title: "Scan for issues",
                desc: "Kreyo runs 150+ checks to find security and quality issues in your code.",
                comingSoon: false,
              },
              {
                num: "03",
                title: "Review & prepare to ship",
                desc: "Get fix prompts and clear reports. Apply fixes in your environment, then re-scan to verify.",
                comingSoon: true,
              },
              {
                num: "04",
                title: "Stay protected",
                desc: "Continuous monitoring tracks uptime and performance. Get instant alerts and compliance-ready reports.",
                comingSoon: true,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl p-5 bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] relative"
              >
                {item.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent border border-accent/20">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-gray-900">{item.num}</span>
                </div>
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kreyo / Trust */}
      <section id="trust" className="relative py-16 md:py-24 xl:py-32 2xl:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">Why Kreyo</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Kreyo helps builders ship confidently — no security team required.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left side: 2×2 grid of mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] hover:-translate-y-0.5">
                <h3 className="font-semibold font-display mb-2">🏗️  Made for serious builders</h3>
                <p className="text-sm text-muted-foreground font-sans">Production-grade protection for real apps</p>
              </div>

              <div className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] hover:-translate-y-0.5">
                <h3 className="font-semibold font-display mb-2">💬 Clear and human</h3>
                <p className="text-sm text-muted-foreground font-sans">Plain-English reports and one-click actions</p>
              </div>

              <div className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] hover:-translate-y-0.5">
                <h3 className="font-semibold font-display mb-2">🔌 Works with what you use</h3>
                <p className="text-sm text-muted-foreground font-sans">Plugs into your existing tools seamlessly</p>
              </div>

              <div className="rounded-2xl p-5 bg-blue-50/30 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] hover:-translate-y-0.5">
                <h3 className="font-semibold font-display mb-2">⚡ Fast to value</h3>
                <p className="text-sm text-muted-foreground font-sans">From sign-up to first scan in under a minute</p>
              </div>
            </div>

            {/* Right side: Outcome card */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-accent/20 via-secondary/15 to-primary/10 border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,140,66,0.15)] flex flex-col justify-center">
              <h3 className="font-semibold font-display mb-4">What success looks like</h3>
              <ul className="space-y-3 text-sm text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✔</span>
                  <span>Your app passes security and quality checks before shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✔</span>
                  <span>You ship with confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✔</span>
                  <span>You stay protected with continuous monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Video Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 items-center">
            {/* Left Column - Metrics */}
            <div className="lg:col-span-1 space-y-6">
              <MetricCounter label="Projects scanned today" end={2458} />
              <MetricCounter label="Issues fixed" end={8123} />
              <MetricCounter label="Active integrations" end={312} />
            </div>

            {/* Right Column - Video */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="relative pb-[60%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/4t_mc4kl-04?autoplay=1&mute=1&loop=1&playlist=4t_mc4kl-04&controls=0&modestbranding=1&rel=0"
                    title="Kreyo Demo"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 md:py-24 xl:py-32 2xl:py-40 bg-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold font-display">Get Help & Connect Kreyo</h2>
            <p className="mt-3 text-muted-foreground font-sans">
              Find quick guides for Replit, Lovable, and Vercel — and answers to the most common questions about how
              Kreyo works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column - Platform Connection Guides */}
            <div className="lg:col-span-5">
              <Accordion type="single" collapsible className="space-y-1.5 md:space-y-2">
                {/* Replit Card */}
                <AccordionItem value="replit" className="border-none">
                  <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-card transition data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30">
                    <div className="flex items-center gap-4">
                      <img src={replitLogo} alt="Replit" className="w-12 h-12 object-contain flex-shrink-0" />
                      <span className="font-medium text-base md:text-lg text-foreground">
                        Connect Kreyo with Replit
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 md:px-6">
                    <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground pl-7">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Sign in to Replit.</li>
                        <li>
                          In the left panel, open <strong>Integrations</strong> → connect <strong>GitHub</strong> and
                          authorize access (one or all repos).
                        </li>
                        <li>
                          Open your project (e.g., <em>HelloColorful</em>).
                        </li>
                        <li>
                          Open <strong>Tools & Files</strong> → <strong>Git</strong>.
                        </li>
                        <li>
                          Click <strong>Connect to GitHub</strong> → <strong>Install Replit</strong> on GitHub → choose
                          the repo (or all repos).
                        </li>
                        <li>
                          Back in Replit, click <strong>Create Remote Repository</strong> to link and start pushing.
                        </li>
                        <li>Changes you make in Replit will now sync to GitHub automatically.</li>
                        <li>Return to Kreyo and select the new GitHub repo to start your scan.</li>
                      </ol>
                      <p className="text-xs text-muted-foreground mt-3">Read-only access. No code changes.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Lovable Card */}
                <AccordionItem value="lovable" className="border-none">
                  <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-card transition data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30">
                    <div className="flex items-center gap-4">
                      <img src={lovableLogo} alt="Lovable" className="w-12 h-12 object-contain flex-shrink-0" />
                      <span className="font-medium text-base md:text-lg text-foreground">
                        Connect Kreyo with Lovable
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 md:px-6">
                    <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground pl-7">
                      <p>Follow these steps to push your Lovable project to GitHub, then select the repo in Kreyo.</p>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Open your Lovable project.</li>
                        <li>Navigate to the GitHub connection settings.</li>
                        <li>Authorize Lovable to access your GitHub account.</li>
                        <li>Create or select a repository to connect.</li>
                        <li>Confirm the connection and allow Lovable to push your code.</li>
                        <li>Once synced, return to Kreyo and select the GitHub repo.</li>
                        <li>Start your security scan and review the results.</li>
                        <li>Apply suggested fixes within Lovable using the provided prompts.</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Vercel Card */}
                <AccordionItem value="vercel" className="border-none">
                  <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-card transition data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30">
                    <div className="flex items-center gap-4">
                      <img src={vercelLogo} alt="Vercel" className="w-12 h-12 object-contain flex-shrink-0" />
                      <span className="font-medium text-base md:text-lg text-foreground">
                        Connect Kreyo with Vercel
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 md:px-6">
                    <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground pl-7">
                      <p>Follow these steps to connect your Vercel project with GitHub, then scan with Kreyo.</p>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Log in to your Vercel account.</li>
                        <li>Navigate to your project settings.</li>
                        <li>Find the Git integration section.</li>
                        <li>Connect to your GitHub account if not already linked.</li>
                        <li>Select or create a repository for your Vercel project.</li>
                        <li>Confirm the integration and ensure code is syncing.</li>
                        <li>Head to Kreyo and select the connected GitHub repo.</li>
                        <li>Run your scan and review security recommendations.</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="lg:col-span-7">
              <div className="max-w-prose">
                <Accordion type="single" collapsible className="space-y-1.5 md:space-y-2">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">What is Kreyo?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Kreyo helps you find and fix security issues in your app — without ever changing your code.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">Who is Kreyo for?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Kreyo is built for builders who create apps with AI tools and want to ship production-ready
                        apps.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">How does Kreyo work?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Back up your app to GitHub (we'll guide you if you're new to that).</li>
                          <li>Visit app.kreyo.ai and log in with your GitHub ID.</li>
                          <li>Connect your project with Kreyo.</li>
                          <li>Kreyo scans your code for security issues.</li>
                          <li>We show you what we found, along with fix prompts.</li>
                          <li>Apply fixes in your own environment.</li>
                          <li>Re-scan to confirm everything's secure.</li>
                        </ol>
                        <p className="mt-3">Read-only access. No code changes.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Does Kreyo change or store my code?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        No. Kreyo runs read-only scans. All fixes happen in your own environment.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          What happens after I connect my GitHub repo?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Once connected, Kreyo scans your project and provides fix prompts you can apply in your own
                        environment.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Which AI models can I use?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        You can pick from top models like OpenAI, Anthropic, or Meta — whichever you trust or already
                        use.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          How does Kreyo fix vulnerabilities?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Kreyo doesn't directly fix your code. Instead, it generates precise, secure prompts that you can
                        paste into your preferred AI coding assistant. This way, the fix is applied by your own coding
                        app, keeping your workflow safe and in your control.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Can I scan again after fixing issues?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Absolutely. Once you've applied the fixes, you can rescan your app anytime to confirm that
                        vulnerabilities are resolved.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Is my project safe with Kreyo?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Yes. Kreyo runs read-only scans and never modifies your code.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          What do I need to get started?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Just a GitHub account and your app code backed up there. From there, it's as easy as logging
                        into app.kreyo.ai and connecting your repo.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-11" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-3 md:py-4 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Why should I use Kreyo?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Because security shouldn't slow you down. Kreyo helps you find and fix vulnerabilities using AI
                        — fast, simple, and fully in your control.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration logos */}
      <section id="integrations" className="py-4 md:py-6 xl:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold font-display text-center mb-6 xl:mb-8">
            Kreyo works seamlessly with
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6 xl:gap-8 2xl:gap-10">
            <img
              src={vercelLogo}
              alt="Vercel"
              className="h-16 md:h-24 lg:h-32 xl:h-36 2xl:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src={replitLogo}
              alt="Replit"
              className="h-16 md:h-24 lg:h-32 xl:h-36 2xl:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src={figmaLogo}
              alt="Figma"
              className="h-16 md:h-24 lg:h-32 xl:h-36 2xl:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src={githubLogo}
              alt="GitHub"
              className="h-16 md:h-24 lg:h-32 xl:h-36 2xl:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src={lovableLogo}
              alt="Lovable"
              className="h-16 md:h-24 lg:h-32 xl:h-36 2xl:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-16 md:py-24 xl:py-32 2xl:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-bold font-display">Stay ahead of every new release</h2>
              <p className="mt-3 text-muted-foreground font-sans">
                Sign up to get early updates, product drops, and invite-only access when we roll out new scanning and
                fix tools.
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
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
