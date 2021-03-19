import * as React from 'react';
import {Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles'

export default function ComponentToBeLoaded({length}){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return(
        <ScrollView>
            <Text>{result}</Text>
        </ScrollView>
    )
}