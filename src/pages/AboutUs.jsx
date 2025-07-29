import Header from "../components/common/Header";
import AboutHero from "../components/about/AboutHero";
import AboutIntroSection from "../components/about/AboutIntroSection";
import FleetShowcaseSection from "../components/about/FleetShowcaseSection";
import TravelOptionsSection from "../components/about/TravelOptionsSection";
import WhyVipRentals from "../components/homepage/WhyVipRentals";
import Footer from "../components/common/Footer";
const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutIntroSection />
      <FleetShowcaseSection />
      <TravelOptionsSection />
      <WhyVipRentals />
      <Footer />
      {/* You can add more sections here as needed */}
    </>
  );
};

export default AboutUs;
