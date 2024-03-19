// src/redux/slice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lat: 0,
    lng: 0,
};

const clickPositionSlice = createSlice({
  name: 'clickPosition',
  initialState,
  reducers: {
    setLocation2: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setLocation2 } = clickPositionSlice.actions;

export default clickPositionSlice.reducer;