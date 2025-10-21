import { Shield, Check, Settings } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  link: z.string().trim().url({ message: "Please enter a valid URL" }).max(500),
});

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(localStorage.getItem("zapier_webhook") || "");
  const [tempWebhookUrl, setTempWebhookUrl] = useState(webhookUrl);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({
        title: "Configuration Required",
        description: "Please configure your webhook URL in settings first.",
        variant: "destructive",
      });
      return;
    }

    try {
      const validatedData = waitlistSchema.parse({ email, link });
      setIsLoading(true);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: validatedData.email,
          link: validatedData.link,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });

      setEmail("");
      setLink("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveWebhook = () => {
    localStorage.setItem("zapier_webhook", tempWebhookUrl);
    setWebhookUrl(tempWebhookUrl);
    setIsDialogOpen(false);
    toast({
      title: "Webhook Saved",
      description: "Your webhook URL has been saved successfully.",
    });
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Join the Waitlist</h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Configure Webhook</DialogTitle>
                    <DialogDescription>
                      Enter your Zapier webhook URL to receive form submissions. 
                      Create a Zap with a "Catch Hook" trigger and paste the URL here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        placeholder="https://hooks.zapier.com/hooks/catch/..."
                        value={tempWebhookUrl}
                        onChange={(e) => setTempWebhookUrl(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleSaveWebhook} className="w-full">
                      Save Webhook URL
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

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
