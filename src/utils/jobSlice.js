import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    addJobData: (state,action) => {
      return action.payload
    }
  }
});

export const {addJobData} = jobSlice.actions
export default jobSlice.reducer;