// BookingCard.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import carData from '../../data/carData';

const BookingCard = () => {
  const { id } = useParams();
  const car = carData.find((c) => c.id === id);
  const price = car ? parseInt(car.price.replace(/,/g, '')) : 1250;

  const [pickupOption, setPickupOption] = useState('self');

  return (
    <div className="w-full bg-white border border-gray-300 rounded-xl p-7 shadow-md">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        ₦{price.toLocaleString()} <span className="text-base font-normal text-gray-500">/day</span>
      </h2>

      <div className="grid grid-cols-2 gap-0 mb-6 border border-gray-200 rounded-lg overflow-hidden divide-x">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 px-4 pt-4">Start date*</label>
          <input
            type="date"
            className="p-3 text-base border-none outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 px-4 pt-4">Time*</label>
          <input
            type="time"
            className="p-3 text-base border-none outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 mb-6 border border-gray-200 rounded-lg overflow-hidden divide-x">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 px-4 pt-4">End date*</label>
          <input
            type="date"
            className="p-3 text-base border-none outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 px-4 pt-4">Time*</label>
          <input
            type="time"
            className="p-3 text-base border-none outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-base text-gray-700 mb-3 font-medium">How to get your ride*</p>
        <div className="flex items-center space-x-3 mb-3">
          <input
            type="checkbox"
            id="self"
            checked={pickupOption === 'self'}
            onChange={() => setPickupOption('self')}
            className="w-4 h-4 border border-gray-400 rounded-sm focus:ring-1 focus:ring-black"
          />
          <label htmlFor="self" className="text-base text-gray-800">
            Self pickup
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="deliver"
            checked={pickupOption === 'deliver'}
            onChange={() => setPickupOption('deliver')}
            className="w-4 h-4 border border-gray-400 rounded-sm focus:ring-1 focus:ring-black"
          />
          <label htmlFor="deliver" className="text-base text-gray-800">
            Delivered to you
          </label>
        </div>
      </div>

      <button className="mt-2 w-full bg-black text-white py-3 rounded-md text-base font-medium hover:bg-gray-800 transition">
        Next ↗
      </button>
    </div>
  );
};

export default BookingCard;
