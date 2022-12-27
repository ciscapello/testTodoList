import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import { FormValues } from '../addTodoModal/addTodoModal';

interface CustomInputProps {
  control: Control<FormValues>;
  name: 'title' | 'description';
  placeholder: string;
}

export default function CustomInput({
  control,
  name,
  placeholder,
}: CustomInputProps) {
  const height = name === 'title' ? 40 : 200;
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={[styles.input, { height }]}
          placeholder={placeholder}
          onChangeText={val => onChange(val)}
          value={value}
          autoCapitalize="none"
          multiline={name === 'title' ? false : true}
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
