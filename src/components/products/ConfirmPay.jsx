import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalThemes } from '../../themes/globalThemes';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GoBack } from './GoBack';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import { CustomModal } from './CustomModal';

export const ConfirmPay = ({navigation}) => {
    //console.log(props) colors
    const { navigate } =  useNavigation();
    const {
      state: { colors },
    } = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const { addTypePay, state, initCartShoping } = useContext(CartContext);
    const [messageModal, setMessageModal] = useState("");
    const [ sale, setSale] = useState(false);
    console.log(colors.primary, 'colors.primary')

    const closeAlert = () => 
    {
      setVisible(false);
      if (sale){
        navigate('HomeScreen');
        setSale(false);
      }
    }

    const handleRadioButtonPress = (value) => {
      setSelectedValue(value);
      // You can add your custom logic here based on the selected value
      switch (value) {
        case 'Cash':
          // Execute actions for Cash
          console.log('Cash selected');
          addTypePay(value);
          break;
        case 'Credit Card':
          // Execute actions for Credit cart
          console.log('Credit Card selected');
          addTypePay(value);
          break;
        case 'Mercadopago':
          // Execute actions for Mercadopago
          console.log('Mercadopago selected');
          addTypePay(value);
          break;
        default:
          break;
      }
    };
    const addShopping = ()=> {
      //valido que hay productos en cart
      if (state.totalPrice < 1){
        setMessageModal("Tiene que seleccionar al menos un Producto!");
        setVisible(true);
        return;
      }
      //valido si selecciono metodo de pago del cart
      if (state.paymentType === ""){
        setMessageModal("Tiene que seleccionar el medio de Pago!");
        setVisible(true);
        return;
      }
      //valido q este logueado
      if (state.user === ""){
        setMessageModal("Tiene que registrarse para realizar la Compra!");
        setVisible(true);
        return;
      }
      //Aqui guardo en la base de datos y si es ok
      setSale(true);
      setMessageModal("Felicitaciones, su compra se genero con exito!");
      setVisible(true);

      //inicializo cartShopping y voy pagina principal
      initCartShoping();
    }


  useEffect(() => {
    if(state.paymentType !== null) {
      setSelectedValue(state.paymentType);
    }
  }, [])
    
  return (
    <View style={  [colors.container,{
            //globalThemes.container
            //flex: 1,
            //backgroundColor: colors.primary,
           
            //backgroundColor: "yellow",
            padding: 10,
          }
        ]}>

        <GoBack navigation={navigation}/>

        <View>
            <Text style={{color: colors.text}}>
                Confirm Pay
            </Text>
        </View>


        {visible ? <CustomModal 
          closeAlert={ closeAlert } 
          visible={ visible }
          messageModal={ messageModal }
          /> : null}

        <View
            style={{
                flexDirection: "col",
                //flex: 1,
                //justifyContent: 'space-evenly',
                marginTop: 5,
                //marginBottom: 5,
                //backgroundColor:'blue',
                alignItems: 'center'

            }}
        >

        <View style={{ 
              //justifyContent:'center',
              alignContent:'center', 
              //backgroundColor: "yellow",
              //flex:1
            }}>
            {/* <Text>Choose an option:</Text> */}
            <RadioButton.Group
                onValueChange={(value) => handleRadioButtonPress(value)}
                value={selectedValue}
            >
                <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    width:300,
                    height: 130,
                    borderRadius: 15,
                    backgroundColor: '#ADD8E6',
                    marginBottom: 5,
                    borderColor: colors.text,
                    borderWidth: 3,
                    // borderWidth:2,
                    // borderColor: 'red' 
                    }}>
                <RadioButton value="Cash" color="blue" />
                {/* <Text>Option 1</Text> */}
                <TouchableOpacity
                  onPress={() => handleRadioButtonPress('Cash')}
                 >
                  <Image 
                      source={require('../../assets/thoto/banners/cash03.png')}
                      style={{
                        width:120,
                        height: 120,
                        marginLeft: 55,
                        //verticalAlign: 'center',
                        objectFit: 'cover',
                      }} 
                  />
                </TouchableOpacity>
                </View>
                <Text style={{
                  color: 'black',
                  flex: 1,
                  position: 'absolute',
                  width: '100%',
                  top: 100,
                  left:30,
                  alignItems:'flex-end'
                }}>
                  Cash
                </Text>
                <View style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  width:300,
                  height: 130,
                  borderRadius: 15,
                  backgroundColor: '#ababab',
                  marginBottom: 5,
                  borderColor: colors.text,
                  borderWidth: 3,
                  }}>
                <RadioButton value="Credit Card" color="black" name="RadioButtoncard" />
                {/* <Text>Option 2</Text> */}
                  <TouchableOpacity
                    onPress={() => handleRadioButtonPress('Credit Card')}
                  >
                  <Image 
                      source={require('../../assets/thoto/banners/card.png')}
                      style={{
                          width:140,
                          height: 140,
                          borderRadius: 5,
                          marginLeft: 55,
                          objectFit: 'cover',
                      }} 
                  />
                  </TouchableOpacity>
                </View>
                <Text style={{
                  color: 'black',
                  //flex: 1,
                  position: 'absolute',
                  width: '100%',
                  top: 237,
                  left:30,
                  alignItems:'flex-end'
                }}>
                  Credit Card
                </Text>
                <View style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center',
                  width:300,
                  height: 130,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginBottom: 10,
                  borderColor: colors.text,
                  borderWidth: 3,
                  }}>
                <RadioButton value="Mercadopago" color="skyblue" />
                {/* <Text>Option 3</Text> */}
                <TouchableOpacity
                  onPress={() => handleRadioButtonPress('Mercadopago')}
                >
                  <Image 
                      source={require('../../assets/thoto/banners/Mercado_Pago.png')}
                      style={{
                          width:250,
                          height: 150,
                          borderRadius: 5
                      }} 
                  />
                </TouchableOpacity>
                </View>
            </RadioButton.Group>
        </View>

        </View>
        <View style={{ 
            flexDirection: 'row',
            marginTop:10 
            //backgroundColor:'red',
            }}>
            <Text style={{
              //color: 'white', 
              color: colors.text,
              width:140, 
              textAlign: "right"}}>
              Your Payment:
            </Text>
            <Text style={{
              //color: 'white',
              color: colors.text,
              marginLeft: 10}}>
              {'$ ' + state.totalPrice}
            </Text>
        </View>
        <View style={{ 
            flexDirection: 'row',
            
            }}>
            <Text style={{
              //color: 'white', 
              color: colors.text,
              width:140, 
              textAlign: "right"}}>
             With:
            </Text>
            <Text style={{
              //color: 'white', 
              color: colors.text,
              marginLeft: 10}}>
              {state.paymentType}
            </Text>
        </View>

        <View style={{ 
              alignItems: "flex-end",
              //backgroundColor:'red',
              marginTop : 15
            }}>
          <TouchableOpacity
            style={{
                //backgroundColor: "#f2058b",
                backgroundColor: colors.primary,
                borderColor: colors.text,
                borderWidth: 3,
                alignItems: "center",
                fontSize: "17",
                fontWeight: "600",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 5,
                alignSelf:  'center'
            }}
            onPress={() => addShopping()}
            >
                <Text style={globalThemes.defaulTextBtn}>PAY</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
