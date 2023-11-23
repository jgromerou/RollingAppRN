import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';

const ProductsByCategory = () => {
  // Agregar navegacion hacia pagina de descripcion de producto
  // const navigatetoProductos = (productId) => {
  //   navigation.navigate('ProductDescription', { productId });
  // };

  const {
    state: { colors },
  } = useContext(ThemeContext);

  return (
    <View>
      <Text style={{ color: colors.primary, fontSize: 55 }}>Nombre de la C</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalThemes.menuButton}
            onPress={() => navigatetoProductos(item.id)}
          >
            <Card elevation={4} style={{ position: "relative", margin: "auto" }}>
              <Image
                source={{ uri: item.imagen }}
                style={{ width: '100%', height: 200, objectFit: "cover" }}
              />
              <Text style={{
                fontSize: 55,
                color: "white",
                fontWeight: 'bold',
                textAlign: 'center',
                position: "absolute",
                left: "30%",
                top: "40%",
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 10
              }}>{item.nombre}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default ProductsByCategory