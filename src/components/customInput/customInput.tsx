import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectModalState, setFieldValues } from '../../store';
import { FormValues } from '../todoModal/todoModal';

interface CustomInputProps {
  control: Control<FormValues>;
  name: 'title' | 'description';
  placeholder: string;
  defaultValue: string | undefined;
}

export default function CustomInput({
  control,
  name,
  placeholder,
  defaultValue,
}: CustomInputProps) {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(selectModalState);
  const changeHandler = val => {
    if (!modalState) {
      dispatch(setFieldValues({ name, val }));
    }
  };
  const height = name === 'title' ? 40 : 200;
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={[styles.input, { height }]}
          placeholder={placeholder}
          blurOnSubmit={true}
          onChangeText={val => {
            onChange(val);
            changeHandler(val);
          }}
          value={value}
          autoCapitalize="none"
          multiline={name === 'title' ? false : true}
          defaultValue={defaultValue}
        />
      )}
      name={name}
      rules={{
        required: true,
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: 20,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginTop: 15,
  },
});
