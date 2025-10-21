import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please provide both your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Add actual waitlist submission logic here
    // For now, just simulate success
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as we launch.",
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
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
              Join the waitlist for early access
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-lg mx-auto text-center">
              Be among the first to experience AI-powered security for your applications. Get notified when we launch.
            </p>
          </div>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-12">
            <div className="w-full md:w-auto md:min-w-[400px] space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base"
                disabled={isSubmitting}
              />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-10 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
            <p className="text-sm text-muted-foreground">
              No spam, ever. We'll only reach out when we're ready to launch.
            </p>
          </form>

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
