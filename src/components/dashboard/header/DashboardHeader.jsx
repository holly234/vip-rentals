import React from 'react';
import { Bell, User } from 'lucide-react'; // or use @heroicons/react

const DashboardHeader = ({ title, subtitle }) => {
  return (
    <div className="flex items-start justify-between py-6 px-6 border-b border-gray-100 bg-white">
      {/* Left: Title & Subtitle */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-700 hover:text-black">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-gray-700 hover:text-black">
          <User className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
