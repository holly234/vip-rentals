import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const TravelOptionsSection = () => {
  return (
    <section className="py-20 bg-white w-[90%] md:w-[80%] mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Tailored Travel Experiences
        </h2>
        <p className="mt-4 text-gray-600 text-[15px] max-w-xl mx-auto">
          Choose from our flexible self-drive car rental options or indulge in the ease of our professional chauffeur service.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <Link
          to="/reserve"
          className="group relative overflow-hidden rounded-xl shadow-sm"
        >
          <img
            src="/reserve.jpg" // Replace with your actual image path
            alt="Reserve Your Ride"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 p-5 text-white flex items-center justify-between w-full">
            <span className="text-[15px] font-medium">Reserve Your Ride</span>
            <FaArrowUpRightFromSquare size={14} />
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          to="/chauffeur"
          className="group relative overflow-hidden rounded-xl shadow-sm"
        >
          <img
            src="/chauffeur.jpg" // Replace with your actual image path
            alt="Book a Chauffeur"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 p-5 text-white flex items-center justify-between w-full">
            <span className="text-[15px] font-medium">Book a Chauffeur</span>
            <FaArrowUpRightFromSquare size={14} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TravelOptionsSection;
