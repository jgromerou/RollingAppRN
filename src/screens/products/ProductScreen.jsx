import React, { useContext, useState } from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Image } from "react-native";
import { globalThemes } from "../../themes/globalThemes";

export const ProductScreen = () => {
  const {
    state: { colors, dividerColor },
  } = useContext(ThemeContext);
  const [size, setSize] = useState(0);
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
        paddingHorizontal: 7,
        paddingTop: 15,
        paddingBottom: 80,
      }}
    >
      {/* <Text style={{ color: colors.primary, fontSize: 20 }}>
        Product Screen
      </Text> */}

      <View
        style={{
          flex: 4,
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

      <View
        style={{
          flex: 2,
          marginVertical: 10,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 22, color: "#76B0F1", fontWeight: "bold" }}>
            Nombre
          </Text>
          <Text style={{ fontSize: 21, color: "#1e7eeb", fontWeight: "bold" }}>
            $ 10
          </Text>
        </View>
        <Text style={{ fontSize: 15, color: "#0c59b0", paddingHorizontal: 13 }}>
          Categoría
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        {[36, 37, 38, 39, 40].map((item) => (
          <Pressable
            key={item}
            onPress={() => chooseSize(item)}
            style={{
              marginHorizontal: 5,
              backgroundColor: item == size ? "#1e7eeb" : "#74aff2",
              padding: 12,
              borderWidth: 1,
              borderColor:
                item == size ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color:
                  item == size
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
          marginHorizontal: 10,
          marginVertical: 5,
          alignItems: "start",
        }}
      >
        <View>
          <Text
            style={{ fontSize: 16, color: "#0c59b0"
        }}
          >
            Cantidad
          </Text>
        </View>
       {/* falta el componente y hook para la cantidad */}
      </View>

      <View style={{
          flexDirection: "row",
        }}>
            <View style={{
            flex: 1,
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 30,
          }}>
             <TouchableOpacity  style={{
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
            // onPress={addToCart}
            >
                <Text style={globalThemes.defaulTextBtn}>Agregar al carrito</Text>
            </TouchableOpacity>
            </View>
      </View>
      
    </View>
  );
};
