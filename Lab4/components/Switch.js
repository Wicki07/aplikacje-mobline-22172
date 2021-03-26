import React, {Component,useState} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View >
                    <View >
                        <Text onPress={onToggleSwitch} >{Math.floor(Math.random()*100)}</Text>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <>
                <View >
                    <Text >Komponenty Switch i Modal</Text>
                </View>
                <ScrollView >
                    <CustomSwitch/><Text/>
                    <Text >Wyświetlanie liczby pseudolosowej w Modal'u</Text>
                    <Text>Po przełączeniu switch w górnym prawym rogu okna pojawi się Modal z losową liczbą z przedziału 0 - 100.</Text>
                    <Text>Kliknięcie w wyświetloną liczbę zamknie modal.</Text>
                </ScrollView>
            </>
        )
    };
}