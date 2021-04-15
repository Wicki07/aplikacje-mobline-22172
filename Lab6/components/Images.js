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