import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobSlice";

const appStore = configureStore(
    {
      reducer: {
        jobs: jobsReducer
      }
    }
);

export default appStore;