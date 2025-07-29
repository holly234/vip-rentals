import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CarDisplay = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'vehicles'));
      const carData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCars(carData);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg border border-gray-200 shadow p-5 w-[520px] flex flex-col justify-between"
          >
            {/* Top Info */}
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  car.status === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : car.status === 'In Use'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {car.status || 'Unknown'}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-3">📍 {car.location || 'Unknown Location'}</p>

            {/* Car Info */}
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>
                <span className="font-semibold">Category:</span> {car.category || 'N/A'}
              </p>
              <p>
                <span className="font-semibold">Mileage:</span> {car.mileage} miles
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-between mt-auto">
              <button
                className="flex items-center justify-center w-[75%] border border-gray-300 rounded-md text-gray-700 text-sm py-2 hover:bg-gray-100"
                onClick={() => console.log('Edit vehicle', car)}
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              <button
                className="flex items-center justify-center w-[20%] border border-gray-300 rounded-md text-gray-700 text-sm py-2 hover:bg-gray-100"
                onClick={() => console.log('Delete vehicle', car.id)}
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDisplay;
