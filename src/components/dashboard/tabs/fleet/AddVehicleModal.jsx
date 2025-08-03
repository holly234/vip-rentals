import React, { useState } from 'react';
import { db } from '../../../../firebase'; // Adjust the import path as necessary
import { collection, addDoc } from 'firebase/firestore';

const AddVehicleModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    category: '', // Category will now be a dropdown selection
    image: null,
    name: '',
    year: '',
    passengers: '',
    transmission: '',
    luggage: '',
    price: '',
    horsepower: '',
    acceleration: '',
    mpg: '',
    milesPerDay: '',
    deposit: '',
    minDays: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = '';  // Initialize imageUrl as an empty string

    // Upload the image to Cloudinary
    if (formData.image) {
      const formDataImage = new FormData();
      formDataImage.append('file', formData.image);  // The image selected by the user
      formDataImage.append('upload_preset', 'unsigned_upload');  // Cloudinary preset
      formDataImage.append('cloud_name', 'duxoveijc');  // Cloudinary cloud name

      try {
        // Upload the image to Cloudinary
        const res = await fetch('https://api.cloudinary.com/v1_1/duxoveijc/image/upload', {
          method: 'POST',
          body: formDataImage,  // Send the image to Cloudinary
        });

        const data = await res.json();  // Parse the response JSON

        console.log("Cloudinary Response:", data);  // Log the full response to see what's returned

        // Check if Cloudinary returned a valid URL
        if (data.secure_url) {
          imageUrl = data.secure_url;  // Get the image URL if upload is successful
          console.log('Uploaded image URL:', imageUrl);
        } else {
          throw new Error('Image upload failed');
        }
      } catch (err) {
        console.error('Image upload failed:', err);
        setLoading(false);  // Stop loading spinner
        return;  // Stop execution if image upload fails
      }
    }

    // Save form data and image URL to Firestore (NOT the image `File` object)
    try {
      // Remove the File object from formData before saving to Firestore
      const { image, ...restFormData } = formData; // Deconstruct formData to remove 'image'

      await addDoc(collection(db, 'vehicles'), {
        ...restFormData,    // Save the rest of the form data (category, name, etc.)
        imageUrl,           // Save ONLY the image URL (not the `File` object)
        createdAt: new Date(),  // Add the current timestamp
      });

      console.log('Vehicle data saved:', restFormData);
      onClose();  // Close the modal after saving to Firestore
    } catch (error) {
      console.error('Error saving vehicle data:', error);
    } finally {
      setLoading(false);  // Stop the loading spinner
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Add New Vehicle</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          {/* Category (Dropdown) */}
          <div className="flex flex-col">
            <label htmlFor="category" className="text-gray-700 font-medium">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Convertible">Convertible</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          {/* Other fields */}
          {[
            ['name', 'Name'], ['year', 'Year'], ['passengers', 'Passengers'],
            ['transmission', 'Transmission'], ['luggage', 'Luggage'], ['price', 'Price'],
            ['horsepower', 'Horsepower'], ['acceleration', 'Acceleration'], ['mpg', 'MPG'],
            ['milesPerDay', 'Miles Per Day'], ['deposit', 'Deposit'], ['minDays', 'Min Days'],
          ].map(([key, label]) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-gray-700 font-medium">{label}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
              />
            </div>
          ))}

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label htmlFor="image" className="text-gray-700 font-medium">Vehicle Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Vehicle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleModal;