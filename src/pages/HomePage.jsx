import React from "react";

import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import WhyChooseSection from "../components/WhyChooseSection";
import { useHomeHashScroll } from "../hooks/useSectionNavigation";

export default function HomePage() {
  useHomeHashScroll();

  return (
    <>
      <Hero />
      <FeatureBar />
      <WhyChooseSection />
      <ProductGrid />
      <Testimonials />
      <Footer />
    </>
  );
}
