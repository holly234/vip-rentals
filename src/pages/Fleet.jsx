import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CarCard from '../components/common/CarCard';
import FleetFilters from '../components/fleet/FleetFilter';
import { useCarContext } from '../context/CarContext';

const Fleet = () => {
  const { vehicles, loading } = useCarContext();

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <>
      <Header />
      <FleetFilters />

      {/* Main container with minimal side margins on mobile */}
      <main className="px-2 w-[90%] mx-auto sm:px-4 lg:w-[80%] lg:mx-auto my-8 sm:my-16 lg:my-24">
        {/* Wider grid layout for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-8 lg:gap-y-12">
          {vehicles.map((vehicle) => (
            <CarCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Fleet;
