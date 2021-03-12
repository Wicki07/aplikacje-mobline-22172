import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import  UseState  from './UseState'
import  SpreadOperatr  from './SpreadOperator'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const kod = `function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
`;

export default function RestParameters({ navigation }) {
  return (
    <ScrollView style={styles.content.container}>
      <Text style={styles.content.text}>Rest parameters pozwala funkcji na przyjmowanie nieokreślonej liczby argumentów jako tablicy, zapewniając sposób reprezentowania funkcji wariadycznych w JavaScript.</Text>
      <View style={styles.content.example}>
        <Text style={styles.content.code}>
          {kod}
        </Text>
      </View>
      <View style={styles.nav.container}>
      <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.nav.text}>useState</Text>
            <Stack.Screen name="useState" component={UseState} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('Spread Operatr')}>
            <Text style={styles.nav.text}>Spread Operatr</Text>
            <Stack.Screen name="Spread Operatr" component={SpreadOperatr} />
        </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
