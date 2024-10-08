import React, { lazy, Suspense, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import DropDownImage from '../Components/Assests/dropdown.jpeg';
import Loading from '../Components/loading/Loading.jsx'; 

const NewItem = lazy(() => import('../Components/items/Items.jsx'));

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='w-full p-4 md:px-12'>
      {/* Product Count and Sort Section */}
      <div className='flex justify-between items-center mb-6'>
        <p className='text-sm md:text-lg'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 Products
        </p>
        <div className='flex items-center gap-2'>
          <p className='text-sm md:text-base font-serif'>Sort By</p>
          <div className='relative'>
            <button className='flex items-center gap-1 border px-3 py-1 rounded-full'>
              <span>Default</span>
              <img src={DropDownImage} alt="Sort" className='w-4' />
            </button>
            {/* Dropdown Options */}
            <div className='absolute mt-2 hidden'>
              {/* Placeholder for dropdown items */}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {all_product && all_product.length > 0 ? (
          all_product.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Suspense fallback={<Loading />} key={item.id}>
                  <NewItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </Suspense>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Explore More Button */}
      <div className='flex justify-center mt-12 mb-3'>
        <button className='rounded-full px-3 py-2 text-white font-serif bg-gray-300'>
          Explore More
        </button>
      </div>
    </div>
  );
}
