import { View, StatusBar, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';

//--Our components **Atomic Design Patter** --//
import Background from '../../components/atoms/Background';
import Swiper from '../../components/organisms/Swiper';
import Footer from '../../components/templates/Footer';

import data from './data'; //--> our data Source

const Onboarding = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const refContainer = useRef(null);
  const [index, setIndex] = useState(0); //--> scroll Index

  //--Functions--//
  const handleNext = () => {
    if (index === data.length - 1) {
      return
    }
    setIndex(index + 1);
  };
  const handleGoBack = () => {
    if (index === 0) {
      return
    }
    setIndex(index - 1);
  };

  //--change scroll index dynamically via useEffect--//
  useEffect(() => {
    if (refContainer.current) {
      refContainer.current?.scrollToIndex({
        index: index,
        animated: true
      })
    }
  }, [index]);

  return (
    <View style={container}>
      <StatusBar style='auto' hidden />
      <Background scrollX={scrollX} />
      <View style={swiper}>
        <Swiper
          data={data}
          refContainer={refContainer}
          index={index}
          scrollX={scrollX}
        />
      </View>
      <View style={footer}>
        <Footer
          onPress={handleNext}
          onPress2={handleGoBack}
          scrollX={scrollX}
          data={data}
          index={index} //--> We use this to render Go back/skip button
        />
      </View>
    </View>
  )
}

export default Onboarding;

//--Styles--//
const container = {
  flex: 1
}
const swiper = {
  flex: 0.7
}
const footer = {
  flex: 0.30,
  padding: 25,
}