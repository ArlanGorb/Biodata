import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = ({first, last, email, avatar}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: avatar}} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{last}</Text> {first}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#bfbbbb',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginRight: 15,
    objectFit: 'cover',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'black',
  },
});