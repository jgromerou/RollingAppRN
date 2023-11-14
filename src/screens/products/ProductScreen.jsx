import React, { useContext, useState } from "react";
import { Pressable, Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { globalThemes } from "../../themes/globalThemes";
import { useQuantity } from "../../hooks/useQuantity";
import { Ionicons } from "react-native-vector-icons";
import { CustomQuantity } from "../../components/CustomQuantity";

export const ProductScreen = () => {
  // agregar el navigate
  const { state } = useContext(ThemeContext);
  const [size, setSize] = useState(0);
  const {quantity, addOne, removeOne } = useQuantity()
  const chooseSize = (dataSize) => {
    if (dataSize == size) {
      return setSize(0);
    }
    setSize(dataSize);
  };

  return (
    <View
      style={styles.mainContainer}
    >
      <View style={{flex: 6}}> 
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/products/zapatilla1.jpg")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
        />
      </View>
      </View>

      <View style={{flex: 8}}>
      <View
        style={{
          flex: 6,
          marginVertical: 10,
          flexDirection: "column",
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 23, fontWeight: "bold", color:state.colors.primary  }}
          >
             Nombre producto
          </Text>
          <Text style={{ fontSize: 21, color:state.colors.text, fontWeight: "bold" }}
          >
            $ 10
          </Text>
        </View>
        <View 
        style={{marginStart: 10, alignItems: "start", backgroundColor:state.colors.primary, borderRadius: 5, width: 90}}
        >
        <Text style={{paddingStart: 8, paddingBottom: 3, fontSize: 15, color:state.colors.background}}>
          Categoría
        </Text>
        </View>
      </View>

      <View style={styles.sizesContainer}>
        {/* agregar algo que valide si viene categoria Zapatillas, sino que las opciones sean XS, S, M, L, XL, XXL */}
        {[36, 37, 38, 39, 40].map((item) => (
          <Pressable
            key={item}
            onPress={() => chooseSize(item)}
            style={{
              marginHorizontal: 5,
              backgroundColor: item == size ? state.colors.active : state.colors.primary,
              padding: 12,
              borderWidth: 1,
              borderColor:
                item == size ? "#fff" : "#C1C0C0",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color:
                  item == size
                    ? state.colors.background
                    : state.dividerColor,
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.quantityContainer}>
        <View>
          <Text
            style={{paddingTop:4, fontSize: 18, color: state.colors.titleColor, fontWeight: "500"
        }}
          >
            Cantidad:
          </Text>
        </View>
       <CustomQuantity quantity={quantity} addOne={addOne} removeOne={removeOne} />
      </View>

      <View style={{
          flexDirection: "row",
          marginBottom: 10,
          flex: 6
        }}>
            <View style={{
            flex: 1,
            justifyContent: "center",
          }}>
             <TouchableOpacity  style={
              {backgroundColor: state.colors.primary,
               ...styles.btn 
             }}
            // onPress={addToCart}
            >
                <Text style={{color: state.dividerColor, ...styles.btnText}}>AGREGAR AL CARRITO</Text>
            </TouchableOpacity>
            </View>
      </View>
      
      <View  style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 5
        }}>
        <Text style={{
            color: state.colors.titleColor, ...styles.points
          }}>
          4.4
        </Text>
        <Ionicons name="star" color="#f8ed62" size={30}></Ionicons>
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 3
  },
  sizesContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 10,
  },
  quantityContainer:{
    flex: 4,
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: "start",
    flexDirection: "row"
  },
  btn:{
    alignItems: "center",
    fontWeight: "600",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf:  'center',
  },
  btnText: {
    fontSize: 18, 
    fontWeight: "500"
  },
  points: {
    paddingTop: 5,
    marginEnd: 2,
    fontSize: 30,
    fontWeight: "bold",
  }
})