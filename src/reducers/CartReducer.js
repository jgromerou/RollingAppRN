import { types } from '../types/types';

export const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case types.cart.addCart:
      return {
        ...state,
        isLoading: false,
        cart: action.payload.cart,
      };

    case types.cart.editCart:
      return {
        ...state,
        isLoading: false,
        cart: state.cart.map((cart, index) =>
          index === action.payload.index ? action.payload.CartModificada : cart
        ),
      };
    case types.cart.deleteItemCar:
      return {
        ...state,
        isLoading: true,
        cart: state.cart.filter((cart, index) =>
          index !== action.payload.index ? cart : null
        ),
      };
    case types.cart.calculateCart:
      return {
        ...state,
        isLoading: false,
        totalPrice: action.payload.totalprecio,
      };
    case types.cart.paymentType:
      return {
        ...state,
        isLoading: false,
        paymentType: action.payload.typepay,
      };
    case types.cart.addUserDate:
      return {
        ...state,
        user: action.payload.user,
        saleDate: action.payload.saleDate,
      };

    case types.cart.removeCart:
      return {
        ...state,
        isLoading: false,
        cart: [],
        cartValue: 0.0,
        totalPrice: 0.0,
        paymentType: '',
        msg: '',
      };

    case types.cart.msgCart:
      return {
        ...state,
        isLoading: false,
        msg: action.payload.msg,
      };
    case types.cart.loadingCart:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
