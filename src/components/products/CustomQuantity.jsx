import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Pressable } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
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
  };
  const SumContext = () => {
    initLoading();
    sumQuantity();
  };
  useEffect(() => {
    if (index !== null && index !== undefined) {
      ActCart();
    }
  }, [quantity]);

  useEffect(() => {
    calculateCart();
  }, [state.isLoading]);

  const ActCart = () => {
    const CartModificada = {
      _id: item._id,
      productName: item.productName,
      price: item.price,
      quantity: quantity,
      image: item.image,
      category: item.category,
      waist: item.waist
    };
    initLoading();
    editCart(CartModificada, index);
  };
  const ActCalculateCart = () => {
    calculateCart();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#fff',
        borderRadius: 5,
      }}
    >
      <Pressable
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={() => RestContext()}
      >
        <AntDesign
          name="minuscircle"
          size={25}
          color={colors.titleColor}
        />
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
            fontSize: 19,
            fontWeight: 'bold',
          }}
        >
          {quantity}
        </Text>
      </View>

      <Pressable
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={() => SumContext()}
      >
        <AntDesign
          name="pluscircle"
          size={25}
          color={colors.titleColor}
        />
      </Pressable>
    </View>
  );
};
