import React from 'react';

const ChauffeurPromo = () => {
  return (
    <section className="w-[96%] sm:w-[90%] lg:w-[80%] mx-auto my-10 md:my-16 lg:my-20">
      <div className="flex flex-col lg:flex-row bg-[#111827] text-white rounded overflow-hidden">
        
        {/* Text Section */}
        <div className="h-[300px] xs:h-[180px] sm:h-[240px] md:h-[320px] lg:h-[420px] px-6 py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center order-1 lg:order-2 lg:flex-1">
          <h2
            className="mb-4 md:mb-6 text-[24px] md:text-3xl lg:text-4xl leading-[130%] tracking-[0.005em]"
            style={{
              fontFamily: 'Prata, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '0.5%',
              textAlign: 'center',
            }}
          >
            <span className="block sm:inline">Need a Stress-Free Ride?</span>{' '}
            <br className="hidden xs:block sm:hidden" />
            Let Us Drive You
          </h2>

          <p
            className="text-base text-center mb-6 md:mb-8 max-w-md"
            style={{
              fontFamily: 'Gilroy-Regular, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0%',
            }}
          >
            Experience luxury and convenience with our professional chauffeur service.
            Perfect for special events, business trips, or just a relaxing drive.
          </p>

          <button
            className="w-[179px] h-[46px] bg-[#FFFFFF] text-black rounded-lg hover:bg-gray-100 transition"
            style={{
              fontFamily: 'Gilroy-Regular, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Book a Chauffeur <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="h-[300px] xs:h-[180px] sm:h-[240px] md:h-[320px] lg:h-[420px] order-2 lg:order-1 lg:flex-1">
          <img
            src="/tesla.jpg"
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
