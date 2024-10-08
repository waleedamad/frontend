import React from 'react';

export default function DescriptionBox() {
  return (
    <div className="max-w-4xl mt-4 mx-auto p-5 font-serif border border-gray-200 rounded-lg shadow-lg bg-white">
      {/* Tabs for Description and Reviews */}
      <div className="flex justify-center mb-5 border-b border-gray-300">
        <div className="px-6 py-3 cursor-pointer font-semibold text-gray-700 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-200">
          Description
        </div>
        <div className="px-6 py-3 cursor-pointer font-semibold text-gray-700 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-200">
          Reviews (124)
        </div>
      </div>

      {/* Description Content */}
      <div className="space-y-4 text-gray-600">
        <p>
          This stylish and comfortable blouse is perfect for casual wear or a day out with friends. Featuring a unique floral print, this top is made from lightweight and breathable fabric to keep you cool throughout the day.
        </p>
        <p>
          The relaxed fit allows for easy movement, while the elegant design adds a touch of sophistication to your everyday wardrobe. Pair it with jeans or skirts for a chic, casual look.
        </p>
        <p>
          Available in various sizes, this blouse is designed to flatter all body types. Don't miss out on this season's must-have top!
        </p>
      </div>
    </div>
  );
}
