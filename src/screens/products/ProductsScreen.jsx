import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalThemes } from "../../themes/globalThemes";
import { MaterialIcons } from "react-native-vector-icons";
import { Pressable } from "react-native";
import { CustomQuantity } from "../../components/products/CustomQuantity";
import { useQuantity } from "../../hooks/useQuantity";
import { CartContext } from "../../contexts/CartContext";
import { CartShop } from "../../components/products/CartShop";

export const ProductsScreen = ({ route }) => {

  const { itemData } = route.params;
  const [talle, setTalle] = useState(0);
  const { quantity, restQuantity, sumQuantity } = useQuantity();
  const { addCart, state, calculateCart } = useContext(CartContext);

  //console.log(itemData,'productscreen')


  const obtenerTalle = (dataTalle) => {
    if (dataTalle == talle) {
      return setTalle(0);
    }
    setTalle(dataTalle);
  };

  const addToCart = () => {
      const data = {
        product: itemData,
        waist: talle,
        qty: quantity
      }

      addCart(data);
      calculateCart();
  }


  return (
    <View style={globalThemes.container}>
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
        <CartShop/>
      </View>


      <View
        style={{
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/thoto/banners/shoes-color.jpg")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10
          }}
        />
      </View>

      <View
        style={{
          flex: 2,
          marginVertical: 20,
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 16, color: "rgba(255,255,255, 0.5)" }}>
          {itemData.category}
        </Text>
        <Text style={{ fontSize: 19, color: "#fff", fontWeight: "bold" }}>
          {itemData.name}{" "}
        </Text>
        <Text style={{ fontSize: 22, color: "#f2058b", fontWeight: "bold" }}>
          ${itemData.price}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[36, 37, 38, 39, 40].map((item) => (
          <Pressable
            key={item}
            onPress={() => obtenerTalle(item)}
            style={{
              marginHorizontal: 5,
              backgroundColor:
                item == talle
                  ? "rgba(242, 5, 139, 0.4)"
                  : "rgba(255,255,255,0)",
              padding: 12,
              borderWidth: 1,
              borderColor:
                item == talle 
                  ? "rgba(255,255,255,1)" 
                  : "rgba(255,255,255,0.4)",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color:
                  item == talle
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.5)",
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(255,255,255, 0.5)",
              marginBottom: 5,
            }}
          >
            Cantidad
          </Text>
        </View>

        <CustomQuantity 
          quantity={quantity}
          restQuantity={restQuantity}
          sumQuantity={sumQuantity}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f2058b",
              alignItems: "center",
              fontSize: "17",
              fontWeight: "600",
              color: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 5,
              alignSelf:  'center'
            }}
            onPress={addToCart}
          >
            <Text style={globalThemes.defaulTextBtn}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          4.8
        </Text>
        <MaterialIcons name="star" color="yellow" size={30} />
      </View>
    </View>
  );
};

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
