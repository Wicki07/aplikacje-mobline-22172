# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab3 responsywne layouty + nawigacja

Do zrobienia aplikacji wykorzystałem `NavigationContainer` z pakietu **@react-navigation/native** oraz `createStackNavigator` z pakietu **@react-navigation/stack**

Aplikacja składa się łącznie z 4 ekranów:
 - ekranu głównego
 - opisem Spread syntax
 - opisem Rest parameter
 - opisem "Hook" useState

##App.js

Główna aplikacja. Wyświetla ostatecznie stronę główną 

```JS
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  SpreadOperatr  from './components/SpreadOperator'
import  RestParameters  from './components/RestParameters'
import  UseState  from './components/UseState'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
          cardStyle: {
            backgroundColor: '#444',
          }
        }} name="Home" component={Home} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
        }} name="Spread Operatr" component={SpreadOperatr} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
        }} name="Rest parameters" component={RestParameters} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
        }} name="useState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

##Componenty 

Poniżej pokazane są wszystkie komponenty wykorzystywane przez aplikację

###Home.js

```JS
import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from './styles'

export default function Home({ navigation }) {
  return (
    <View style={styles.home.container}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operatr')}>
            <Text style={styles.home.text}>Spread Operatr</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest parameter')}>
            <Text style={styles.home.text}>Rest parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.text}>useState</Text>
        </TouchableOpacity >
    </View>
  );
}
```
###RestParameters.js

```JS
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
```

###SpreadOperator

```JS
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
```

###UseState.js

```JS
import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  RestParameters  from './RestParameters'
import  SpreadOperatr  from './SpreadOperator'

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
            <Stack.Screen name="Spread Operatr" component={SpreadOperatr} />
        </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
```

##Style.js

Wszystkie style są przniesione do osobnego pliku `style.js` 

```JS
import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:128,
    },
    button:{
        flex: 1,
        backgroundColor: '#fa0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 64,
        marginVertical: 32,
        borderRadius:10,
    },
    text: {
        color:'#444',
        fontSize:24,
    },
});


styles.content = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        paddingHorizontal:32,
        paddingVertical:32,
    },
    example:{
        flex: 1,
        backgroundColor: '#fa0',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:10,
    },
    text: {
        color:'#fa0',
        fontSize:20,
    },
    code:{
        color:'#000',
        fontSize:16,
    }
});

styles.nav = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#444',
        paddingHorizontal:15,
        paddingVertical:32,
    },
    text: {
        color:'#000',
        fontSize:20,
        textAlign: 'center',
    },
    button:{
        flex:1,
        backgroundColor: '#fa0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        height:100,
        borderRadius:10,
    },
});
  

export default styles
```

Poniżej zrzuty ekranu z aplikacji

![](https://i.imgur.com/Bxbvaxq.png)

![](https://i.imgur.com/wupRAhZ.png)

![](https://i.imgur.com/gK512PW.png)
