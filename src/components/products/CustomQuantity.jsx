import React, { useContext, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Pressable } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useQuantity } from '../../hooks/useQuantity';
import { CartContext } from '../../contexts/CartContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export const CustomQuantity = ({
  quantity,
  restQuantity,
  sumQuantity,
  item,
  index,
}) => {
  const { editCart, calculateCart, state, initLoading } =
    useContext(CartContext);
  const {
    state: { colors },
  } = useContext(ThemeContext);

  const RestContext = () => {
    initLoading();
    restQuantity();
    //    if (index !== null && index !== undefined) {
    //         console.log('ingresa actcart1')
    //         ActCart();
    //    }
  };
  const SumContext = () => {
    initLoading();
    sumQuantity();
    //    if (index !== null && index !== undefined) {
    //         console.log('ingresa actcart1')
    //         ActCart();
    //    }
  };
  useEffect(() => {
    if (index !== null && index !== undefined) {
      //console.log(state.isLoading,'isloading')
      ActCart();
      // console.log(state.cart, 'cart')
    }
    //console.log(state.cart, 'cart')
    //calculateCart();
  }, [quantity]);

  useEffect(() => {
    //console.log(state.cart, 'cart')
    calculateCart();
  }, [state.isLoading]);

  const ActCart = () => {
    //console.log('ingresa actcart2')
    const CartModificada = {
      _id: item._id,
      productName: item.productName,
      price: item.price,
      //waist: item.waist,
      quantity: quantity,
      image: item.image,
      //category: item.category
    };
    //console.log(CartModificada, 'cardmodificada')
    //modifica la cantidades de cada item
    initLoading();
    editCart(CartModificada, index);
    //calcula el valor total del carrito
    //calculateCart();
  };
  const ActCalculateCart = () => {
    calculateCart();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        // borderWidth: 1.2,
        borderColor: '#fff',
        //borderColor:colors.primary,
        borderRadius: 5,
      }}
    >
      <Pressable
        style={{ alignItems: 'center', justifyContent: 'center' }}
        //onPress={ restQuantity }
        onPress={() => RestContext()}
      >
        <AntDesign
          name="minuscircle"
          size={25}
          //color="rgba(255, 255, 255, 0.5)"
          color={colors.titleColor}
        />
        {/* <AntDesign name="minussquare" size={25} color="rgba(255, 255, 255, 0.5)" /> */}
      </Pressable>

      <View
        style={{
          alignItems: 'center',
          minWidth: 40,
        }}
      >
        <Text
          style={{
            color: colors.titleColor,
            //color: "#fff",
            fontSize: 19,
            fontWeight: 'bold',
            // marginHorizontal: 12,
          }}
        >
          {quantity}
        </Text>
      </View>

      <Pressable
        style={{ alignItems: 'center', justifyContent: 'center' }}
        //onPress={ sumQuantity }
        onPress={() => SumContext()}
      >
        {/* <AntDesign name="plussquare" size={25} color="rgba(255, 255, 255, 0.5)" /> */}
        <AntDesign
          name="pluscircle"
          size={25}
          //color="rgba(255, 255, 255, 0.5)"
          color={colors.titleColor}
        />
      </Pressable>
    </View>
  );
};
