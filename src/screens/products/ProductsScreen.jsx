import React, { useContext, useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalThemes } from '../../themes/globalThemes';
import { MaterialIcons } from 'react-native-vector-icons';
import { Pressable } from 'react-native';
import { CustomQuantity } from '../../components/products/CustomQuantity';
import { useQuantity } from '../../hooks/useQuantity';
import { CartContext } from '../../contexts/CartContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartShop } from '../../components/products/CartShop';
import { GoBack } from '../../components/products/GoBack';
import { CustomModal } from '../../components/products/CustomModal';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { CustomLoading } from '../../components/CustomLoading';

export const ProductsScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  //console.log(productId,' productId')

  const [talle, setTalle] = useState(0);
  const { quantity, restQuantity, sumQuantity, initQuantity } = useQuantity();
  const { addCart, state, calculateCart, editCart, isLoading, addUserDate } =
    useContext(CartContext);
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { state: cliente } = useContext(AuthContext);
  const {  state: stateProducts, getProduct, isLoadingProductSelected, productSelected, resetProduct } = useContext(ProductsContext);
  const [visible, setVisible] = useState(false);

  const messageModal = 'No puede agregar un producto en 0';
  const { navigate } = useNavigation()

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const obtenerTalle = (dataTalle) => {
    if (dataTalle == talle) {
      return setTalle(0);
    }
    setTalle(dataTalle);
  };

  const closeAlert = () => {
    setVisible(false);
  };

  const addToCart = () => {
    // valido cantidad > 0
    if (quantity < 1) {
      setVisible(true);
      return;
    }
    // busco si ya esta en el carrito el producto
    let cartExist = '';
    //cartExist = state.cart.find((cart) => cart._id === productSelected?._id);
    cartExist = state.cart.find((cart) => cart._id === productId);
    //console.log(cartExist, 'find cartExist')

    if (cartExist !== undefined) {
      let numindex = state.cart.findIndex(
        (cart) => cart._id === cartExist._id
      );
      //console.log(numindex,'numindex')
      //cart._id === productSelected?._id
      ActCart(cartExist, numindex);
      initQuantity();
      return;
    }
    const data = {
      product: productSelected,
      waist: talle,
      quantity: quantity,
 
    };
    addCart(data);
    calculateCart();
    addUserDate(cliente.user.id);
    initQuantity();
    navigate('ProductsList');
  };

  // funcion para modificar solo cantidad cuando ingresa el mismo product
  const ActCart = (cartExist, numindex) => {
    //console.log(cartExist,' cartExist')
    const CartModificada = {
      _id: cartExist._id,
      //product: cartExist.product,
      productName: cartExist.productName,
      price: cartExist.price,
      waist: cartExist.waist,
      quantity: cartExist.quantity + quantity,
      category: cartExist.category,
      image: cartExist.image,
    };
    //modifica la cantidades de cada item
    editCart(CartModificada, numindex);
    calculateCart();
  };

  if(isLoadingProductSelected){
    return <CustomLoading />
  }

  return (
    <View
      style={[
        colors.container,
        {
          flex: 1,
          //backgroundColor: colors.primary,
          padding: 10,
        },
      ]}
    >
      <GoBack navigation={navigation} />
      <View style={styles.head}>
        <CartShop />
      </View>
      <View
        style={{
          flex: 8,
          justifyContent: 'center',
          //backgroundColor: colors.primary,
          alignItems: 'center',
        }}
      >
        {visible ? (
          <CustomModal
            closeAlert={closeAlert}
            visible={visible}
            messageModal={messageModal}
          />
        ) : null}
        <Image
          source={{ uri: `${productSelected?.image.secure_url}` }}
          style={{
            width: 220,
            height: 220,
            borderRadius: 10,
          }}
        />
      </View>

      <View
        style={{
          flex: 1.5,
          //backgroundColor: colors.primary,
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 12, color: colors.titleColor }}>
          {productSelected?.category}
        </Text>
        <Text
          style={{ fontSize: 14, color: colors.titleColor, fontWeight: 'bold' }}
        >
          {productSelected?.productName.length < 28 ? productSelected?.productName : productSelected?.productName.slice(0,27)}{' '}
        </Text>
        <Text
          style={{ fontSize: 20, color: colors.titleColor, fontWeight: 'bold' }}
        >
          ${productSelected?.price}
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          //backgroundColor: colors.primary,
          backgroundColor: "rgba(0,0,0,0)",
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {productSelected?.category === "Zapatillas" ? 
        (
          [36,37,38,39,40].map((item) => (
            <Pressable
              key={item}
              onPress={() => obtenerTalle(item)}
              style={{
                marginHorizontal: 5,
                backgroundColor:
                  item == talle
                    ? 'rgba(242, 5, 139, 0.4)'
                    : "rgba(0,0,0,0.5)",
                padding: 12,
                borderWidth: 1,
                width: 55,
                alignItems: 'center',
                borderColor:
                  item == talle ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color:
                    item == talle
                      ? 'rgba(255,255,255,1)'
                      : 'rgba(255,255,255,0.5)',
                }}
              >
                {item}
              </Text>
            </Pressable>
          ))
        )
        :
        (["XS", "S", "M", "L", "XL"].map((item) => (
          <Pressable
            key={item}
            onPress={() => obtenerTalle(item)}
            style={{
              marginHorizontal: 5,
              backgroundColor:
                item == talle
                  ? 'rgba(242, 5, 139, 0.4)'
                  : "rgba(0,0,0,0.5)",
              padding: 12,
              borderWidth: 1,
              width: 55,
              alignItems: 'center',
              borderColor:
                item == talle ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color:
                  item == talle
                    ? 'rgba(255,255,255,1)'
                    : 'rgba(255,255,255,0.5)',
              }}
            >
              {item}
            </Text>
          </Pressable>
        )))
        }
        
      </View>

      <View
        style={{
          marginVertical: 10,
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 15,
              //color: "rgba(255,255,255, 0.5)",
              color: colors.titleColor,
              marginBottom: 5,
            }}
          >
            Cantidad
          </Text>
        </View>

        <CustomQuantity
          quantity={quantity}
          restQuantity={restQuantity}
          sumQuantity={sumQuantity}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.text,
              borderWidth: 3,
              //backgroundColor: "#f2058b",
              alignItems: 'center',
              fontSize: '17',
              fontWeight: '600',
              color: '#fff',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 5,
              alignSelf: 'center',
            }}
            onPress={() => {addToCart(); }}
          >
            <Text style={globalThemes.defaulTextBtn}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            //color: "rgba(255,255,255,0.5)",
            color: colors.titleColor,
          }}
        >
          4.8
        </Text>
        <MaterialIcons name="star" color="yellow" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  head: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: 25,
    alignItems: 'flex-end',
  },

  menuContainer: {
    backgroundColor: '#f2058b',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    zIndex: 999,
    alignSelf: 'center',
    marginTop: 30,
  },

  menuBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBtnText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ccc',
  },

  headImage: {
    width: 380,
    borderRadius: 15,
    opacity: 0.8,
    marginBottom: 15,
  },
});
