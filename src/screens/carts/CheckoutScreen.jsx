import React, { useContext, useEffect, useState } from 'react'
import { Image, Pressable, Text } from 'react-native'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import { globalThemes } from '../../themes/globalThemes'
import { AntDesign } from 'react-native-vector-icons';
import { CustomQuantity } from '../../components/products/CustomQuantity';
import { useQuantity } from '../../hooks/useQuantity';
import { CartItem } from '../../components/products/CartItem';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GoBack } from '../../components/products/GoBack';

export const CheckoutScreen = ({ navigation }) => {

    const { state, isLoading, calculateCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(state.cart)
    const { navigate } =  useNavigation();
    const {
      state: { colors },
    } = useContext(ThemeContext);
    //const { quantity, sumQuantity, restQuantity} = useQuantity(item.qty);

    const cartRender = (item, index) => {
      //console.log(item, 'item01')
        return (
            <CartItem item={ item } index={index}/>
        )      
    }

    useEffect(() => {
      calculateCart();
    }, [isLoading])

  return (
    <View style={[colors.container,{ 
      //globalThemes.container 
      flex: 1,
      //backgroundColor: colors.primary,
      padding: 10,
    }]}>
        <GoBack navigation={navigation}/>
        <View style={{
            flex: 4,
            // justifyContent: "center",
            // marginTop: 10,
            // marginBottom: 30,
        }}>
            <FlatList 
            //data={state.cart}
            data={state.cart}
            renderItem={ ({item, index}) => cartRender(item, index) }
            keyExtractor={(item, index) => index}
            />
        </View>


        <View
          style={{
            flexDirection: "col",
            flex: 1,
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 5,
            //backgroundColor:'white',
            alignItems: 'center'

          }}
        >
            <Text
                style={{
                    fontSize: 25,
                    //color: '#f2058b',
                    color: colors.text,
                    fontWeight: '500'
                }}
            >Price $ {state.totalPrice} 
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.text,
                borderWidth: 3,
                //backgroundColor: "#f2058b",
                alignItems: "center",
                fontSize: "17",
                fontWeight: "600",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 5,
                alignSelf:  'center'
              }}
              onPress={() => navigate('ConfirmCart')}
            >
                <Text style={globalThemes.defaulTextBtn}>CONFIRM</Text>
            </TouchableOpacity>

        </View>
    </View>
  
  )
}
