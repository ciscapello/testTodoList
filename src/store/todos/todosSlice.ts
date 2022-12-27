import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';

type UsersInitialState = {
  todos: Todo[];
};

const initialState: UsersInitialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice;
