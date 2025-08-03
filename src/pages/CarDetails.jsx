import React from 'react';
import { useParams } from 'react-router-dom';
import BookingCard from '../components/car details/BookingCard';
import CarDetailsContent from '../components/car details/CarDetailsContent';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/car details/Breadcrumb';
import { useCarContext } from '../context/CarContext';
import FAQSection from '../components/homepage/FAQSection';
import InstagramPromo from '../components/homepage/InstagramPromo';

const CarDetailsPage = () => {
  const { id } = useParams();
  const { vehicles, loading } = useCarContext();

  const car = vehicles.find((c) => c.id === id);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  if (!car) {
    return <div className="text-center py-10 text-red-500">Car not found</div>;
  }

  return (
    <>
      <Header />

      {/* Optional breadcrumb (if you want to re-add it) */}
      {/* <Breadcrumb carName={car.name} /> */}

      <section className="w-full lg:px-4 sm:px-6 lg:w-[80vw] lg:mx-auto lg:py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-[65%]">
          <CarDetailsContent car={car} />
        </div>

        

        
     

        {/* Right Column - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block w-full lg:w-[35%]">
          <div className="sticky top-24">
            <BookingCard car={car} />
          </div>
        </div>

        
      </section>
      <FAQSection />
        <InstagramPromo />

      <Footer />
    </>
  );
};

export default CarDetailsPage;