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