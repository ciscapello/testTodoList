import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
