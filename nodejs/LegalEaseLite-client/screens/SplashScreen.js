import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Scale animation for text
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    // Navigate to SignIn after 2.5 seconds
    const timer = setTimeout(() => navigation.replace("SignIn"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/mizan.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay for readability */}
      <View style={styles.overlay} />

      {/* Center text */}
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.title,
            { color: theme.highlight1, transform: [{ scale: scaleAnim }] },
          ]}
        >
          LegalEase
        </Animated.Text>
        <Animated.Text
          style={[styles.subtitle, { transform: [{ scale: scaleAnim }] }]}
        >
          A smart legal app for{"\n"}clients to connect with lawyers,
          {"\n"}book appointments, and manage cases easily.
        </Animated.Text>
      </View>

      {/* Footer tagline */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Empowering Clients • Powered by LegalEase</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)", // Dark overlay for contrast
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#f5f5f5",
    lineHeight: 26,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#ddd",
    fontStyle: "italic",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
