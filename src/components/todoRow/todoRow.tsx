import React from 'react';
import { View, Text } from 'react-native';
import { Todo } from '../../types';

interface TodoRowProps {
  todo: Todo;
}

export default function TodoRow({ todo }: TodoRowProps) {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
}
