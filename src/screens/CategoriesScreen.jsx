import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';
import { ProductsContext } from '../contexts/ProductsContext';

const CategoriesScreen = ({ navigation }) => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const {
    categories: stateCategories,
    getCategories,
    isLoading,
  } = useContext(ProductsContext);

  useEffect(() => {
    getCategories();
  }, [isLoading]);

  const navigatetoProductos = (categoryId, categoryName) => {
    navigation.navigate('ProductsByCategory', { categoryId, categoryName });
  };

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text, fontSize: 30 }}>
        Selecciona una Categoría
      </Text>
      <FlatList
        data={stateCategories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigatetoProductos(item._id, item.categoryName)}
          >
            <View style={{ height: 200 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
