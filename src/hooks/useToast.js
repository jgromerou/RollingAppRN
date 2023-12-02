import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const useToast = () => {
  // Toast
  const popAnim = useRef(new Animated.Value(windowHeight - 300)).current;

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(popOut);
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
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
