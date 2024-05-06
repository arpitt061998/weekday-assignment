import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobSlice";
import filtersReducer from "./filtersSlice";

const appStore = configureStore(
  {
    reducer: {
      jobs: jobsReducer,
      filters: filtersReducer
    }
  }
);

export default appStore;