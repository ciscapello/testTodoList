import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';

type UsersInitialState = {
  todos: Todo[];
  modalState: Todo | null;
};

const initialState: UsersInitialState = {
  todos: [],
  modalState: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setModalState: (state, action) => {
      state.modalState = action.payload;
    },
    updateTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex(elem => elem.id === id);
      state.todos[index] = action.payload;
    },
  },
});

export const { addTodo, setModalState, updateTodo } = todosSlice.actions;

export default todosSlice;
