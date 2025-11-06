import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TopNav } from "@/components/TopNav";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "Free",
      subtitle: "Try Kreyo risk-free.",
      tier: "TRY",
      priceMonthly: 0,
      priceYearly: 0,
      cta: "Get started",
      dataPlans: "free",
      features: [
        "1 repo",
        "Up to 10 scans / month",
        "AI-generated fix prompts (limited)",
        "Severity grouping & basic report",
        "Email notifications",
        "Read-only GitHub access",
      ],
    },
    {
      name: "Pro",
      subtitle: "For builders improving products every week.",
      tier: "BUILD",
      priceMonthly: 19,
      priceYearly: 190,
      popular: true,
      cta: "Get started",
      dataPlans: "pro",
      features: [
        "Unlimited scans",
        "AI fix prompts for every issue",
        "Re-scan verification",
        "Email alerts when scans finish",
        "Downloadable reports",
        "Read-only GitHub access",
      ],
    },
    {
      name: "Production",
      subtitle: "For apps with real users.",
      tier: "SHIP",
      priceMonthly: 49,
      priceYearly: 490,
      cta: "Get started",
      dataPlans: "production",
      features: [
        "Everything in Pro",
        "Scheduled scans and automatic checks",
        "Compliance-ready reports (audit trail)",
        "Priority support & faster queue",
        "Slack/email incident notifications",
        "Optional audit evidence pack",
      ],
    },
  ];

  const faqs = [
    {
      question: "How does pricing per repo work?",
      answer: "Each paid repo gets unlimited scans and features in its plan. Add or remove repos anytime.",
    },
    {
      question: "Do you change my code?",
      answer: "No. Kreyo runs read-only scans. We generate fix prompts you apply in your own environment.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No lock-in. Billing stops at the end of your current period.",
    },
    {
      question: "What's the difference between Pro and Production?",
      answer: "Production adds scheduled scans, PR checks, compliance-ready reports, faster queues, and priority support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 xl:pt-44 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-display tracking-tight mb-6">
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pay for results, not seats.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start free. Upgrade anytime for unlimited scans. No credit card needed.
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="relative inline-flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingPeriod === "monthly" ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingPeriod === "yearly" ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                Yearly
              </button>
              <div
                className={`absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ${
                  billingPeriod === "monthly" ? "left-1 right-[calc(50%+0.125rem)]" : "left-[calc(50%+0.125rem)] right-1"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{plan.tier}</div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="pt-4">
                    {plan.priceMonthly === 0 ? (
                      <div className="text-4xl font-bold">$0</div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        {billingPeriod === "yearly" && (
                          <span className="text-2xl text-muted-foreground line-through">
                            ${plan.priceMonthly}
                          </span>
                        )}
                        <span className="text-4xl font-bold">
                          ${billingPeriod === "monthly" ? plan.priceMonthly : Math.round(plan.priceYearly / 12)}
                        </span>
                        <span className="text-muted-foreground">
                          /repo /{billingPeriod === "monthly" ? "month" : "month"}
                        </span>
                      </div>
                    )}
                    {billingPeriod === "yearly" && plan.priceYearly > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${plan.priceYearly}/year
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    data-plan={plan.dataPlans}
                    data-billing={billingPeriod}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg font-medium text-center md:text-left">
              Ship with confidence. No code changes.
            </p>
            <div className="flex gap-4">
              <Button size="lg" data-plan="cta" data-billing={billingPeriod}>
                Get started
              </Button>
              <Button size="lg" variant="outline">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
