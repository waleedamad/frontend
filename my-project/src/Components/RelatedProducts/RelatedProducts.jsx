import React from 'react';
import data_products from '../Assests/data_products';
import Items from '../items/Items';

export default function RelatedProducts() {
  return (
    <div className="max-w-7xl mx-auto mt-8 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Related Products</h1>
      <hr className="border-gray-300 mb-6" />

      {/* Grid layout for related products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_products.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
