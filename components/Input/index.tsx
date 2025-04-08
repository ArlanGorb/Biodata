import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        style={styles.input}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    fontSize: 15,
    marginBottom: 25,
  },
});