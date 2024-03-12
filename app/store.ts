// 'use client'
import robotsSlice from '@/features/robots/robotsSlice';
import clickPositionSlice from '@/features/robots/clickPosition';
import makeRouteSlice from '@/features/robots/makeRoute';
import currentPositionSlice from '@/features/robots/currentPosition';
import positionsReducer from '@/features/robots/position';
import { configureStore } from '@reduxjs/toolkit';
import  userSlice  from '@/features/users/useSlice'


export const store = configureStore({
  reducer: {
    currentPositionSlice: currentPositionSlice,
    positions: positionsReducer,
    clickPositionSlice: clickPositionSlice,
    makeRouteSlice: makeRouteSlice,
    robots:robotsSlice,
    users:userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;