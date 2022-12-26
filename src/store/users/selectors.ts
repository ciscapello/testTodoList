import { RootState } from '../store';

export const selectUid = (state: RootState) => {
  return state.user.userId;
};
