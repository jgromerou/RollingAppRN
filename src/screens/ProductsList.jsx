import { useContext, useEffect, useState  } from 'react';
import { View, Text,  StyleSheet, Dimensions, FlatList } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { globalThemes } from '../themes/globalThemes';
// import { searchData } from '../data/searchData'
import { CustomCardProducts } from '../components/products/CustomCardProducts'
import { CartShop } from '../components/products/CartShop';
import { ProductsContext } from '../contexts/ProductsContext';
import { SearchInput } from '../components/SearchInput';

const screenWidth = Dimensions.get('window').width;

export const ProductsList = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { getProducts, isLoading, products } = useContext(ProductsContext)

   // Arreglo de productos buscados
   const [productsFiltered, setProductsFiltered] = useState(products);

   //Término de búsqueda -> debounced Value
  const [term, setTerm] = useState('');

  useEffect(()=>{
    getProducts()
    if (term.length === 0) {
      return setProductsFiltered(products);
    }
  },[isLoading])

  useEffect(()=>{
    if (term.length === 0) {
      return setProductsFiltered(products);
    }
      //Aplicar filtro
      setProductsFiltered(
        products.filter((prod) =>
        prod.productName.toLowerCase().includes(term.toLowerCase()) || prod._id.toLowerCase().includes(term.toLowerCase())
        )
      ); 
  }, [term]);

  
  // const renderBanners = (item) => {
  //   return (
  //     <View style={{
  //       width: 380,
  //       height: 380,
  //       padding: 8,
  //       // borderWidth:2,
  //       // borderColor: 'white'
  //     }}>
      
  //     <Image
  //       style={{ width: '100%', height: '100%'}}
  //       //source={require('../../assets/thoto/banners/mujeres.jpg')}
  //       source={item.photo}
  //     >

  //     </Image>

  //     </View>
  //   )
  // }
 
return (
  // <View style={{ 
  //   flex: 1,
  //   alignItems:'center',
  //   justifyContent: 'center',
  // }}>
  //     <Button 
  //       title='Ir a Productos'
  //       onPress={() => navigation.navigate("ProductsScreen",{
  //         id:1200,
  //         name:'zapatillas'
  //       })}
  //     />
  // </View>
  <View style={ globalThemes.container}>
    <View style={styles.head}>
      {/* <View>
              <View style={styles.menuContainer}>
                <TouchableOpacity 
                  //onPress={onFilter}
                >
                  <Ionicons name='filter-sharp'  size={28} color='#ccc'/>
                </TouchableOpacity>
              </View>
      </View> */}
      <CartShop />
    </View>
    {/* <View style={{ flex:3}}> 
    <FlatList
        data={bannersData}
        renderItem={ ({item}) => renderBanners(item)}
        keyExtractor={item => item.id}
        horizontal={true}
        initialScrollIndex={1}
    >

    </FlatList>
    </View> */}

    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: colors.primary, textAlign: "center", textTransform: "uppercase" }}>Productos</Text>
      {/* <View style={{justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}>
         <Text placeholder='Buscar producto' style={{borderRadius: 25, height: 50, borderColor: "black", borderWidth: 2, padding: 10, marginBottom: 5, width: "100%", fontSize: 20 }} /> 
        <Pressable style={{marginStart: -50}}>
          <AntDesign name='search1' size={26} color={'black'} />
        </Pressable>
      </View> */}

        <SearchInput
          style={{
            position: 'absolute',
            zIndex: 999,
            width: screenWidth - 40,
            top: 50,
          }}
          onDebounce={(value) => setTerm(value)}
        />  

        <FlatList  
          data={productsFiltered}
          keyExtractor={item => item._id}
          numColumns={2}
          //Header
          ListHeaderComponent={
            <Text
            style={{
              ...styles.title,
              ...styles.marginHorizontal,
              marginTop: 65,
              paddingBottom: 10,
            }}
            >
              {term}
            </Text>
          }
          renderItem={({item}) => <View style={{flex: 1, justifyContent: 'center', alignItems: "center", marginVertical: 3}}><CustomCardProducts style={{paddingBottom: 100}} itemData={item}/></View>}

        />
    </View>


  </View>
)
}

const styles  =  StyleSheet.create({

headContainer: {
  flex:2, 
  justifyContent:'center', 
  alignItems: 'center'
},

head: {
  flex: 1,
  position: 'absolute',
  width: '100%',
  top:0,
  alignItems:'flex-end'
},

menuContainer: {
  marginHorizontal: 10,
  borderRadius: 10,
  padding: 10,
  zIndex:999,
  alignSelf:'center',
  marginTop: 30
},
menuBtn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
  fontSize:25,
  fontWeight: 'bold'
},
marginHorizontal: {
  marginHorizontal: 20
},
})