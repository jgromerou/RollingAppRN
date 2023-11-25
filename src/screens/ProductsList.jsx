import { View, Text, Image, TouchableOpacity, FlatList, Pressable, TextInput } from 'react-native';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Ionicons } from 'react-native-vector-icons';
import { bannersData } from '../data/bannersData';
import { StyleSheet } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { searchData } from '../data/searchData'
import { CustomCardProducts } from '../components/products/CustomCardProducts'
import { CartShop } from '../components/products/CartShop';
import { ProductsContext } from '../contexts/ProductsContext';
import { AntDesign } from 'react-native-vector-icons';

export const ProductsList = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { state: stateProducts , getProducts, isLoading } = useContext(ProductsContext)

  useEffect(()=>{
    getProducts()
    // console.log('PRODUCT LIST', stateProducts)
  },[isLoading])

  
  const renderBanners = (item) => {
    return (
      <View style={{
        width: 380,
        height: 380,
        padding: 8,
        // borderWidth:2,
        // borderColor: 'white'
      }}>
      
      <Image
        style={{ width: '100%', height: '100%'}}
        //source={require('../../assets/thoto/banners/mujeres.jpg')}
        source={item.photo}
      >

      </Image>

      </View>
    )
  }
 
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
      <View style={{justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}>
        <TextInput placeholder='Buscar producto' style={{borderRadius: 25, height: 50, borderColor: "black", borderWidth: 2, padding: 10, marginBottom: 5, width: "100%", fontSize: 20 }} />
        <Pressable style={{marginStart: -50}}>
          <AntDesign name='search1' size={26} color={'black'} />
        </Pressable>
      </View>
        <FlatList  
          data={stateProducts.products}
          renderItem={({item}) => <View style={{flex: 1, justifyContent: 'space-between', alignItems: "center", marginVertical: 3}}><CustomCardProducts itemData={item}/></View>}
          keyExtractor={item => item._id}
          numColumns={2}
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
  backgroundColor: '##00ff00',
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

menuBtnText: { 
  fontSize: 17, 
  fontWeight: '500', 
  color: '#ccc'
},

headImage: { 
  width: 380,
  borderRadius: 15,
  opacity: 0.8,
  marginBottom: 15
}
})