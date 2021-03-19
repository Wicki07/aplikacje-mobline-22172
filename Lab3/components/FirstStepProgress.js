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