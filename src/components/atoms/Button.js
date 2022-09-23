import {Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { width } from '../../constants'; //-->constant

//--You can use your custom button component--//
const Button = ({text, onPress, type, onPress2}) => {
    if ( type === 'rectangle'){
      return (
        <TouchableOpacity onPress={onPress} 
        style={btnContainer}>
          <Text style = {textStyle}>{text}</Text>
        </TouchableOpacity>
      )
    }
      return (
        <TouchableOpacity style = {btnContainer2} onPress={onPress2}>
            <Text>{text}</Text>
        </TouchableOpacity>
      )
    
  }

export default Button

//--Styles--//
const textStyle = {
    letterSpacing: 10, 
     fontWeight: '600',
     color: 'white'
  }
  
  const btnContainer = {
    backgroundColor: '#444', 
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: width * 0.35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25,
  }
  
  const btnContainer2 = {
    //--> No style
  }