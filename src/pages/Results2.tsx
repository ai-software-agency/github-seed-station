import { TopNav } from "@/components/TopNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, Key, Lock, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const issues = [
  {
    id: 1,
    title: "API key moved to environment variable",
    description: "A hardcoded AWS key was found. The agent prepared a fix that moves it to a secure environment variable.",
    priority: "High priority",
    icon: Key,
    iconColor: "text-destructive",
    subtext: "Your agent moved the hardcoded key to a secure environment variable so it's never exposed in your code.",
    problemDescription: "Your AWS API key was hardcoded directly in config.js. This means anyone with access to your repository could use your credentials, potentially leading to unauthorized access and unexpected charges.",
    solutionDescription: "We moved the API key to an environment variable (.env file) and updated your code to read it securely. Your credentials are now protected and never committed to version control.",
    codeBefore: `const AWS_KEY = "AKIAIOSFODNN7EXAMPLE";\nconst client = new AWSClient(AWS_KEY);`,
    codeAfter: `const AWS_KEY = process.env.AWS_KEY;\nconst client = new AWSClient(AWS_KEY);`,
    affectedFile: "/config/aws.js",
    timestamp: "Today at 10:21 AM",
  },
  {
    id: 2,
    title: "Unauthorized admin route protected",
    description: "Your admin page was open to anyone. The agent prepared an authentication check.",
    priority: "High priority",
    icon: Shield,
    iconColor: "text-destructive",
    subtext: "Your agent added an authentication check so only logged-in users can access this page.",
    problemDescription: "Your /admin page was publicly accessible without a login. This could allow anyone to view or change admin data.",
    solutionDescription: "We added an authentication check so only authorized users can reach that page. Your app continues running safely.",
    codeBefore: `app.get("/admin", adminHandler);`,
    codeAfter: `app.get("/admin", authMiddleware, adminHandler);`,
    affectedFile: "/routes/admin.js",
    timestamp: "Today at 10:22 AM",
  },
  {
    id: 3,
    title: "User input sanitized",
    description: "Unsafe input filtering detected. The agent added safe sanitization.",
    priority: "Medium",
    icon: Lock,
    iconColor: "text-orange-500",
    subtext: "Your agent added input sanitization to prevent malicious code from being executed.",
    problemDescription: "User-submitted content wasn't being sanitized, which could allow attackers to inject malicious scripts (XSS attacks) that run in other users' browsers.",
    solutionDescription: "We added input sanitization that removes potentially harmful code while preserving safe content. Your users are now protected from cross-site scripting attacks.",
    codeBefore: `const comment = req.body.comment;\ndb.save(comment);`,
    codeAfter: `const comment = sanitize(req.body.comment);\ndb.save(comment);`,
    affectedFile: "/controllers/comments.js",
    timestamp: "Today at 10:25 AM",
  },
];

const ScanComplete2 = () => {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState<typeof issues[0] | null>(null);

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-background flex items-center justify-center pt-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-accent" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold font-display text-foreground mb-3">
            Scan complete — your fixes are ready to apply.
          </h1>
          <p className="text-muted-foreground font-sans">
            Your agent identified 3 issues and prepared safe fixes. Review them below before applying.
          </p>
        </div>

        {/* Results List */}
        <div className="space-y-4 mb-6">
          {issues.map((issue) => {
            const Icon = issue.icon;
            return (
              <Card
                key={issue.id}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ${issue.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-base font-semibold font-display text-foreground">
                        {issue.title}
                      </h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                        issue.priority === "High priority" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-orange-500/10 text-orange-600"
                      }`}>
                        {issue.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {issue.description}
                    </p>
                    <button 
                      onClick={() => setSelectedIssue(issue)}
                      className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      View details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Button 
            size="lg" 
            className="flex-1"
            onClick={() => navigate("/done")}
          >
            Apply Fixes Safely Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1"
            onClick={() => navigate("/activity")}
          >
            View Details Before Finalizing
          </Button>
        </div>

        {/* Footer Box */}
        <Card className="p-6 bg-accent/10 border-accent/30">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              All changes are reviewed and reversible. Once you apply them, your app will be secured and ready to deploy.
            </p>
          </div>
        </Card>

        {/* Details Modal */}
        <Dialog open={!!selectedIssue} onOpenChange={(open) => !open && setSelectedIssue(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start gap-3 mb-2">
                {selectedIssue && (
                  <>
                    <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ${selectedIssue.iconColor}`}>
                      <selectedIssue.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-xl font-semibold font-display text-foreground mb-1">
                        {selectedIssue.title}
                      </DialogTitle>
                      <p className="text-sm text-muted-foreground font-sans">
                        {selectedIssue.subtext}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </DialogHeader>

            {selectedIssue && (
              <div className="space-y-6 mt-4">
                {/* What We Found */}
                <div>
                  <h3 className="text-sm font-semibold font-display text-foreground mb-2">What We Found</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {selectedIssue.problemDescription}
                  </p>
                </div>

                {/* What We Fixed */}
                <div>
                  <h3 className="text-sm font-semibold font-display text-foreground mb-2">What We Fixed</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {selectedIssue.solutionDescription}
                  </p>
                </div>

                {/* Code Changes */}
                <div>
                  <h3 className="text-sm font-semibold font-display text-foreground mb-3">
                    Code changes (for your reference)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-destructive mb-1.5">- Before</div>
                      <pre className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 overflow-x-auto">
                        <code className="text-xs text-foreground font-mono whitespace-pre">
                          {selectedIssue.codeBefore}
                        </code>
                      </pre>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-accent mb-1.5">+ After</div>
                      <pre className="bg-accent/5 border border-accent/20 rounded-lg p-3 overflow-x-auto">
                        <code className="text-xs text-foreground font-mono whitespace-pre">
                          {selectedIssue.codeAfter}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Fix Info Summary */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">File:</span>
                    <code className="bg-secondary px-2 py-0.5 rounded text-foreground">
                      {selectedIssue.affectedFile}
                    </code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">Verified:</span>
                    <span className="inline-flex items-center gap-1 text-accent">
                      <CheckCircle2 className="w-4 h-4" />
                      Yes
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">Timestamp:</span>
                    <span className="text-muted-foreground">{selectedIssue.timestamp}</span>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedIssue(null)}
                  >
                    Close
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View in GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      </div>
    </>
  );
};

export default ScanComplete2;