import { Card } from "@/components/ui/card";
import { Shield, Key, Lock, CheckCircle2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "@/components/TopNav";

const scanSteps = [
  { id: 1, label: "Scanning for exposed keys", icon: Key, status: "active" },
  { id: 2, label: "Analyzing access controls", icon: Shield, status: "pending" },
  { id: 3, label: "Reviewing unsafe inputs", icon: Lock, status: "pending" },
];

const activityLogs = [
  { time: "00:03", message: "Found API key in config.js → Fix prepared", icon: "🔑" },
  { time: "00:07", message: "Added missing access rule for /admin route → Fix prepared", icon: "🛡️" },
];

const Scanning2 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<typeof activityLogs>([]);

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate("/results"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Simulate step progression
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < scanSteps.length - 1 ? prev + 1 : prev));
    }, 4000);

    // Simulate log additions
    const logTimeout1 = setTimeout(() => setLogs([activityLogs[0]]), 1000);
    const logTimeout2 = setTimeout(() => setLogs(activityLogs), 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(logTimeout1);
      clearTimeout(logTimeout2);
    };
  }, [navigate]);

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold font-display text-foreground mb-2">
            Running your security checkup…
          </h1>
          <p className="text-muted-foreground font-sans">
            Your agent is reviewing your code and preparing safe fixes.
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 mb-6 bg-card border-border">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-foreground">Security checkup in progress</span>
              <span className="text-sm font-semibold text-primary">{progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Status Checklist */}
          <div className="space-y-3 mb-8">
            {scanSteps.map((step, index) => {
              const Icon = step.icon;
              const isDone = index < currentStep;
              const isActive = index === currentStep;
              
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isDone ? "bg-accent/20" : isActive ? "bg-accent/10" : "bg-secondary/50"
                  }`}
                >
                  <div className={`w-5 h-5 flex items-center justify-center ${
                    isDone ? "text-accent" : isActive ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : isActive ? (
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    isDone || isActive ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Activity Log */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold font-display text-foreground mb-4">Activity log</h3>
            <div className="space-y-3">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-base">{log.icon}</span>
                    <p className="text-sm text-foreground">{log.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground">
          Your agent prepares fixes automatically. You'll review and apply them safely before deployment.
        </p>
      </div>
      </div>
    </>
  );
};

export default Scanning2;
