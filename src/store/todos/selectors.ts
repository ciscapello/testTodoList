import { RootState } from '../store';

export const selectTodos = (state: RootState) => {
  return state.todos.todos
    .slice()
    .sort((a, b) => Number(b.priority) - Number(a.priority));
};

export const selectModalState = (state: RootState) => {
  return state.todos.modalState;
};

export const selectFieldValues = (state: RootState) => {
  return state.todos.fieldValues;
};
