import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';
import { ProductsContext } from '../contexts/ProductsContext';

const CategoriesScreen = ({ navigation }) => {
  // const categories = [
  //   {
  //     id: 1,
  //     nombre: 'Zapatillas',
  //     imagen: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Buzo',
  //     imagen: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699550793/react-avanzado/bgv3dadkc2zoma8mucgl.jpg',
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Shorts',
  //     imagen: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699552814/react-avanzado/bi6li8dy1solckh2jxoz.jpg',
  //   },
  //   {
  //     id: 4,
  //     nombre: 'Remera',
  //     imagen: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545979/react-avanzado/cfgwh5bwx5e11u9wfmni.jpg',
  //   },
  //   // ... más categorías
  // ];


  const {state: { colors } } = useContext(ThemeContext);
  const {categories: stateCategories, getCategories, isLoading } = useContext(ProductsContext)

  useEffect(() => {
    getCategories()
    console.log('CATEGORIAS', stateCategories)
  }, [isLoading])

  const navigatetoProductos = (categoryId, categoryName) => {
    navigation.navigate('ProductsByCategory', { categoryId, categoryName });
  };

  return (
    <View>
      <Text style={{ color: colors.text, fontSize: 35 }}>Selecciona una Categoría</Text>
      <FlatList
        data={stateCategories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigatetoProductos(item._id, item.categoryName)}
          >
            <Card elevation={4} style={{ position: "relative", margin: "auto", backgroundColor: colors.background }}>
              
              <View style={{height: 200, backgroundColor: colors.background}}>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height:'100%' }}
                resizeMode='contain'
              />
              </View>
              <Text style={{
                fontSize: 45,
                color: "white",
                fontWeight: 'bold',
                textAlign: 'center',
                position: "absolute",
                left: "30%",
                top: "40%",
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 10
              }}>{item.categoryName}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;