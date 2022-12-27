import { RootState } from '../store';

export const selectTodos = (state: RootState) => {
  return state.todos.todos;
};

export const selectModalState = (state: RootState) => {
  return state.todos.modalState;
};
