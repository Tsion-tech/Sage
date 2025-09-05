// screens/SignUp.js
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

const SignUp = ({ navigation, onLogin }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword || !phone) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // ✅ same as SignIn
    onLogin?.(); 
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
          <Text style={styles.title}>Sign Up</Text>

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
            placeholder="Phone Number"
            placeholderTextColor="#A374FF"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#A374FF"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#A374FF"
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.linkText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff" },
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
    minHeight: 520,
    maxWidth: 450,
    transitionProperty: "all",
    transitionDuration: "0.3s",
  },
  cardHover: { shadowOpacity: 0.35, shadowRadius: 30, transform: [{ scale: 1.02 }] },
  title: { fontSize: 34, fontWeight: "700", marginBottom: 30, color: "#A374FF" },
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
  },
  button: { width: "100%", padding: 18, borderRadius: 15, alignItems: "center", marginTop: 10, backgroundColor: "#A374FF" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  linkText: { marginTop: 20, fontSize: 16, color: "#FF6FD8", textDecorationLine: "underline" },
});
