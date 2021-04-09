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