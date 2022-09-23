import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable'; //-->third party animation library

import Button from '../atoms/Button'; //--> Atom
import Pagination from '../molecules/Pagination'; //--> Molecule

const Footer = ({ onPress, onPress2, scrollX, data, index }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={upperFooter}>
                <Button text={`NEXT`} type={'rectangle'} onPress={onPress} />
                <Pagination scrollX={scrollX} data={data} />
            </View>
            {
                index !== 0 ? (
                    <Animatable.View animation="bounceIn" style={lowerFooter}>
                        <Button text={'Go Back'} onPress2={onPress2} />
                        <Button text={'Skip'} />
                    </Animatable.View>
                ) : null
            }
        </View>
    )
}

export default Footer

const upperFooter = {
    height: '80%',
    width: '100%',
}

const lowerFooter = {
    height: "20%",
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
}