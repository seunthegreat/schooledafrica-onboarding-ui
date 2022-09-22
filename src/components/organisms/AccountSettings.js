import React from 'react';
import { View} from 'react-native';
import SwitchView from '../molecules/Switch';

const AccountSettings = (props) => {
    //--constants--//
    const darkMode = props.darkMode;
    const darkModeValue = props.darkModeValue;
    const darkModeSwitch = props.darkModeSwitch;

    const id = props.id;
    const idValue = props.idValue;
    const idSwitch = props.idSwitch;

    
    return (
        <View style = {accountSettingContainer}>
                <SwitchView title = {darkMode} turnOn = {darkModeValue} switch = {darkModeSwitch}/>
                <SwitchView title = {id} turnOn = {idValue} switch = {idSwitch}/>
        </View>
    );
};

export default AccountSettings;

const accountSettingContainer = {
    width: "100%", 
    justifyContent:'center'
}
