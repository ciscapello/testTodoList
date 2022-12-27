export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar?: string;
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'inProgress' | 'closed';
  priority: '1' | '2' | '3';
}
