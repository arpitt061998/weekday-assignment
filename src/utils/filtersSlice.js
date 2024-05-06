import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    jobRole: "",
    minExp: "",
    searchedText: "",
    location: ""
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
    }
  }
});

export const {addRoleFilter, addMinExp, addSearchedTitle, addLocation} = filtersSlice.actions
export default filtersSlice.reducer;