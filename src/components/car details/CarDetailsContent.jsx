import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import { FaRoad, FaDollarSign } from 'react-icons/fa';

const CarDetailsContent = ({ car }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);  // Description accordion open by default
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false);  // To toggle full description visibility

  if (!car) {
    return <p className="text-red-500">Car not found.</p>;
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleFullDescription = () => {
    setIsFullDescriptionVisible(!isFullDescriptionVisible);  // Toggle visibility of the full description
  };

  const truncatedDescription = `${car.description.slice(0, 200)}...`;  // Truncate description to 200 characters

  const descriptionStyle = {
    fontFamily: '',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0%',
  };

  return (
    <div className="text-[#202124]">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        {/* Image at the top */}
        <div className="w-full">
          <img
            src={car.imageUrl}
            alt={car.name}
            className="w-full h-[302px] object-cover"
          />
        </div>

        {/* Content container with padding */}
        <div className="px-4 sm:px-6">
          {/* Breadcrumb below image */}
          <div className="pt-4">
            <Breadcrumb />
          </div>

          {/* Car name/title */}
          <h3
            className="text-2xl font-bold my-4"
            style={{
              fontFamily: 'Prata, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '30px',
              lineHeight: '120%',
              letterSpacing: '-0.5%',
            }}
          >
            THE {car.year} {car.name.toUpperCase()}
          </h3>

          {/* Info cards - full width */}
          <div className="w-full mb-6 space-y-3">
            <div className="bg-[#8AB2EE33] text-blue-800 px-4 py-3 rounded-sm flex items-center w-full h-[78px] gap-4">
              <div className="mr-2">
                <FaRoad className="text-blue-800 text-[16px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="w-1 h-1 rounded-full bg-blue-800 inline-block mr-2"></span>
                  <p className="text-xs">50 free miles a day</p>
                </div>
                <div className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-blue-800 inline-block mr-2"></span>
                  <p className="text-xs">$5 per extra mile</p>
                </div>
              </div>
            </div>

            <div className="bg-[#8AB2EE33] text-[#5F6368] px-4 py-3 rounded-sm flex items-center w-full h-[78px] gap-4">
              <div className="mr-2">
                <FaDollarSign className="text-[#5F6368] text-[16px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="w-1 h-1 rounded-full bg-[#5F6368] inline-block mr-2"></span>
                  <p className="text-xs">Security Deposit: $2k</p>
                </div>
                <div className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#5F6368] inline-block mr-2"></span>
                  <p className="text-xs">Minimum Days: 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Select date and time button - full width */}
          <button
            className="w-full bg-black text-white rounded-lg mb-6"
            style={{
              height: '52px',
              padding: '16px',
              fontFamily: '',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '13.31px',
              lineHeight: '150%',
              letterSpacing: '0%',
              borderRadius: '8px',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            SELECT DATE & TIME
          </button>

          {/* Description accordion */}
          <div className="mb-6 border-b border-gray-200">
            <button
              onClick={toggleDescription}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h2
                className="text-lg font-semibold"
                style={{
                  fontFamily: 'Prata, serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '-0.5%',
                }}
              >
                Description
              </h2>
              <svg
                className={`w-5 h-5 transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDescriptionOpen && (
              <div className="pb-4">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: 'Prata, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '30px',
                    lineHeight: '120%',
                    letterSpacing: '-0.5%',
                  }}
                >
                  THE {car.year} {car.name.toUpperCase()}
                </h3>

                {/* Horsepower, Acceleration, and MPG before full description */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Gilroy-Regular', fontWeight: 400, fontSize: '16px' }}
                    >
                      {car.horsepower}
                    </p>
                    <p className="text-sm text-[#5F6368]">Horsepower</p>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Gilroy-Regular', fontWeight: 400, fontSize: '16px' }}
                    >
                      {car.acceleration}
                    </p>
                    <p className="text-sm text-[#5F6368]">Acceleration (0–60 mph)</p>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Gilroy-Regular', fontWeight: 400, fontSize: '16px' }}
                    >
                      {car.mpg}
                    </p>
                    <p className="text-sm text-[#5F6368]">Miles Per Gallon</p>
                  </div>
                </div>

                <p
                  className="leading-relaxed mb-4"
                  style={descriptionStyle}  // Apply the font style here
                >
                  {isFullDescriptionVisible ? car.description : truncatedDescription}
                </p>

                {/* See More button */}
                <button
                  onClick={toggleFullDescription}
                  className="text-blue-600 underline mb-4"
                >
                  {isFullDescriptionVisible ? 'See Less' : 'See More'}
                </button>
              </div>
            )}
          </div>

          {/* Key Features Accordion */}
          <div className="mb-6 border-b border-gray-200">
            <button
              onClick={toggleFeatures}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h2
                className="text-lg font-semibold"
                style={{
                  fontFamily: 'Prata, serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '-0.5%',
                }}
              >
                Key Features
              </h2>
              <svg
                className={`w-5 h-5 transform transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isFeaturesOpen && (
              <div className="pb-4">
                <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
                  <li>Premium leather interior with heated and ventilated seats</li>
                  <li>Advanced driver assistance systems (ADAS)</li>
                  <li>12.3-inch touchscreen infotainment system</li>
                  <li>Panoramic sunroof with power shade</li>
                  <li>19-inch alloy wheels with performance tires</li>
                  <li>Dual-zone automatic climate control</li>
                  <li>Wireless smartphone charging</li>
                  <li>Premium sound system with 12 speakers</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full px-4 sm:px-6 lg:w-[80vw] lg:mx-auto pt-6">
        <Breadcrumb />
      </div>

      {/* Desktop Main Image */}
      <div className="hidden lg:block rounded-xl overflow-hidden mb-4">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* Car Info Section */}
      <div className="hidden lg:block px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="bg-red-50 text-blue-800 px-4 py-2 rounded-xl">
            <p>🚘 {car.milesPerDay} free miles a day</p>
            <p>$5 per extra mile</p>
          </div>
          <div className="bg-gray-50 text-[#5F6368] px-4 py-2 rounded-xl">
            <p>💰 Security Deposit: {car.deposit}</p>
            <p>📅 Minimum Days: {car.minDays}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2
            className="text-lg font-semibold mb-2"
            style={{
              fontFamily: 'Prata, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '30px',
              lineHeight: '120%',
              letterSpacing: '-0.5%',
            }}
          >
            Description
          </h2>
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: 'Prata, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '30px',
              lineHeight: '120%',
              letterSpacing: '-0.5%',
            }}
          >
            THE {car.year} {car.name.toUpperCase()}
          </h3>
          <p 
            className="leading-relaxed mb-6"
            style={descriptionStyle}  // Apply the font style here for description
          >
            {isFullDescriptionVisible ? car.description : truncatedDescription}
          </p>
          <button
            onClick={toggleFullDescription}
            className="text-blue-600 underline"
          >
            {isFullDescriptionVisible ? 'See Less' : 'See More'}
          </button>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Prata, serif' }}
              >
                {car.horsepower}
              </p>
              <p className="text-sm text-[#5F6368]">Horsepower</p>
            </div>
            <div>
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Prata, serif' }}
              >
                {car.acceleration}
              </p>
              <p className="text-sm text-[#5F6368]">Acceleration (0–60 mph)</p>
            </div>
            <div>
              <p 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Prata, serif' }}
              >
                {car.mpg}
              </p>
              <p className="text-sm text-[#5F6368]">Miles Per Gallon</p>
            </div>
          </div>
        </div>

        {/* Key Features - Desktop */}
        <div className="mb-8">
          <h2
            className="text-lg font-semibold mb-4"
            style={{
              fontFamily: 'Prata, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '30px',
              lineHeight: '120%',
              letterSpacing: '-0.5%',
            }}
          >
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
            <li>Premium leather interior with heated and ventilated seats</li>
            <li>Advanced driver assistance systems (ADAS)</li>
            <li>12.3-inch touchscreen infotainment system</li>
            <li>Panoramic sunroof with power shade</li>
            <li>19-inch alloy wheels with performance tires</li>
            <li>Dual-zone automatic climate control</li>
            <li>Wireless smartphone charging</li>
            <li>Premium sound system with 12 speakers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsContent;
