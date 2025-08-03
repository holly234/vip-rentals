import React from 'react';
import { Search, Filter } from 'lucide-react';
import AddVehicleButton from './AddVehicleButton';
const FleetTopBar = () => {
  return (
    <div className="bg-[#f9fafb] p-6 rounded-md border border-gray-200 mb-6">
      {/* Title + Button Row */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Fleet Management</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your vehicle fleet and track status
          </p>
        </div>

        <AddVehicleButton />
      </div>

      {/* Search and Filter Row */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search vehicles..."
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          <Filter size={16} />
          Filter
        </button>
      </div>
    </div>
  );
};

export default FleetTopBar;