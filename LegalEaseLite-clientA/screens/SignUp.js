import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Dimensions } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const SignUp = ({ navigation }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!email || !phone || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // ✅ Navigate to Dashboard and clear stack
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  const windowWidth = Dimensions.get("window").width;
  const cardWidth = windowWidth > 500 ? 450 : "90%";

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/mizan.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View
        style={[
          styles.card,
          {
            width: 600,
            height:860,
            backgroundColor: theme.card + "ee",
            borderColor: "#330479ff",
            borderWidth: 2,
            shadowColor: "#330479ff",
            shadowOpacity: 0.8,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 10 },
            elevation: 20,
          },
        ]}
      >
        <Text style={[styles.title, { color: theme.highlight1 }]}>Sign Up</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          style={[styles.input, { borderColor: "#4D9FFF", color: theme.text }]}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.linkText, { color: theme.highlight11 }]}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  backgroundImage: { position: "absolute", width: "100%", height: "100%", opacity: 0.8 },
  card: { paddingVertical: 40, paddingHorizontal: 30, borderRadius: 25, alignItems: "center" },
  title: { fontSize: 34, fontWeight: "bold", marginBottom: 30 },
  input: { width: "100%", borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 20, backgroundColor: "#ffffffdd" },
  button: { width: "100%", padding: 18, borderRadius: 12, alignItems: "center", marginTop: 10, backgroundColor: "#cf31faff" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  linkText: { marginTop: 20, fontSize: 16 },
});
