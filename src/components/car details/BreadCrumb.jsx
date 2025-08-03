import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';  // Import your Firebase configuration
import { doc, getDoc } from 'firebase/firestore';

const Breadcrumb = () => {
  const { id } = useParams();  // Get the car ID from the URL
  const [car, setCar] = useState(null);  // State to store car data
  const [loading, setLoading] = useState(true);  // Loading state
  const navigate = useNavigate();  // Hook for navigating

  useEffect(() => {
    // Fetch the specific car data from Firestore
    const fetchCarDetails = async () => {
      try {
        const docRef = doc(db, 'vehicles', id); // Reference to the car document
        const docSnap = await getDoc(docRef); // Fetch the car document

        if (docSnap.exists()) {
          setCar({ id: docSnap.id, ...docSnap.data() }); // Set the fetched car data
        } else {
          console.log('No such car document!');
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchCarDetails();
  }, [id]);  // Dependency on `id`, fetch data whenever the ID changes

  if (loading) {
    return null;  // Optionally return null or a loading indicator while fetching
  }

  if (!car) {
    return null;  // Handle case when car is not found
  }

  const handleCategoryClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="text-sm text-gray-500 mb-6 flex items-center space-x-2 px-1">
      <span
        onClick={handleCategoryClick}  // Trigger the navigate function on click
        className="font-medium text-gray-700 underline capitalize cursor-pointer"
      >
        {car.category}
      </span>
      <span>›</span>
      <span className="capitalize">{car.name}</span>
    </div>
  );
};

export default Breadcrumb;
