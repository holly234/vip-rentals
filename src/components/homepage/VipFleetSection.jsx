import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../common/CarCard';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const VipFleetSection = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'vehicles'));
        const vehiclesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVehicles(vehiclesData);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <section className="w-[90%] md:w-[85%] mx-auto py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">VIP FLEET</h2>
        <Link to="/fleet" className="text-sm font-medium text-blue-600 hover:underline">
          More →
        </Link>
      </div>

      {/* Scrollable horizontal row on all devices */}
      <div className="overflow-x-auto px-2 -mx-2">
        <div className="flex space-x-6 w-max">
          {vehicles.slice(0, 6).map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-[300px] flex-shrink-0"
            >
              <div className="h-full flex flex-col justify-between border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <CarCard {...vehicle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipFleetSection;
