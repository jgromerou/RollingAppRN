import React from 'react';
import { View, Text } from 'react-native';
import { globalThemes } from '../themes/globalThemes';

const categoriesScreen = () => {
  return (
    // Titulo del View
    <View style={globalThemes.container}>
      <Text>Categorias</Text>
    </View>
  );
};

export default categoriesScreen;
