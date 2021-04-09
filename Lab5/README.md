# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab5 obsługa gestów użytkownika

Do wykonania laborki skorzystałem z  poprzednich dlatego niektóre elemnty takie jak `style.js`, `App.js` oraz `Home.js` pozostają prawie nie zmienione.

Aplikacja składa się łącznie z 5 ekranów:
 - ekranu głównego
 - 2 ekranów z komponentam ScrollView
 - ekrenu ze TouchableOpacity i TouchableHighlight
 - ekarnu z komponentem Swipeable
```
  ./SortAndFilter
    ├── /screens
    │     ├── Home.js
    │     ├── ScrollView.js
    │     ├── ScrollViewSecond.js
    │     ├── Touchable.js
    │     └── Swipeable.js
    └── App.js
 ```

## App.js

Główna aplikacja. Wyświetla stronę główną wykorzystaną do poprzedniej laborki


```JS
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  TextInputScreen  from './components/TextInputScreen'
import  Touchable  from './components/Touchable'
import  Switch  from './components/Switch'
import  ScrollView  from './components/ScrollView'
import  ScrollViewSecond  from './components/ScrollViewSecond'
import Swipeable from './components/Swipeable'
import SwipeableScreen from "./components/Swipeable";

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
      }} name="ScrollView" component={ScrollView} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="ScrollViewSecond" component={ScrollViewSecond} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Touchable" component={Touchable} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Swipeable" component={SwipeableScreen} />
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
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ScrollView')}>
              <Text style={styles.home.text}>ScrollView</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ScrollViewSecond')}>
              <Text style={styles.home.text}>ScrollViewSecond</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Touchable')}>
              <Text style={styles.home.text}>Touchable</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Switch')}>
              <Text style={styles.home.text}>Switch</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.home.text}>Swipeable</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}
```
### ScrollView.js

Do stworzenia `ScrollView` skorzystałem z przykładów z dokumentacji oraz na ich podstawie i inforamcji zawartych w dokumnetacji stworzyłem własne

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/170998975_261101455709377_4440658677228836891_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=huzORjCtngwAX9-L2OZ&_nc_ht=scontent-waw1-1.xx&tp=7&oh=f05c77d1a36d824a6e46ce89c7e1b464&oe=609822DC" alt="drawing" width="250"/>

Dostosowałem wygląd ekrany tka bay atomatycznie pobierał rozdzielczość ekranu i na jej podstawie wyznaczał wysokość elementów ScrollView


```JS
import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import styles from './styles'

const WindowHeight = Dimensions.get("window");

export default class DatePickerScreen extends Component {
    render(){ 
        return (
                <View style={[styles.content.container, {height: WindowHeight.height}]}>
                    <View style={[styles.content.example, {height: 150, textAlign: "center"}]}>
                        <Text style={styles.home.text}>
                            Pierwszy scrole view
                        </Text>
                    </View>
                    <View style={[styles.content.example, {height: WindowHeight.height/2}]} >
                        <ScrollView >
                            <View style={[styles.flexbox.box, { backgroundColor: "powderblue" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "skyblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "steelblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "red" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "darkorange" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "green" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "purple" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumslateblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumturquoise" }]} />
                        </ScrollView>
                    </View>
                </View >
        )
    };
}
```

### ScrollViewSecond.js

Różnica między pierwszym a drugim ScrollView jest taka że drugi posiada custom scrollbar zaimplementowany przy pomocy `ScrollViewIndicator`

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/171366561_488219409008141_5866888664922006604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Z3xXUqlB6JEAX9VcU7V&_nc_ht=scontent-waw1-1.xx&tp=7&oh=5ce42e0f7bcab25832d2fdb2ef62e6fa&oe=60961169" alt="drawing" width="250"/>


```JS
import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import styles from './styles'

const WindowHeight = Dimensions.get("window");

export default class DatePickerScreen extends Component {
    render(){ 
        return (
                <View style={[styles.content.container, {height: WindowHeight.height}]}>
                    <View style={[styles.content.example, {height: 150, textAlign: "center"}]}>
                        <Text style={styles.home.text}>
                            Drugi scrole view
                        </Text>
                    </View>
                    <View style={[styles.content.example, {height: WindowHeight.height/2}]} >
                        <ScrollViewIndicator style={styles.scrollViewIndicator} scrollViewStyle={styles.flexbox.scrollViewStyle} scrollIndicatorContainerStyle={styles.flexbox.scrollIndicatorContainerStyle} scrollIndicatorStyle={styles.flexbox.scrollIndicatorStyle} >
                            <View style={[styles.flexbox.box, { backgroundColor: "powderblue" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "skyblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "steelblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "red" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "darkorange" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "green" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "purple" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumslateblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumturquoise" }]} />
                        </ScrollViewIndicator>
                    </View>
                </View >
        )
    };
}
```

### Touchable.js

