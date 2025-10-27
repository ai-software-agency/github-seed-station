import { TopNav } from "@/components/TopNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, CheckCircle2, ChevronDown, Download, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const highPriorityIssues = [
  {
    id: 1,
    text: "Secure how logins and passwords are handled.",
    details: {
      problem: "Your authentication system stores passwords without proper encryption. This means if someone gains access to your database, they could read all user passwords.",
      solution: "We implemented bcrypt hashing for all passwords and added secure session management. User credentials are now protected even if the database is compromised.",
      codeBefore: `const password = req.body.password;\ndb.users.create({ email, password });`,
      codeAfter: `const password = await bcrypt.hash(req.body.password, 10);\ndb.users.create({ email, password });`,
      affectedFile: "/auth/register.js",
    }
  },
  {
    id: 2,
    text: "Restrict admin access to trusted users only.",
    details: {
      problem: "Your admin panel is accessible to anyone who knows the URL. There's no verification that the user should have admin privileges.",
      solution: "We added role-based access control (RBAC) that checks user permissions before allowing access to admin features. Only authorized users can now access sensitive functions.",
      codeBefore: `app.get("/admin", adminDashboard);`,
      codeAfter: `app.get("/admin", requireAuth, requireRole('admin'), adminDashboard);`,
      affectedFile: "/routes/admin.js",
    }
  },
  {
    id: 3,
    text: "Add expiration rules for active sessions.",
    details: {
      problem: "User sessions never expire, meaning a stolen session token could be used indefinitely to access an account.",
      solution: "We implemented 24-hour session expiration with automatic token refresh. Sessions now expire after inactivity, and users are safely logged out.",
      codeBefore: `const session = createSession(userId);`,
      codeAfter: `const session = createSession(userId, { expiresIn: '24h', refreshable: true });`,
      affectedFile: "/auth/session.js",
    }
  },
];

const laterImprovements = [
  {
    id: 4,
    text: "End sessions after logout to keep things tidy.",
    details: {
      problem: "When users log out, their session tokens remain valid in the system. This creates unnecessary data accumulation and potential security risks.",
      solution: "We added automatic session cleanup on logout. Tokens are immediately invalidated and removed from the server, keeping your session store clean.",
      codeBefore: `app.post("/logout", (req, res) => res.redirect("/login"));`,
      codeAfter: `app.post("/logout", (req, res) => {\n  req.session.destroy();\n  res.clearCookie('sessionId');\n  res.redirect("/login");\n});`,
      affectedFile: "/auth/logout.js",
    }
  },
  {
    id: 5,
    text: "Add basic limits to repeated logins.",
    details: {
      problem: "Unlimited login attempts allow attackers to try thousands of password combinations (brute force attacks) without any restriction.",
      solution: "We implemented rate limiting that temporarily blocks IP addresses after 5 failed login attempts. This protects against automated password guessing.",
      codeBefore: `app.post("/login", loginHandler);`,
      codeAfter: `app.post("/login", rateLimit({ max: 5, windowMs: 15 * 60 * 1000 }), loginHandler);`,
      affectedFile: "/routes/auth.js",
    }
  },
  {
    id: 6,
    text: "Review privacy settings for smoother compliance.",
    details: {
      problem: "Your app collects user data without clear privacy policies or consent mechanisms, which could violate GDPR and other privacy regulations.",
      solution: "We added a privacy policy page, cookie consent banner, and data export functionality. Users now have transparency and control over their data.",
      codeBefore: `// No privacy policy implementation`,
      codeAfter: `app.get("/privacy", privacyPolicyHandler);\napp.use(cookieConsent());\napp.get("/data/export", exportUserData);`,
      affectedFile: "/routes/legal.js",
    }
  },
];

