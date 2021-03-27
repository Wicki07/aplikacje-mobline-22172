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

Na początku wdrożyłem kod z przykładu poźniej skorzystałem z funkcji asynchronicznych by pobrać dane ze [strony](https://jsonplaceholder.typicode.com/users)


```JS
import React, {Component} from 'react';
import {ActivityIndicator, Text, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles'

class Select extends Component {
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item key = {item.name} label = {item.name} />) : <Picker.Item key = {0} enabled={false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            {name: 'Przykładowy' },
            {name: 'Teksty' },
            {name: 'Podany' },
            {name: 'Na ' },
            {name: 'Sztywno' }
        ]
        this.state = {options}
    }
    async componentDidMount() {
        const responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonUsers = await responseUsers.json();
        this.setState({ users: jsonUsers });

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const jsonComments = await responseComments.json();
        this.setState({ comments: jsonComments });
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >Zaimplementowany przykład ze strony</Text>
                        <Picker
                            selectedValue={this.state.options}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Domyślny Select z ustawionymi parametrami</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Wyłączony Select z powodu braku elemntów</Text>
                        <Select /><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Przykład z pobieraniem danych asynchronicznie</Text>
                        <Select  items={this.state.users}/><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Select z pobieranymi danych asynchronicznie</Text>
                        <Select items={this.state.comments}/><Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### Switch.js

Na poniższym ekranie widać jedynie `switch` po naciśnięciu na niego pojawia się `modal` z losową liczbą od 0 do 100. Aby zamknąć modala należy nacisnąć na liczbę następnie modal znika a switch zostaje zmieniony

<img src="https://i.imgur.com/ciaSc7Z.jpg" alt="drawing" width="250"/>

<img src="https://i.imgur.com/Bx4HP4T.jpg" alt="drawing" width="250"/>

```JS
import React, {Component,useState} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';
import styles from './styles'

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={styles.modal.centeredView}>
                    <View style={styles.modal.modalView}>
                        <Text style={styles.modal.modalText} onPress={onToggleSwitch} >{Math.floor(Math.random()*100)}</Text>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>                    
                        <CustomSwitch/><Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### DatePicker.js

Poniższe screeny pokazują działanie zmiany daty <B>poniższy kod działa tylko i wyłącznie na urządzeniach z androidem</B>. Po zatwierdzeniu daty pojawia się komunikat zawierający zmienioną datę.

<img src="https://i.imgur.com/Q0S34gx.jpg" alt="drawing" width="250"/>

<img src="https://i.imgur.com/QVUTh6J.jpg" alt="drawing" width="250"/>

<img src="https://i.imgur.com/Nl8JW91.jpg" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from './styles'

export default class DatePickerScreen extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                  <View style={styles.content.example}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        format="DD-MM-YYYY"
                        placeholder="select date"
                        androidMode="spinner"
                        onDateChange={(date) => {
                            this.setState({date: date});
                            alert(this.state.date)
                        }}
                    /><Text/>
                    <Text>Po naciśnięciu w datę pojawia się opcja zmiany daty poprzez przesuwanie przez odpowiednie daty(funkcja dostępna tylko na Androidzie)</Text>
                    <Text>Domyślną datą jest data dzisiejsza</Text>
                    <Text>Po zatwierdzeniu daty pojawia się alert z podaną data.</Text>
                  </View>
                </ScrollView>
            </View >
        )
    };
}
```

### Toast.js

Do stworzenia elemtu `Toast` wykorzystałem modal z porzedniego ekranu po naciśnięciu na `ToastButton` pojawia sie modal z wyświetlną liczbą milisecund po których zniknie oraz pojawia sie sam toast na dole ekranu z przykładową wiadomością

<img src="https://i.imgur.com/JNuQndW.jpg" alt="drawing" width="250"/>


```JS
import React, {Component, useEffect, useState} from 'react';
import { ScrollView,Button, Modal,ToastAndroid, Text, View } from 'react-native';
import styles from './styles'

const Toast = ({ visible, message }) => {
    if (visible) {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return null;
    }
    return null;
  };


const ToastButton = () => {
    const [visibleToast, setVisibleToast] = useState(false);
    useEffect(() => setVisibleToast(false), [visibleToast]);
    const handleButtonPress = () => {
      setVisibleToast(true);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [time, setTime] = useState(0);
    var promise = null
    const createPromise = () => {
        var tempTime = Math.floor(Math.random()*10000)
        setTime(tempTime)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide');
            }, tempTime);
        });
    }

    return (
        <View >
            <Toast visible={visibleToast} message="Przykładowa widomość" />
            <Button title="Toast button" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                promise.then((value) => {
                    if(value == 'hide'){
                        setIsSwitchOn(false)
                    }
                });
            }}/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={styles.modal.centeredView}>
                    <View style={styles.modal.modalView} >
                        <Text style={styles.modal.modalText} onPress={onToggleSwitch} >{time} ms</Text>
                    </View>
                </View>
            </Modal> 
        </View>
    );
};
export default class ToastScreen extends Component {
    render() {
      return (
        <View>
            <ScrollView >
                <ToastButton/><Text/>
            </ScrollView>
        </View>
      );
    }
}

```

## Style.js

W pliku `style.js` dodałem następujące elemnty, odpowiadają one za ostylowanie modali oraz inputów.

```JS

 styles.modal = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
 styles.textinput = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 3,
      borderRadius: 10,
      padding:8,
    },
  });
  

```

