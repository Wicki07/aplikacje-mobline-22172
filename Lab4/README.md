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

<img src="https://i.imgur.com/HCznYjY.jpg" alt="drawing" width="250"/>
<img src="https://i.imgur.com/abPTRYO.jpg" alt="drawing" width="250"/>

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
### TextInput.js

Do stworzenia `TextImput` skorzystałem z przykładów z dokumentacji oraz na ich podstawie i inforamcji zawartych w dokumnetacji stworzyłem własne

<img src="https://i.imgur.com/Yckw123.jpg" alt="drawing" width="250"/>

Jedynie input z wieloma liniami pozwala na przejscie do następnej lini czyli przycisk w lewym dolnym rogu ekranu

<img src="https://i.imgur.com/ZVbZ3Jl.jpg" alt="drawing" width="250"/>

Na poniższym przykładzie widać alert który pojawia się po zakończeniu wpisywania tekstu, tekst w alercie pobierany jest z inputa

<img src="https://i.imgur.com/ifAQYpB.jpg" alt="drawing" width="250"/>

Poniżej pokazany jest przykład umożliwiajacy jedynie wprowadzanie cyfr

<img src="https://i.imgur.com/zF8dcUA.jpg" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles'

export default class TextInputsScreen extends Component {
    render(){ 
        return (
            <>
                <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >Podstawowy TextInput</Text>
                        <TextInput style={styles.textinput.input} /><Text/>
                    </View>
                    <View style={styles.content.example}>
                      <Text >TextInput z automatycznym formatowaniem autoCapitalize="words"</Text>
                      <TextInput style={styles.textinput.input} autoCapitalize="words" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z ustawionym value W momencie kiedy ustawiona jest wartość value tekstu nie można edytować</Text>
                      <TextInput style={styles.textinput.input} value="Przykładowy tekst" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wartością domyślną defaultValue="Default Value" tą wartość można edytować</Text>
                      <TextInput style={styles.textinput.input} defaultValue="Default Value" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wyłączoną możliwością edycji</Text>
                      <TextInput style={styles.textinput.input} editable={false} />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput uruchamiający klawiaturę numeryczną keyboardType="numeric"</Text>
                      <TextInput style={styles.textinput.input} keyboardType="numeric" />
                  </View>

                  <View style={styles.content.example}>
                      <Text >TextInput z wieloma liniami multiline=true ustalamy ilość lini na 5 numberOfLines=5</Text>
                      <TextInput style={styles.textinput.input} multiline={true} numberOfLines={5}/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z przykładową metodą wyswietlającą alert</Text>
                      <TextInput style={styles.textinput.input} onEndEditing={event =>{alert(event.nativeEvent.text)}} />
                  </View>
                </ScrollView>
                </View>
            </>
        )
    };
}
```

### Select.js

`Select` sprawił osobiscie wiele problemów dlatego zamieszczony screen jest z przeglądarki nie z aplikacji. Przy próbie wybrania w aplikacji select aplikacja samoistnie się zamykała nie pokazajuąc żadnego błędu

<img src="https://i.imgur.com/KNa8LXU.png" alt="drawing" width="250"/>

Na początku wdrożyłem kod z przykładu poźniej skorzystałem z funkcji asynchronicznych by pobrać dane ze ![strony](https://jsonplaceholder.typicode.com/)


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

