'use client'

import { BarChart3, CalendarCheck, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Sales Tracking",
      description:
        "Log your daily sales in seconds. Our intuitive interface makes data entry effortless, so you can focus on running your restaurant.",
    },
    {
      icon: CalendarCheck,
      title: "Automatic Daily Summaries",
      description:
        "Wake up to beautiful summaries of yesterday's performance. No manual calculations, no spreadsheet nightmares.",
    },
    {
      icon: TrendingUp,
      title: "Top Selling Item Analytics",
      description:
        "Discover which dishes drive your revenue. Make data-driven menu decisions with clear, actionable insights.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 max-w-7xl mx-auto bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Eat insights, without the hassle
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to understand your restaurant's performance, beautifully organized in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
