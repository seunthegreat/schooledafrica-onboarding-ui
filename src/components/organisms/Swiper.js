import { Animated } from 'react-native'
import React from 'react';
import LottieView from '../molecules/LottieView';

const Swiper = ({data, refContainer, index, scrollX}) => {
    return (
        <Animated.FlatList
            ref={refContainer}
            initialScrollIndex={index}
            keyExtractor={(item) => item.key}
            data={data}
            renderItem={({ item, index }) => <LottieView {...item} index={index} scrollX={scrollX} />}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            onEndReached={()=> alert("Navigate to Login")}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false },
            )}
            scrollEventThrottle={16}
        />
    )
}

export default Swiper;