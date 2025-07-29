import React from 'react';

const ChauffeurPromo = () => {
  return (
    <section className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto my-10 md:my-16 lg:my-20">
      <div className="flex flex-col lg:flex-row bg-[#111827] text-white rounded-2xl overflow-hidden">
        {/* Text Section - Order changes on mobile */}
        <div className="flex-1 px-6 py-8 md:px-10 md:py-12 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-[1.3] mb-4 md:mb-6">
            <span className="block sm:inline">Need a Stress-Free Ride?</span>{' '}
            <br className="hidden xs:block sm:hidden" />
            Let Us Drive You
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
            Experience luxury and convenience with our professional chauffeur service. 
            Perfect for special events, business trips, or just a relaxing drive.
          </p>
          <button className="bg-white text-black text-sm md:text-base font-medium px-5 md:px-6 py-2.5 md:py-3 rounded-lg w-fit hover:bg-gray-100 transition">
            Book a Chauffeur <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Image Section - Comes first on mobile */}
        <div className="flex-1 min-h-[200px] xs:min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[420px] order-1 lg:order-2">
          <img
            src="/images/chauffeur-promo.png"
            alt="Professional chauffeur service"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ChauffeurPromo;