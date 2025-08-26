"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Why from "@/components/Why";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Minimum 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />} 
      </AnimatePresence>

      {!isLoading && (
        <main>
          <HeroSection />
          <Feature />
          <HowItWorks />
          {/* <ProductDemo /> */}
          <Why />
          <Integrations />
          <Pricing />
          <FAQ />
          <FinalCTA />
          <Footer />
        </main>
      )}
    </>
  );
}
