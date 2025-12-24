'use client'

import { Check } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import mobileMockup from "@/assets/mobile-mockup.png";
import Image from "next/image";

const ProductShowcase = () => {
  const benefits = [
    "Add daily sales in seconds",
    "Visualize trends instantly",
    "No manual spreadsheets",
    "Access from any device",
  ];

  return (
    <section className="py-20 md:py-28 mx-auto max-w-7xl bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Powerful Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Plan, track, and grow in minutes
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our platform is designed for busy restaurant owners. Spend less time crunching numbers and more time delighting your customers.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Mockups */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Desktop mockup */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-border/50 bg-card">
                <Image
                  src={dashboardMockup}
                  alt="Orkeneo Desktop Dashboard"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Mobile mockup overlay */}
              <div className="absolute -bottom-8 -left-8 w-32 md:w-44 rounded-2xl overflow-hidden shadow-card border border-border/50 bg-card">
                <Image
                  src={mobileMockup}
                  alt="Orkeneo Mobile App"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
