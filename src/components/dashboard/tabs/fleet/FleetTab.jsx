import React from 'react';
import DashboardHeader from '../../header/DashboardHeader';
import FleetTopBar from './FleetTopBar';
import CarDisplay from './CarDisplay'; // Import the CarDisplay component
import { Plus, Filter } from 'lucide-react';

const FleetTab = () => {
  return (
    <div className="w-full ">
      {/* Header Section */}
      <DashboardHeader
        title="Fleet"
        subtitle="Manage your vehicle fleet and track status"
      />
      <FleetTopBar />
      <CarDisplay /> {/* Display the list of cars */}



    </div>
  );
};

export default FleetTab;