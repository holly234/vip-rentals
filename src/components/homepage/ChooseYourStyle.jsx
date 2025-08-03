import React from 'react';

const carStyles = [
  { name: 'Supercar', image: '/convertible-1.webp' },
  { name: 'Convertible', image: '/convertible-1.webp' },
  { name: 'Sedan | Sports', image: '/sedan_sports.webp' },
  { name: 'SUV', image: '/suv.webp' },
  { name: 'Luxury', image: '/sedan_sports.webp' },
  { name: 'Pickup', image: '/suv.webp' },
  // New style
];

const ChooseYourStyle = () => {
  return (
    <section className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto py-10 sm:py-12">
      <h2
        className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 md:text-center"
        style={{
          fontFamily: 'Prata, serif',
          fontWeight: 400,
          fontStyle: 'normal',
          letterSpacing: '0.5%',
        }}
      >
        Choose Your Style
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {carStyles.map((car, index) => (
          <button
            key={index}
            className="bg-[#E0E0E0] rounded-xl p-4 text-center hover:shadow-md transition duration-300 focus:outline-none"
            // onClick={() => alert(`You selected: ${car.name}`)} // Example click action
          >
            <h3 className="text-base sm:text-lg font-medium">{car.name}</h3>
            <img
              src={car.image}
              alt={car.name}
              className="w-full object-contain h-24 sm:h-28 mb-4"
            />
           

          </button>
        ))}
      </div>
    </section>
  );
};

export default ChooseYourStyle;
