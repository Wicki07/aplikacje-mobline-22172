import React, {Component} from 'react';
import { TouchableOpacity, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './styles'


export default class TextInputsScreen extends Component {
  render(){ 
      return (
            <View style={styles.content.container}>
              <View style={styles.content.example}>
                  <Text >Komponent TextInput</Text>
              </View>
              <ScrollView >
                  <View style={styles.content.example}>
                      <Text >Podstawowy TextInput</Text>
                      <TextInput /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z automatycznym formatowaniem autoCapitalize="words"</Text>
                      <TextInput autoCapitalize="words" /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z ustawionym value W momencie kiedy ustawiona jest wartość value tekstu nie można edytować</Text>
                      <TextInput value="Przykładowy tekst" /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wartością domyślną defaultValue="Default Value" tą wartość można edytować</Text>
                      <TextInput defaultValue="Default Value" /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wyłączoną możliwością edycji editable={false}</Text>
                      <TextInput editable={false} /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput uruchamiający klawiaturę numeryczną keyboardType="numeric"</Text>
                      <TextInput keyboardType="numeric" /><Text/>
                  </View>
                  <View style={styles.content.example}>s
                      <Text >TextInput z ograniczoną ilością znaków maxLength=10</Text>
                      <TextInput maxLength={10} /><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z wieloma liniami multiline=true ustalamy ilość lini na 5 numberOfLines=5</Text>
                      <TextInput multiline={true} numberOfLines={5}/><Text/>
                  </View>
                  <View style={styles.content.example}>
                      <Text >TextInput z przykładową metodą wyswietlającą alert {`onEndEditing={ event => { alert(event.nativeEvent.text) }}`}</Text>
                      <TextInput onEndEditing={event =>{alert(event.nativeEvent.text)}} /><Text/>
                  </View>
              </ScrollView>
        </View>
      )
  };
}