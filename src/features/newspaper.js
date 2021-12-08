import { createSlice } from "@reduxjs/toolkit";

export const newspapersSlice = createSlice({
  name: "newspaper",
  initialState: { items: [], term: "", pagination: {totalItems: null, itemsPerPage: 20, page: 1}, loading: false, error: false },
  reducers: {
    search: (state, action) => {
        state.term = action.payload.term;
        state.pagination.page = action.payload.page;
        state.loading = true;
    },
    searchCompleted: (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = {
            totalItems: action.payload.totalItems,
            itemsPerPage: action.payload.itemsPerPage,
            page: state.pagination.page
        }
    },
    searchFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
  },
});

export const { search, searchCompleted, searchFailed } = newspapersSlice.actions;
export default newspapersSlice.reducer;