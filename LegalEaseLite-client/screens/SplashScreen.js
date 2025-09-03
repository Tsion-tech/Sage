import React from "react";
import { View, Image, StyleSheet, Dimensions, Platform } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={require("../assets/mizan.jpg")}
        style={styles.image}
        resizeMode="contain" // mobile
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    width: Platform.OS === "web" ? "70%" : width * 0.9,  // 70% width for web, 90% for mobile
    height: Platform.OS === "web" ? "70%" : height * 0.9, // maintain aspect ratio
    ...(Platform.OS === "web" ? { objectFit: "contain" } : {}),
  },
});
