'use client'

import { Store, ChefHat, Coffee, Building2 } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Store,
      title: "Small Restaurant Owners",
      description:
        "Perfect for independent restaurants looking to understand their daily performance without complexity.",
    },
    {
      icon: ChefHat,
      title: "Cloud Kitchens",
      description:
        "Track multiple virtual brands from one dashboard. Compare performance across different concepts.",
    },
    {
      icon: Coffee,
      title: "Café Managers",
      description:
        "From morning rush to evening wind-down, see exactly what's driving your café's success.",
    },
    {
      icon: Building2,
      title: "Multi-Outlet Restaurants",
      description:
        "Manage and compare sales across all your locations with unified reporting and insights.",
    },
  ];

  return (
    <section className="py-20 md:py-28 mx-auto max-w-7xl bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Who is Orkeneo for?
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you run a single café or multiple restaurants, Orkeneo adapts to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                <useCase.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
