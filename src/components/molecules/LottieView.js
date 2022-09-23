import React from "react";
import {
    View, 
    Animated,
    } from 'react-native';

import { width } from "../../constants"; //--> constant
import Lottie from 'lottie-react-native';

const Item = ({ lottieSource, heading, description, index, scrollX }) => {

    const inputRange = [(index - 0.85) * width, index * width, (index + 0.85) * width];
    const inputRangeOpacity = [(index - 0.45) * width, index * width, (index + 0.45) * width];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0]
    });
    //--Heading animation--//
    const translateXHeading = scrollX.interpolate({
        inputRange,
        outputRange: [width * 0.35, 0, - width * 0.35],
    });

    //--description animation--//
    const translateXDescription = scrollX.interpolate({
        inputRange,
        outputRange: [width * 0.75, 0, - width * 0.75],
    });

    //--opacity config--//
    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0],
    });
    return (
        <View style={itemStyle}>
            <Animated.View style={[animationStyle,
                {
                    transform: [{ scale }],
                    alignItems: "center",
                }]}>
                <Lottie source={lottieSource} autoPlay loop style={animationStyle} />
            </Animated.View>
            <View style={textContainer}>
                <Animated.Text style={[headingStyle,
                    {
                        opacity,
                        transform: [{ translateX: translateXHeading }],
                    }]}>{heading}</Animated.Text>
                <Animated.Text style={[descriptionStyle,
                    {
                        opacity,
                        transform: [{ translateX: translateXDescription }]
                    }]}>{description}</Animated.Text>
            </View>
        </View>
    )
}

export default Item;

//--Styles--//
const animationStyle = {
    width: width, 
    height: width * 0.55,
  }
  
  const textContainer = {
    
  }
  
  const itemStyle = {
    width: width, 
    flex: 1,
    alignItems:'center', 
    justifyContent: 'space-around'
  }
  
  const headingStyle = {
    color: 'white', 
    textTransform : 'uppercase',
    fontSize: 24, 
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  }
  
  const descriptionStyle = {
    color: 'white', 
    fontWeight: '300', 
    textAlign: 'left',
    width: width * 0.75, 
    marginRight: 10, 
    fontSize: 16, 
    lineHeight: 16 * 1.5,
  }