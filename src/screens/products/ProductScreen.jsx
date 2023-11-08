import React, { useContext, useState } from "react";
import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { globalThemes } from "../../themes/globalThemes";
import { useQuantity } from "../../hooks/useQuantity";
import { Ionicons } from "react-native-vector-icons";
import { CustomQuantity } from "../../components/CustomQuantity";

export const ProductScreen = () => {
  const { state: { colors, dividerColor } } = useContext(ThemeContext);
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
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 15,
      }}
    >
      <View style={{flex: 6}}> 
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginBottom: 3
          }}
        >
          <Text style={{ fontSize: 23, color: "#76B0F1", fontWeight: "bold" }}>
            Nombre producto
          </Text>
          <Text style={{ fontSize: 21, color: "#1e7eeb", fontWeight: "bold" }}>
            $ 10
          </Text>
        </View>
        <View style={{marginStart: 10, alignItems: "start", backgroundColor: "#0c59b0", borderRadius: 5, width: 90}}>
        <Text style={{paddingStart: 8, paddingBottom: 3, fontSize: 15, color:"white"}}>
          Categoría
        </Text>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          marginHorizontal: 5,
          marginBottom: 10,
        }}
      >
        {[36, 37, 38, 39, 40].map((item) => (
          <Pressable
            key={item}
            onPress={() => chooseSize(item)}
            style={{
              marginHorizontal: 5,
              backgroundColor: item == size ? "#0c59b0" : "#76B0F1",
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
                    ? "#fff"
                    : "#646363",
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <View
        style={{
          flex: 4,
          marginHorizontal: 15,
          marginBottom: 10,
          justifyContent: "start",
          flexDirection: "row"
        }}
      >
        <View>
          <Text
            style={{paddingTop:4, fontSize: 20, color: "#0c59b0", fontWeight: "500"
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
             <TouchableOpacity  style={{
              backgroundColor: "#0c59b0",
              alignItems: "center",
              fontSize: "17",
              fontWeight: "600",
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 5,
              alignSelf:  'center'
            }}
            // onPress={addToCart}
            >
                <Text style={globalThemes.btnText}>Agregar al carrito</Text>
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
            paddingTop: 5,
            marginEnd: 2,
            fontSize: 30,
            fontWeight: "bold",
            color: "#76B0F1",
          }}>
          4.4
        </Text>
        <Ionicons name="star" color="#f8ed62" size={30}></Ionicons>
      </View>

      </View>
    </View>
  );
};
