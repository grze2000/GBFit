import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import colors from '@styles/colors';
import globalStyles from '@styles/styles';

const schema = yup.object().shape({
  name: yup.string()
    .min(1, 'Name is required')
    .matches(/^[a-zA-Z0-9 ]+$/, 'Name can only contains letters and digits')
    .max(20, 'Max 20 characters')
    .required('Name is required'),
  wheelSize: yup.number()
    .typeError('Size must be a number')
    .min(16, 'Size must be 16" or more')
    .max(36, 'Size must be 36" or less')
    .integer('Size must be an integer')
    .required('Size is required')
});

export default function DeviceInfoScreen({ route }) {

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data, errors);

  return (
    <View style={globalStyles.container}>
      <View style={styles.formGroup}>
        <Text>Device:</Text>
        <Text style={styles.textValue} autofocus="true">{ route.params.item?.name } ({ route.params.item?.id })</Text>
      </View>
      <View style={styles.formGroup}>
        <Text>Device name: </Text>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: {onChange, value} }) => (
            <TextInput
              style={styles.input}
              placeholder="My bike"
              onChangeText={(text) => onChange(text)}
              value={value}
              autoFocus={true}
            />
          )}
        />
        <Text style={styles.errorMessage}>{errors.name?.message}</Text>
      </View>
      
      <View style={styles.formGroup}>
        <Text>Wheel size (in inches):</Text>
        <Controller
          name="wheelSize"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: {onChange, value} }) => (
            <TextInput
              style={styles.input}
              placeholder="26"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />
        <Text style={styles.errorMessage}>{errors.wheelSize?.message}</Text>
      </View>
      
      <TouchableHighlight
        style={globalStyles.button}
        onPress={handleSubmit(onSubmit)}
        underlayColor={colors.hover}
      >
        <Text style={globalStyles.buttonText}>Add device</Text>
      </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: colors.gray
  },
  formGroup: {
    marginVertical: 10
  },
  textValue: {
    marginLeft: 10,
    marginTop: 5,
    color: colors.textGray
  },
  errorMessage: {
    color: colors.error,
    marginLeft: 10
  }
})