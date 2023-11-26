import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';
import { AntDesign } from 'react-native-vector-icons';
import { CustomCardProducts } from '../components/products/CustomCardProducts';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductsByCategory = ({ navigation, route }) => {
 
  const {state: { colors } } = useContext(ThemeContext);
  const {state: stateProducts, isLoading, getProductsByCategory } = useContext(ProductsContext);
  const { categoryId, categoryName } = route.params;
  
  useEffect(() => {
    getProductsByCategory(categoryName)
    console.log('PRODUCT LIST', stateProducts.products)
  }, [isLoading]);

  const navigatetoProductos = (productId) => {
    // console.log(productId);
    navigation.navigate('ProductsScreen', { productId });

    console.log(productId);
  };

  return (
    <View>
      <Text style={{ fontSize: 35, color: colors.titleColor }}>
        {' '}
        {categoryName}{' '}
      </Text>
      <FlatList
        data={stateProducts.products}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 3,
            }}
          >
            <CustomCardProducts itemData={item} />
          </View>
        )}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsByCategory;
