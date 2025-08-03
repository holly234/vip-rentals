import React from 'react';

const InstagramPromo = () => {
  return (
    <section className="w-[80%] mx-auto my-24 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Text */}
      <div className="flex-1 md:text-center lg:text-left">
        <p
          className="mb-2 text-gray-800"
          style={{
            fontFamily: 'Prata, serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '140%',
            letterSpacing: '0.005em',
          }}
        >
          Follow us on
        </p>
        <p
          className="underline underline-offset-4 text-black"
          style={{
            fontFamily: 'Prata, serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '140%',
            letterSpacing: '0.005em',
          }}
        >
          @vip_Rentals
        </p>
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
