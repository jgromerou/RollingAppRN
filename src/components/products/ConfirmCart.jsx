import React, { useContext, useEffect } from 'react';
import { Text, Image, FlatList, View } from 'react-native';
import { globalThemes } from '../../themes/globalThemes';
import { TouchableOpacity } from 'react-native';
import { ConfirmPay } from './ConfirmPay';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { GoBack } from './GoBack';
import { CartContext } from '../../contexts/CartContext';
import { searchData } from '../../data/searchData';
import { CustomCardProducts } from './CustomCardProducts';
import { AntDesign } from 'react-native-vector-icons';
//import { useIsFocused } from '@react-navigation/native';

export const ConfirmCart = ({navigation}) => {
    const { navigate } =  useNavigation();
    const {
      state: { colors },
    } = useContext(ThemeContext);
    const { state, isLoading, calculateCart } = useContext(CartContext);
    //const isFocused =  useIsFocused();

    useEffect(() => {
      calculateCart();
    }, [isLoading])

    // const isfocus = () => {
    //   calculateCart();
    // }

    const cartRender = (item, index) => {
      return (
        <View style={{
          flex: 1,
          backgroundColor: '#ccc',
          flexDirection:  'row',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems:  'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderTopEndRadius: 10,
          borderBottomEndRadius: 10,
          padding:5
      }}>
          <View style={{
              flex: 1,
              marginRight: 5
          }}>
              <Image 
                  source={require('../../assets/thoto/banners/shoes-color.jpg')}
                  style={{
                      width:50,
                      height: 50,
                      borderRadius: 5
                  }} 
              />
          </View>
          <View 
              style={{ 
                  flex:4, 
                  alignItems: 'flex-start',
                  justifyContent: 'center'
              }}>
              <View>
                  <Text style={{ fontSize: 12, color: 'rgba(255,255,255, 0.5)',  }}>{item.category}</Text>
                  <Text style={{ fontSize: 13, color: '#fff' }}>{ item.product}</Text>
                  <Text style={{ fontSize: 14, color: '#f2058b', fontWeight: 'bold'}}>${item.price}</Text>
              </View>
          </View>

          <View 
              style={{ 
                  flex:0.5, 
                  alignItems: 'flex-start',
                  justifyContent: 'center'
              }}>
              <View>
                  <Text style={{ fontSize: 14, color: '#fff',  }}>{item.qty}</Text>
              </View>
          </View>
      </View>
      )      
  }


  return (
    <View style={{ 
      //globalThemes.container
      flex: 1,
      backgroundColor: colors.primary,
      padding: 10,
    }}>
        <GoBack navigation={navigation}/>
        {/* <View style={{ 
            backgroundColor: colors.primary,
            marginHorizontal: 10,
            borderRadius: 10,
            padding: 1,
            zIndex:999,
            marginTop: 2,
            marginBottom: 5       
          }}>
            <TouchableOpacity 
                  // onPress={() => {navigation.goBack(); calculateCart()}}
                  onPress={() => {calculateCart(); navigate('CheckoutScreen'); }}
              >
                <AntDesign 
                      name="left" 
                      color={'rgba(255,255,255,1)'}  
                      size={28}
                />
            </TouchableOpacity>
        </View> */}


        <View>
            <Text style={{color: 'white'}}>
            you will buy
            </Text>
        </View>
        <View style={{
            flex: 2,
            // justifyContent: "center",
            // marginTop: 10,
            // marginBottom: 30,
            //borderColor:'blue',
            //borderWidth:2
        }}>
            <FlatList 
            data={state.cart}
            renderItem={ ({item, index}) => cartRender(item, index) }
            keyExtractor={(item, index) => index}
            />
        </View>
        <View>
            <Text style={{color: 'white'}}>
            continue shopping
            </Text>
        </View>
        <View style={{ flex:2}}>
              <FlatList  
                data={searchData}
                renderItem={({item}) => <CustomCardProducts itemData={item}/>}
                keyExtractor={item => item.id}
                horizontal={true}
              />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 0.5,
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 5,
            //backgroundColor:'white',
            alignItems: 'center',
            //borderColor:'blue',
            //borderWidth:2

          }}
        >
        <Text
          style={{
              fontSize: 25,
              color: '#f2058b',
              fontWeight: '500',
              //borderColor:'blue',
              //borderWidth:2
          }}
        >$ {state.cartValue} 
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
              onPress={() => navigate('ConfirmPay')}
            >
                <Text style={globalThemes.defaulTextBtn}>GO PAY</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}
