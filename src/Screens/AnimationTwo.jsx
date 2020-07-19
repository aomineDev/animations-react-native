import React, { useRef } from 'react'
import { Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native'

import Wrapper from 'wrappers/Wrapper'
import TouchMe from 'components/TouchMe'

const { width, height } = Dimensions.get('screen')

export default function AnimationOne () {
  const ballAnimation = useRef(new Animated.Value(1)).current


  function animateBall () {
    Animated.timing(ballAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true
    }).start()
  }

  return (
    <Wrapper>
      <TouchableOpacity onPress={animateBall}>
        <Animated.View style={[styles.element, { opacity: ballAnimation }]} />
      </TouchableOpacity>
      <TouchMe />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  element: {
    width: width / 2,
    height: height / 4.4,
    backgroundColor: 'cornflowerblue'
  }
})