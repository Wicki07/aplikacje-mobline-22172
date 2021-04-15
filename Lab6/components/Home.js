import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import styles from './styles'



export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Images')}>
              <Text style={styles.home.text}>Images</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Slider')}>
              <Text style={styles.home.text}>Slider</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('LazyLoading')}>
              <Text style={styles.home.text}>LazyLoading</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ConnectionCheck')}>
              <Text style={styles.home.text}>ConnectionCheck</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('AsyncStorageComponent')}>
              <Text style={styles.home.text}>AsyncStorage</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('SyncData')}>
              <Text style={styles.home.text}>SyncData</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}