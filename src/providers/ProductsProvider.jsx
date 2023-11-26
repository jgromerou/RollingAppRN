import React, { useReducer } from 'react'
import { ProductsContext } from "../contexts/ProductsContext";
import { types } from '../types/types';
import { dashAxios } from "../config/dashAxios";
import { ProductReducer } from "../reducers/ProductsReducer";

const initialState = {
    isLoading: true,
    errorMessage: '',
    products: null,
    productSelected: null,
    categories: null
}

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async() => {
        try {
          const data = await dashAxios.get('/products');            
            
            // if(!products){
            //     dispatch({
            //         type: types.products.error,
            //         payload: {
            //             errorMessage: 'No existen Productos activos'
            //         }
            //     })
            // }
            
            dispatch({
                type: types.products.getProducts,
                payload:  {
                 products: data.data
                }
            })

            
        } catch (error) {
            dispatch({
                type: types.products.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }

    const getProduct = async(id) => {
        try {
          const data = await dashAxios.get(`products/${id}`);            
            
            dispatch({
                type: types.products.getProduct,
                payload:  {
                    ...state,
                 productSelected: data.data
                }
            })

            
        } catch (error) {
            dispatch({
                type: types.products.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }

    const getProductsByCategory = async(category) => {
        try {
         const data = await dashAxios.get(`products/category/${category}`);
         
         console.log(data.data)

            dispatch({
                type: types.products.getProductsByCategory,
                payload:  {
                    ...state,
                 products: data.data
                }
            })

            
        } catch (error) {
            dispatch({
                type: types.products.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }
    const getCategories = async() => {
        try {
         const data = await dashAxios.get(`/categories`);            

            dispatch({
                type: types.products.getCategories,
                payload:  {
                    ...state,
                 categories: data.data
                }
            })    
        } catch (error) {
            dispatch({
                type: types.products.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }

return (
  <ProductsContext.Provider value={{
    ...state,
    getProducts,
    state,
    getProduct,
    getProductsByCategory,
    getCategories

        }}>
            { children }
        </ProductsContext.Provider>
)
}
