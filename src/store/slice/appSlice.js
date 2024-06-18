import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // sidebarOpen: false,
  MenuOpen: false,
  // searchForm: {
  //   expanded: false,
  //   focused: false,
  // },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggleSidebar: (state) => {
    //   state.sidebarOpen = !state.sidebarOpen;
    // },
    // toggleSearchForm: (state) => {
    //   state.searchForm.expanded = !state.searchForm.expanded;
    //   if (!state.searchForm.expanded) {
    //     state.searchForm.focused = false;
    //   }
    // },
    // focusSearchInput: (state) => {
    //   state.searchForm.focused = true;
    // },
    // blurSearchInput: (state) => {
    //   state.searchForm.focused = false;
    // },
    toggleMenu: (state) => {
      state.MenuOpen = !state.MenuOpen;
    },
  },
});

export const {
  // toggleSidebar,
  // toggleSearchForm,
  // focusSearchInput,
  // blurSearchInput,
  toggleMenu
} = appSlice.actions;

export default appSlice.reducer;
