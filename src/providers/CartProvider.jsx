import React, { useContext, useReducer } from 'react'
import { CartReducer } from '../reducers/CartReducer'
import { CartContext } from '../contexts/CartContext';
//import { AuthContext } from '../contexts/AuthContext';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';


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
        // console.log(productData.product.productName, 'productdata providers')
        
        const addProduct = [
            ...state.cart,
            {
                _id: productData.product._id,
                productName: productData.product.productName,
                price: productData.product.price,
                waist: productData.waist,
                quantity: productData.quantity,
                category: productData.product.category
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
            addUserDate
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