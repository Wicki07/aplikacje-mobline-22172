# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab3 renderowanie listy danych + obsługa progresu

Do zrobienia aplikacji wykorzystałem `ActivityIndicator` oraz z różnego rodzaju funkcji strzałkowych oraz `map()`

Aplikacja składa się łącznie z 6 ekranów:
 - ekranu głównego
 - ekranu z sortowaniem
 - ekrenu z ładowaniem
 - ekarnu z ActivityIndicator
 - ekarnu z ostylowanym ActivityIndicator
 - ekranu z ActivityIndicator z pakietu `'react-native-paper'`
```
  ./SortAndFilter
    ├── /screens
    │     ├── Home.js
    │     ├── Sort.js
    │     ├── ComponentToLoad.js
    │     ├── LazyLoading.js
    │     ├── FirstStepProgress.js
    │     ├── SecondStepProgress.js
    │     └── ThirdStepProgress.js
    └── App.js
 ```

##App.js

Główna aplikacja. Wyświetla stronę główną wykorzystaną do poprzedniej laborki


```JS
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  SpreadOperatr  from './components/SpreadOperator'
import  FirstStepProgress  from './components/FirstStepProgress'
import  SecondStepProgress  from './components/SecondStepProgress'
import  ThirdStepProgress  from './components/ThirdStepProgress'
import LazyLoading from './components/LazyLoading'

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
      }} name="Sort" component={SpreadOperatr} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="LazyLoading" component={LazyLoading} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="FirstStepProgress" component={FirstStepProgress} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="SecondStepProgress" component={SecondStepProgress} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="ThirdStepProgress" component={ThirdStepProgress} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

```

##Componenty 

Poniżej pokazane są wszystkie komponenty wykorzystywane przez aplikację

###Home.js

Zostane dodały jeszcze 2 opcje oraz teraz ekran ma możliwość skrolowania

![](https://i.imgur.com/ujvXdjs.png)
![](https://i.imgur.com/4cKgOEY.png)

```JS
import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles'


const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Sort')}>
              <Text style={styles.home.text}>Sort</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('LazyLoading')}>
              <Text style={styles.home.text}>LazyLoading</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('FirstStepProgress')}>
              <Text style={styles.home.text}>FirstStepProgress</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('SecondStepProgress')}>
              <Text style={styles.home.text}>SecondStepProgress</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ThirdStepProgress')}>
              <Text style={styles.home.text}>ThirdStepProgress</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
```
###Sort.js

Do sortowania wykorzystałem `map()` oraz funkcje strzałkowe, poniżej ekran z widoku.

![](https://i.imgur.com/VFRS3dS.png)
![](https://i.imgur.com/G0fDLKK.png)
![image](https://user-images.githubusercontent.com/71140843/111834371-cba5c000-88f3-11eb-8b47-3e8783ef5b65.png)


```JS
import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'


const Numbers = ({ liczby }) => {
  var index = 0
  console.log(liczby)
    return (
        <ScrollView >
          {liczby.map(liczba => <Text key={index++} >{liczba}</Text>)}
        </ScrollView>
    );
};

export default class Sort extends Component{
  constructor(){
    super();
    const arr = []; 
    const sorted = false;
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    this.state = { 
      arr 
    };
  }
  sort = () =>{
    if(!this.state.sorted){
      this.state.arr.sort((a,b) => a > b ? 1:-1)
      this.state.sorted = true
    }
    else {
      this.state.arr.sort((a,b) => a > b ? -1:1)
      this.state.sorted = false
    }
    this.forceUpdate()
  }
  randomize = () =>{
    console.log(this.state.arr)
    const newarr = []
    for (let i = 0; i < this.state.arr.length; i++) {
      newarr.push(Math.floor(Math.random() * 1000) + 1);
    }
    this.state.arr = newarr
    this.state.sorted = false
    this.forceUpdate()
  }
  
  render(){ 
    return (
        <View style={styles.content.container}>
          <View style={styles.content.example}>
            <View >
                <Text style={styles.content.code}>Wyświetlanie i sortowanie liczb z przedziału od 1 do 1000. Drugie naciśnięcie sortowania posortuje listę malejąco</Text>
            </View>
            <View style={styles.content.buttons}>
                <TouchableOpacity  onPress={this.sort}>
                    <Text style={styles.content.button}>Sortuj</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.randomize}>
                    <Text style={styles.content.button}>Randomizuj</Text>
                </TouchableOpacity>
            </View>
          </View>
            <View style={styles.content.example} >
                <Numbers  liczby={this.state.arr} />
            </View>
        </View>
    )
};
}
```

###LazyLoading.js

```JS
import React, {Component, Suspense} from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

const OtherComponent = React.lazy(() => import('./ComponentToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.content.code}>Przykład 'Lazy loading'.</Text>
                    <Text style={styles.content.code}>Komponent ComponentToLoad jest ładowany/umieszczany za pomocą React.lazy()</Text>
                </View>
                <View style={styles.content.example}>
                    <Suspense fallback={<Text>Ładowanie...</Text>}>
                        <OtherComponent length="1000000"/>
                    </Suspense>
                </View>
            </View>
        )
    };
}
```

###ComponentToLoad.js

```JS
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComponentToLoad extends Component {
    constructor(props){
        super(props)

        const length = props.length ? props.length : 0
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.state = { text: result }
    }
    render(){ 
        return (
            <ScrollView>
                <Text>{this.state.text}</Text>
            </ScrollView>
        )
    };
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
