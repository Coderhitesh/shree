import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product._id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, {
        id: product._id,
        name: product.name,
        price: product.afterDiscountPrice,
        image: product.images.url,
        quantity
      }];
    });
  };

  return { cart, addToCart };
};

export default useCart;