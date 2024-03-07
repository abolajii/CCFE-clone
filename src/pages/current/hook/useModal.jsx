import { create } from "zustand";

const useModal = create((set) => {
  return {
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
  };
});

export default useModal;
