import React, { useContext } from 'react';
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

const ProductsByCategory = ({ navigation, route }) => {
  // Agregar navegacion hacia pagina de descripcion de producto
  // const navigatetoProductos = (productId) => {
  //   navigation.navigate('ProductDescription', { productId });
  // };

  const productos = [
    {
      id: 1,
      productName: 'Zapatillas Nike Air Max',
      price: 129.99,
      stock: 50,
      status: 'Disponible',
      category: 'Zapatillas',
      detail: 'Increíbles zapatillas para correr',
      image:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 2,
      productName: 'Zapatillas Nike Air Max 2',
      price: 2449.99,
      stock: 100,
      status: 'Disponible',
      category: 'Ropa Deportiva',
      detail: 'Zapatillas Nike Air Max la mejor de todas la',
      image:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 3,
      productName: 'Zapatillas Nike Air Max 3',
      price: 1449.99,
      stock: 30,
      status: 'Disponible',
      category: 'Accesorios',
      detail: 'Gorra elegante para protegerte del sol',
      image:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 4,
      productName: 'Zapatillas Nike Air Max 4',
      price: 4439.99,
      stock: 40,
      status: 'Disponible',
      category: 'Ropa Deportiva',
      detail: 'Shorts cómodos para tus actividades físicas',
      image:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 5,
      productName: 'Zapatillas Nike Air Max 5',
      price: 4449.99,
      stock: 20,
      status: 'Disponible',
      category: 'Accesorios',
      detail: 'Mochila espaciosa y resistente',
      image:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
  ];

  const { categoryId, categoryName } = route.params;
  console.log(route.params);

  const navigatetoProductos = (productId) => {
    console.log(productId);
    navigation.navigate('ProductsScreen', { productId });

    console.log(productId);
  };

  const {
    state: { colors },
  } = useContext(ThemeContext);

  //console.log(itemData)
  return (
    <View>
      <Text
        style={{ fontSize: 35, color: colors.titleColor, paddingHorizontal: 5 }}
      >
        {categoryName}
      </Text>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <TouchableOpacity
            // style={globalThemes.menuButton}
            // onPress={() => navigatetoProductos(item)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
              borderRadius: 25,
            }}
          >
            <Card style={{ borderRadius: 25 }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 350,
                  height: 310,
                  borderRadius: 25,
                }}
              />
            </Card>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 10,

                  color: colors.primary,
                }}
              >
                {item.productName}
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  marginVertical: 11,
                  fontWeight: '800',

                  color: colors.primary,
                }}
              >
                ${item.price}
              </Text>

              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: colors.primary,
                  marginBottom: 35,
                }}
                onPress={() => navigation.navigate('ProductsScreen', item.id)}
              >
                <Text
                  style={{
                    padding: 10,
                    textAlign: 'center',
                    color: colors.primary,
                  }}
                >
                  Ver
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsByCategory;
