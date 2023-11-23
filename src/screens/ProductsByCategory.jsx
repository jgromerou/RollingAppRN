import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';
import { AntDesign } from 'react-native-vector-icons';

const ProductsByCategory = () => {
  // Agregar navegacion hacia pagina de descripcion de producto
  // const navigatetoProductos = (productId) => {
  //   navigation.navigate('ProductDescription', { productId });
  // };

  const itemData = [
    {
      id: 1,
      productName: 'Zapatillas Nike Air Max',
      price: 129.99,
      stock: 50,
      status: 'Disponible',
      category: 'Zapatillas',
      detail: 'Increíbles zapatillas para correr',
      image: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 2,
      productName: 'Zapatillas Nike Air Max 2',
      price: 29.99,
      stock: 100,
      status: 'Disponible',
      category: 'Ropa Deportiva',
      detail: 'Zapatillas Nike Air Max la mejor de todas la',
      image: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 3,
      productName: 'Zapatillas Nike Air Max 3',
      price: 19.99,
      stock: 30,
      status: 'Disponible',
      category: 'Accesorios',
      detail: 'Gorra elegante para protegerte del sol',
      image: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 4,
      productName: 'Zapatillas Nike Air Max 4',
      price: 39.99,
      stock: 40,
      status: 'Disponible',
      category: 'Ropa Deportiva',
      detail: 'Shorts cómodos para tus actividades físicas',
      image: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      id: 5,
      productName: 'Zapatillas Nike Air Max 5',
      price: 49.99,
      stock: 20,
      status: 'Disponible',
      category: 'Accesorios',
      detail: 'Mochila espaciosa y resistente',
      image: 'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
  ];

  const {
    state: { colors },
  } = useContext(ThemeContext);

  //console.log(itemData)
  return (
    
    <View>
    <Text style={{ color: colors.primary, fontSize: 35 }}>Nombre de Categoria Seleccionada</Text>
    <FlatList
      data={productos}
      renderItem={({ item }) => (
        <TouchableOpacity
          // style={globalThemes.menuButton}
          // onPress={() => navigatetoProductos(item)}
        >
          <Card  >
            <Image
              source={{ uri: item.image }}
              style={{ width: 250, height: 250, objectFit: "cover", }}
            />
            <Text style={{
              fontSize: 55,
              color: "white",
              fontWeight: 'bold',
              textAlign: 'center',
              position: "absolute",
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 10
            }}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  </View>
  );
}

export default ProductsByCategory