import React, { createContext, useState, useEffect } from 'react';
import all_product from '../Components/Assests/all_product';
import CartItems from '../Components/CartItems/CartItems';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    // Use the length of the all_product array for iteration
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    }

    const removeToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    }
    const totalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };
    

    // Log cartItems to see the current state (this is safe)
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = { all_product, cartItems, addToCart, removeToCart,totalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
