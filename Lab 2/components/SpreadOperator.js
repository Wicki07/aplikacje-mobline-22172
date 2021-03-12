import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import  RestScreen  from './RestParameters'
import  UseState  from './UseState'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const kod = `function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`;

export default function SpreadOperator({ navigation }) {
  return (
    <ScrollView style={styles.content.container}>
    <Text style={styles.content.text}>Spread operatr umożliwia rozwinięcie iterowalnych elementów, takich jak wyrażenie tablicowe lub ciąg znaków, w miejscach, w których oczekuje się zera lub większej liczby argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych), lub wyrażenie obiektu do rozwinięcia w miejsca, w których oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektów).</Text>
    <View style={styles.content.example}>
      <Text style={styles.content.code}>
        {kod}
      </Text>
    </View>
    <View style={styles.nav.container}>
        <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('Rest parameters')}>
            <Text style={styles.nav.text}>Rest parameters</Text>
            <Stack.Screen name="Rest parameters" component={RestScreen} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.nav.text}>useState</Text>
            <Stack.Screen name="useState" component={UseState} />
        </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
