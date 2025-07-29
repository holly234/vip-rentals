import { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../../firebase';
import CarCard from '../common/CarCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FleetShowcaseSection = () => {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const q = query(collection(db, 'vehicles'), limit(6));
        const snapshot = await getDocs(q);
        const carList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCars(carList);
      } catch (err) {
        console.error('Error fetching cars:', err);
      }
    };

    fetchCars();
  }, []);

  const showNext = () => {
    if (currentIndex + 3 < cars.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const showPrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const visibleCars = cars.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 w-[90%] md:w-[80%] mx-auto bg-white">
      {/* Heading + Arrows Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div className="text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
            A fleet beyond compare
          </h2>
          <p className="mt-4 text-gray-600 text-[15px]">
            Explore our carefully selected collection of high-end vehicles — perfect for every occasion and style.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={showPrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full border transition ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={showNext}
            disabled={currentIndex + 3 >= cars.length}
            className={`p-3 rounded-full border transition ${currentIndex + 3 >= cars.length ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Car Grid */}
      <div className="flex gap-6 justify-center flex-wrap transition-all duration-300 ease-in-out">
        {visibleCars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </section>
  );
};

export default FleetShowcaseSection;
