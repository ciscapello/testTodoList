import { Column } from '../../types';

export interface SignUpResponse {
  id: number;
  email: string;
  name: string;
  token: string;
  password: string;
  columns: Column[];
}
export interface SignInResponse {
  id: number;
  email: string;
  name: string;
  token: string;
}
