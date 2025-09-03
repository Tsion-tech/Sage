import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Dimensions } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const SignIn = ({ navigation, onLogin }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) onLogin();
    else Alert.alert("Error", "Please enter email and password");
  };

  const windowWidth = Dimensions.get("window").width;
  const cardWidth = windowWidth > 500 ? 450 : "90%";

  return (
    <View style={[styles.container]}>
      {/* Background Image */}
      <Image
        source={require("../assets/mizan.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Card */}
      <View
        style={[
          styles.card,
          {
            width: 600,
            height:860,
            backgroundColor: theme.card + "ee", // card opacity
            borderColor: "#330479ff", // blue border
            borderWidth: 2, // border thickness
            shadowColor: "#330479ff",
            shadowOpacity: 0.8,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 10 },
            elevation: 20,
          },
        ]}
      >
        <Text style={[styles.title, { color: theme.highlight1 }]}>Sign In</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={[styles.button]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.linkText, { color: theme.highlight11 }]}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8, // subtle visibility
  },
  card: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
    backgroundColor: "#ffffffdd", // more opaque
  },
  button: {
    width: "100%",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#cf31faff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
  },
});
