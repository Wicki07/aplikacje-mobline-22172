# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab6 - obsługa obrazów + tryb offline

Do wykonania laborki skorzystałem z  poprzednich dlatego niektóre elemnty takie jak `style.js`, `App.js` oraz `Home.js` pozostają prawie nie zmienione.

Aplikacja składa się łącznie z 5 ekranów:
 - ekranu głównego
 - ekranu wczytującego obrazki
 - ekrenu z Async Storage
 - ekarnu ze statusem połęczenia internetowego
 - ekranu z leniwym ładowaniem obrazka
 - ekranu ze zmianą rozmiaru obrazka
 - ekranu z synchronizacja połączenia
```
  ./SortAndFilter
    ├── /screens
    │     ├── Home.js
    │     ├── AsyncStrorageComponent.js
    │     ├── ConnectionCheck.js
    │     ├── Images.js
    │     ├── LazyLoading.js
    │     ├── Slider.js
    │     └── SyncData.js
    └── App.js
 ```

## App.js

Główna aplikacja. Wyświetla stronę główną wykorzystaną do poprzedniej laborki


```JS
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  ConnectionCheck  from './components/ConnectionCheck'
import  Images  from './components/Images'
import  Slider  from './components/Slider'
import LazyLoading from "./components/LazyLoading";
import AsyncStorageComponent from './components/AsyncStorageComponent'
import SyncData from './components/SyncData'

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
      }} name="Images" component={Images} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Slider" component={Slider} />
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
      }} name="ConnectionCheck" component={ConnectionCheck} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="AsyncStorageComponent" component={AsyncStorageComponent} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="SyncData" component={SyncData} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
```

## Componenty 

Poniżej pokazane są wszystkie komponenty wykorzystywane przez aplikację

### Home.js

Plik `Home.js` został przystosowany do potrzeb Lab5

```JS
import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import styles from './styles'



export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Images')}>
              <Text style={styles.home.text}>Images</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Slider')}>
              <Text style={styles.home.text}>Slider</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('LazyLoading')}>
              <Text style={styles.home.text}>LazyLoading</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ConnectionCheck')}>
              <Text style={styles.home.text}>ConnectionCheck</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('AsyncStorageComponent')}>
              <Text style={styles.home.text}>AsyncStorage</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.home.text}>SyncData</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
```
### AsyncStorageComponent.js

W poniższym przykładzie przygotowałem funkcję zapisującą oraz dodatkowo napisałęm funkcję odczytującą dane

Wprowadzenie danych

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174656936_755260538467310_6464728118406473997_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ty4_FFP8rgAAX_xp6O5&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=522a7db0aa14d2737d4d0f69adba4355&oe=60A06B57" alt="drawing" width="250"/>

Zapis danych

<img src="https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174387546_467192267667552_1103906694958384886_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=H3tscSvolaYAX_cD4cE&_nc_oc=AQmuhbf3j6XjxuwH94ssYHXLifnGonyQ9sycvJ50zdHzCcqeT0awl79oqjAbPdqii6g&_nc_ht=scontent.fwaw3-1.fna&tp=7&oh=a526748064d0b76e3b800fce50e574d8&oe=609E120A" alt="drawing" width="250"/>

Odczyt danych

