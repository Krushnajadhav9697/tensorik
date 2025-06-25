import React from "react";
import Header from "../common/Header";
import Hero from "../components/Hero";
import WorkshopSection from "../components/WorkshopSection";
import WhyTensorik from "../components/WhyTensorik";
import FounderSection from "../components/FounderSection";
import Testimonials from "../components/Testimonials";
import BuildChallenge from "../components/BuildChallenge";
import StartJourney from "../components/StartJourney";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full  mx-auto overflow-hidden">
      <Header />
      <Hero />
      <WorkshopSection />
      <WhyTensorik />
      <FounderSection />
      <Testimonials />
      <BuildChallenge />
      <StartJourney />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
