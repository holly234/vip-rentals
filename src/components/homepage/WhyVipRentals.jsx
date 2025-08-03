import React from 'react';
import { Calendar, Car, Truck, Undo, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyVipRentals = () => {
  const gilroyStyle = {
    fontFamily: 'Gilroy-Regular, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0%',
  };

  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-[62px] md:my-24">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-[48px]"
        style={{
          fontFamily: 'Prata, serif',
          fontWeight: 400,
          fontStyle: 'normal',
        }}
      >
        Why VIP Rentals
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        {/* Left Grid (2x2 cards + 1 full width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:col-span-2">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 h-full">
            <Car className="mb-5 w-[28px] h-[28px] text-black" />
            <h2
              className="text-xl mb-3"
              style={{
                fontFamily: 'Prata, serif',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Drive in Style
            </h2>
            <p className="text-base text-gray-600 leading-relaxed" style={gilroyStyle}>
              Choose from a curated selection of luxury cars for the ultimate driving experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 h-full">
            <Truck className="mb-5 w-[28px] h-[28px] text-black" />
            <h3
              className="text-xl mb-3"
              style={{
                fontFamily: 'Prata, serif',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Pickup & Delivery, Your Way!
            </h3>
            <p className="text-base text-gray-600 leading-relaxed" style={gilroyStyle}>
              We deliver and pick up your vehicle wherever you are, on your schedule.
            </p>
          </div>

          {/* Card 3 - Full width under */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:col-span-2 h-full">
            <Undo className="mb-5 w-[28px] h-[28px] text-black" />
            <h3
              className="text-xl mb-3"
              style={{
                fontFamily: 'Prata, serif',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Free Cancellation
            </h3>
            <p className="text-base text-gray-600 leading-relaxed" style={gilroyStyle}>
              We understand that plans change. With free cancellation up to 24 hours before your rental, 
              you can book with confidence knowing you won't be tied down by unexpected changes.
            </p>
          </div>
        </div>

        {/* Right Column - Tall CTA Card */}
        <div className="bg-[#18181b] text-white rounded-xl p-5 flex flex-col justify-between h-full min-h-[440px]">
          <div>
            <Calendar className="mb-5 w-[28px] h-[28px] text-white" />
            <h3
              className="text-xl mb-4"
              style={{
                fontFamily: 'Prata, serif',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Easy Booking
            </h3>
            <p className="text-base text-gray-300 leading-relaxed" style={gilroyStyle}>
              Booking your luxury car should be as effortless as possible. With just a few taps, 
              you can reserve your ride at any time, from anywhere. No hassle, no long forms.
              Just quick, secure, and simple booking at your fingertips.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mt-4" style={gilroyStyle}>
              Plus, our user-friendly platform ensures a smooth experience from start to finish.
            </p>
          </div>

          <div>
            <Link
              to="/reserve"
              className="inline-flex items-center w-[202px] h-[48px] bg-white text-black rounded-[6px] pl-[24px] py-[12px] gap-[8px] hover:bg-gray-100 transition"
              style={gilroyStyle}
            >
              <span>Make Reservation</span>
              <ArrowUpRight className="w-[16px] h-[16px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVipRentals;
