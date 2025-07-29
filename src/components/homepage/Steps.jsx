import React from 'react';
import { Search, Calendar, Car } from 'lucide-react';

const Steps = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
        Get Moving in <span className="font-bold">5 Minutes</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
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
