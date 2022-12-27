import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AddTodoModal } from '../../components';
import TodoRow from '../../components/todoRow/todoRow';
import { useAppSelector } from '../../hooks';
import { selectTodos } from '../../store/todos/selectors';

export default function TodosScreen() {
  const [modalIsShow, setModalIsShow] = useState(false);
  const todos = useAppSelector(selectTodos);

  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalIsShow(true)}>
          <Text style={styles.buttonText}>ADD NEW TODO</Text>
        </TouchableOpacity>
        <ScrollView>
          {todos.map(elem => (
            <TodoRow todo={elem} key={elem.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <AddTodoModal modalIsShow={modalIsShow} setModalIsShow={setModalIsShow} />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 60,
    marginVertical: 10,
    backgroundColor: '#70b172',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
