import { useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

export const HomeScreen = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
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
                  }}
                >
                  Rinde al máximo con estilo
                </Text>
              </View>
            </View>
            {/* Categories */}
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
                  Categorias
                </Text>
                <TouchableOpacity>
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
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 120, borderRadius: 15, width: 140 }}
                  />

                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 120, borderRadius: 15, width: 140 }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
                    }}
                    style={{ height: 250, borderRadius: 15, width: 200 }}
                  />
                </View>
              </View>
            </View>
            {/* Brands */}
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
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 5,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                ¡Suscríbete y consigue un 10% de descuento extra!
              </Text>
              <View
                style={{
                  flex: 1,
                  width: "60%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: "black",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Regístrate Gratis
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
                  <Text style={{ color: colors.primary }}>Ver todo</Text>
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
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 5,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                ¡Suscríbete y consigue un 10% de descuento extra!
              </Text>
              <View
                style={{
                  flex: 1,
                  width: "60%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: "black",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Regístrate Gratis
                  </Text>
                </TouchableOpacity>
              </View>
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
        scrollAnimationDuration={3000}
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
