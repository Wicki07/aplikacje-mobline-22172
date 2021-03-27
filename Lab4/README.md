# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab4 obsługa danych wprowadzanych przez użytkownika + modale

Do wykonania laborki skorzystałem z dwóch poprzednich dlatego niektóre elemnty takie jak `style.js`, `App.js` oraz `Home.js` pozostają prawie nie zmienione.

Aplikacja składa się łącznie z 6 ekranów:
 - ekranu głównego
 - ekranu z komponentem TextInput
 - ekrenu ze switchem
 - ekarnu z Pickerem
 - ekarnu z DatePickerem
 - ekranu z ToastAndroid
```
  ./SortAndFilter
    ├── /screens
    │     ├── Home.js
    │     ├── Select.js
    │     ├── DatePicker.js
    │     ├── Switch.js
    │     ├── TextInputScreen.js
    │     └── Toast.js
    └── App.js
 ```

## App.js

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

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  TextInputScreen  from './components/TextInputScreen'
import  Select  from './components/Select'
import  Switch  from './components/Switch'
import  DatePicker  from './components/DatePicker'
import Toast from './components/Toast'

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
      }} name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Select" component={Select} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Switch" component={Switch} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="DatePicker" component={DatePicker} />
    <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Toast" component={Toast} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
```

## Componenty 

Poniżej pokazane są wszystkie komponenty wykorzystywane przez aplikację

### Home.js

Plik `Home.js` został przystosowany do potrzeb Lab4

<img src="https://i.imgur.com/HCznYjY.jpg" alt="drawing" width="200"/>
<img src="https://i.imgur.com/abPTRYO.jpg" alt="drawing" width="200"/>

```JS
import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import styles from './styles'



export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('TextInputScreen')}>
              <Text style={styles.home.text}>TextInputScreen</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Select')}>
              <Text style={styles.home.text}>Select</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Switch')}>
              <Text style={styles.home.text}>Switch</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('DatePicker')}>
              <Text style={styles.home.text}>DatePicker</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Toast')}>
              <Text style={styles.home.text}>Toast</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
```
### Sort.js

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

### LazyLoading.js

Wygląd ekranu w trakcie ładowania

![image](https://user-images.githubusercontent.com/71140843/111834734-4d95e900-88f4-11eb-9f0a-099d59d2fff8.png)

Wygląd ekranu po załadowaniu

![image](https://user-images.githubusercontent.com/71140843/111834811-6c947b00-88f4-11eb-8b0b-bf3d4108c7c9.png)


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

### ComponentToLoad.js

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
### FirstStepProgress.js

![image](https://user-images.githubusercontent.com/71140843/111835296-1247ea00-88f5-11eb-9d39-f87c70473d34.png)


```JS
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './styles'

export default class FirstStepProgress extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Poniżej znjduje się domyślny 'ActivityIndicator'</Text>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Bez podania koloru nie jest on wgl widoczny więc został ostylowany na czarno</Text>
                </View>
                <View style={styles.content.example}>
                    <ActivityIndicator
                        color = '#000'/>
                </View>
            </View>
        )
    };
}
```
### SecondStepProgress.js

![image](https://user-images.githubusercontent.com/71140843/111835321-1b38bb80-88f5-11eb-8ae0-1e3a9073abaa.png)

```JS
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './styles'

export default class SecondStepProgress extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Teraz 'ActivityIndicator'został ostylowany</Text>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Zmieniłem size na 8 można też skorzystac z 'large' oraz 'small' oraz zmieniłem kolor na neonowy róż</Text>
                </View>
                <View style={styles.content.example}>
                    <ActivityIndicator
                        size = '8'
                        color = '#f3a'/>
                </View>
            </View>
        )
    };
}
```
### ThirdStepProgress.js

![image](https://user-images.githubusercontent.com/71140843/111835344-22f86000-88f5-11eb-91ab-c9173eb70761.png)

```JS
import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styles from './styles'

export default class ThirdStepProgress extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Teraz 'ActivityIndicator'został ostylowany</Text>
                    <Text style={[styles.content.code , {textAlign: 'center', fontSize: 25, fontWeight: 500,}]}>Zmieniłem size na 10 można też skorzystac z 'large' oraz 'small' oraz zmieniłem kolor na neonowy róż</Text>
                </View>
                <View style={styles.content.example}>
                    <ActivityIndicator 
                        size = 'large'
                        color = '#519'/>
                </View>
            </View>
        )
    };
}
```
## Style.js

Wszystkie style są przniesione do osobnego pliku `style.js` oraz były również wykorzystywane do zrobienia lab 2

```JS

import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:64,
        height: 1200,
    },
    button:{
        flex: 1,
        backgroundColor: '#fa0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 64,
        marginVertical: 32,
        borderRadius:10,
        height: 50,
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
        height: '100%',
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
    },
    buttons: {
        flexDirection:'row'
    },
    button:{
        backgroundColor: '#fa0',
        textAlign: 'center',
        textAlignVertical: 'center',
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
        height: "50px",
        borderRadius:10,
        borderColor: '#444',
        borderWidth: 5,
        width: 100,
        
    },
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

