import { TCart } from "@/types";
import { createStore } from "zustand";

export type globalStoreState = {
  cart: TCart[];
};
export type globalStoreActions = {
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
  updateCartQuantity: (item: any, quantity: number) => void;
};

export type GlobalStore = globalStoreState & globalStoreActions;

export const initializeGlobalStore = () => {
  return { cart: [] };
};

export const defaultInitState: globalStoreState = {
  cart: [],
};

export const createGlobalStore = (
  initState: globalStoreState = defaultInitState
) => {
  return createStore<GlobalStore>()((_set, _get) => ({
    ...initState,
    addToCart: (_item) => {},
    removeFromCart: (_item) => {},
    updateCartQuantity: () => {},
  }));
};
