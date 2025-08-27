import { create } from "zustand";

interface StoreState {
  isSearchAble: boolean;
  searchid:number;
  setSearchAble: (value: boolean) => void;
  setSearchId:(value:number)=>void
}

export const useStore = create<StoreState>((set) => ({
  isSearchAble: false,
  searchid:0,
  setSearchAble: (value: boolean) => set({ isSearchAble: value }),
  setSearchId:(value:number)=>set({searchid:value})
}));
