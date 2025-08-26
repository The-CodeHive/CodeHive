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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Always show loader for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && <Loader />}
      </AnimatePresence>

      {!showLoader && (
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
