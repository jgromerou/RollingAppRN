import React, { useContext, useReducer } from 'react'
import { CartReducer } from '../reducers/CartReducer'
import { CartContext } from '../contexts/CartContext';
//import { AuthContext } from '../contexts/AuthContext';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';
import { dashAxios } from '../config/dashAxios';


const initialState = {
    user: '',
    saleDate: null,
    isLoading: true,
    cart: [],
    cartValue: 0.00,
    paymentType: '',
    totalPrice: 0.00,
    msg: ''
}


export const CartProvider = ({ children }) => {
  
    const [  state, dispatch ] = useReducer(CartReducer,  initialState);
    //const { state: userData } = useContext(AuthContext);


    const addCart = async(productData) =>  {
        console.log(productData.product.productName, 'productdata providers')
        
        const addProduct = [
            ...state.cart,
            {
                _id: productData.product._id,
                productName: productData.product.productName,
                price: productData.product.price,
                //waist: productData.waist,
                quantity: productData.quantity,
                //category: productData.product.category
            }
        ]

        // await AsyncStorage.setItem('cart', JSON.stringify({
        //     userId: 4,
        //     products: addProduct 
        // }));

        dispatch({
            type: types.cart.addCart,
            payload: {
                cart: addProduct
            }
        })

    }

    // Modificar item del carrito
    const editCart = async(CartModificada, index) => {
        //console.log(CartModificada, 'dentro provider')
        dispatch({
            type: types.cart.editCart,
            payload: {CartModificada, index}
            //payload: index
        })
    }
    //agregar tipo de pago
    const addTypePay = async (typepay) => {
        dispatch({
            type: types.cart.paymentType,
            payload: {typepay}
        })
    }

    //eliminar item del carrito
    const deleteCart = async(index) => {
        //console.log(index, 'dentro provider')
        dispatch({
            type: types.cart.deleteItemCar,
            payload: {index},
        })
    }
    // Calcular total del carrito
    const calculateCart = async() => {
        if(state.cart.length === 0 ){
            //console.log('cart 0')
            let totalprecio = 0.00;
            dispatch({
                type: types.cart.calculateCart,
                payload: {totalprecio}
            })
        } else {
            //console.log('cart > 0')
            //fn calcula el total de cant*precio del todos los prod del carrito
            let totalprecio = state.cart.reduce((acc, num) => acc + num.quantity * num.price, 0.0);
            dispatch({
                type: types.cart.calculateCart,
                payload: {totalprecio}
            })
        }
    }
    // init cartShopping
    const initCartShoping = () => {
        dispatch({
            type: types.cart.removeCart
        });
    }
    //CAMBIAR LOADINGCART
    const initLoading = () => {
        //console.log('ingresa initloading')
        dispatch({
            type: types.cart.loadingCart
        })
    }
    //GUARDAR USER Y DATE
    const addUserDate = (user) => {
        let saleDate = getDate();
        dispatch({
            type: types.cart.addUserDate,
            payload: {user, saleDate}
        })

    }
    //GUARDAR EN BD CON AXIOS
    const addSales = async () => {
        try {
        console.log('ingresa al sales')
          
          let user = state.user;
          let saleDate = state.saleDate;
          let cartProducts = state.cart;
          let paymentType = state.paymentType;
          let status = 'Realizada';
          let totalPrice = state.totalPrice;

          console.log(user, 'user')
          console.log(saleDate, 'saleDate')
          console.log(cartProducts,'cartProducts')
          console.log(paymentType, 'paymentType')
          console.log(status, 'status')
          console.log(totalPrice, 'totalPrice')
          const { data } = await dashAxios.post("/sales", {
            user: "6513a6202faaee60b5eb9cb2",
            saleDate: "2023-11-25", 
            cartProducts: [{_id: "654d00ce6dedb6c9930e4afe", price: 25000, productName: "Adidas Tennis", quantity: 1}],
            paymentType: "Credit Card",
            status: "Realizada",
            totalPrice: 25000

        });
        console.log(data, 'data axios')
    
        //   dispatch({
        //     type: types.users.createUser,
        //     payload: {
        //       ...state,
        //       errorMessage: '',
              
        //     },
    
        //   });
        } catch (error) {
        //   console.log(error);
          const msg = error.response.data.errores[0].msg
          console.log('ERROR', msg)
        //   dispatch({
        //     type: types.users.createUser,
        //     payload: {
        //       errorMessage: msg,
        //     },
        //   });
        }
      };
  
    return (
        <CartContext.Provider value={{
            state,
            addCart,
            editCart,
            deleteCart,
            calculateCart,
            initLoading,
            addTypePay,
            initCartShoping, 
            addUserDate,
            addSales
        }}>
            { children }
        </CartContext.Provider>

  )
}
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }