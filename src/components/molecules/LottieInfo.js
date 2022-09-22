import React, { Component } from 'react';
import { View, TouchableOpacity} from 'react-native';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieInfo = (props) => {

//--make lottie animation clickable --//    
const ClickableAnimation = (condition) => {

        if (condition)
        {
            return (
                <TouchableOpacity onPress={props.onPress}>
                    <LottieView style = {{ width: width/1.5 }}
                        source={props.source} 
                        autoPlay loop />
                    <Text bold normal center title = {props.subtitle}/>
                </TouchableOpacity>
            )
        } 
        else {
            return(
                <LottieView style = {{ width: width/1.5 }}
                source={props.source} 
                autoPlay loop />
            )  
        }
}

const ClickableBody = (condition) => {
    if (condition)
    {
        return (
            <View style = {body2Container}>
                <Text center margin small title = {props.body2} />
                <Button active title = 'Journal Demo Trade'/>
            </View>
        )
       
    }else {
        return(
            <Text body center title = {props.body1}/>
        )
    }
}

//--constants--//
const width = Dimensions.get('window').width;
const isClickable = props.clickable; 

    return (
        <View style = {{flex: 1, justifyContent:'space-around', alignItems:'center'}}>
            {ClickableAnimation(isClickable)}
            {ClickableBody(isClickable)}
        </View>
    );
};

//style 

const body2Container = {
    backgroundColor:'#F6EDD9', 
    padding: 20, 
    borderRadius: 10, 
    position: 'absolute', 
    bottom: 10, 
}

export default LottieInfo;