Na poniższym ekranie widać wykorzystanie opcje `TouchableOpacity` oraz `TouchableHighlight`. Dodatkowo wykorzystałem komponent WebView do stworzenia wyszukiwarki w aplikacji która otwiera wszykiwarkę Google.

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/171031011_806098746666906_3697797357304026040_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=QBT5MN0gYJ4AX8y-P0R&_nc_ht=scontent-waw1-1.xx&tp=7&oh=e6b4a6cb968615b69eb36f4a239fa06a&oe=609500B9" alt="drawing" width="250"/>

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/171015131_446406799957929_9080261616772674064_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Wf_tZdEPVqcAX8a_zzR&_nc_ht=scontent-waw1-1.xx&tp=7&oh=19a7a1c0ff21021eab41366b4aee43b1&oe=60967447" alt="drawing" width="250"/>

```JS
import React, {Component } from 'react';
import { ScrollView, Text, View,TouchableOpacity, TouchableHighlight, Button, TextInput, Modal  } from 'react-native';
import {WebView} from "react-native-webview";
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, Colors } from 'react-native-paper';

export default class TouchableScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countTouchableOpacity : 0,
            countTouchableHighlight : 0,
            searchPhasese:'',
            showBrowser: false,
        };
    }

    onPressTouchableOpacity = () => {
        this.setState({
            countTouchableOpacity: this.state.countTouchableOpacity + 1
        });
    };
    onPressTouchableHighlight = () => {
        this.setState({
            countTouchableHighlight: this.state.countTouchableHighlight + 1
        });
    };
    onPressSearch = () => {
    };

    renderBrowser() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.showBrowser}
                onRequestClose={() => {
                    this.setState({showBrowser: !showBrowser});
                }}
            >
                  <IconButton
                    icon="close"
                    size={40}
                    onPress={() => this.setState({showBrowser: false})}
                />
                <WebView
                    source={{
                        uri: 'https://www.google.com/search?q=' + this.state.searchPhasese,
                    }}
                    onNavigationStateChange={this.onNavigationStateChange}
                    startInLoadingState
                    scalesPageToFit
                    javaScriptEnabled
                    style={{ flex: 1}}
                />
            </Modal>
        );
    }

    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.home.text}>Komponenty Touchable</Text>
                </View>
                { this.state.showBrowser && this.renderBrowser() }
                <ScrollView >
                    <View style={styles.content.example}>
                        <View >
                            <View >
                                <TouchableOpacity
                                    onPress={this.onPressTouchableOpacity}
                                >
                                    <Text style={styles.home.text}>TouchableOpacity</Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <Text >ilość kliknięć: </Text><Text> {this.state.countTouchableOpacity}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content.example}>
                        <View >
                            <View >
                                <TouchableHighlight
                                    onPress={this.onPressTouchableHighlight}
                                >
                                    <Text style={styles.home.text}>TouchableHighlight</Text>
                                </TouchableHighlight>
                            </View>
                            <View >
                                <Text >ilość kliknięć: </Text><Text> {this.state.countTouchableHighlight}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content.example}>
                        <View >
                            <View >
                                <Text >Wpisz wyszukiwaną frazę</Text>
                                <TextInput style={styles.textinput.input} onEndEditing={event =>{this.setState({searchPhasese: event.nativeEvent.text})}}/>
                            </View>
                            <View >
                                <Button
                                    title='Wyszukaj'
                                    onPress={() => this.setState({showBrowser: true})}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    };
}
```

### Swipeable.js

Poniższe screeny pokazują działanie komponentu Swipeable po każdym przesunięciu tło napisau zmienia kolor również po wybraniu odpowiedniej opcji zmieniają się również kolory

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/171839615_1153326865139731_5488549810560465319_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Ilsej2GacDkAX-2ZFC8&_nc_ht=scontent-waw1-1.xx&tp=7&oh=b8ecb596dd03d75ca54ac1ad97e42714&oe=60950E4A" alt="drawing" width="250"/>

<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s1080x2048/170876993_151153613593597_5965293873075540136_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=FetfSW7I9hEAX87ogUJ&_nc_ht=scontent-waw1-1.xx&tp=7&oh=3927d9bb26e5464486a51292a2473f8e&oe=6094E0C4" alt="drawing" width="250"/>



```JS
import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';



export default class  SwipeScreen extends Component{
    state = {
        leftAction: false,
        toggle: false
      };
    render() {
    const {leftAction, toggle} = this.state;
    const leftContent=[
        <View style={[styles.swipeScreen.leftSwipeItem,{backgroundColor: leftAction ? '#e00' : '#0e0'}]}>
          {leftAction ?
            <Text>Puść!</Text> :
            <Text>Przeciągaj dalej!</Text>}
        </View>
    ]

    const rightButtons = [
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text>Opcja 1</Text></TouchableOpacity>,
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text >Opcja 2</Text></TouchableOpacity>
    ];
    return (
      <ScrollView>
        <Text style={styles.home.text}>Prosty przykład Swipeable</Text>
        <ScrollView onScroll={this.handleScroll} >
          <Swipeable leftActionActivationDistance={150} leftContent={leftContent} rightButtons={rightButtons} onLeftActionActivate={() => this.setState({leftAction: true})} onLeftActionDeactivate={() => this.setState({leftAction: false})} onLeftActionComplete={() => this.setState({toggle: !toggle})}>
            <Text style={[{backgroundColor: toggle ? '#fff' : '#000', color: toggle ? '#000' : '#fff'}]}>My swipeable content</Text>
          </Swipeable>
        </ScrollView>
      </ScrollView>
    );
  }
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

