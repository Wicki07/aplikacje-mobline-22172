import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './components/Home'
import  ConnectionCheck  from './components/ConnectionCheck'
import  Images  from './components/Images'
import  Slider  from './components/Slider'
import LazyLoading from "./components/LazyLoading";
import AsyncStorageComponent from './components/AsyncStorageComponent'
import SyncData from './components/SyncData'

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
      }} name="Images" component={Images} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="Slider" component={Slider} />
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
      }} name="ConnectionCheck" component={ConnectionCheck} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="AsyncStorageComponent" component={AsyncStorageComponent} />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontSize: 30,
        },
      }} name="SyncData" component={SyncData} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}