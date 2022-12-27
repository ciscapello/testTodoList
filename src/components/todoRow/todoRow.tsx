import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Todo } from '../../types';
import { todoPrioritySwitcher, todoStatusSwitcher } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { setModalState } from '../../store/todos/todosSlice';

interface TodoRowProps {
  todo: Todo;
}

export default function TodoRow({ todo }: TodoRowProps) {
  const backgroundColor = todoPrioritySwitcher(todo.priority);
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    dispatch(setModalState(todo));
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.status}>{todoStatusSwitcher(todo.status)}</Text>
        <View style={[styles.priority, { backgroundColor }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: '#8e8e8e',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    paddingLeft: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 2,
  },
  status: {
    flex: 1,
    fontSize: 12,
    color: '#838383',
  },
  priority: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
});
