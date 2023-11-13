import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { Card } from 'react-native-paper';

const CategoriesScreen = ({ navigation }) => {
  const categories = [
    {
      nombre: 'Zapatillas',
      imagen:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545410/react-avanzado/uio0g9ppfjrdl9lbyk5c.jpg',
    },
    {
      nombre: 'Buzo',
      imagen:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699550793/react-avanzado/bgv3dadkc2zoma8mucgl.jpg',
    },
    {
      nombre: 'Shorts',
      imagen:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699552814/react-avanzado/bi6li8dy1solckh2jxoz.jpg',
    },
    {
      nombre: 'Remera',
      imagen:
        'https://res.cloudinary.com/dvcq6vatc/image/upload/v1699545979/react-avanzado/cfgwh5bwx5e11u9wfmni.jpg',
    },
    // ... más categorías
  ];

  const navigatetoProductos = (categoriaNombre) => {
    navigation.navigate('CategoriesScreen', { categoriaNombre });
    // Aquí 'ProductosPorCategoria' es el nombre de la pantalla a la que deseas navegar.(Debe ser la pantalla en donde se muestren las categorias, tienen una imagen ya puesta )
  };

  return (
    // Titulo del View
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}
      >
        Selecciona tu categoria favorita
      </Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          // <TouchableWithoutFeedback onPress={() => navigatetoProductos(item.nombre)}>

          <TouchableOpacity
            style={{ ...globalThemes.menuButton}}
            onPress={() => navigation.navigate('CategoriesScreen')}
          >
            <Card elevation={4} style={{position:"relative"}}>
              <Image
                source={{ uri: item.imagen }}
                style={{ width: '100%', height: 500, objectFit:"cover" }} // Ajusta el estilo según tus necesidades
              />
              <Text  style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          position:"absolute",
          left:"45%",
          top:"40%"
          
        }}>{item.nombre}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
