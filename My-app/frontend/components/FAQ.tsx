"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Orkeneo?",
      answer:
        "Orkeneo is a simple, powerful analytics platform designed specifically for restaurant owners. It helps you track daily sales, discover your top-selling items, and gain actionable insights through a beautiful, easy-to-use dashboard.",
    },
    {
      question: "Do I need technical knowledge to use Orkeneo?",
      answer:
        "Not at all! Orkeneo is designed for busy restaurant owners, not tech experts. If you can use a smartphone, you can use Orkeneo. Our interface is intuitive, and we provide helpful guides to get you started.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption to protect your data both in transit and at rest. Your information is stored securely in the cloud with regular backups, and we never share your data with third parties.",
    },
    {
      question: "Can I export my sales data?",
      answer:
        "Yes! You can export your data at any time in multiple formats including CSV and PDF. This makes it easy to share reports with your accountant or use the data in other tools.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most users are up and running in under 5 minutes. Simply create an account, add your restaurant details, and start logging sales. There's no complex configuration required.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Orkeneo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
