import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input/index';
import Button from './components/Button/index';
import Title from './components/Title/index';

const Exercise6 = () => {
  const [title, setTitle] = useState('Registration'); 
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    setTitle('Welcome!');
    console.log(name, username, email, address, phone);
  };

  return (
    <View style={styles.container}>
      <Title label={title} />
      <Input
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        onChangeText={e => setName(e)}
      />

      <Input
        label="Username"
        placeholder="Masukkan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={e => setEmail(e)}
        secureTextEntry={false}
      />
      <Input
        label="Address"
        placeholder="Masukkan alamat anda"
        onChangeText={e => setAddress(e)}
        secureTextEntry={false}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan nomor telepon anda"
        onChangeText={e => setPhone(e)}
        secureTextEntry={false}
        keyboardType="numeric"
      />
      <Button label="Register" onPress={onSubmit} color="#c238ce" />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
});