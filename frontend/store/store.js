import { configureStore } from "@reduxjs/toolkit";
import flatSlice from "./flats/flatsSlice";
import filtersSlice from "./filters/filtersSlice";

export const store = configureStore ({
  reducer: {
    flats: flatSlice,
    filters: filtersSlice,
  },
  devTools: true,
});