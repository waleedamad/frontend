import React, { useContext } from "react";
import Star from "../Assests/star.jpeg";
import StarDull from "../Assests/stardull.jpeg";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;

  // Extract addToCart from context
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="md:max-w-3xl max-w-4xl mx-auto font-serif p-3 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="flex">
        <div className="w-full h-fit">
          {/* Product Image */}
          <div className="mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-80 object-contain rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="text-center">
            <h1 className="text-xl font-bold mb-1">{product.name}</h1>

            {/* Star Ratings */}
            <div className="flex justify-center items-center mb-1">
              {Array.from({ length: 4 }, (_, index) => (
                <img key={index} src={Star} alt="Star" className="w-4 h-4" />
              ))}
              <img src={StarDull} alt="Star" className="w-4 h-4" />
              <p className="ml-2 text-gray-600 text-sm">(123)</p>
            </div>

            {/* Add to Cart Button */}
            <button
              className="bg-orange-500 rounded px-10 py-1 mt-3 text-white"
              onClick={() => {
                if (product.id) {
                  addToCart(product.id);
                  alert('Successfully Added')
                } else {
                  console.error("Product ID is undefined");
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
