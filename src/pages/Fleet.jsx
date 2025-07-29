import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CarCard from '../components/common/CarCard';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import FleetFilters from '../components/fleet/FleetFilter';

const Fleet = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <FleetFilters />

      {/* Main container with minimal side margins on mobile */}
      <main className="px-2 sm:px-4 lg:w-[80%] lg:mx-auto my-8 sm:my-16 lg:my-24">
        {/* Wider grid layout for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-8 lg:gap-y-12">
          {vehicles.map((vehicle) => (
            <CarCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Fleet;