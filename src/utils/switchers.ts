import { Colors } from './colors';

export const todoPrioritySwitcher = (priority: string) => {
  switch (priority) {
    case '1':
      return Colors.MAY_GREEN;
    case '2':
      return Colors.ACID_GREEN;
    case '3':
      return Colors.RUFOUS;
  }
};

export const todoStatusSwitcher = (status: string) => {
  switch (status) {
    case 'open':
      return 'Open';
    case 'close':
      return 'Close';
    case 'inProgress':
      return 'In progress';
  }
};
