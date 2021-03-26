import React, {Component} from 'react';
import {ActivityIndicator, Text, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles'

class Select extends Component {
    state = {selectedValue: 'Wybierz'}
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker selectedValue = {this.state.selectedValue} onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item key = {item.id} label = {item.name ? item.name : item.title} value = {item.id}/>) : <Picker.Item key = {0} label = "Brak" value = {false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            { id: 'label1', name: 'Przykładowy' },
            { id: 'label2', name: 'Teksty' },
            { id: 'label3', title: 'Podany' },
            { id: 'label4', title: 'Na ' },
            { id: 'label5', name: 'Sztywno' }
        ]
        this.state = {options}
    }
    async componentDidMount() {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
        const jsonPosts = await responsePosts.json();
        this.setState({ posts: jsonPosts });

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const jsonComments = await responseComments.json();
        this.setState({ comments: jsonComments });

    }
    render(){ 
        return (
            <View>
                <View >
                    <Text >Komponent Select</Text>
                </View>
                <ScrollView >
                    <View>
                        <Picker
                            selectedValue={this.state.options}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            enabled={false}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View>
                        <Text >Standardowy Select z wyborem podanych opcj</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View>
                        <Text >Select z ustawionymi opcjami na sztywno wyłączony przy pomocy enabled={false}</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View>
                        <Text >Select z ustawionymi opcjami na sztywno</Text>
                        <Text>options</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View>
                        <Text >Select z ustawionymi opcjami na sztywno</Text>
                        <Text>options</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View>
                        <Text >Select z pobieranymi danych asynchronicznie</Text>
                        <Select  items={this.state.posts}/><Text/>
                    </View>
                    <View>
                        <Text >Select z pobieranymi danych asynchronicznie</Text>
                        <Select items={this.state.comments}/><Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}