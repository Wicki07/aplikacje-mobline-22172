// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#fa0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 64,
    marginVertical: 20,
    borderRadius:10,
    height: 25,
    color:'#f4a'
  },
  text: {
    color: '#fff',
  },
});

export default Mybutton;