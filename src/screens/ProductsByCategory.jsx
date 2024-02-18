import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { CustomCardProducts } from "../components/products/CustomCardProducts";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsByCategory = ({ navigation, route }) => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const {
    state: stateProducts,
    isLoading,
    getProductsByCategory,
  } = useContext(ProductsContext);
  const { categoryId, categoryName } = route.params;

  useEffect(() => {
    getProductsByCategory(categoryName);
  }, [isLoading]);

  const navigatetoProductos = (productId) => {
    navigation.navigate("ProductsScreen", { productId });
  };

  return (
    <View style={{ flex:1 }}>
      <View style={{alignItems: "center"}}>
      <Text style={{ fontSize: 25, color: colors.titleColor }}>
        {" "}
        {categoryName}{" "}
      </Text>
      </View>
     
      <FlatList
        data={stateProducts.products}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 3,
            }}
          >
            <CustomCardProducts itemData={item} />
          </View>
        )}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsByCategory;
