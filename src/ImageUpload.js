import React, { useState } from 'react';
import { db } from './firebase'; // Import Firestore from firebase.js
import { collection, addDoc } from 'firebase/firestore';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'unsigned_upload');  // Replace with your preset name
    formData.append('cloud_name', 'duxovejjc');  // Replace with your Cloudinary cloud name

    setLoading(true);

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/duxovejjc/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url); // Store the image URL

      // Save the image URL to Firestore
      await addDoc(collection(db, 'images'), {
        imageUrl: data.secure_url,
        createdAt: new Date()
      });

      console.log('Uploaded image URL:', data.secure_url);
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} disabled={loading} />
      {loading && <p>Uploading...</p>}
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" />
          <p>Image uploaded and saved to Firestore!</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
