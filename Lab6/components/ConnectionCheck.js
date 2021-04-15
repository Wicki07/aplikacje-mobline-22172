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