export const types = {
    auth: {
        login:  'LOGIN',
        logout: 'LOGOUT',
        error:  'ERROR'
    },

    products: {
        getProducts:  'PRODUCTS',
        getProduct:   'PRODUCT BY ID',
        error:        'ERROR PRODUCT'
    },

    cart: {
        addCart: 'ADDCART',
        editCart: 'EDITCART',
        deleteItemCar: 'DELETEITEMCART',
        calculateCart: 'CALCULATECART',
        removeCart: 'REMOVECART',
        msgCart: 'MSGCART',
        loadingCart: 'LOADINGCART',
        paymentType: 'PAYMENTTYPE'
    }
,
  theme: {
    dark: 'set_dark_theme',
    light: 'set_light_theme',
  },
};
