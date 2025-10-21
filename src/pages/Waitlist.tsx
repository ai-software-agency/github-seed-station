import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check, Settings } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import kreyoLogo from "@/assets/kreyo-logo.svg";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [tempWebhookUrl, setTempWebhookUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedWebhook = localStorage.getItem("waitlist_webhook_url");
    if (savedWebhook) {
      setWebhookUrl(savedWebhook);
      setTempWebhookUrl(savedWebhook);
    }
  }, []);

  const saveWebhookUrl = () => {
    localStorage.setItem("waitlist_webhook_url", tempWebhookUrl);
    setWebhookUrl(tempWebhookUrl);
    setIsDialogOpen(false);
    toast({
      title: "Webhook saved",
      description: "Your Zapier webhook URL has been saved.",
    });
  };

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

    if (!webhookUrl) {
      toast({
        title: "Setup required",
        description: "Please configure your Zapier webhook URL first using the settings button.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
          source: "waitlist",
        }),
      });

      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as we launch.",
      });
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting to webhook:", error);
      toast({
        title: "Submission error",
        description: "There was an issue submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center pt-20">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 animate-fade-in">
          {/* Settings Button */}
          <div className="flex justify-end mb-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Webhook
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Configure Zapier Webhook</DialogTitle>
                  <DialogDescription>
                    Enter your Zapier webhook URL to send waitlist signups to Google Sheets or Notion.
                    <br /><br />
                    <strong>How to set this up:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                      <li>Go to <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">Zapier</a> and create a new Zap</li>
                      <li>Choose "Webhooks by Zapier" as the trigger</li>
                      <li>Select "Catch Hook" and copy the webhook URL</li>
                      <li>Paste the webhook URL below</li>
                      <li>Add Google Sheets or Notion as your action</li>
                      <li>Map the fields: name, email, timestamp</li>
                    </ol>
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input
                    type="url"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={tempWebhookUrl}
                    onChange={(e) => setTempWebhookUrl(e.target.value)}
                  />
                  <Button onClick={saveWebhookUrl} className="w-full">
                    Save Webhook URL
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
