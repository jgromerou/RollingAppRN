export const types = {
    auth: {
        login:  'LOGIN',
        logout: 'LOGOUT',
        error:  'ERROR'
    },

    products: {
        getProducts:  'PRODUCTS',
        getProduct:   'PRODUCT BY ID',
        error:        'ERROR PRODUCT',
        getProductsByCategory: 'CATEGORY',
        getCategories: 'CATEGORIES',
        getFeaturedProducts: "FEATURED PRODUCTS",
        resetProduct: "RESET PRODUCT"
    },

    cart: {
        addCart: 'ADDCART',
        editCart: 'EDITCART',
        deleteItemCar: 'DELETEITEMCART',
        calculateCart: 'CALCULATECART',
        removeCart: 'REMOVECART',
        msgCart: 'MSGCART',
        loadingCart: 'LOADINGCART',
        paymentType: 'PAYMENTTYPE',
        addUserDate: 'ADDUSERDATE'
    }
,
  theme: {
    dark: 'set_dark_theme',
    light: 'set_light_theme',
  },
  auth: {
    login: '[AUTH] - LOGIN',
    error: '[AUTH] - ERROR',
    logout: '[AUTH] - LOGOUT',
    registerUser: '[AUTH] - REGISTERUSER'
  },
};
