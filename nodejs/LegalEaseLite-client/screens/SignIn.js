import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Dimensions, 
  Platform 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";

const SignIn = ({ navigation, onLogin }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      onLogin?.(); // triggers AppStack to render MainTabs
      // removed navigation.reset / replace to avoid navigator errors
    } else {
      Alert.alert("Error", "Please enter email and password");
    }
  };

  const windowWidth = Dimensions.get("window").width;
  const cardWidth = windowWidth > 500 ? 420 : "90%"; 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.background} />

        <View
          style={[
            styles.card,
            { width: cardWidth },
            hovered && styles.cardHover
          ]}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Text style={styles.title}>Sign In</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#A374FF"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#A374FF"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

// ===== styles remain unchanged =====
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#ffffff",
    background: "linear-gradient(135deg, #ffffff 0%, #ffe6f0 50%, #f0f0ff 100%)",
  },
  card: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#800080",
    shadowOpacity: 0.25,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    elevation: 15,
    minHeight: 450,
    maxWidth: 450,
    transitionProperty: "all",
    transitionDuration: "0.3s",
  },
  cardHover: {
    shadowOpacity: 0.35,
    shadowRadius: 30,
    transform: [{ scale: 1.02 }],
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 30,
    color: "#A374FF",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#A374FF",
    borderRadius: 15,
    padding: Platform.OS === "web" ? 14 : 16,
    marginBottom: 20,
    backgroundColor: "#F9F9FF",
    fontSize: 16,
    color: "#6B1FFF",
    shadowColor: "#A374FF",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  button: {
    width: "100%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#A374FF",
    shadowColor: "#A374FF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
    color: "#FF6FD8",
    textDecorationLine: "underline",
  },
});
