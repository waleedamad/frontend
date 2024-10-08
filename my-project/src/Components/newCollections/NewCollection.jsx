import React from 'react'
import collection from '../Assests/new_collection'
import Items from '../items/Items'


export default function NewCollection() {
  return (
    <div className='md:ms-24 md:me-24'>
        <div className='mb-1'>
        <h1 className='text-center font-serif text-3xl font-bold mt-24 '>NEW COLLECTIONS</h1>
        <hr className=' md:ms-24 md:me-24'/>
        </div>
        <div className="grid grid-cols-1 mt-16   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {collection.map((item)=>{
            return <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
        </div>
    </div>
  )
}
