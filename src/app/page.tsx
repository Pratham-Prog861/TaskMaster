'use client';

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhyBuilding from "@/components/WhyBuilding";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Why I'm Building This Section */}
      <WhyBuilding />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
}
