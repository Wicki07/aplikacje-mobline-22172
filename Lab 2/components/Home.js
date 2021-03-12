import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from './styles'

export default function Home({ navigation }) {
  return (
    <View style={styles.home.container}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operatr')}>
            <Text style={styles.home.text}>Spread Operatr</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest parameter')}>
            <Text style={styles.home.text}>Rest parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.text}>useState</Text>
        </TouchableOpacity >
    </View>
  );
}