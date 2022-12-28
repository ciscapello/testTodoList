import { Alert } from 'react-native';

export const showAlert = (callbackToReject, callbackToResolve) =>
  Alert.alert(
    'У вас осталось несохраненное дело',
    'Желаете ли вы продолжить заполнение задачи или начать с начала?',
    [
      {
        text: 'Начать сначала',
        onPress: callbackToReject,
        style: 'destructive',
      },
      {
        text: 'Продолжить',
        onPress: callbackToResolve,
        style: 'default',
      },
    ],
  );
