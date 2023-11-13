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
import { ConfirmCart } from '../../components/products/ConfirmCart'
import { useNavigation } from '@react-navigation/native';

export const CheckoutScreen = ({ navigation }) => {

    const { state } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(10)
    const { navigate } =  useNavigation();
    //const { quantity, sumQuantity, restQuantity} = useQuantity(item.qty);

    const cartRender = (item, index) => {
        return (
            <CartItem item={ item } index={index}/>
        )      
    //     return (
    //         <View style={{
    //             backgroundColor: '#ccc',
    //             flexDirection:  'row',
    //             borderWidth: 3,
    //             justifyContent: 'center',
    //             alignItems:  'center',
    //             backgroundColor: 'rgba(255, 255, 255, 0.1)',
    //             borderTopEndRadius: 10,
    //             borderBottomEndRadius: 10,
    //             padding:10
    //         }}>
    //             <View style={{
    //                 flex: 1,
    //                 marginRight: 10
    //             }}>
    //                 <Image 
    //                     source={require('../../assets/thoto/banners/shoes-color.jpg')}
    //                     style={{
    //                         width:50,
    //                         height: 50,
    //                         borderRadius: 5
    //                     }} 
    //                 />
    //             </View>
    //             <View 
    //                 style={{ 
    //                     flex:3, 
    //                     alignItems: 'flex-start',
    //                     justifyContent: 'center'
    //                 }}>
    //                 <View>
    //                     <Text style={{ fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>{item.category}</Text>
    //                     <Text style={{ fontSize: 13, color: '#fff' }}>{ item.product}</Text>
    //                     <Text style={{ fontSize: 14, color: '#f2058b', fontWeight: 'bold'}}>${item.price}</Text>
    //                 </View>
    //             </View>
    //             <View style={{ flex:2, alignItems: 'center'}}>
    //                 <CustomQuantity 
    //                     quantity={quantity}
    //                     sumQuantity={sumQuantity}
    //                     restQuantity={restQuantity}
    //                 />
    //             </View>

    //         </View>
    //     )
    }

  return (
    <View style={ globalThemes.container }>
        <View style={{
            flex: 4,
            // justifyContent: "center",
            // marginTop: 10,
            // marginBottom: 30,
        }}>
            <FlatList 
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
                    color: '#f2058b',
                    fontWeight: '500'
                }}
            >Price $ {state.cartValue} 
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#f2058b",
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
