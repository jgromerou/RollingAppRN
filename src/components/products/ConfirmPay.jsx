import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalThemes } from '../../themes/globalThemes';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GoBack } from './GoBack';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { CartContext } from '../../contexts/CartContext';
import { CustomModal } from './CustomModal';
import { dashAxios } from '../../config/dashAxios';

export const ConfirmPay = ({ navigation }) => {
  const { navigate } = useNavigation();
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const { addTypePay, state, initCartShoping, addSales } =
    useContext(CartContext);
  const [messageModal, setMessageModal] = useState('');
  const [sale, setSale] = useState(false);

  const closeAlert = () => {
    setVisible(false);
    if (sale) {
      navigate('HomeScreen');
      setSale(false);
    }
  };

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
    switch (value) {
      case 'Efectivo':
        addTypePay(value);
        break;
      case 'Tarjeta de Crédito':
        addTypePay(value);
        break;
      case 'Mercadopago':
        addTypePay(value);
        break;
      default:
        break;
    }
  };
  const addShopping = () => {
    //valido que hay productos en cart
    if (state.totalPrice < 1) {
      setMessageModal('Tiene que seleccionar al menos un Producto!');
      setVisible(true);
      return;
    }
    //valido si selecciono metodo de pago del cart
    if (state.paymentType === '') {
      setMessageModal('Tiene que seleccionar el medio de Pago!');
      setVisible(true);
      return;
    }
    //valido q este logueado
    if (state.user === '') {
      setMessageModal('Tiene que registrarse para realizar la Compra!');
      setVisible(true);
      return;
    }
    //Aqui guardo en la base de datos y si es ok
    addSales01();
  };

  const addSales01 = async () => {
    try {
      let user = state.user;
      let saleDate = state.saleDate;
      let cartProducts = state.cart.map((ventas) => {
       let cart = {_id: ventas._id,
        productName: ventas.productName,
        price: ventas.price,
        quantity: ventas.quantity};
        return cart;
      });
      let paymentType = state.paymentType;
      let status = 'Realizada';
      let totalPrice = state.totalPrice;

      const { data } = await dashAxios.post('/sales', {
        user,
        saleDate,
        cartProducts,
        cartProducts,
        paymentType,
        status,
        totalPrice,
      });
      setSale(true);
      setMessageModal('Felicitaciones, su compra se genero con exito!');
      setVisible(true);

      //inicializo cartShopping y voy pagina principal
      initCartShoping();
    } catch (error) {
      const msg = error.response.data.errores[0].msg;
      setMessageModal(
        'En estos momentos no se puede Realizar la compra, espere unos minutos e intente, Gracias!'
      );
      setVisible(true);
    }
  };

  useEffect(() => {
    if (state.paymentType !== null) {
      setSelectedValue(state.paymentType);
    }
  }, []);

  return (
    <View
      style={[
        colors.container,
        {
          padding: 10,
        },
      ]}
    >
      <GoBack navigation={navigation} />

      <View>
        <Text style={{ color: colors.text }}>Confirmar Pago</Text>
      </View>

      {visible ? (
        <CustomModal
          closeAlert={closeAlert}
          visible={visible}
          messageModal={messageModal}
        />
      ) : null}

      <View
        style={{
          flexDirection: 'col',
          marginTop: 5,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            alignContent: 'center',
          }}
        >
          <RadioButton.Group
            onValueChange={(value) => handleRadioButtonPress(value)}
            value={selectedValue}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 300,
                height: 130,
                borderRadius: 15,
                backgroundColor: '#ADD8E6',
                marginBottom: 5,
                borderColor: colors.text,
                borderWidth: 3,
              }}
            >
              <RadioButton value="Efectivo" color="blue" />
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('Efectivo')}
              >
                <Image
                  source={require('../../assets/thoto/banners/cash03.png')}
                  style={{
                    width: 120,
                    height: 120,
                    marginLeft: 55,
                    objectFit: 'cover',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 300,
                height: 130,
                borderRadius: 15,
                backgroundColor: '#ababab',
                marginBottom: 5,
                borderColor: colors.text,
                borderWidth: 3,
              }}
            >
              <RadioButton
                value="Tarjeta de Crédito"
                color="black"
                name="RadioButtoncard"
              />
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('Tarjeta de Crédito')}
              >
                <Image
                  source={require('../../assets/thoto/banners/card.png')}
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 5,
                    marginLeft: 55,
                    objectFit: 'cover',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 300,
                height: 130,
                borderRadius: 15,
                backgroundColor: 'white',
                marginBottom: 10,
                borderColor: colors.text,
                borderWidth: 3,
              }}
            >
              <RadioButton value="Mercadopago" color="skyblue" />
              <TouchableOpacity
                onPress={() => handleRadioButtonPress('Mercadopago')}
              >
                <Image
                  source={require('../../assets/thoto/banners/Mercado_Pago.png')}
                  style={{
                    width: 250,
                    height: 150,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: colors.text,
            width: 140,
            textAlign: 'right',
          }}
        >
          Precio Total:
        </Text>
        <Text
          style={{
            color: colors.text,
            marginLeft: 10,
          }}
        >
          {'$ ' + state.totalPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            color: colors.text,
            width: 140,
            textAlign: 'right',
          }}
        >
          Con:
        </Text>
        <Text
          style={{
            color: colors.text,
            marginLeft: 10,
          }}
        >
          {state.paymentType}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderColor: colors.text,
            borderWidth: 3,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={() => addShopping()}
        >
          <Text style={{...globalThemes.defaulTextBtn, paddingVertical: 6}}>PAGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
