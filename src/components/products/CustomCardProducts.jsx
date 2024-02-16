import React, { useState, useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ProductsContext } from "../../contexts/ProductsContext";

export const CustomCardProducts = ({ itemData }) => {
  const { resetProduct } = useContext(ProductsContext);

  const {
    state: { colors },
  } = useContext(ThemeContext);

  const { navigate } = useNavigation();
  const [favorite, setFavorite] = useState(0);

  const onPresFavorite = (id) => {
    favorite === 0 ? setFavorite(id) : setFavorite(0);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          margin: 5,
          padding: 10,
          backgroundColor: colors.primary,
          borderRadius: 10,
        }}
        onPress={() => {
          navigate("ProductsScreen", {
            productId: itemData._id,
          });
          resetProduct();
        }}
      >
        <Image
          source={{ uri: `${itemData.image.secure_url}` }}
          style={{
            width: 135,
            height: 135,
            marginBottom: 5,
            borderRadius: 5,
            resizeMode: "contain",
          }}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "black",
          }}
        >
          {itemData.productName.length < 14
            ? itemData.productName
            : `${itemData.productName.slice(0, 14)}...`}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.title,
          }}
        >
          {itemData.category}
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 12,
            color: colors.title,
            fontWeight: "bold",
          }}
        >
          ${itemData.price}.00
        </Text>

        <Pressable onPress={() => onPresFavorite(itemData._id)}>
          <View
            style={{
              backgroundColor: "rgba(255,255,255, 0.1)",
              paddingHorizontal: 8,
              paddingVertical: 15,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 15,
              position: "absolute",
              bottom: -12,
              right: -10,
            }}
          >
            <Text>
              <AntDesign
                name={favorite == itemData._id ? "heart" : "hearto"}
                size={24}
                color={favorite == itemData.id ? "#f2058b" : "#fff"}
              />
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </View>
  );
};
