import React, { useContext, useEffect } from 'react';
import { CustomQuantity } from './CustomQuantity';
import { useQuantity } from '../../hooks/useQuantity';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { CartContext } from '../../contexts/CartContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export const CartItem = ({ item, index }) => {
  //console.log(item, 'itemcategory')
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { quantity, sumQuantity, restQuantity } = useQuantity(item.quantity);
  const { deleteCart, calculateCart, state, initLoading, isLoading } =
    useContext(CartContext);

  const deleCart = (index) => {
    initLoading();
    deleteCart(index);
  };
  useEffect(() => {
    calculateCart();
  }, [item.quantity]);

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        borderColor: colors.text,
        borderWidth: 1,
        //backgroundColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
          //   source={{ uri: `${item?.image}` }}
          source={{ uri: `${item?.image}` }}
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
          <Text style={{ fontSize: 12, color: '#000' }}>
            {item?.category}
          </Text>
          <Text style={{ fontSize: 13, color: '#000' }}>
            {item?.productName?.length < 28 ? item?.productName : item?.productName?.slice(0,27)}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1.9, alignItems: 'center' }}>
        <CustomQuantity
          quantity={quantity}
          sumQuantity={sumQuantity}
          restQuantity={restQuantity}
          item={item}
          index={index}
        />
      </View>
      <View style={{ flex: 0.5, alignItems: 'center' }}>
        <Pressable onPress={() => deleCart(index)}>
          <AntDesign name="delete" size={25} color={'white'} />
        </Pressable>
      </View>
    </View>
  );
};
