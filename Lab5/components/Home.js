import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import styles from './styles'



export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ScrollView')}>
              <Text style={styles.home.text}>ScrollView</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ScrollViewSecond')}>
              <Text style={styles.home.text}>ScrollViewSecond</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Touchable')}>
              <Text style={styles.home.text}>Touchable</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Switch')}>
              <Text style={styles.home.text}>Switch</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Swipeable')}>
              <Text style={styles.home.text}>Swipeable</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}