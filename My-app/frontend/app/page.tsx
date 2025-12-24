import DashboardCards from "@/components/DashboardCards";

import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";


export default function Home() {
  return (
    <div className=" h-screen bg-gray-50">
      <Header />
      <main>
        <Hero/>
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer/>
    </div>
  );
}
