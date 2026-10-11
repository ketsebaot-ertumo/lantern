// "use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { CaseStudy } from "@/components/CaseStudy";
import { WhyLantern } from "@/components/WhyLantern";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { Insights } from "@/components/Insights";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CaseStudy />
        <WhyLantern />
        <TechStack />
        <Testimonials />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}