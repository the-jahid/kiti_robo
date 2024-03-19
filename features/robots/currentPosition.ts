// src/redux/slice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lat: 0,
    lng: 0,
};

const currentPositionSlice = createSlice({
  name: 'currentPosition',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setLocation } = currentPositionSlice.actions;

export default currentPositionSlice.reducer;