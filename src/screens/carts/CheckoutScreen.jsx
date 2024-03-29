import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { globalThemes } from "../../themes/globalThemes";
import { CartItem } from "../../components/products/CartItem";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { GoBack } from "../../components/products/GoBack";

export const CheckoutScreen = ({ navigation }) => {
  const { state, isLoading, calculateCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(state.cart);
  const { navigate } = useNavigation();
  const {
    state: { colors },
  } = useContext(ThemeContext);

  const cartRender = (item, index) => {
    return <CartItem item={item} index={index} />;
  };

  useEffect(() => {
    calculateCart();
  }, [isLoading]);

  return (
    <View
      style={[
        colors.container,
        {
          flex: 1,
          padding: 10,
        },
      ]}
    >
      <GoBack navigation={navigation} />
      <View
        style={{
          flex: 4,
        }}
      >
        <FlatList
          data={state.cart}
          renderItem={({ item, index }) => cartRender(item, index)}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    tintColor: colors.primary,
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/carrito-vacio.png")}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: 18,
                  color: colors.text,
                }}
              >
                !Empieza un carrito de compras!
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginBottom: 20,
                  fontSize: 18,
                  color: colors.text,
                }}
              >
                Suma productos a tu carrito
              </Text>
              <Pressable
                style={[
                  globalThemes.defaultBtn,
                  { backgroundColor: colors.primary, color: colors.text },
                ]}
                onPress={() => navigate("ProductsList")}
              >
                <Text>Descubrir productos</Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      <View
        style={{
          flexDirection: "col",
          flex: 1,
          justifyContent: "space-evenly",
          marginTop: 10,
          marginBottom: 5,
          alignItems: "center",
        }}
      >
        {state.cart.length > 0.0 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 2,
              marginBottom: 2,
              backgroundColor: "rgba(0,0,0, 0.5)",
              alignItems: "center",
              width: "100%",
              borderColor: colors.text,
              borderWidth: 2,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "500",
              }}
            >
              Pagarás:{" "}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                fontWeight: "500",
              }}
            >
              $ {state.totalPrice}
            </Text>
          </View>
        ) : null}

        <View>
          {state.cart.length > 0.0 ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.text,
                borderWidth: 3,
                alignItems: "center",
                fontSize: "17",
                fontWeight: "600",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 5,
                alignSelf: "center",
              }}
              onPress={() => navigate("ConfirmCart")}
            >
              <Text style={globalThemes.defaulTextBtn}>CONFIRMAR</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};
