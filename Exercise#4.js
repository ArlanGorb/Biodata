import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Exercise4 = () => {
  return [
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
        <View />
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./gambar/logo-with-motto-3.png')} />
      </View>
      <View style={styles.blueContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>,
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },

  redContainer: {
    flex: 1 / 6,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  logoContainer: {
    flex: 4 / 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blueContainer: {
    flex: 1 / 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 5,
  },

  blackBox: {
    backgroundColor: 'black',
    width: 95,
    height: 95,
    margin: 5,
  },

  yellowBox: {
    backgroundColor: 'yellow',
    width: 95,
    height: 95,
    margin: 20,
  },

  logo: {
    width: 400,
    height: 200,
    margin: 'auto',
    objectFit: 'contain',
  },
});

export default Exercise4;