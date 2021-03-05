import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    outcome:{
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end',
    },
    
    outcomeText:{
      fontSize:25,
      color:'black'
    },
    
    calculation: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
    
    calculationText:{
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold'
    },

    actions:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent:'space-around',
      alignItems:'center',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
    
    funBtn:{
      backgroundColor: 'green',
      borderRadius: 100,
      width: 90,
      height:90,
      alignItems:'center',
      justifyContent:'center',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    },
    
      
    buttons: {
      flexGrow: 7,
      flexDirection: 'row'
    },
  
    numbers: {
      flex: 3,
      backgroundColor: 'white',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
    
    numBtn:{
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      borderRadius: 100,
      width: 90,
      height:90,
      alignItems:'center',
      justifyContent:'center',
    },
  
    row:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center',

    },
      
    btn:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },

    iconStyle: {
      fontSize: 40,
    },
    
    btnText:{
      fontSize: 30,
    },
  
    whiteText:{
      color:'white',
      fontSize: 30,
    },
  })

export default styles