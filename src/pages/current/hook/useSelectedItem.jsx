import { create } from "zustand";

const useSelectedItem = create((set) => {
  return {
    selectedItem: {},
    setSelectedItem: (selectedItem) => set({ selectedItem }),
  };
});

export default useSelectedItem;
