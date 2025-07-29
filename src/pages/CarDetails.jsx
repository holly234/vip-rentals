import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingCard from '../components/car details/BookingCard';
import CarDetailsContent from '../components/car details/CarDetailsContent';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/car details/Breadcrumb';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const CarDetailsPage = () => {
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
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting car details:", error);
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
    return <div>Car not found</div>;
  }

  return (
    <>
      <Header />

      {/* Title and Breadcrumb - responsive container */}
      

      {/* Main content section - responsive layout */}
      <section className="w-full px-4 sm:px-6 lg:w-[80vw] lg:mx-auto py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Column - always full width except on desktop */}
        <div className="w-full lg:w-[65%]">
          <CarDetailsContent car={car} />
        </div>

        {/* Right Column - shows below on mobile, sticky on desktop */}
        <div className="w-full lg:w-[35%]">
          <div className="block lg:hidden mb-8">
            <BookingCard car={car} />
          </div>
          <div className="hidden lg:block sticky top-24">
            <BookingCard car={car} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarDetailsPage;