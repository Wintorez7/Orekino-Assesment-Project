'use client'

import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Orkeneo completely changed how I understand my restaurant's performance. The daily summaries save me hours every week.",
      name: "Maria Chen",
      role: "Owner",
      restaurant: "The Golden Wok",
      rating: 5,
    },
    {
      quote:
        "Finally, a tool that doesn't require a degree in data science. I can see my top sellers at a glance and make better menu decisions.",
      name: "James Rodriguez",
      role: "Manager",
      restaurant: "Bella Italia",
      rating: 5,
    },
    {
      quote:
        "Managing 3 cloud kitchen brands was chaos before Orkeneo. Now I have clarity across all my concepts in one dashboard.",
      name: "Priya Sharma",
      role: "Founder",
      restaurant: "CloudBite Kitchens",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Header + Stats */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What restaurant owners are saying
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of restaurant owners who've transformed their business with Orkeneo.
            </p>
            
            <div className="bg-accent rounded-2xl p-8 inline-block">
              <p className="text-5xl font-display font-bold text-primary mb-2">
                82%
              </p>
              <p className="text-muted-foreground">
                faster reporting compared to manual tracking
              </p>
            </div>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-card rounded-2xl p-6 shadow-soft border border-border/50 ${
                  index === 1 ? "lg:translate-x-8" : ""
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.restaurant}
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

export default Testimonials;
