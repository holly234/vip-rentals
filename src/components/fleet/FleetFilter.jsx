import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FleetFilters = () => {
  return (
    <section className="px-4 mx-auto sm:px-6 w-[93%] lg:w-[80%] lg:mx-auto mt-2 md:mt-12 lg:mt-16 mb-10 lg:mb-20">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 lg:mb-20 px-2 sm:px-0">
        Exclusive Fleet of Luxury Cars
      </h1>

      {/* Filter Row */}
      <div className="flex items-end justify-between border-b border-gray-200 pb-6 relative">
        {/* Scrollable filters container */}
        <div className="flex-1 overflow-x-auto scrollbar-hide whitespace-nowrap mr-3 pl-2 sm:pl-0">
          <div className="inline-flex items-end gap-3 w-max">
            {/* Category with visible label */}
            <div className="inline-block mr-3">
              <label className="text-xs text-blue-600 mb-1 block ml-1">Categories</label>
              <select className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white focus:outline-none">
                <option>Super cars</option>
                <option>Luxury Sedans</option>
                <option>SUVs</option>
                <option>Convertibles</option>
              </select>
            </div>

            {/* Other filters */}
            {['Price Range', 'Seats', 'Fleet', 'Transmission'].map((item, idx) => (
              <div key={idx} className="inline-block mr-3">
                <label className="invisible mb-1 block text-xs">Hidden</label>
                <select className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white focus:outline-none">
                  <option>{item}</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Filter button - fixed on right side */}
        <div className="flex-shrink-0 h-10 flex items-center pr-2 sm:pr-0">
          <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition h-10">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">(1)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetFilters;