import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';
import { getUsers } from './actions';

type UsersInitialState = {
  users: User[] | [];
  isLoading: boolean;
};

const initialState: UsersInitialState = {
  users: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.users = action.payload;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice;
