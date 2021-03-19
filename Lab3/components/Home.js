import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles'


const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.home.container}>
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Sort')}>
              <Text style={styles.home.text}>Sort</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('LazyLoading')}>
              <Text style={styles.home.text}>LazyLoading</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('FirstStepProgress')}>
              <Text style={styles.home.text}>FirstStepProgress</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('SecondStepProgress')}>
              <Text style={styles.home.text}>SecondStepProgress</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('ThirdStepProgress')}>
              <Text style={styles.home.text}>ThirdStepProgress</Text>
          </TouchableOpacity >
      </View>
    </ScrollView>
  );
}