const ScanComplete2 = () => {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState<typeof highPriorityIssues[0] | typeof laterImprovements[0] | null>(null);
  const [highPriorityOpen, setHighPriorityOpen] = useState(true);
  const [laterImprovementsOpen, setLaterImprovementsOpen] = useState(true);

  const securityHealth = 85;

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 animate-fade-in">
          {/* Hero Summary */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-scale-in">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold font-display text-foreground mb-4">
              Scan complete — here's what we found.
            </h1>
            <p className="text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
              Your agent checked your app's setup and found a few ways to strengthen it.
            </p>

            {/* Security Health Meter */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold font-display text-foreground">Security Health</span>
                <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {securityHealth}%
                </span>
              </div>
              <Progress value={securityHealth} className="h-3" />
            </div>

            {/* Stats Line */}
            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground font-sans bg-muted/50 px-6 py-3 rounded-full border border-border">
              <span className="flex items-center gap-1.5">
                🔍 <span className="font-medium text-foreground">20</span> checks completed
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-destructive" />
                <span className="font-medium text-foreground">5</span> high-priority fixes
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-foreground">4</span> minor tweaks
              </span>
            </div>
          </div>

          {/* Results Summary */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {/* Fix Now Section */}
            <Collapsible open={highPriorityOpen} onOpenChange={setHighPriorityOpen}>
              <Card className="overflow-hidden border-destructive/20 transition-all duration-300 hover:border-destructive/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-6 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl font-bold font-display text-foreground">Fix Now (High Impact)</h2>
                        <p className="text-sm text-muted-foreground font-sans">3 critical improvements to secure your app</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${highPriorityOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-4">
                    {highPriorityIssues.map((issue) => (
                      <div key={issue.id} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border hover:border-destructive/30 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold text-destructive">{issue.id}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-sans text-foreground mb-2">{issue.text}</p>
                          <button 
                            onClick={() => setSelectedIssue(issue)}
                            className="text-xs text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Later Improvements Section */}
            <Collapsible open={laterImprovementsOpen} onOpenChange={setLaterImprovementsOpen}>
              <Card className="overflow-hidden border-orange-500/20 transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-6 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-500" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl font-bold font-display text-foreground">Later Improvements (Nice to Have)</h2>
                        <p className="text-sm text-muted-foreground font-sans">3 suggestions to enhance your setup</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${laterImprovementsOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-4">
                    {laterImprovements.map((issue) => (
                      <div key={issue.id} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border hover:border-orange-500/30 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold text-orange-500">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-sans text-foreground mb-2">{issue.text}</p>
                          <button 
                            onClick={() => setSelectedIssue(issue)}
                            className="text-xs text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>

          {/* Next Steps CTA */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1 rounded-full"
                onClick={() => navigate("/done")}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Fix Plan
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 rounded-full"
                onClick={() => navigate("/activity")}
              >
                View Details Before Finalizing
              </Button>
            </div>

            {/* Reassurance Box */}
            <Card className="p-6 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border-accent/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-sans">
                  <strong className="font-semibold">Your app's foundation is strong.</strong> These fixes will make it production-ready.
                </p>
              </div>
            </Card>
          </div>

          {/* Details Modal */}
          <Dialog open={!!selectedIssue} onOpenChange={(open) => !open && setSelectedIssue(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-display text-foreground">
                  Detailed Findings for Your Project
                </DialogTitle>
              </DialogHeader>

              {selectedIssue && (
                <Tabs defaultValue="summary" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="technical">Technical Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-base font-semibold font-display text-foreground mb-3">What We Found</h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                        {selectedIssue.details.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold font-display text-foreground mb-3">What We Fixed</h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                        {selectedIssue.details.solution}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedIssue(null)}
                      >
                        Back to Summary
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-base font-semibold font-display text-foreground mb-3">Code Changes</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-medium text-destructive mb-2 flex items-center gap-1">
                            <span className="inline-block w-4 h-4 rounded bg-destructive/10 text-center leading-4">−</span>
                            Before
                          </div>
                          <pre className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 overflow-x-auto">
                            <code className="text-xs text-foreground font-mono whitespace-pre">
                              {selectedIssue.details.codeBefore}
                            </code>
                          </pre>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-accent mb-2 flex items-center gap-1">
                            <span className="inline-block w-4 h-4 rounded bg-accent/10 text-center leading-4">+</span>
                            After
                          </div>
                          <pre className="bg-accent/5 border border-accent/20 rounded-lg p-4 overflow-x-auto">
                            <code className="text-xs text-foreground font-mono whitespace-pre">
                              {selectedIssue.details.codeAfter}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-foreground min-w-[80px]">File:</span>
                        <code className="bg-muted px-2 py-1 rounded text-xs text-foreground font-mono">
                          {selectedIssue.details.affectedFile}
                        </code>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-foreground min-w-[80px]">Verified:</span>
                        <span className="inline-flex items-center gap-1.5 text-accent">
                          <CheckCircle2 className="w-4 h-4" />
                          Yes
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedIssue(null)}
                      >
                        Back to Summary
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ScanComplete2;