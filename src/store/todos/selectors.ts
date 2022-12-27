import { RootState } from '../store';

export const selectTodos = (state: RootState) => {
  return state.todos.todos;
};
