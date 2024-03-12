// src/redux/slice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    route: true,
};

const makeRouteSlice = createSlice({
  name: 'makeRoute',
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload.route;
    },
  },
});

export const { setRoute } = makeRouteSlice.actions;

export default makeRouteSlice.reducer;