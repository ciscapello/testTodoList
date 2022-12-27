import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../customInput/customInput';
import CustomPicker from '../customPicker/customPicker';
import { useAppDispatch } from '../../hooks/';
import { addTodo } from '../../store';
// import CustomPicker from '../customPicker/customPicker';

interface AddTodoModalProps {
  modalIsShow: boolean;
  setModalIsShow: (arg: boolean) => void;
}

export type FormValues = {
  title: string;
  description: string;
  status: string;
  priority: string;
};

export default function AddTodoModal({
  modalIsShow,
  setModalIsShow,
}: AddTodoModalProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    const newData = { ...data, id: Date.now() };
    dispatch(addTodo(newData));
    reset();
    setModalIsShow(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalIsShow}
      statusBarTranslucent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomInput
            control={control}
            name={'title'}
            placeholder="Enter the title of todo"
          />
          <CustomInput
            control={control}
            name={'description'}
            placeholder="Enter the description"
          />
          <View style={styles.pickerBox}>
            <CustomPicker
              control={control}
              name="status"
              placeholder="Todo's status"
            />
            <CustomPicker
              control={control}
              name="priority"
              placeholder="Priority"
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalIsShow(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Add todo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  pickerBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '90%',
    height: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#70b172',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    marginHorizontal: 5,
  },
  buttonOpen: {
    backgroundColor: '#5ecdfd',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 40,
    paddingLeft: 20,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginTop: 15,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
  },
});
