import { createStore } from "zustand/vanilla";

type FilterStoreState = {};
type FilterStateAction = {};

type FilterStore = FilterStoreState & FilterStateAction;

const filterStore = createStore<FilterStore>();
