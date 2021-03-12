import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  SpreadOperatr  from './components/SpreadOperator'
import  RestParameters  from './components/RestParameters'
import  UseState  from './components/UseState'

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
        }} name="Spread Operatr" component={SpreadOperatr} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
        }} name="Rest parameters" component={RestParameters} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#ddd',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontSize: 30,
          },
        }} name="useState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}