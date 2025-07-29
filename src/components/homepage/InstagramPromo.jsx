import React from 'react';

const InstagramPromo = () => {
  return (
    <section className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Text */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-2xl font-medium text-gray-800 mb-2">Follow us on</p>
        <p className="text-3xl font-semibold text-black underline underline-offset-4">@vip_Rentals</p>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/instagram-promo.png"
          alt="Instagram Promo"
          className="w-full max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
};

export default InstagramPromo;
