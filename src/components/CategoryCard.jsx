import React from "react";

export default function CategoryCard({ title, image }) {
  const imageUrl = image
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <div>
      <div class="w-80 p-2 overflow-hidden bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out ">
        {isValidUrl(imageUrl) ? (
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="image not available"
            src={imageUrl}
          />
        ) : (
          <p className="text-center text-gray-500">Image not available</p>
        )}
        <div class="p-4">
          <h2 class="text-xl  font-semibold">{title}</h2>
          
        </div>
      </div>
    </div>
  );
}
