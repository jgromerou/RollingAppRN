import React, { useState, useContext } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export const CustomCardProducts = ({ itemData }) => {
  console.log(itemData, 'itemData')
  const {
    state: { colors },
  } = useContext(ThemeContext);

  const { navigate } = useNavigation();
  const [favorite, setFavorite] = useState(0);

  const onPresFavorite = (id) => {
    favorite === 0 ? setFavorite(id) : setFavorite(0);
  };

  return (
    <Pressable
      style={{
        marginHorizontal: 5,
        backgroundColor: colors.primary,
        //backgroundColor: 'rgba(255,255,255,0.1)',
        // borderColor: 'rgba(255,255,255,0.1)',
        // borderWidth:2,
        borderRadius: 15,
      }}
      onPress={() =>
        navigate('ProductsScreen', {
          productId: itemData._id,
        })
      }
    >
      <View
        style={{
          height: 258,
          width: 185,
          padding: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: `${itemData.image.secure_url}` }}
            style={{
              width: '100%',
              height: 130,
              marginBottom: 5,
              borderRadius: 10,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 3,
            marginTop: 3,
          }}
        >
          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: 16, 
            color: 'black' }}>
            {itemData.productName.length < 18 ? itemData.productName  : `${itemData.productName.slice(0,18)}...`}
          </Text>
          <Text style={{ fontSize: 15, color: colors.title }}>
            {itemData.category}
          </Text>
          <Text style={{ fontSize: 15, marginTop:12, color: colors.title, fontWeight:"bold" }}>
            ${itemData.price}.00
          </Text>
        </View>

        <Pressable onPress={() => onPresFavorite(itemData._id)}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255, 0.1)',
              paddingHorizontal: 10,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 15,
              position: 'absolute',
              bottom: -42,
              right: -11,
            }}
          >
            <Text>
              <AntDesign
                name={favorite == itemData._id ? 'heart' : 'hearto'}
                size={27}
                color={favorite == itemData.id ? '#f2058b' : '#fff'}
              />
            </Text>
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};
