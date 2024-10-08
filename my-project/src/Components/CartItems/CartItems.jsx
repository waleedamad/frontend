import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove from '../Assests/remove_icon.jpeg';

export default function CartItems() {
  const { all_product, cartItems, addToCart, removeToCart } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((total, product) => {
    const quantity = cartItems[product.id] || 0;
    return total + product.new_price * quantity;
  }, 0);

  // For this example, shipping is free, so total = subtotal
  const shipping = 0; // Shipping fee
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto p-5 bg-gray-50 rounded-lg shadow-md font-serif">
      {/* Header row */}
      <div className="hidden md:grid grid-cols-6 font-bold text-lg py-4 bg-gray-200 text-center border-b border-gray-300">
        <p className="col-span-1">Product</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>

      {/* Cart items */}
      {all_product && cartItems && all_product.map((product) => {
        const quantity = cartItems[product.id];

        if (quantity > 0) {
          return (
            <div key={product.id} className="grid grid-cols-1 md:grid-cols-6 items-center text-center py-4 border-b border-gray-300 bg-white hover:bg-gray-50">
              {/* Product image */}
              <div className="col-span-1">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-contain mx-auto rounded-md" />
              </div>

              {/* Product name */}
              <p className="col-span-1 text-gray-700 font-medium text-base md:text-lg mt-4 md:mt-0">{product.name}</p>

              {/* Product price */}
              <p className="col-span-1 text-green-500 font-semibold text-base md:text-lg mt-4 md:mt-0">${product.new_price.toFixed(2)}</p>

              {/* Quantity control */}
              <div className="col-span-1 flex justify-center items-center space-x-2 mt-4 md:mt-0">
                <button
                  className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition duration-300"
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
                <p className="text-gray-700 font-semibold">{quantity}</p>
                <button
                  className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition duration-300"
                  onClick={() => removeToCart(product.id)}
                >
                  -
                </button>
              </div>

              {/* Total price for the product */}
              <p className="col-span-1 text-green-500 font-semibold text-base md:text-lg mt-4 md:mt-0">
                ${(product.new_price * quantity).toFixed(2)}
              </p>

              {/* Remove from cart */}
              <div className="col-span-1 mt-4 md:mt-0">
                <img
                  src={remove}
                  alt="Remove item"
                  onClick={() => removeToCart(product.id)}
                  className="w-8 h-8 cursor-pointer hover:opacity-75 transition duration-300 mx-auto"
                />
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Cart Totals Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cart Totals */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="font-bold text-lg mb-4 text-gray-700">Cart Totals</h2>
          <div className="flex justify-between mb-3">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-green-500">${subtotal.toFixed(2)}</p>
          </div>
          <hr className="mb-3" />
          <div className="flex justify-between mb-3">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-semibold text-green-500">${shipping.toFixed(2)}</p>
          </div>
          <hr className="mb-3" />
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Total</h3>
            <p className="font-semibold text-green-500 text-xl">${total.toFixed(2)}</p>
          </div>
          <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-bold  transition duration-300">
            CHECKOUT NOW
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p className="text-gray-700 font-bold mb-4">If You Have a Promo Code, Enter It Here.</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="text"
              placeholder="Enter Promo-code"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-black text-white py-2 px-6 rounded-lg font-bold  transition duration-300">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
