import React from 'react';
import data_product from '../Assests/data';
import Items from '../items/Items';

export default function Popular() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-serif font-bold mb-12 text-center md:mt-12 ">POPULAR IN WOMEN</h1>
      <hr className="mb-6"/>
      
      {/* Grid layout for 4 items per line with centered items */}
      <div className="grid grid-cols-1 md:ms-24 md:me-24 text-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {data_product.map((item) => (
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
