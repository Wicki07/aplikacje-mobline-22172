
import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';



export default class  SwipeScreen extends Component{
    state = {
        leftAction: false,
        toggle: false
      };
    render() {
    const {leftAction, toggle} = this.state;
    const leftContent=[
        <View style={[styles.swipeScreen.leftSwipeItem,{backgroundColor: leftAction ? '#e00' : '#0e0'}]}>
          {leftAction ?
            <Text>Puść!</Text> :
            <Text>Przeciągaj dalej!</Text>}
        </View>
    ]

    const rightButtons = [
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text>Opcja 1</Text></TouchableOpacity>,
      <TouchableOpacity onPress={() => this.setState({toggle: !toggle})}><Text >Opcja 2</Text></TouchableOpacity>
    ];
    return (
      <ScrollView>
        <Text style={styles.home.text}>Prosty przykład Swipeable</Text>
        <ScrollView onScroll={this.handleScroll} >
          <Swipeable leftActionActivationDistance={150} leftContent={leftContent} rightButtons={rightButtons} onLeftActionActivate={() => this.setState({leftAction: true})} onLeftActionDeactivate={() => this.setState({leftAction: false})} onLeftActionComplete={() => this.setState({toggle: !toggle})}>
            <Text style={[{backgroundColor: toggle ? '#fff' : '#000', color: toggle ? '#000' : '#fff'}]}>My swipeable content</Text>
          </Swipeable>
        </ScrollView>
      </ScrollView>
    );
  }
}