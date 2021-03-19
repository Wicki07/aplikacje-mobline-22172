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