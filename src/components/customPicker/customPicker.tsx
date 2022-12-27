import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FormValues } from '../addTodoModal/addTodoModal';

interface CustomPickerProps {
  name: 'status' | 'priority';
  control: Control<FormValues>;
  // selectItems: SelectValue[];
  placeholder: string;
}

const statusValues = [
  { label: 'Open', value: 'open' },
  { label: 'In progress', value: 'inProgress' },
  { label: 'Close', value: 'close' },
];

const priorityValues = [
  { label: 'Low Priority', value: '1' },
  { label: 'Medium Priority', value: '2' },
  { label: 'High Priority', value: '3' },
];

export default function CustomPicker({
  name,
  control,
  placeholder,
}: CustomPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            open={open}
            value={value}
            items={name === 'status' ? statusValues : priorityValues}
            setOpen={setOpen}
            setValue={item => console.log(item)}
            onSelectItem={item => onChange(item.value)}
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
    fontSize: 12,
    color: '#8f8f8f',
  },
});
