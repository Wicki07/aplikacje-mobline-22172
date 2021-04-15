import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions, Image  } from 'react-native';
import styles from './styles'
import Slider from '@react-native-community/slider';

export default class SlideComponent extends Component {
    state = {
        imageScale: 0.5
    }
    imageResize = (value) => {
        this.setState({imageScale: value});
    }
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.home.text}>Zmiana rozmiaru</Text>
                </View>
                <ScrollView contentContainerStyle={[{flex:1,flexDirection: 'column'}]}>
                    <View style={styles.content.example}>
                        <Slider
                            style={{width: 275, height: 40}}
                            value={0.5}
                            minimumValue={0}
                            maximumValue={1}
                            thumbTintColor='#444'
                            minimumTrackTintColor="#444"
                            maximumTrackTintColor="#000000"
                            onValueChange={this.imageResize}
                        />
                        <Image source={require('../assets/favicon.png')} style={[{transform: [{ scale: this.state.imageScale }]}]}/> 
                    </View>
                </ScrollView>
            </View>
        )
    };
}