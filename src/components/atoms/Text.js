import React, { Component } from 'react';
import {Text} from 'react-native';
/**
 * xl stands for extra large
 * lg stands for large
 * nm stands for normal
 * sm stands for small
 */
import {xl, lg, nm, sm, body} from '../../styles/textStyles';

const customText = (props) => {

    const textStyle = props.header ? xl : 
                      props.subHeader ? lg : 
                      props.normal ? nm : 
                      props.small? sm : 
                      props.body ? body:
                      null

    const alignment = props.center ? {textAlign:'center'} : props.right ? {textAlign:'right'} : props.left ? {textAlign: 'left'} : null;
    const bold = props.bold ? {fontWeight: '500'} : null;
    const color = props.cta  && props.cta  ? {color: '#7E9870'} :  {color: 'black'} ;
    
    return (
        <Text style = {[textStyle, alignment, bold, color ]}>
            {props.title}{props.gain ? '%' : null}
        </Text>
    );
};

export default customText;
