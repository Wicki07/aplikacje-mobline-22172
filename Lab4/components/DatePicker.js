import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from './styles'

export default class DatePickerScreen extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                  <View style={styles.content.example}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        format="DD-MM-YYYY"
                        placeholder="select date"
                        androidMode="spinner"
                        onDateChange={(date) => {
                            this.setState({date: date});
                            alert(this.state.date)
                        }}
                    /><Text/>
                    <Text>Po naciśnięciu w datę pojawia się opcja zmiany daty poprzez przesuwanie przez odpowiednie daty(funkcja dostępna tylko na Androidzie)</Text>
                    <Text>Domyślną datą jest data dzisiejsza</Text>
                    <Text>Po zatwierdzeniu daty pojawia się alert z podaną data.</Text>
                  </View>
                </ScrollView>
            </View >
        )
    };
}