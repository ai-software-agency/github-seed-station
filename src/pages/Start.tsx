import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Github, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";

const Connect = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/scanning");
  };

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
            Your app, protected in under a minute.
          </h1>
          <p className="text-lg text-muted-foreground font-sans max-w-lg mx-auto text-center">
            We'll take a quick, read-only look at your code — nothing changes, everything stays safe.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Button
            onClick={handleConnect}
            size="lg"
            className="w-full md:w-auto px-10 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Github className="w-6 h-6 mr-3" />
            Connect with GitHub
          </Button>
          <p className="text-sm text-muted-foreground">
            Takes less than a minute. We'll guide you through every step.
          </p>
        </div>

        {/* Agent Reassurance Section */}
        <div className="text-center mb-6">
          <p className="text-base text-muted-foreground mb-6">
            Your AI security agent works like a co-pilot — safe, private, and zero-setup.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
            <Check className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Read-only access</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Zero-config setup</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Enterprise secure</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Connect;
