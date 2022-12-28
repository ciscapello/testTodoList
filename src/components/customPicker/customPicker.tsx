import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, View, Text } from 'react-native';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectModalState, setFieldValues } from '../../store';
import { priorityValues, statusValues } from '../../utils';
import { FormValues } from '../todoModal/todoModal';

interface CustomPickerProps {
  name: 'status' | 'priority';
  control: Control<FormValues>;
  placeholder: string;
  defaultValue: string | undefined;
}

export default function CustomPicker({
  name,
  control,
  placeholder,
  defaultValue,
}: CustomPickerProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(selectModalState);

  const changeHandler = val => {
    if (!modalState) {
      dispatch(setFieldValues({ name, val }));
    }
  };

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value = defaultValue } }) => (
          <DropDownPicker
            open={open}
            value={value as ValueType}
            items={name === 'status' ? statusValues : priorityValues}
            setOpen={setOpen}
            setValue={item => console.log(item)}
            onSelectItem={item => {
              onChange(item.value);
              changeHandler(item.value);
            }}
            containerStyle={styles.containerStyle}
          />
        )}
        name={name}
        rules={{
          required: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: 130,
    marginHorizontal: 10,
  },
  dropdownContainer: {
    marginTop: 20,
  },
  placeholder: {
    alignSelf: 'center',
    marginBottom: 5,
    fontSize: 12,
    color: '#8f8f8f',
  },
});
