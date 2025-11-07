import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, CheckCircle, Settings, Lock, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center animate-fade-in">
        {/* Hero Section with Animated Shield */}
        <div className="mb-8 relative">
          {/* Floating shield animation */}
          <div className="relative inline-block">
            <div className="w-24 h-24 mx-auto mb-6 relative animate-pulse">
              <div className="absolute inset-0 bg-[#3A82F6]/10 rounded-full blur-xl"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#3A82F6] to-[#2563EB] rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </div>
            {/* Floating file icons */}
            <div className="absolute -left-8 top-4 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center animate-[float_3s_ease-in-out_infinite] opacity-80">
              <span className="text-sm">📄</span>
            </div>
            <div className="absolute -right-8 top-4 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center animate-[float_3s_ease-in-out_infinite_0.5s] opacity-80">
              <span className="text-sm">📁</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center animate-[float_3s_ease-in-out_infinite_1s] opacity-80">
              <span className="text-xs">🔒</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold font-display text-foreground mb-4 tracking-tight">
            Your app, protected in a minute.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium font-sans">
            We'll take a quick read of your code — nothing changes, everything stays safe.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-12">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-[#3A82F6] hover:bg-[#2563EB]"
            onClick={() => navigate("/connect")}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Continue with GitHub
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes less than a minute. We'll guide you through every step.
          </p>
        </div>

        {/* Agent Reassurance Section */}
        <div className="space-y-6">
          <p className="text-base text-muted-foreground font-medium">
            Your AI security agent works like a co-pilot — safe, private, and zero-setup.
          </p>

          {/* Reassurance Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold font-display text-foreground mb-1">Read-only access</h3>
              <p className="text-sm text-muted-foreground font-sans">We never modify your code without permission</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#3A82F6]" />
              </div>
              <h3 className="font-semibold font-display text-foreground mb-1">Zero-config setup</h3>
              <p className="text-sm text-muted-foreground font-sans">No complex configuration needed to get started</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold font-display text-foreground mb-1">Enterprise secure</h3>
              <p className="text-sm text-muted-foreground font-sans">Bank-level encryption protects your data</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 md:mt-24">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column - Title */}
              <div className="lg:col-span-5 space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Frequently Asked
                  </h2>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-3 py-1">
                    Q's
                  </Badge>
                </div>
                <p className="text-base text-muted-foreground">Common questions about how our security agent works</p>
              </div>

              {/* Right Column - Accordion */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          How does the security agent know which alerts are relevant?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        We've built a rule engine that takes the context of your environment into account. This allows
                        us to easily adapt the criticality score for your environment and filter out false positives.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          What happens to my data?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Your data is encrypted in transit and at rest. We only read your code to perform security
                        analysis and never store your source code on our servers.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          Does the agent make changes to my codebase?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        No, the agent operates in read-only mode. It analyzes your code and provides recommendations,
                        but never makes changes without your explicit approval.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          I don't want to connect my repository. Can I try it with a test account?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Yes, you can create a test repository specifically for trying out our security agent. We
                        recommend using a public repository for testing purposes.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          How is this different from other security tools?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Our AI-powered agent provides context-aware analysis that understands your specific environment,
                        reducing false positives and focusing on what matters most for your application.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-none">
                    <AccordionTrigger className="rounded-xl border border-border bg-card/80 backdrop-blur px-5 md:px-6 py-4 md:py-5 hover:bg-accent/10 hover:border-accent/30 transition-all data-[state=open]:bg-accent/10 data-[state=open]:border-accent/30 [&[data-state=open]>div>svg]:text-accent">
                      <div className="flex items-center gap-3 text-left">
                        <Check className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                          How can I trust the security recommendations?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6">
                      <div className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-prose pl-7">
                        Our recommendations are based on industry best practices and security standards. Each alert
                        includes detailed context and references to help you understand the potential impact.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
