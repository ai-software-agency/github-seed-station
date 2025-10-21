import { Shield, Check } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  link: z.string().trim().url({ message: "Please enter a valid URL" }).max(500),
});

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = waitlistSchema.parse({ email, link });
      setIsLoading(true);

      const { data, error } = await supabase
        .from('waitlist')
        .insert({
          email: validatedData.email,
          link: validatedData.link,
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Sync to Google Sheets
      try {
        await supabase.functions.invoke('sync-to-google-sheets', {
          body: { record: data }
        });
      } catch (syncError) {
        console.error('Google Sheets sync error (non-blocking):', syncError);
        // Don't throw - we still want to show success if DB insert worked
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });

      setEmail("");
      setLink("");
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        const errorMessage = error instanceof Error ? error.message : "Failed to submit. Please try again.";
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
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

          {/* Custom Form */}
          <div className="mb-12 bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Join the Waitlist</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link">Website or Project Link</Label>
                <Input
                  id="link"
                  type="url"
                  placeholder="https://yourproject.com"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Sign Up for Waitlist"}
              </Button>
            </form>
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
