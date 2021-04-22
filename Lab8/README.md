# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab7 - wykorzystanie bazy danych w aplikacji mobilnej

Do stworznie aplikacji wykorzystałem poradnik ze [strony](https://aboutreact.com/example-of-sqlite-database-in-react-native/)

Aplikacja składa się łącznie z 5 ekranów:
 - ekranu głównego
 - ekranu rejestracji użytkownika
 - ekrenu aktualizacji danych
 - ekarnu usuwania użytkownika
 - ekranu wyświetlania konkretnego użytkownika
 - ekranu wyświetlania wszystkich użytkowników
 - 
```
  ./
    ├── /pages
    │     ├── /components
    │     │       ├── Mybutton.js
    │     │       ├── Mytext.js
    │     │       ├── Mytextinput.js
    │     ├── HomeScreen.js
    │     ├── RegisterUser.js
    │     ├── UpdateUser.js
    │     ├── ViewAllUser.js
    │     ├── ViewUser.js
    │     ├── styles.js
    │     └── DeleteUser.js
    └── App.js
 ```

## App.js

Główna aplikacja. Wyświetla stronę główną wykorzystaną do poprzedniej laborki


```JS
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', 
            headerStyle: {
              backgroundColor: '#fa4', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'View User',
            headerStyle: {
              backgroundColor: '#fa4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'View Users', 
            headerStyle: {
              backgroundColor: '#fa4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Update User',
            headerStyle: {
              backgroundColor: '#fa4',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Register User', 
            headerStyle: {
              backgroundColor: '#fa4', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Delete User', 
            headerStyle: {
              backgroundColor: '#fa4', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

## Componenty 

Poniżej pokazane są wszystkie komponenty wykorzystywane przez aplikację

### Mybutton.js

Zawiera opisa wszystkich przycisków wykorzystanych w aplikacji

```JS
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#fa0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 64,
    marginVertical: 20,
    borderRadius:10,
    height: 25,
    color:'#f4a'
  },
  text: {
    color: '#fff',
  },
});

export default Mybutton;
```
### Mytext.js

Komponent opisujące tekst w aplikacji


```JS
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Mytext = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default Mytext;
```

### Mytextinput.js

Określa styl wszystkich inputów w aplikacji


```JS
import React from 'react';
import { View, TextInput } from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#fa4',
        borderWidth: 1,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#fa4"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;
```

## Poniżej znajdują się ekrany z aplikacji

### DeleteUser.js

Na poniższym ekranie przedstawione jest usuwanie użytkowników przypomocy ID użytkownika

<img src="https://i.imgur.com/s7lc7N1.png" alt="drawing" width="250"/>
(Przycik można spokojnie przycisnąć przybijająć piątkę :) )

```JS
import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Użytkownik został usunięty',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Podaj poprawne id');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Usuń" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;
```

### HomeScreen.js

Główny ekran aplikacji zawierający nawigację do poszczególnych ekranów

<img src="https://i.imgur.com/B8V2IWq.png" alt="drawing" width="250"/>


```JS
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './styles'

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
        <View style={[styles.home.container,{ flex: 1 }]}>
          <Mytext text="SQLite Example" />
          <Mybutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
  );
};

export default HomeScreen;
```

### RegisterUser.js

Na poniższym ekran przedstawia wprowadzanie użytkowników do bazy danych

<img src="https://i.imgur.com/THMNpQz.png" alt="drawing" width="250"/>

<img src="![image](https://user-images.githubusercontent.com/71140843/115789139-ebce1080-a3c4-11eb-985d-4e690e1a03f0.png)" alt="drawing" width="250"/>


```JS
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Podaj imie');
      return;
    }
    if (!userContact) {
      alert('Podaj numer');
      return;
    }
    if (!userAddress) {
      alert('Podaj adres');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Zarejestrowano',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Podaj imie"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Podaj nr kontaktowy"
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Podaj adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Dodaj" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
```

### UpdateUser.js

Na poniższym przykładzie przedstawiona jest aktualizacja danych użytkownika. Należy najpierw użytkownika wyszukać przy pomocy ID następnie wszystkie pola są wstępnie wypełniane następnie możemy je edytować

<img src="https://user-images.githubusercontent.com/71140843/115789359-50896b00-a3c5-11eb-8199-aa11e1c11809.png" alt="drawing" width="250"/>


```JS
import React, { useState } from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert, SafeAreaView, Text } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address
            );
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Podaj id');
      return;
    }
    if (!userName) {
      alert('Podaj imie');
      return;
    }
    if (!userContact) {
      alert('Podaj numer kontakotwy');
      return;
    }
    if (!userAddress) {
      alert('Podaj adres');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Pomyślnie zaktualizowano',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Podaj id"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mybutton
                title="Wyszukaj"
                customClick={searchUser} 
              />
              <Mytextinput
                placeholder="Podaj imie"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Podaj numer"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Podaj adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton
                title="Zaktualizuj"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
```

## ViewAllUser.js

Na poniższym ekranie przedstawione jest wyświetlanie wszystkich użytkowników wprowadzonych do bazy 

<img src="https://i.imgur.com/CTAjGdG.png" alt="drawing" width="250"/>

```JS
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Contact: {item.user_contact}</Text>
        <Text>Address: {item.user_address}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllUser;

```

## ViewUser.js

Na poniższym ekranie przedstawione jest wyświetlanie konkretnego użytkownika użytkowników wprowadzonych do bazy 

<img src="https://i.imgur.com/LcNC4ZA.png" alt="drawing" width="250"/>
(Przycik można spokojnie przycisnąć przybijająć piątkę :) )

```JS
import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={searchUser}/>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>Id: {userData.user_id}</Text>
            <Text>Imie: {userData.user_name}</Text>
            <Text>Numer: {userData.user_contact}</Text>
            <Text>Adres: {userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;
```


## Style.js

Pliku `style.js` wykorzystałem ten sam co w poprzednich labolatoriach

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
        color:'#f4a'
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
export default styles
```

