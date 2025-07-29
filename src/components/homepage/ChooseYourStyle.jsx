import React from 'react';

const carStyles = [
  { name: 'Supercar', image: '/cars/supercar.png' },
  { name: 'Convertible', image: '/cars/convertible.png' },
  { name: 'Sedan | Sports', image: '/cars/sedan.png' },
  { name: 'Convertible', image: '/cars/convertible.png' },
  { name: 'SUV', image: '/cars/suv.png' },
];

const ChooseYourStyle = () => {
  return (
    <section className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
        Choose Your Style
      </h2>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
        {carStyles.map((car, index) => (
          <div
            key={index}
            className="min-w-[180px] sm:min-w-[200px] lg:min-w-[250px] flex-shrink-0 bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full object-contain h-24 sm:h-28 mb-4"
            />
            <h3 className="text-base sm:text-lg font-medium">{car.name}</h3>
            <div className="mt-3 sm:mt-4 h-2 bg-blue-200 rounded-full w-full" />
          </div>
        ))}

        {/* Scroll Arrow */}
        <div className="min-w-[60px] flex items-center justify-center">
          <button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            <span className="text-xl sm:text-2xl">{'→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourStyle;
