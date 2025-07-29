import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Breadcrumb from './Breadcrumb';

const CarDetailsContent = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const docRef = doc(db, 'vehicles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCar({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such car document!');
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <p className="text-red-500">Car not found.</p>;
  }

  return (
    <div className="text-gray-800">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Full-width image with reduced height */}
        <div className="w-full">
          <img
            src={car.imageUrl}
            alt={car.name}
            className="w-full h-64 object-cover"
          />
        </div>
        {/* Breadcrumb under image on mobile */}
        <div className="px-4 sm:px-6 pt-3">
          <Breadcrumb />
        </div>
      </div>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden lg:block w-full px-4 sm:px-6 lg:w-[80vw] lg:mx-auto pt-6">
        <Breadcrumb />
      </div>

      {/* Main Car Image (desktop) */}
      <div className="hidden lg:block rounded-xl overflow-hidden mb-4">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* Rest of the content (same for both mobile and desktop) */}
      <div className="px-4 sm:px-6 lg:px-0">
        {/* Info Cards - Modified to merge deposit and min days */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-xl">
            <p>🚘 {car.milesPerDay} free miles a day</p>
            <p>$5 per extra mile</p>
          </div>
          <div className="bg-gray-50 text-gray-700 px-4 py-2 rounded-xl">
            <p>💰 Security Deposit: {car.deposit}</p>
            <p>📅 Minimum Days: {car.minDays}</p>
          </div>
        </div>

        {/* Description Section (unchanged) */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <h3 className="text-2xl font-bold mb-2">THE {car.year} {car.name.toUpperCase()}</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {car.description}
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <p className="text-2xl font-bold">{car.horsepower}</p>
              <p className="text-sm text-gray-500">Horsepower</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{car.acceleration}</p>
              <p className="text-sm text-gray-500">Acceleration (0–60 mph)</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{car.mpg}</p>
              <p className="text-sm text-gray-500">Miles Per Gallon</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">Unmatched Luxury & Performance</h4>
            <p className="text-gray-700">
              {car.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsContent;