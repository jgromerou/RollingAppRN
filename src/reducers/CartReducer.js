import { types } from "../types/types"




export const CartReducer =  (state={}, action) => {

    switch (action.type) {

        case types.cart.addCart:
            return {
                ...state,
                isLoading:  false,
                cart: action.payload.cart
            }
        
        case types.cart.editCart:
            //console.log(action.payload.CartModificada, 'reducer cartmodificada')
            //console.log(action.payload.index, 'reducer index')
        
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((cart,index) => (
                    index === action.payload.index ? action.payload.CartModificada : cart
                ))
            }
        case types.cart.deleteItemCar:
            //console.log(action.payload.index, 'reducer index')
            return {
                ...state, 
                isLoading: true,
                cart: state.cart.filter((cart, index) => (index !== action.payload.index? cart: null) )
            }
        case types.cart.calculateCart:
            return{
                ...state,
                isLoading: false,
                cartValue: action.payload.totalprecio
            }
        case types.cart.paymentType:
            return{
                ...state,
                isLoading: false,
                paymentType: action.payload.typepay
            }

        case types.cart.removeCart:
            return {
                ...state,
                isLoading:  false,
                cart: [],
                cartValue: 0.00,
                paymentType: '',
                msg: ''
            }
        
        case types.cart.msgCart:
            return {
                ...state,
                isLoading: false,
                msg: action.payload.msg
            }
        case types.cart.loadingCart:
            //console.log(state.isLoading ,'ingresa initloading reducer')
            return {
                ...state,
                isLoading: true
            }
        
    
        default:
            return state
    }
}