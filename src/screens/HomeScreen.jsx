import { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import { ProductsContext } from "../contexts/ProductsContext";


export const HomeScreen = ({navigation}) => {
  const { state: { colors } } = useContext(ThemeContext);

  const {categories, isLoading, getCategories} = useContext(ProductsContext)

  const navigatetoCategories = () => {
    navigation.navigate('CategoriesScreen');
  }

  const navigateToCategory = (categoryName) => {
    navigation.navigate('ProductsByCategory', { categoryName });
  };  
  
  useEffect(() => {
    getCategories()
    console.log(`HOMESCREEN`, categories)
  },[isLoading])


  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <SlidingText />
          <View style={styles.container}>
            {/* Hero section */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color:
                      colors.background === "#192229" ? colors.primary : "black",
                  }}
                >
                  Siente el poder del deporte
                </Text>
              </View>
              {/* Carousel */}
              <Index />
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color:
                      colors.background === "#192229" ? colors.primary : "black",
                  }}
                >
                  Rinde al máximo con estilo
                </Text>
              </View>
            </View>
            {/* Categories */}

            {categories && <View style={{ padding: 10, marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: colors.text,
                  }}
                >
                  Categorias
                </Text>
                <TouchableOpacity onPress={()=>navigatetoCategories()}>
                  <Text style={{ color: colors.primary }}>Ver todo</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 20,
                }}
              >
                <View style={{ gap: 10 }}>
                <Pressable 
                onPress={() => navigateToCategory(categories[4]?.categoryName)}
                >
                  <Image
                    source={{
                      uri: `${categories[4]?.image}`,
                    }}
                    style={{ height: 120, borderRadius: 15, width: 140 }}
                  />
                  </Pressable>
                  <Pressable 
                  onPress={() => navigateToCategory(categories[5]?.categoryName)}
                  >
                  <Image
                    source={{
                      uri: `${categories[5]?.image}`,
                    }}
                    style={{ height: 120, borderRadius: 15, width: 140 }}
                  />
                  </Pressable>
                </View>
                <View>
                  <Pressable 
                  onPress={() => navigateToCategory(categories[3]?.categoryName)}
                  >
                  <Image
                    source={{
                      uri: `${categories[3]?.image}`,
                    }}
                    style={{ height: 250, borderRadius: 15, width: 200 }}
                  />
                  </Pressable>
                </View>
              </View>
            </View>  }
            

            
            {/* Brands */}
            <ScrollView horizontal={true}>
              <View
                style={{
                  paddingVertical: 20,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  borderTop: 1,
                  borderBottom: 1,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  gap: 8,
                  paddingLeft: 20,
                }}
              >
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand0.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand1.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand2.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand3.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand4.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand5.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand6.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand7.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand8.png")}
                />
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    opacity: 0.8,
                    resizeMode: "contain",
                    tintColor: "green",
                  }}
                  source={require("../../assets/brand-logos/brand9.png")}
                />
              </View>
            </ScrollView>
            {/* Most sold */}
            <View style={{ padding: 10, marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: colors.text,
                  }}
                >
                  Destacados
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: colors.primary  }}>Ver todo</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 20,
                }}
              >
                <View style={{ gap: 10, flexDirection: "row" }}>
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 140, borderRadius: 15, width: 175 }}
                  />

                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 140, borderRadius: 15, width: 175 }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 200, borderRadius: 15, width: 360 }}
                  />
                </View>
              </View>
            </View>
            {/* Call to Action */}
            <View
              style={{
                paddingVertical: 10,
                backgroundColor: colors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  marginBottom: 5,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                ¡Suscríbete y consigue un 10% de descuento extra!
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const ScreenWidth = Dimensions.get("window").width;

const SlidingText = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  const animValue = useRef(new Animated.Value(ScreenWidth)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(animValue, {
        toValue: -ScreenWidth,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    animate();
  }, [animValue]);

  return (
    <View style={{ backgroundColor: "black" }}>
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX: animValue }],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          <Text style={{ color: colors.primary }}>¡CyberWeek!</Text> ¡Aprovecha
          <Text style={{ color: colors.primary }}> ahora </Text>hasta
          <Text style={{ color: colors.primary }}> 50% OFF</Text>!
        </Text>
      </Animated.View>
    </View>
  );
};

const carouselImages = [
  "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
  "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg",
  "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg",
];

function Index() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={carouselImages}
        scrollAnimationDuration={2500}
        renderItem={({ index }) => (
          <View style={{ padding: 10 }}>
            <Image
              source={{
                uri: carouselImages[index],
              }}
              style={[styles.image]}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 15,
  },
});