import React, { Component, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import defaultTheme from '../../theme';

const Button = (props) => {

    const small = props.small;

    const btnContainer = {
        backgroundColor: props.active ? defaultTheme.colors.primary1 : defaultTheme.colors.secondary1, 
        paddingVertical: 15,
        width: !small ? defaultTheme.btnSize.normal : defaultTheme.btnSize.small,
        borderRadius: 10,
        alignItems:'center', 
        justifyContent:'center',
        height: defaultTheme.btnSize.small/3,
        marginTop: !props.margin ? 25 : null,
    }

    

    return (
            <TouchableOpacity style = {btnContainer} onPress= {props.onPress}>
                 <Text normal title = {props.title} />
            </TouchableOpacity>   
        );
};

export default Button;
