import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientData: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
  },
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientData: (state, action) => {
      state.clientData = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setClientData, setPagination } = clientSlice.actions;

export default clientSlice.reducer;
