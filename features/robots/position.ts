// src/redux/slice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positions: [
    { lat: 23.876985, lng: 90.320455 },
    { lat: 23.876989, lng: 90.320553 },
    { lat: 23.876975, lng: 90.320903 },
    { lat: 23.876959, lng: 90.321245 },
    { lat: 23.876977, lng: 90.321298 },
    { lat: 23.877143, lng: 90.321329 },
    { lat: 23.877346, lng: 90.321346 },
    { lat: 23.877705, lng: 90.321398 },
    { lat: 23.877889, lng: 90.321419 },
    { lat: 23.877895, lng: 90.321379 },
  ],
};

const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.positions = action.payload.positions;
    },
  },
});

export const { setLocations } = positionsSlice.actions;

export default positionsSlice.reducer;
