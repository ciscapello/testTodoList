import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';

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
  reducers: {
    // resetErrorMessage: state => {},
  },
});

export const {} = usersSlice.actions;

export default usersSlice;
