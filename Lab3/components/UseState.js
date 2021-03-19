import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  RestParameters  from './RestParameters'
import  Sort  from './SpreadOperator'

const Stack = createStackNavigator();

const kod = `import React, { useState } from 'react';

function Example() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button>
    </div>
  );
}`;

export default function UseState({ navigation }) {
  return (
    <ScrollView style={styles.content.container}>
      <Text style={styles.content.text}>Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki. Jeśli po stworzeniu komponentu funkcyjnego zorientujesz się, że potrzebujesz przechować kilka wartości w stanie, dotychczas musiałeś zamienić taki komponent na klasę.</Text>
      <View style={styles.content.example}>
        <Text style={styles.content.code}>
          {kod}
        </Text>
      </View>
      <View style={styles.nav.container}>
        <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('Rest parameters')}>
            <Text style={styles.nav.text}>Rest parameters</Text>
            <Stack.Screen name="Rest parameters" component={RestParameters} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.nav.button} onPress={() => navigation.push('Spread Operatr')}>
            <Text style={styles.nav.text}>Spread Operatr</Text>
            <Stack.Screen name="Spread Operatr" component={Sort} />
        </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
