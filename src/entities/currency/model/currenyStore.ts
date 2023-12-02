import { create } from "zustand";

type CurrecnyStoreType = {
    valueFrom: string,
    valuteTo: string,
    setValuteFrom: (value: string) => void,
    setValuteTo: (value: string) => void,


}

export const useCurrencyStore = create<CurrecnyStoreType>()((set) => ({
    valueFrom: "",
    valuteTo: "",
    setValuteFrom: (value) => set(() => ({ valueFrom: value })),
    setValuteTo: (value) => set(() => ({ valuteTo: value })),
}));