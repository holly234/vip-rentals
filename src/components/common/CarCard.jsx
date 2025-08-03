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
    <div className="w-full max-w-[372px] bg-white overflow-hidden border-[0.50px] border-gray-200 flex-shrink-0 mx-auto">
      {/* Car Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover"
      />

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Name and Year */}
        <div>
          <h4
          style={{ 
            fontFamily: 'Prata, serif',
            color: '#202124'
          }}
          className="text-[#202124]">{name}</h4>
          <p className="text-sm text-[#202124]">{year}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Icon Features */}
        <div className="flex justify-between text-center text-[#5F6368] text-sm">
          <div className="flex-1 flex flex-col items-center gap-1">
            <FaUsers size={18.24} className="text-[#5F6368]" />
            <span>{passengers} People</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 border-l border-gray-300"></div>
            <FaCogs size={18.24} className="text-[#5F6368]" />
            <span>{transmission}</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 border-l border-gray-300"></div>
            <FaSuitcase size={18.24} className="text-[#5F6368]" />
            <span>{luggage} Bags</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Price and Button */}
        <div className="flex justify-between mb-2 items-center">
          <div>
            <span className="text-base font-semibold text-[#202124]">${price}</span>
            <span className="text-sm text-[#5F6368] ml-1">/day</span>
          </div>
          <Link
            to={`/car/${id}`}
            className="bg-black text-white px-5 py-2 text-sm rounded-md hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;