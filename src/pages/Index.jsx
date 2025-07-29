import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/homepage/Hero';
import Steps from '../components/homepage/Steps';
import VipFleetSection from '../components/homepage/VipFleetSection';
import ChooseYourStyle from '../components/homepage/ChooseYourStyle';
import ChauffeurPromo from '../components/homepage/ChauffeurPromo';
import WhyVipRentals from '../components/homepage/WhyVipRentals';
import TestimonialGrid from '../components/homepage/TestimonialGrid';
import FAQSection from '../components/homepage/FAQSection';
import InstagramPromo from '../components/homepage/InstagramPromo';
import Footer from '../components/common/Footer';
const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header stays fixed height */}
      <Header />

      {/* Hero fills the rest, leaving space at the bottom */}
      <main className="flex-1  pb-[5vh]">
        <Hero />
        <Steps />
        <VipFleetSection />
        <ChooseYourStyle />
        <ChauffeurPromo />
        <WhyVipRentals />
        <TestimonialGrid />
        <FAQSection />
        <InstagramPromo />

        {/* Add other sections below Hero if needed */}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Index;
