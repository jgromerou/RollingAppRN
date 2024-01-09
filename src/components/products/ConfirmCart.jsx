import React, { useContext, useEffect } from 'react';
import { Text, Image, FlatList, View } from 'react-native';
import { globalThemes } from '../../themes/globalThemes';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { GoBack } from './GoBack';
import { CartContext } from '../../contexts/CartContext';
import { CustomCardProducts } from './CustomCardProducts';
import { ProductsContext } from '../../contexts/ProductsContext';

export const ConfirmCart = ({ navigation }) => {
  const { navigate } = useNavigation();
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { state, isLoading, calculateCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    calculateCart();
  }, [isLoading]);

  const cartRender = (item, index) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          borderColor: colors.text,
          borderWidth: 3,
          flexDirection: 'row',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopEndRadius: 10,
          borderBottomEndRadius: 10,
          padding: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            marginRight: 5,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 4,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <View>
            <Text style={{ fontSize: 12, color: colors.titleColor }}>
              {item.category}
            </Text>
            <Text style={{ fontSize: 13, color: '#fff' }}>
              {item.productName.length < 28 ? item.productName : item.productName.slice(0,27)}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.titleColor,
                fontWeight: 'bold',
              }}
            >
              ${item.price}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: colors.text }}>
              {item.quantity}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        colors.container,
        {
          padding: 10,
          flex: 1,
          padding: 10,
        },
      ]}
    >
      <GoBack navigation={navigation} />
      <View>
        <Text style={{ color: colors.text }}>Vas a comprar</Text>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <FlatList
          data={state.cart}
          renderItem={({ item, index }) => cartRender(item, index)}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View>
        <Text style={{ color: colors.text, marginBottom:22, fontWeight:"bold", fontSize:18, }}>Continuar comprando</Text>
      </View>
      <View style={{ flex: 2.5 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <CustomCardProducts itemData={item} />}
          keyExtractor={(item) => item._id}
          horizontal={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.5,
          justifyContent: 'space-evenly',
          marginTop: 10,
          marginBottom: 5,
          alignItems: 'center',
        }}
      >
                <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 2,
            marginBottom: 2,
            backgroundColor:'rgba(0,0,0, 0.5)',
            alignItems: 'center',
            width: '65%',
            borderColor: colors.text,
            borderWidth: 2,
            borderRadius: 6
          }}
        >
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '500',
          }}
        >
          $ {state.totalPrice}
        </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderColor: colors.text,
            borderWidth: 3,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={() => navigate('ConfirmPay')}
        >
          <Text style={{...globalThemes.defaulTextBtn, paddingVertical:6}}>PAGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
