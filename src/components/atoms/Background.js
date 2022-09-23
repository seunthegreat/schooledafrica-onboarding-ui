import { Animated, StyleSheet } from 'react-native'
import React from 'react'
import { bgs, width } from '../../constants'

//--I couldn't get the interpolation working--//
const Background = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    })
    return (
        <Animated.View
            style={[StyleSheet.absoluteFillObject, {
                backgroundColor: bgs[0]
            }]}
        />)
}

export default Background;