<img src="https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174513408_503325907704224_5497724397831976366_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=hn63vnjiYsQAX9cutk_&_nc_ht=scontent.fwaw3-1.fna&tp=7&oh=caf22f0bc99053cf218a3a8f5291177b&oe=609DED9F" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { Button, ScrollView, Text, ToastAndroid,TextInput, View, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'


export default class AsyncStorageComponent extends Component {
    constructor(){
        super()
    }
    state = {
        saveKey:'',
        saveValue:'',
        readKey:''
    }
    save = async () => {
        var key = this.state.saveKey
        var value = this.state.saveValue
        await AsyncStorage.setItem(key,value);
        alert(key + ' zapisano jako ' + value)
    };
    open = async () => {
        var key = this.state.readKey
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            alert('Klucz:'+ key +' Wartość:'+ value);
        }else{
            alert('Nie znaleziono elementu');
        }
    };
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View >
                        <View style={styles.content.example} >
                            <Text style={styles.home.text}>Wpisz klucz jaką chcesz zapisać pod daną wartością</Text>
                            <View >
                                <TextInput style={styles.textinput.input} onEndEditing={event =>{this.setState({saveKey: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput style={styles.textinput.input} onEndEditing={event =>{this.setState({saveValue: event.nativeEvent.text})}} placeholder="Wpisz wartość" />
                            </View>
                            <Button 
                                title='Zapisz'
                                onPress={this.save}
                            >
                            </Button>
                        </View>
                    </View>
                    <View >
                        <View style={styles.content.example}>
                            <Text style={styles.home.text}>Podaj wartość klucza od odczytania</Text>
                            <View >
                                <TextInput style={styles.textinput.input} onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                            </View>
                            <Button
                                title='Odczytaj'
                                onPress={this.open}
                            ></Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### ConnectionCheck.js

Poniższy przyklad przedstawia informacje o połączeniu wykorzystująć `NetInfo`

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/173935303_946203226151356_41540642986906943_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Z7NG0pWeIMQAX-m-wDa&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=b37441a8c765f1dd64da290ce0c4a480&oe=609EE6C0" alt="drawing" width="250"/>


```JS
import React, {Component } from 'react';
import { ScrollView, Text, View,TouchableOpacity, TouchableHighlight, Button, TextInput, Modal  } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles'

export default class ConnectionCheck extends Component {
    state = {};
    componentDidMount() {
        this.fetchState();
    }
    fetchState = async () => {
        const state = await NetInfo.fetch();
        var tempState = JSON.stringify(state)
        this.setState(JSON.parse(tempState))
    };

    render(){ 
        var details = this.state.details ? JSON.parse(JSON.stringify(this.state.details,null)) : ''
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.home.text}>Informacje o połączeniu</Text>
                </View>
                <ScrollView >
                    <View style={styles.content.example}>  
                        <Text style={styles.home.text}>IP: {details.ipAddress}</Text>
                        <Text style={styles.home.text}>Jakość: {details.strength}%</Text>
                        <Text style={styles.home.text}>Częstotliwość: {details.frequency}MHz</Text>
                        <Text style={styles.home.text}>Internet osiągalny: {this.state.isInternetReachable?`Tak`:`Nie`}</Text>
                        <Text style={styles.home.text}>Typ: {this.state.type}</Text>
                        <Text style={styles.home.text}>Połączony: {this.state.isConnected?`Tak`:`Nie`}</Text>
                        <Text style={styles.home.text}>Wifi: {this.state.isWifiEnabled?`Tak`:`Nie`}</Text>
                        <Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### Images.js

Na poniższym wykorzystałęm 2 sposoby dodwania zdjęć. Przy pomocy `require()` oraz `uri`

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174656936_141175884623154_5935703667055479161_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=qjk2K-FL2RoAX9uhgY2&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=12af479c52b2c0cfc570b84520ac952a&oe=609FDAF3" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions, Image  } from 'react-native';
import styles from './styles'
import favicon from '../assets/favicon.png'; 


export default class DatePickerScreen extends Component {
    render(){ 
        return (
                <View style={styles.content.container}>
                    <View style={styles.content.example}>
                        <Text style={styles.home.text}>
                            Ładownie obrazków
                        </Text>
                    </View>
                    <View style={styles.content.example} >
                        <Image style={{width: 200, height: 200}} source={require('../assets/favicon.png')}  /> 
                    </View>
                    <View style={styles.content.example} >
                        <Image style={{width: 200, height: 200}} source={{uri: 'https://lh3.googleusercontent.com/b32WEASvRR5pKIua_UcuwAJVWWfFG9vbUy8x2xxEfvWAyiA6nAoGNQT90ZAOyx0TEG9twgJZl2uHWgNhz3N1luNyaw=w640-h400-e365-rj-sc0x00ffffff',}}  /> 
                    </View>
                    
                </View >
        )
    };
}
```

### LazyLoading.js

Na poniższym przykładzie przedstawione jest leniwe ładowanie obrazka jednak obrazek wczytywał się za szybko wieć nie udało mi się tego uchwycić na zrzucie.

<img src="https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174530748_3906253069468611_6774122064956237677_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=9Xg2DCFBlUEAX-dgYS_&_nc_ht=scontent.fwaw3-1.fna&tp=7&oh=30d513b433fcc59b6d15845ff3a773a0&oe=609E0F16" alt="drawing" width="250"/>

Przedstawiona jest również implementacja zbioru ikon

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174789960_1094243574314666_6996048879904808463_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=2LMMwCjbNDIAX_pI5dB&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=6cc1055f0824446b3ccbb098b51974da&oe=60A03834" alt="drawing" width="250"/>



```JS

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableHighlight, Image} from 'react-native';
import { Feather, AntDesign,Entypo } from '@expo/vector-icons';
import styles from './styles';
import loader from '../assets/loader.gif'; 



export default class LazyLoadingAndIcons extends Component {
    
  render(){ 
      return (
          <View style={styles.content.container}>
            <ScrollView>
              <View style={styles.content.example}>
                  <Text style={styles.home.text}>LazyLoading i ikony</Text>
              </View>
                  <View >
                      <View style={styles.content.example}>
                          <Image loadingIndicatorSource={loader} style={{width: 200, height: 200}} source={{uri: 'https://i.pinimg.com/originals/dd/ef/fa/ddeffa7b4020ca3ef3630d6458aae9c7.jpg',}} progressiveRenderingEnabled={false}/>
                      </View>
                  </View> 
                  <View style={styles.content.example}>
                    <Text style={styles.home.text}>Przykładowe ikony</Text>    
                  </View> 
                  <View style={[styles.content.example]}>
                    <ScrollView contentContainerStyle={[{flex:1,flexDirection: 'row'}]}>
                      
                      <View >
                          <AntDesign name="hdd" size={24} color="#444" />
                          <AntDesign name="ie" size={24} color="#444" />
                          <Feather name="delete" size={24} color="#444" />
                          <AntDesign name="pushpino" size={24} color="#444" />
                          <AntDesign name="hearto" size={24} color="#444" />
                          <AntDesign name="calculator" size={24} color="#444" />
                          <Feather name="chrome" size={24} color="#444" />
                          <Feather name="github" size={24} color="#444" />
                          <AntDesign name="piechart" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="API" size={24} color="#444" />
                          <AntDesign name="fork" size={24} color="#444" />
                          <AntDesign name="contacts" size={24} color="#444" />
                          <AntDesign name="edit" size={24} color="#444" />
                          <AntDesign name="warning" size={24} color="#444" />
                          <AntDesign name="table" size={24} color="#444" />
                          <AntDesign name="dashboard" size={24} color="#444" />
                          <AntDesign name="google" size={24} color="#444" />
                          <AntDesign name="dropbox" size={24} color="#444" />

                      </View>
                      <View >
                          <Feather name="feather" size={24} color="#444" />
                          <Feather name="loader" size={24} color="#444" />
                          <Feather name="lock" size={24} color="#444" />
                          <Feather name="map" size={24} color="#444" />
                          <Feather name="map-pin" size={24} color="#444" />
                          <Feather name="monitor" size={24} color="#444" />
                          <Feather name="moon" size={24} color="#444" />
                          <Feather name="music" size={24} color="#444" />
                          <Feather name="phone" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="team" size={24} color="#444" />
                          <AntDesign name="sharealt" size={24} color="#444" />
                          <Feather name="settings" size={24} color="#444" />
                          <AntDesign name="picture" size={24} color="#444" />
                          <Feather name="inbox" size={24} color="#444" />
                          <AntDesign name="cloudo" size={24} color="#444" />
                          <AntDesign name="tagso" size={24} color="#444" />
                          <AntDesign name="enviromento" size={24} color="#444" />
                          <AntDesign name="eyeo" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="search1" size={24} color="#444" />
                          <Feather name="calendar" size={24} color="#444" />
                          <AntDesign name="dingding" size={24} color="#444" />
                          <AntDesign name="mobile1" size={24} color="#444" />
                          <AntDesign name="bells" size={24} color="#444" />
                          <AntDesign name="database" size={24} color="#444" />
                          <AntDesign name="barcode" size={24} color="#444" />
                          <AntDesign name="hourglass" size={24} color="#444" />
                          <AntDesign name="key" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="USB" size={24} color="#444" />
                          <AntDesign name="skin" size={24} color="#444" />
                          <AntDesign name="car" size={24} color="#444" />
                          <AntDesign name="tool" size={24} color="#444" />
                          <AntDesign name="isv" size={24} color="#444" />
                          <AntDesign name="gift" size={24} color="#444" />
                          <AntDesign name="idcard" size={24} color="#444" />
                          <AntDesign name="rest" size={24} color="#444" />
                          <AntDesign name="Safety" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="bulb1" size={24} color="#444" />
                          <AntDesign name="rocket1" size={24} color="#444" />
                          <AntDesign name="apple-o" size={24} color="#444" />
                          <AntDesign name="android" size={24} color="#444" />
                          <AntDesign name="poweroff" size={24} color="#444" />
                          <AntDesign name="find" size={24} color="#444" />
                          <AntDesign name="sound" size={24} color="#444" />
                          <AntDesign name="earth" size={24} color="#444" />
                          <AntDesign name="wifi" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="plussquareo" size={24} color="#444" />
                          <Feather name="mail" size={24} color="#444" />
                          <Feather name="link" size={24} color="#444" />
                          <AntDesign name="linechart" size={24} color="#444" />
                          <Feather name="home" size={24} color="#444" />
                          <AntDesign name="laptop" size={24} color="#444" />
                          <AntDesign name="staro" size={24} color="#444" />
                          <Feather name="filter" size={24} color="#444" />
                          <Feather name="meh" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="bars" size={24} color="#444" />
                          <AntDesign name="clockcircleo" size={24} color="#444" />
                          <AntDesign name="swap" size={24} color="#444" />
                          <AntDesign name="HTML" size={24} color="#444" />
                          <AntDesign name="slack" size={24} color="#444" />
                          <Entypo name="baidu" size={24} color="#444" />
                          <AntDesign name="sync" size={24} color="#444" />
                          <AntDesign name="message1" size={24} color="#444" />
                          <AntDesign name="shake" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="wallet" size={24} color="#444" />
                          <AntDesign name="Trophy" size={24} color="#444" />
                          <AntDesign name="like2" size={24} color="#444" />
                          <AntDesign name="flag" size={24} color="#444" />
                          <AntDesign name="layout" size={24} color="#444" />
                          <AntDesign name="printer" size={24} color="#444" />
                          <AntDesign name="codesquare" size={24} color="#444" />
                          <AntDesign name="file1" size={24} color="#444" />
                          <AntDesign name="folder1" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="shoppingcart" size={24} color="#444" />
                          <Feather name="user" size={24} color="#444" />
                          <AntDesign name="videocamera" size={24} color="#444" />
                          <AntDesign name="camerao" size={24} color="#444" />
                          <AntDesign name="windows" size={24} color="#444" />
                          <AntDesign name="export" size={24} color="#444" />
                          <AntDesign name="notification" size={24} color="#444" />
                          <AntDesign name="qrcode" size={24} color="#444" />
                          <AntDesign name="smileo" size={24} color="#444" />
                      </View>
                    </ScrollView>
                  </View>
              </ScrollView>
          </View>
      )
  };
}
```

### Slider.js

Na poniższym przykładzie przedstawiona jest zmiana obrazka przy pomocy `slider`

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/174654100_153483083347250_744354078282717945_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=IoqFVvSbws0AX8cUjpm&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=fdd06c42ead89f9b755bd04a73fd848f&oe=609F3C82" alt="drawing" width="250"/>

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/175041201_950352105801585_749031572051208502_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=oVrkuiUtXzYAX_Zk7LU&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=771863793af7221ae55be0b2cbde9956&oe=609FD7BE" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions, Image  } from 'react-native';
import styles from './styles'
import Slider from '@react-native-community/slider';

export default class SlideComponent extends Component {
    state = {
        imageScale: 0.5
    }
    imageResize = (value) => {
        this.setState({imageScale: value});
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.home.text}>Zmiana rozmiaru</Text>
                </View>
                <ScrollView contentContainerStyle={[{flex:1,flexDirection: 'column'}]}>
                    <View style={styles.content.example}>
                        <Slider
                            style={{width: 275, height: 40}}
                            value={0.5}
                            minimumValue={0}
                            maximumValue={1}
                            thumbTintColor='#444'
                            minimumTrackTintColor="#444"
                            maximumTrackTintColor="#000000"
                            onValueChange={this.imageResize}
                        />
                        <Image source={require('../assets/favicon.png')} style={[{transform: [{ scale: this.state.imageScale }]}]}/> 
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### SyncData.js

Na poniższym przykładzie przedstawiona jest synchronizacja danych w momencie kiedy jest połączenie z internetem wszystkie dane są synchronizowane co 1s.

<img src="https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.15752-9/s1080x2048/175155895_846832572568802_3808675891320154750_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Jzpo-U1tElQAX-GSUTB&_nc_ht=scontent.fwaw3-1.fna&tp=7&oh=4439aae8a925ea41f8f81a07e0f18168&oe=609D6B36" alt="drawing" width="250"/>

Natomiast gdy wyłączymy połączenie z internetem synchronizacja nie zachodzi dlatego też dane lokalne oraz zdalne różnią się

<img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/175182306_770170610303375_6558422251358854819_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=va3aq_jtIW8AX-YzKaP&_nc_oc=AQmTuH32_qs5a1GcZOHDxMsuwF4jSE3ivy1NqGugsiWQCsiJ9V5syFrmYK2Ij_FoUXc&_nc_ht=scontent.fwaw3-2.fna&tp=7&oh=717778ae2cd4b75c3e44a5cf7b0da97f&oe=609F62FC" alt="drawing" width="250"/>



```JS
import React, {Component} from 'react';
import { Button, ScrollView, Text,TextInput, View, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'


export default class SyncData extends Component {
    /// dane lokaln przetrzymywane w AsyncStorage
    // pobieranie danych z slidera
    sliderValue = async (value) => {
        var key = "localValue"
        try {
            await AsyncStorage.setItem(key,value.toString());
        } catch (error) {
            console.error(error)
        }
        try {
            const tempValue = await AsyncStorage.getItem(key);
            if (tempValue !== null) {
                this.setState({localValue:tempValue})
            }else{
                this.setState({localValue:'n/a'})
            }
        } catch (error) {
            this.setState({localValue:error})
        }
    }
    state = {
        // dane do obsługi interakci z użytkownikiem
        internetConnection: true,
        localValue:'',
        // danne dostepne przez internet
        remoteValue:'',
    }
    // funkcja sprawdzająca integralnośc danych lokalnych i zdalnych
    checkData = () =>{
        if(this.state.internetConnection){
            // połączenie z internetem
            // aktualizacja danych
            this.setState({remoteValue:this.state.localValue})
        }else{
            // brak połączenia z internetem
            // nie aktualizuje danych
        }
    }
    componentDidMount(){
        //sprawdzanie stanu połączenia co sekundę
        setInterval(this.checkData, 1000)
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >{this.state.internetConnection?`Połączono z internetem `:`Brak połączeni z internetem`}</Text>
                        <Switch value={this.state.internetConnection} onValueChange={val =>{this.setState({ internetConnection: val})}}/>
                    </View>
                    <View style={styles.content.example}>
                        <View >
                            <Text style={styles.home.text}>Zmiana danych </Text>
                            <View style={{alignItems: 'center', marginTop: 10,}}>
                                <NumericInput 
                                    onChange={this.sliderValue} 
                                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                    totalWidth={240} 
                                    totalHeight={50} 
                                    iconSize={25}
                                    valueType='real'
                                    rounded 
                                    textColor='#000' 
                                    borderColor= '#666'
                                    iconStyle={{ color: 'white' }} 
                                    rightButtonBackgroundColor='#4f4' 
                                    leftButtonBackgroundColor='#0d0'/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content.example}>
                        <Text style={styles.home.text}>Podgląd </Text>
                        <View >
                            <View >
                                <Text >Dane lokalnie</Text>
                                <Text >{this.state.localValue}</Text>
                            </View>
                            <View >
                                <Text >Dane zdalne</Text>
                                <Text >{this.state.remoteValue}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```


## Style.js

W pliku `style.js` dodałem następujące elemnty, odpowiadają one za ostylowanie głównie swipeable oraz scrollbar.

```JS

 styles.flexbox = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: "aliceblue",
    },
    box: {
      width: 100,
      height: 100,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "coral",
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: "500",
      color: "coral",
    },
    selectedLabel: {
      color: "white",
    },
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 24,
    },
    scrollViewIndicator:{
      alignContent:'space-between',
      flexDirection: 'column',
      alignItems: 'center',
    },
    scrollIndicatorStyle:{
        backgroundColor:'#fb1',
    },
    scrollIndicatorContainerStyle:{
        backgroundColor:'#555',
    },
    scrollViewStyle:{
    },
  });
  styles.swipeScreen = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
      },
      listItem: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
      },
      leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
      },
      text:{
          paddingTop:20,
          fontSize:30,
          textAlign:'center'
      }
});

```

