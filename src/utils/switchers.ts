export const todoPrioritySwitcher = (priority: string) => {
  switch (priority) {
    case '1':
      return '#389c47';
    case '2':
      return '#bcd41d';
    case '3':
      return '#a81900';
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
