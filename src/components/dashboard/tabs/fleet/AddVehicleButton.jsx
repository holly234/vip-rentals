import React, { useState } from 'react';
import AddVehicleModal from './AddVehicleModal';
import { Plus } from 'lucide-react';

const AddVehicleButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-[#0f172a] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#1e293b] transition"
      >
        <Plus size={16} /> Add Vehicle
      </button>

      {showModal && <AddVehicleModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default AddVehicleButton;