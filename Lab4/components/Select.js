import React, {Component} from 'react';
import {ActivityIndicator, Text, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles'

class Select extends Component {
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item key = {item.name} label = {item.name} />) : <Picker.Item key = {0} enabled={false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            {name: 'Przykładowy' },
            {name: 'Teksty' },
            {name: 'Podany' },
            {name: 'Na ' },
            {name: 'Sztywno' }
        ]
        this.state = {options}
    }
    async componentDidMount() {
        const responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonUsers = await responseUsers.json();
        this.setState({ users: jsonUsers });

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const jsonComments = await responseComments.json();
        this.setState({ comments: jsonComments });
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >Zaimplementowany przykład ze strony</Text>
                        <Picker
                            selectedValue={this.state.options}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Domyślny Select z ustawionymi parametrami</Text>
                        <Select  items={this.state.options}/><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Wyłączony Select z powodu braku elemntów</Text>
                        <Select /><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Przykład z pobieraniem danych asynchronicznie</Text>
                        <Select  items={this.state.users}/><Text/>
                    </View>
                    <View style={styles.content.example}>
                        <Text >Select z pobieranymi danych asynchronicznie</Text>
                        <Select items={this.state.comments}/><Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}