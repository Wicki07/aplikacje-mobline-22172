import React, {Component,useState} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';
import styles from './styles'

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={styles.modal.centeredView}>
                    <View style={styles.modal.modalView}>
                        <Text style={styles.modal.modalText} onPress={onToggleSwitch} >{Math.floor(Math.random()*100)}</Text>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <ScrollView >
                    <View style={styles.content.example}>                    
                        <CustomSwitch/><Text/>
                    </View>
                </ScrollView>
            </View>
        )
    };
}