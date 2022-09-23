import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Button from '../atoms/Button';
import Pagination from '../molecules/Pagination';

const Footer = ({onPress, onPress2, scrollX, data}) => {
    return (
        <View style={{flex:1}}>
            <View style={upperFooter}>
                <Button text={`NEXT`} type={'rectangle'} onPress={onPress} />
                <Pagination scrollX={scrollX} data={data} />
            </View>

            <View style={lowerFooter}>
                <Button text={'Go Back'} onPress2={onPress2} />
                <Button text={'Skip'} />
            </View>
        </View>
    )
}

export default Footer

const upperFooter ={
    height: '80%', 
    width: '100%', 
  }
  
  const lowerFooter = {
    height: "20%", 
    width: '100%',  
    justifyContent:'space-between', 
    flexDirection:'row', 
    alignItems:'center'
  }