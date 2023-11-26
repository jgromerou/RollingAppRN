import { types } from '../types/types'

export const ProductReducer = (state={}, action) => {
  
    switch(action.type){

        case types.products.getProducts:
            return {
                ...state,
                isLoading: false,
                errorMessage: '',
                products: action.payload.products
            }

        case types.products.getProduct:
            return {
                ...state,
                isLoading: false,
                errorMessage: '',
                productSelected: action.payload.productSelected,
            }

        case types.products.getProductsByCategory:
            return {
                ...state,
                isLoading: false,
                errorMessage: '',
                products: action.payload.products
            }  

        case types.products.getCategories:
            return {
                ...state,
                isLoading: false,
                errorMessage: '',
                categories: action.payload.categories
            }    
        case types.products.error:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage,
                products: null
            }

        default: {
            return state
        }
    }
}
