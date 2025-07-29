import React from 'react';
import { Calendar, Car, Truck, Undo } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyVipRentals = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto my-16 md:my-24 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-center">
        Why VIP Rentals
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Grid (2x2 cards + 1 full width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm h-full">
            <Car className="mb-5 w-6 h-6 text-black" />
            <h3 className="text-xl font-semibold mb-3">Drive in Style</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Choose from a curated selection of luxury cars for the ultimate driving experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm h-full">
            <Truck className="mb-5 w-6 h-6 text-black" />
            <h3 className="text-xl font-semibold mb-3">Pickup & Delivery, Your Way!</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We deliver and pick up your vehicle wherever you are, on your schedule.
            </p>
          </div>

          {/* Card 3 - Full width under */}
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm md:col-span-2 h-full">
            <Undo className="mb-5 w-6 h-6 text-black" />
            <h3 className="text-xl font-semibold mb-3">Free Cancellation</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We understand that plans change. With free cancellation up to 24 hours before your rental, 
              you can book with confidence knowing you won't be tied down by unexpected changes.
            </p>
          </div>
        </div>

        {/* Right Column - Tall CTA Card */}
        <div className="bg-[#18181b] text-white rounded-xl p-7 flex flex-col justify-between h-full min-h-[440px]">
          <div>
            <Calendar className="mb-5 w-6 h-6 text-white" />
            <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Booking your luxury car should be as effortless as possible. With just a few taps, 
              you can reserve your ride at any time, from anywhere. No hassle, no long forms.
              Just quick, secure, and simple booking at your fingertips.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mt-4">
              Plus, our user-friendly platform ensures a smooth experience from start to finish.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/reserve"
              className="inline-block bg-white text-black font-medium px-6 py-3 text-sm rounded-lg hover:bg-gray-100 transition"
            >
              Make Reservation <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVipRentals;
