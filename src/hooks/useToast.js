import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const useToast = () => {
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.01,
      duration: 400,
      useNativeDriver: true,
    }).start(popOut);
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    popAnim,
    popIn,
    popOut,
    instantPopOut,
  };
};
