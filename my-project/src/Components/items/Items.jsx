import React from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  return (
    <div className="   overflow-hidden  ms-2 me-2 ">
      <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt={props.name} className="w-full md:h-56 h-64 object-cover transition-transform transform-gpu scale-105 rotate-2 translate-y-2   hover:scale-105 " /></Link>
      <div className="p-4 font-serif text-base">
        <p className="text-base">{props.name}</p>
        <div className="flex gap-4 items-center mt-2">
          <div className="text-red-600 ">${props.new_price}</div>
          <div className="line-through text-gray-500">${props.old_price}</div>
        </div>
      </div>
    </div>
  );
}
