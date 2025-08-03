import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {  ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[70vh] w-full flex flex-col relative">
      {/* Top Half */}
      <div className="h-[440px] md:h-1/2 bg-[#dff2b1] relative flex items-center justify-center">
        <div className="w-[80%] mx-auto relative flex items-center justify-center">
          {/* Left arrow */}
          <button className="absolute left-0 z-10 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-gray-400">
            <FaArrowLeft />
          </button>

          {/* McLaren heading - leave untouched */}
          <h2
  className="mt-24 text-center text-[#CCCCCC] z-10"
  style={{
    fontFamily: 'Gilroy-Bold, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '41.95px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
  }}
>
  McLaren
</h2>


          {/* Right arrow */}
          <button className="absolute right-0 z-10 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-gray-400">
            <FaArrowRight />
          </button>
        </div>

        {/* Car Image centered at the boundary line */}
        <img
          src="/green.webp"
          alt="mclaren car"
          className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[30%] w-[343px] md:w-full max-w-4xl object-contain z-10"
        />
      </div>

      {/* Bottom Half */}
      <div className="h-[440px] md:h-1/2 bg-[#b2e166] flex items-center">
        <div className="w-[98%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between md:items-center items-start px-2 md:px-0">
          <div>
            <h1
              className="text-4xl md:text-5xl leading-tight text-gray-800"
              style={{
                fontFamily: 'Prata, serif',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              Drive New Orleans in Luxury
            </h1>
            <p
              className="mt-[16px] text-sm md:text-base text-gray-600"
              style={{
                fontFamily: 'Gilroy-Regular, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }}
            >
              Seamless Service, Top-Tier Vehicles, and Pure Elegance
            </p>
          </div>

          <button
      className="bg-black text-white w-[179px] h-[46px] rounded-[4px] px-[16px] py-[8px] flex items-center gap-[6px] hover:bg-gray-900 transition mt-[32px]"
      style={{
        fontFamily: 'Gilroy-Regular, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0%',
      }}
    >
      <Link
        to="/reserve"
        className="flex items-center gap-[6px] hover:underline"
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Make reservation
        <ArrowUpRight className="w-[16px] h-[16px]" />
      </Link>
    </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
