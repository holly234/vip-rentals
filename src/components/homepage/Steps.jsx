import React from 'react';
import { Search, Calendar, Car } from 'lucide-react';

const Steps = () => {
  return (
    <section className="py-[71px] px-4 md:px-16 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-center mb-10 md:mb-12">
        Get Moving in 3 Steps
      </h2>

      {/* Mobile View — Show only Step 1 */}
      <div className="block md:hidden">
        <div className="w-[220px] mx-auto rounded-xl px-6 py-4 bg-gradient-to-b from-white to-gray-100 text-center">
          <Search size={20} className="mx-auto mb-4 text-gray-800" />
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Search</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Browse our fleet to find your perfect ride
          </p>
        </div>
      </div>

      {/* Desktop View — All 3 steps */}
      <div className="hidden md:grid grid-cols-3 gap-10 text-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <Search size={32} className="mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Search</h3>
          <p className="text-gray-600">Browse our fleet to find your perfect ride</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <Calendar size={32} className="mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Book</h3>
          <p className="text-gray-600">Secure your vehicle in just a few clicks</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <Car size={32} className="mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Pickup / Get Delivered</h3>
          <p className="text-gray-600">Enjoy the flexibility in how you get your ride</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
