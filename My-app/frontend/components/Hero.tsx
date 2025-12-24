'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import Image from "next/image";

const Hero = () => {
  const stats = [
    { value: "10k+", label: "Sales Records" },
    { value: "99%", label: "Uptime" },
    { value: "1k+", label: "Restaurants" },
    { value: "24/7", label: "Real-time Insights" },
  ];

  return (
    <section className="relative  mx-auto pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-200 h-200 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-150 h-150 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-[#f97015] animate-pulse" />
            Now with real-time analytics
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Orkeneo. Your restaurant data,{" "}
            <span className="text-[#f97015]">simplified.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Track daily sales, discover top-selling items, and gain insights with a clean dashboard. Built for restaurant owners who want clarity, not complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button >
              Start Tracking Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button>
              <Play className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50">
            <Image
              src={dashboardMockup}
              alt="Orkeneo Dashboard - Restaurant Analytics Platform"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -left-4 top-1/4 bg-card rounded-xl p-4 shadow-card border border-border/50 hidden lg:block animate-float">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">↑</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today's Sales</p>
                <p className="font-semibold text-foreground">$2,847</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-card border border-border/50 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">🍕</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Top Seller</p>
                <p className="font-semibold text-foreground">Margherita</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 md:mt-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
