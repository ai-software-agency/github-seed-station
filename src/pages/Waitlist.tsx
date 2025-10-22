import { Shield, Check } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";
import { useEffect } from "react";

const Waitlist = () => {
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
    <>
      <TopNav />
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center pt-20">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 animate-fade-in">
          {/* Hero Section with Animated Shield */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <img src={kreyoLogo} alt="Kreyo Logo" className="w-12 h-12" />
              </div>
              <div className="absolute -top-[11px] -right-[11px] animate-pulse">
                <Shield className="w-10 h-10 text-accent fill-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 text-center">
              Join the waitlist for early access
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-lg mx-auto text-center">
              Be among the first to experience AI-powered security for your applications. Get notified when we launch.
            </p>
          </div>

          {/* Typeform Embed */}
          <div className="mb-12 bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div data-tf-live="01K83NFP5ZQCW1JAF8JGA3GDXF"></div>
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-6">
            <p className="text-base text-muted-foreground mb-6">
              Get exclusive early access to our AI security platform
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Early access perks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Priority support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Special pricing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waitlist;
