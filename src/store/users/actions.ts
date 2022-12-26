import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

export const getUsers = createAsyncThunk<User[]>(
  'products/getUsers',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  },
);
