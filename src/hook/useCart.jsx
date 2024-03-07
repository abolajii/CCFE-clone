import { create } from "zustand";

const useCartStore = create((set) => {
  return {
    isCart: false,
    cartItems: [],
    setIsCart: (isCart) => set({ isCart }),
    setCartItems: (cartItems) => set({ cartItems }),
  };
});

export default useCartStore;
