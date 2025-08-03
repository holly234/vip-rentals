import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../common/CarCard';
import { useCarContext } from '../../context/CarContext';

const VipFleetSection = () => {
  const { vehicles, loading } = useCarContext();

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <section className="w-[95%] md:w-[85%] mx-auto ">
      {/* Header */}
      <div className="mb-8">
        <h2
        style={{
           fontFamily: 'Prata, serif', 
           fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: '0.5%'
          }}
         className="text-2xl md:text-3xl font-semibold">VIP Fleet</h2>
      </div>

      {/* Scrollable horizontal row */}
      <div className="overflow-x-auto px-2 -mx-2">
        <div className="flex space-x-6 w-max">
          {vehicles.slice(0, 6).map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-[300px] flex-shrink-0"
            >
              <div className="h-full flex flex-col justify-between border border-gray-200 rounded-lg overflow-hidden ">
                <CarCard {...vehicle} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More button on mobile only */}
      <div className="mt-8 text-center md:hidden">
        <Link
          to="/fleet"
          className=" h-[46px] w-[108px]  px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition border border-gray-300 text-gray-900 bg-white"
        >
          View more
        </Link>
      </div>
    </section>
  );
};

export default VipFleetSection;
