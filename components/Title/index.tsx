import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.header}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 10,
    color: 'black',
  },
});