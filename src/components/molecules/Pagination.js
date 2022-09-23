import React from 'react';
import { View, Animated} from 'react-native';
import { width } from '../../constants'; //-->constant

const Pagination = ({ scrollX, data }) => {
    return (
        <View style={pagination}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View key={`indicator-${i}`}
                        style={{
                            height: 8,
                            width: 8,
                            margin: 8,
                            borderRadius: 5,
                            opacity,
                            backgroundColor: 'white',
                            transform: [
                                {
                                    scale
                                }
                            ]
                        }}>
                    </Animated.View>
                )
            })}
        </View>
    )
}

export default Pagination;

//--Style--//
const pagination = {
    width: '100%',
    flexDirection: 'row', 
    height: 40,
    marginTop: 10
  }