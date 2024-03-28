import React from "react";

export default function ProductCard({ title, price, image }) {
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
          <p class="text-gray-600">${price}</p>
          <div class="flex justify-between items-center mt-4">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
