import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Ionicons } from 'react-native-vector-icons';
import { bannersData } from '../data/bannersData';
import { StyleSheet } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { searchData } from '../data/searchData'
import { CustomCardProducts } from '../components/products/CustomCardProducts'
import { CartShop } from '../components/products/CartShop';

export const ProductsList = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);

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
    <View style={{ flex:3}}> 
    <FlatList
        data={bannersData}
        renderItem={ ({item}) => renderBanners(item)}
        keyExtractor={item => item.id}
        horizontal={true}
        initialScrollIndex={1}
    >

    </FlatList>
    </View>

    <View style={{ flex:2}}>
        <FlatList  
          data={searchData}
          renderItem={({item}) => <CustomCardProducts itemData={item}/>}
          keyExtractor={item => item._id}
          horizontal={true}
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
  backgroundColor: '#f2058b',
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