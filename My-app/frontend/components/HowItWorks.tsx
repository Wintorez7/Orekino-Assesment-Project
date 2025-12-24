'use client'

import { PlusCircle, ShieldCheck, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: PlusCircle,
      title: "Add Daily Sales",
      description:
        "Log your sales data in just a few taps. Quick, simple, and designed for busy restaurant owners.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Data Stored Securely",
      description:
        "Your information is encrypted and stored safely. Access it anytime, anywhere with peace of mind.",
    },
    {
      number: "03",
      icon: LineChart,
      title: "Insights Generated",
      description:
        "Watch as Orkeneo transforms your data into beautiful, actionable insights on your dashboard.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes. No technical knowledge required.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-border to-transparent hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg mb-6 relative z-10">
                  {step.number}
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 h-full">
                  <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
