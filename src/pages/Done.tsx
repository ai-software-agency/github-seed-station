import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Key, Lock, Eraser, RefreshCw, FileText, Activity, BookOpen, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "@/components/TopNav";

const appliedFixes = [
  {
    id: 1,
    icon: "🔑",
    title: "Removed exposed AWS key",
    description: "moved credentials to environment variables.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Protected admin route",
    description: "added authentication middleware.",
  },
  {
    id: 3,
    icon: "🧹",
    title: "Sanitized user inputs",
    description: "added safe input filtering.",
  },
  {
    id: 4,
    icon: "🔄",
    title: "Updated dependencies",
    description: "replaced known vulnerable packages.",
  },
];

const nextSteps = [
  {
    icon: FileText,
    title: "View full report",
    description: "See detailed logs and code diffs in your GitHub.",
    color: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Monitor your app",
    description: "Stay protected with continuous checks.",
    color: "text-accent",
  },
  {
    icon: BookOpen,
    title: "Learn more",
    description: "Read about how Vibe Agent keeps your app secure.",
    color: "text-purple-500",
  },
];

const Done = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6 mt-8">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center animate-scale-in">
              <Shield className="w-14 h-14 text-accent" />
            </div>
            {/* Confetti effect with animated checkmarks */}
            <div className="absolute -top-2 -right-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute top-0 right-12 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold font-display text-foreground mb-4">
            All secure!
          </h1>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Your fixes are live and your app is now protected. Everything's running safely and securely.
          </p>
        </div>

        {/* Summary Section */}
        <Card className="p-8 mb-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl font-semibold font-display text-foreground mb-6">
            Summary of security actions applied:
          </h2>
          <div className="space-y-4 mb-6">
            {appliedFixes.map((fix, index) => (
              <div
                key={fix.id}
                className="flex items-start gap-3 animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex items-baseline gap-2">
                  <span className="text-base">{fix.icon}</span>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{fix.title}</span>
                    <span className="text-muted-foreground"> — {fix.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Skipped fixes remain unchanged. You can revisit them anytime in your activity log.
            </p>
          </div>
        </Card>

        {/* Next Steps Section */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-xl font-semibold font-display text-foreground mb-4">What's next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-accent/30 transition-all hover:shadow-md cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold font-display text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button size="lg" className="min-w-[200px]">
            View Full Report in GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[200px]"
            onClick={() => navigate("/dashboard")}
          >
            Return to Dashboard
          </Button>
        </div>

        {/* Footer Message */}
        <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
          Security is ongoing. Your agent will notify you if new vulnerabilities are detected.
        </p>
      </div>
      </div>
    </>
  );
};

export default Done;
