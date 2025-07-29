import React from 'react';
import { FaUsers, FaCogs, FaSuitcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarCard = ({
  id,
  imageUrl,
  name,
  year,
  passengers,
  transmission,
  luggage,
  price,
}) => {
  return (
    <div className="w-full max-w-[440px] mx-auto sm:w-[440px] bg-white rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
      {/* Car Image - made taller on mobile */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 sm:h-56 object-cover"
      />

      {/* Card Content - added more padding on mobile */}
      <div className="p-5 sm:p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{year}</p>

        {/* Divider */}
        <div className="border-t my-4 sm:my-3 border-gray-200"></div>

        {/* Icon Features - made icons slightly larger on mobile */}
        <div className="flex justify-between text-center text-gray-600 text-sm">
          <div className="flex flex-col items-center space-y-1">
            <FaUsers size={22} className="sm:w-5" />
            <span>{passengers} People</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FaCogs size={22} className="sm:w-5" />
            <span>{transmission}</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FaSuitcase size={22} className="sm:w-5" />
            <span>{luggage} Bags</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-4 sm:my-3 border-gray-200"></div>

        {/* Price and Button - made button slightly larger on mobile */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">₦{price}</span>
          <Link
            to={`/car/${id}`}
            className="bg-black text-white px-5 py-2.5 sm:px-4 sm:py-2 text-sm rounded-lg hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;