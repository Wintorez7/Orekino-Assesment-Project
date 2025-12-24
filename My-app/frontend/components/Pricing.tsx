'use client'

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with restaurant analytics.",
      features: [
        "Up to 30 sales records/month",
        "Basic daily summaries",
        "Single restaurant",
        "7-day data history",
        "Email support",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For restaurants ready to unlock full insights.",
      features: [
        "Unlimited sales records",
        "Advanced analytics & trends",
        "Up to 5 restaurants",
        "Unlimited data history",
        "Top-selling item reports",
        "Export to CSV & PDF",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Affordable plans, delicious results
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade when you're ready for more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-foreground text-background shadow-card"
                  : "bg-card border border-border/50 shadow-soft"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-display font-semibold mb-2 ${
                    plan.highlighted ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-display font-bold ${
                      plan.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.highlighted
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 ${
                    plan.highlighted
                      ? "text-background/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlighted ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          plan.highlighted
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={
                        plan.highlighted ? "text-background/90" : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : ""
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
