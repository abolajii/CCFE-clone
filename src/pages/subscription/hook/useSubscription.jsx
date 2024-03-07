import { create } from "zustand";

const useSubscriptionStore = create((set) => {
  return {
    selectedDetails: [],
    setSelectedDetails: (selectedDetails) => set({ selectedDetails }),
  };
});

export default useSubscriptionStore;
