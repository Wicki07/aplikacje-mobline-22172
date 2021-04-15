
import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableHighlight, Image} from 'react-native';
import { Feather, AntDesign,Entypo } from '@expo/vector-icons';
import styles from './styles';
import loader from '../assets/loader.gif'; 



export default class LazyLoadingAndIcons extends Component {
    
  render(){ 
      return (
          <View style={styles.content.container}>
            <ScrollView>
              <View style={styles.content.example}>
                  <Text style={styles.home.text}>LazyLoading i ikony</Text>
              </View>
                  <View >
                      <View style={styles.content.example}>
                          <Image loadingIndicatorSource={loader} style={{width: 200, height: 200}} source={{uri: 'https://i.pinimg.com/originals/dd/ef/fa/ddeffa7b4020ca3ef3630d6458aae9c7.jpg',}} progressiveRenderingEnabled={false}/>
                      </View>
                  </View> 
                  <View style={styles.content.example}>
                    <Text style={styles.home.text}>Przykładowe ikony</Text>    
                  </View> 
                  <View style={[styles.content.example]}>
                    <ScrollView contentContainerStyle={[{flex:1,flexDirection: 'row'}]}>
                      
                      <View >
                          <AntDesign name="hdd" size={24} color="#444" />
                          <AntDesign name="ie" size={24} color="#444" />
                          <Feather name="delete" size={24} color="#444" />
                          <AntDesign name="pushpino" size={24} color="#444" />
                          <AntDesign name="hearto" size={24} color="#444" />
                          <AntDesign name="calculator" size={24} color="#444" />
                          <Feather name="chrome" size={24} color="#444" />
                          <Feather name="github" size={24} color="#444" />
                          <AntDesign name="piechart" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="API" size={24} color="#444" />
                          <AntDesign name="fork" size={24} color="#444" />
                          <AntDesign name="contacts" size={24} color="#444" />
                          <AntDesign name="edit" size={24} color="#444" />
                          <AntDesign name="warning" size={24} color="#444" />
                          <AntDesign name="table" size={24} color="#444" />
                          <AntDesign name="dashboard" size={24} color="#444" />
                          <AntDesign name="google" size={24} color="#444" />
                          <AntDesign name="dropbox" size={24} color="#444" />

                      </View>
                      <View >
                          <Feather name="feather" size={24} color="#444" />
                          <Feather name="loader" size={24} color="#444" />
                          <Feather name="lock" size={24} color="#444" />
                          <Feather name="map" size={24} color="#444" />
                          <Feather name="map-pin" size={24} color="#444" />
                          <Feather name="monitor" size={24} color="#444" />
                          <Feather name="moon" size={24} color="#444" />
                          <Feather name="music" size={24} color="#444" />
                          <Feather name="phone" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="team" size={24} color="#444" />
                          <AntDesign name="sharealt" size={24} color="#444" />
                          <Feather name="settings" size={24} color="#444" />
                          <AntDesign name="picture" size={24} color="#444" />
                          <Feather name="inbox" size={24} color="#444" />
                          <AntDesign name="cloudo" size={24} color="#444" />
                          <AntDesign name="tagso" size={24} color="#444" />
                          <AntDesign name="enviromento" size={24} color="#444" />
                          <AntDesign name="eyeo" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="search1" size={24} color="#444" />
                          <Feather name="calendar" size={24} color="#444" />
                          <AntDesign name="dingding" size={24} color="#444" />
                          <AntDesign name="mobile1" size={24} color="#444" />
                          <AntDesign name="bells" size={24} color="#444" />
                          <AntDesign name="database" size={24} color="#444" />
                          <AntDesign name="barcode" size={24} color="#444" />
                          <AntDesign name="hourglass" size={24} color="#444" />
                          <AntDesign name="key" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="USB" size={24} color="#444" />
                          <AntDesign name="skin" size={24} color="#444" />
                          <AntDesign name="car" size={24} color="#444" />
                          <AntDesign name="tool" size={24} color="#444" />
                          <AntDesign name="isv" size={24} color="#444" />
                          <AntDesign name="gift" size={24} color="#444" />
                          <AntDesign name="idcard" size={24} color="#444" />
                          <AntDesign name="rest" size={24} color="#444" />
                          <AntDesign name="Safety" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="bulb1" size={24} color="#444" />
                          <AntDesign name="rocket1" size={24} color="#444" />
                          <AntDesign name="apple-o" size={24} color="#444" />
                          <AntDesign name="android" size={24} color="#444" />
                          <AntDesign name="poweroff" size={24} color="#444" />
                          <AntDesign name="find" size={24} color="#444" />
                          <AntDesign name="sound" size={24} color="#444" />
                          <AntDesign name="earth" size={24} color="#444" />
                          <AntDesign name="wifi" size={24} color="#444" />

                      </View>
                      <View >
                          <AntDesign name="plussquareo" size={24} color="#444" />
                          <Feather name="mail" size={24} color="#444" />
                          <Feather name="link" size={24} color="#444" />
                          <AntDesign name="linechart" size={24} color="#444" />
                          <Feather name="home" size={24} color="#444" />
                          <AntDesign name="laptop" size={24} color="#444" />
                          <AntDesign name="staro" size={24} color="#444" />
                          <Feather name="filter" size={24} color="#444" />
                          <Feather name="meh" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="bars" size={24} color="#444" />
                          <AntDesign name="clockcircleo" size={24} color="#444" />
                          <AntDesign name="swap" size={24} color="#444" />
                          <AntDesign name="HTML" size={24} color="#444" />
                          <AntDesign name="slack" size={24} color="#444" />
                          <Entypo name="baidu" size={24} color="#444" />
                          <AntDesign name="sync" size={24} color="#444" />
                          <AntDesign name="message1" size={24} color="#444" />
                          <AntDesign name="shake" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="wallet" size={24} color="#444" />
                          <AntDesign name="Trophy" size={24} color="#444" />
                          <AntDesign name="like2" size={24} color="#444" />
                          <AntDesign name="flag" size={24} color="#444" />
                          <AntDesign name="layout" size={24} color="#444" />
                          <AntDesign name="printer" size={24} color="#444" />
                          <AntDesign name="codesquare" size={24} color="#444" />
                          <AntDesign name="file1" size={24} color="#444" />
                          <AntDesign name="folder1" size={24} color="#444" />
                      </View>
                      <View >
                          <AntDesign name="shoppingcart" size={24} color="#444" />
                          <Feather name="user" size={24} color="#444" />
                          <AntDesign name="videocamera" size={24} color="#444" />
                          <AntDesign name="camerao" size={24} color="#444" />
                          <AntDesign name="windows" size={24} color="#444" />
                          <AntDesign name="export" size={24} color="#444" />
                          <AntDesign name="notification" size={24} color="#444" />
                          <AntDesign name="qrcode" size={24} color="#444" />
                          <AntDesign name="smileo" size={24} color="#444" />
                      </View>
                    </ScrollView>
                  </View>
              </ScrollView>
          </View>
      )
  };
}