import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import FleetTab from '../components/dashboard/tabs/fleet/FleetTab';
// import TeamTab from '../components/dashboard/team/TeamTab';
// import Analytics from '../components/dashboard/Analytics';
// import Bookings from '../components/dashboard/Bookings';
// import Dash from '../components/dashboard/Dash';
// import Reports from '../components/dashboard/Reports';
// import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('fleet');

  const renderTab = () => {
    switch (activeTab) {
      case 'fleet':
        return <FleetTab />;
      // case 'team':
      //   return <TeamTab />;
      // case 'dashboard':
      //   return <Dash />;
      // case 'analytics':
      //   return <Analytics />;
      // case 'bookings':
      //   return <Bookings />;
      // case 'reports':
      //   return <Reports />;
      // case 'settings':
      //   return <Settings />;
      // default:
      //   return <FleetTab />;
    }
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar - 15% width */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content - 85% width */}
      <div className="w-[85%] overflow-y-auto p-6">
        {renderTab()}
      </div>
    </div>
  );
};

export default Dashboard;
