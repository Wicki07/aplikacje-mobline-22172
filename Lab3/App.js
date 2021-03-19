import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  SpreadOperatr  from './components/SpreadOperator'
import  FirstStepProgress  from './components/FirstStepProgress'
import  SecondStepProgress  from './components/SecondStepProgress'
import  ThirdStepProgress  from './components/ThirdStepProgress'
import LazyLoading from './components/LazyLoading'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
        cardStyle: {
          backgroundColor: '#444',
        }
      }} name="Home" component={Home} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Sort" component={SpreadOperatr} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="LazyLoading" component={LazyLoading} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="FirstStepProgress" component={FirstStepProgress} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="SecondStepProgress" component={SecondStepProgress} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="ThirdStepProgress" component={ThirdStepProgress} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}