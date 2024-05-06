import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobData: [],
    filteredJob: [],
  },
  reducers: {
    addJobData: (state,action) => {
      state.jobData = action.payload;
    },
    updateFilteredJobData: (state,action)=> {
      state.filteredJob = action.payload
    }
  }
});

export const {addJobData,updateFilteredJobData} = jobSlice.actions
export default jobSlice.reducer;