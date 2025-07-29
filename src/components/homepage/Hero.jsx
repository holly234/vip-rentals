import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <section className="h-[87vh] w-full flex flex-col">
      {/* Top Half - Car + Arrows + Label */}
      <div className="h-1/2 bg-[#dff2b1] flex items-center justify-center relative">
        <div className="w-[80%] mx-auto flex items-center justify-center relative">
          {/* Left arrow */}
          <button className="absolute left-0 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-gray-400">
            <FaArrowLeft />
          </button>

          {/* Car image and label */}
          <div className="text-center mt-40">
            <h2 className="text-6xl font-bold text-gray-600 mb-2">McLaren</h2>
            <img
              src="/green.webp"
              alt="mclaren car"
              className="w-full max-w-4xl mx-auto   object-contain"
            />
          </div>

          {/* Right arrow */}
          <button className="absolute right-0 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-gray-400">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom Half - Text and Button */}
      <div className="h-1/2 bg-[#b2e166] flex items-center">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Drive New Orleans in Luxury
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Seamless Service, Top-Tier Vehicles, and Pure Elegance
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-900">
            <Link to="/reserve" className="text-sm font-medium text-blue-600 hover:underline">
           Make reservation <span className="text-xs">↗</span>
        </Link>
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
