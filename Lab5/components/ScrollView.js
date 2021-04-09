import React, {Component} from 'react';
import { ScrollView, Text, View, Dimensions  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import styles from './styles'

const WindowHeight = Dimensions.get("window");

export default class DatePickerScreen extends Component {
    render(){ 
        return (
                <View style={[styles.content.container, {height: WindowHeight.height}]}>
                    <View style={[styles.content.example, {height: 150, textAlign: "center"}]}>
                        <Text style={styles.home.text}>
                            Drugi scrole view
                        </Text>
                    </View>
                    <View style={[styles.content.example, {height: WindowHeight.height/2}]} >
                        <ScrollViewIndicator style={styles.scrollViewIndicator} scrollViewStyle={styles.flexbox.scrollViewStyle} scrollIndicatorContainerStyle={styles.flexbox.scrollIndicatorContainerStyle} scrollIndicatorStyle={styles.flexbox.scrollIndicatorStyle} >
                            <View style={[styles.flexbox.box, { backgroundColor: "powderblue" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "skyblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "steelblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "red" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "darkorange" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "green" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "purple" }]}/>
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumslateblue" }]} />
                            <View style={[styles.flexbox.box, { backgroundColor: "mediumturquoise" }]} />
                        </ScrollViewIndicator>
                    </View>
                </View >
        )
    };
}