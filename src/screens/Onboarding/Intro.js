import { StyleSheet, 
         Text, 
         View, 
         StatusBar,
         Dimensions,
         FlatList, 
         TouchableOpacity,
         Animated,
         } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import data from './data';
import Lottie from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const Item = ({ lottieSource, heading, description, index, scrollX }) => {
  const inputRange = [(index - 0.85) * width, index * width, (index + 0.85) * width];
  const inputRangeOpacity = [(index - 0.45) * width, index * width, (index + 0.45) * width];
  const scale = scrollX.interpolate({
    inputRange, 
    outputRange: [0,1,0]
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.35, 0, - width * 0.35],
  });

  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.75, 0, - width * 0.75],
  });

  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0,1,0],
  });
  return (
    <View style={itemStyle}>
        <Animated.View style = {[animationStyle,
            {
                transform: [{scale}], 
                alignItems:"center", 
            }]}>
              <Lottie source={lottieSource} autoPlay loop style = {animationStyle} />
        </Animated.View>
        <View style={textContainer}>
          <Animated.Text style={[headingStyle, 
          {
            opacity,
            transform: [{translateX: translateXHeading}], 
          }]}>{heading}</Animated.Text>
          <Animated.Text style={[descriptionStyle,
          {
            opacity,
            transform: [{translateX: translateXDescription}]
          }]}>{description}</Animated.Text>
        </View>
    </View>
  )
}

const Pagination = ({scrollX}) => {
  return(
      <View style = {pagination}>
          {data.map((_, i) => {
              const inputRange = [(i-1) * width, i *width, (i +1) * width];

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
              return(
                  <Animated.View key={`indicator-${i}`} 
                        style ={{
                          height: 8, 
                          width: 8, 
                          margin: 8,
                          borderRadius: 5, 
                          opacity, 
                          backgroundColor: '#7E9870',
                          transform: [
                              {
                                  scale
                              }
                          ]}}>
                     
                  </Animated.View>
              )
          })}
      </View>
  )
}

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
 
}
const Onboarding = () => {

  const scrollX = useRef( new Animated.Value(0)).current;
  const refContainer = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if ( refContainer.current){
      refContainer.current?.scrollToIndex({
        index: index,
        animated: true
      })
    }
  }, [index])

  return (
    <View style = {container}>
    <StatusBar style = 'auto' hidden />
    <View style = {{flex: 0.7}}>
      <Animated.FlatList
          ref = {refContainer}
          initialScrollIndex={index}
          keyExtractor={(item) =>item.key}
          data = {data}
          renderItem={({item, index}) => <Item {...item}  index = {index} scrollX={scrollX} />}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll = {Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX }}}],
            { useNativeDriver : true }, 
          )}
          scrollEventThrottle = {16}
      />
    </View>

    <View style = {footer}>
      <View style = {upperFooter}>
          <Button text={`Next`} type={'rectangle'} onPress={() => {
            if (index === data.length - 1) {
              return
            }
            setIndex(index + 1);
          }} />

          <Pagination scrollX={scrollX} />
      </View>

      <View style = {lowerFooter}>
        <Button type={'circle'} text={'Go Back'} onPress2={() => {
          if (index === 0) {
            return
          }
          setIndex(index - 1);
        }} />

        <Button text={'Skip'} onPress2={() => {
          if (index === 0) {
            return
          }
          setIndex(index - 1);
        }} />
      </View>
        

      {/* <Button type={'circle'} onPress2={() => {
          if (index === 0) {
            return
          }
          setIndex(index - 1);
        }} /> */}
    </View>
    

    {/* <View style = {itemStyle}>
    <Lottie source = {require('../../assets/lottie/online-learning1.json')} style = {animationStyle} />
    <View style={textContainer}>
          <Text style={headingStyle}>Hello</Text>
          <Text style={descriptionStyle}>xxx xxx xxx xxx</Text>
    </View>
    </View> */}
       

    
      {/* <Pagination /> */}
  
    </View>
  )
}

export default Onboarding;

const container = {
  flex: 1, 
}

//--Lottie Animation Styles--//
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
  color: '#444', 
  textTransform : 'uppercase',
  fontSize: 24, 
  fontWeight: '800',
  letterSpacing: 2,
  marginBottom: 5,
}

const descriptionStyle = {
  color: '#ccc', 
  fontWeight: '400', 
  textAlign: 'left',
  width: width * 0.75, 
  marginRight: 10, 
  fontSize: 16, 
  lineHeight: 16 * 1.5,
}

//--Pagination Style--//

const pagination = {
  width: '100%',
  flexDirection: 'row', 
  height: 40,
  marginTop: 10
}

const footer = {
  flex: 0.30, 
  padding: 25,
}

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
