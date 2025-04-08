import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './components/userCard/index';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>User List</Text>
      {users.map(user => (
        <Card
          first={user.first_name}
          last={user.last_name}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </ScrollView>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  title: {
    fontSize: 31,
    margin: 30,
    fontWeight: 'bold',
  },
});