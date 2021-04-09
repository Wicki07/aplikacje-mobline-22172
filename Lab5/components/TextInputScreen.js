import React, {Component} from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles'

export default class TextInputsScreen extends Component {
    render(){ 
        return (
            <>
                <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>
                        <Text >Podstawowy TextInput</Text>
                        <TextInput style={styles.textinput.input} /><Text/>
                    </View>
                    <View style={styles.content.example}>
                      <Text >TextInput z automatycznym formatowaniem autoCapitalize="words"</Text>
                      <TextInput style={styles.textinput.input} autoCapitalize="words" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z ustawionym value W momencie kiedy ustawiona jest wartość value tekstu nie można edytować</Text>
                      <TextInput style={styles.textinput.input} value="Przykładowy tekst" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wartością domyślną defaultValue="Default Value" tą wartość można edytować</Text>
                      <TextInput style={styles.textinput.input} defaultValue="Default Value" />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wyłączoną możliwością edycji</Text>
                      <TextInput style={styles.textinput.input} editable={false} />
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput uruchamiający klawiaturę numeryczną keyboardType="numeric"</Text>
                      <TextInput style={styles.textinput.input} keyboardType="numeric" />
                  </View>

                  <View style={styles.content.example}>
                      <Text >TextInput z wieloma liniami multiline=true ustalamy ilość lini na 5 numberOfLines=5</Text>
                      <TextInput style={styles.textinput.input} multiline={true} numberOfLines={5}/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z przykładową metodą wyswietlającą alert</Text>
                      <TextInput style={styles.textinput.input} onEndEditing={event =>{alert(event.nativeEvent.text)}} />
                  </View>
                </ScrollView>
                </View>
            </>
        )
    };
}