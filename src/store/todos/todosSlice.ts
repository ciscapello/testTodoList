import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';

type UsersInitialState = {
  todos: Todo[];
  modalState: Todo | null;
  fieldValues: Todo | null;
};

const initialState: UsersInitialState = {
  todos: [],
  modalState: null,
  fieldValues: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.fieldValues = null;
    },
    setModalState: (state, action) => {
      state.modalState = action.payload;
    },
    updateTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex(elem => elem.id === id);
      state.todos[index] = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(elem => elem.id !== action.payload);
    },
    setFieldValues: (state, action) => {
      const { name, val } = action.payload;
      console.log(action.payload);
      const obj = { ...state.fieldValues };
      state.fieldValues = { ...obj, [name]: val } as Todo;
    },
    resetFieldValues: state => {
      state.fieldValues = null;
    },
  },
});

export const {
  addTodo,
  setModalState,
  updateTodo,
  deleteTodo,
  setFieldValues,
  resetFieldValues,
} = todosSlice.actions;

export default todosSlice;
