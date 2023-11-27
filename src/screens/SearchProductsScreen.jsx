import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export const SearchProductsScreen = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <View>
      <Text style={{ color: colors.primary, fontSize: 20 }}>
        SearchProductsScreen
      </Text>
    </View>
  );
};
