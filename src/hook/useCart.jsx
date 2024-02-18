import { create } from "zustand";

const useCartStore = create((set) => {
  return {
    cartItems: [],
    setCartItems: (cartItems) => set({ cartItems }),
  };
});

export default useCartStore;
