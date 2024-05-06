import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    jobRole: "",
    minExp: "",
    searchedText: "",
    location: "",
    minSalary: ""
  },
  reducers: {
    addRoleFilter: (state,action) => {
      state.jobRole = action.payload;
    },
    addMinExp:(state,action) => {
      state.minExp = action.payload
    },
    addSearchedTitle:(state,action)=> {
      state.searchedText = action.payload
    },
    addLocation:(state,action)=> {
      state.location = action.payload
    },
    addMinSalary:(state,action) => {
      state.minSalary = action.payload
    }
  }
});

export const {addRoleFilter, addMinExp, addSearchedTitle, addLocation, addMinSalary} = filtersSlice.actions
export default filtersSlice.reducer;