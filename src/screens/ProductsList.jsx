import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { globalThemes } from "../themes/globalThemes";
// import { searchData } from '../data/searchData'
import { CustomCardProducts } from "../components/products/CustomCardProducts";
import { CartShop } from "../components/products/CartShop";
import { ProductsContext } from "../contexts/ProductsContext";
import { SearchInput } from "../components/SearchInput";
import { CustomLoading } from "../components/CustomLoading";

const screenWidth = Dimensions.get("window").width;

export const ProductsList = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const { getProducts, isLoading, products } = useContext(ProductsContext);

  // Arreglo de productos buscados
  const [productsFiltered, setProductsFiltered] = useState(products);

  //Término de búsqueda -> debounced Value
  const [term, setTerm] = useState("");

  useEffect(() => {
    getProducts();
    if (term.length === 0) {
      return setProductsFiltered(products);
    }
  }, [isLoading]);

  useEffect(() => {
    if (term.length === 0 || term === "") {
      return setProductsFiltered(products);
    }
    //Aplicar filtro
    setProductsFiltered(
      products.filter(
        (prod) =>
          prod.productName.toLowerCase().includes(term.toLowerCase()) ||
          prod._id.toLowerCase().includes(term.toLowerCase())
      )
    );
  }, [term]);

  return (
    <View
      style={([globalThemes.container], { backgroundColor: colors.background })}
    >
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

      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: colors.primary,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Productos
        </Text>

        <SearchInput
          style={{
            position: "absolute",
            zIndex: 999,
            width: screenWidth - 40,
            top: 50,
          }}
          onDebounce={(value) => setTerm(value)}
        />

        <FlatList
          data={productsFiltered}
          keyExtractor={(item) => item._id}
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
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 3,
              }}
            >
              <CustomCardProducts
                style={{ paddingBottom: 100 }}
                itemData={item}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  head: {
    flex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    alignItems: "flex-end",
  },

  menuContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    zIndex: 999,
    alignSelf: "center",
    marginTop: 30,
  },
  menuBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
});
