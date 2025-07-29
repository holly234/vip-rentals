import React from 'react';
import {
  LayoutDashboard,
  Car,
  Calendar,
  LineChart,
  Users,
  FileText,
  Settings,
} from 'lucide-react'; // Ensure lucide-react is installed

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'fleet', label: 'Fleet', icon: Car },
  { key: 'bookings', label: 'Bookings', icon: Calendar },
  { key: 'analytics', label: 'Analytics', icon: LineChart },
  { key: 'team', label: 'Team', icon: Users },
  { key: 'reports', label: 'Reports', icon: FileText },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-[13%] h-screen border-r border-gray-200 bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-8">Fleet Manager</h2>

      <nav className="flex flex-col space-y-2">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition 
              ${
                activeTab === key
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Icon size={16} className="shrink-0" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
