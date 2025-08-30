import { create } from "zustand";

interface StoreState {
    data:string;
    setData:(data:string)=>void
  
}

export const useAiStore = create<StoreState>((set) => ({
    data:'',
    setData:(data:string)=>set({
        data:data
    })    
}));
