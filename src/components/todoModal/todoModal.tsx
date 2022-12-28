import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../customInput/customInput';
import CustomPicker from '../customPicker/customPicker';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addTodo,
  deleteTodo,
  resetFieldValues,
  selectFieldValues,
  setModalState,
  updateTodo,
} from '../../store';
import { selectModalState } from '../../store';
import { Colors, showAlert } from '../../utils';

interface TodoModalProps {
  modalIsShow: boolean;
  setModalIsShow: (arg: boolean) => void;
}

export type FormValues = {
  title: string;
  description: string;
  status: string;
  priority: string;
};

export default function TodoModal({
  modalIsShow,
  setModalIsShow,
}: TodoModalProps) {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(selectModalState);
  const { control, handleSubmit, reset, formState, setValue } =
    useForm<FormValues>();
  const fieldValues = useAppSelector(selectFieldValues);
  let defaultValues = fieldValues ? fieldValues : modalState;

  if (defaultValues && modalIsShow && !formState.isDirty) {
    setTimeout(() => {
      showAlert(
        () => {
          dispatch(resetFieldValues());
        },
        () => {
          dispatch(setModalState(defaultValues));
          dispatch(setModalState(null));
        },
      );
    }, 300);
  }

  useEffect(() => {
    if (modalState) {
      setValue('title', modalState.title);
      setValue('description', modalState.description);
      setValue('status', modalState.status);
      setValue('priority', modalState.priority);
    }
  }, [modalState, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (!modalState) {
      const newData = { ...data, id: Date.now() };
      dispatch(addTodo(newData));
    } else {
      dispatch(updateTodo({ ...data, id: modalState.id }));
      dispatch(setModalState(null));
    }
    reset();
    setModalIsShow(false);
  };

  const cancelHandler = () => {
    reset();
    setModalIsShow(false);
    dispatch(setModalState(null));
  };

  const deleteHandler = () => {
    reset();
    setModalIsShow(false);
    dispatch(setModalState(null));
    dispatch(deleteTodo(modalState!.id));
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalIsShow || !!modalState}
      statusBarTranslucent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {modalState ? (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={deleteHandler}>
              <Text style={styles.buttonText}>Delete todo</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.title}>New todo</Text>
          )}
          <CustomInput
            control={control}
            name={'title'}
            placeholder="Enter the title of todo"
            defaultValue={modalState?.title}
          />
          <CustomInput
            control={control}
            name={'description'}
            placeholder="Enter the description"
            defaultValue={modalState?.description}
          />
          <View style={styles.pickerBox}>
            <CustomPicker
              control={control}
              name="status"
              placeholder="Todo's status"
              defaultValue={modalState?.status}
            />
            <CustomPicker
              control={control}
              name="priority"
              placeholder="Priority"
              defaultValue={modalState?.priority}
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={cancelHandler}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>
                {modalState ? 'Add changes' : 'Add todo'}
              </Text>
            </TouchableOpacity>
          </View>
          {formState.errors.description?.message}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexGrow: 1 },
  title: {
    fontSize: 24,
    color: Colors.PHILIPPINE_GRAY,
    fontWeight: '700',
  },
  pickerBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 20,
    zIndex: -1000,
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
    // height: '80%',
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
    backgroundColor: Colors.IGUANA_GREEN,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    marginHorizontal: 5,
  },
  buttonOpen: {
    backgroundColor: Colors.MAYA_BLUE,
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
