import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const [darkMode, setDarkMode] = useState(false);
  const [tealMode, setTealMode] = useState(false);
  const [sunsetMode, setSunsetMode] = useState(false);

  const handleThemeToggle = (mode) => {
    switch (mode) {
      case "dark":
        setDarkMode(!darkMode);
        setTealMode(false);
        setSunsetMode(false);
        toggleTheme(!darkMode ? "dark" : null);
        break;
      case "teal":
        setTealMode(!tealMode);
        setDarkMode(false);
        setSunsetMode(false);
        toggleTheme(!tealMode ? "teal" : null);
        break;
      case "sunset":
        setSunsetMode(!sunsetMode);
        setDarkMode(false);
        setTealMode(false);
        toggleTheme(!sunsetMode ? "sunset" : null);
        break;
    }
  };

  const sectionHeaderColor = darkMode || tealMode || sunsetMode ? "#6a11cb" : theme.highlight1;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={[styles.header, { color: theme.highlight1 }]}>⚙️ Settings</Text>

        <Text style={[styles.section, { color: sectionHeaderColor }]}>Themes</Text>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={() => handleThemeToggle("dark")} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Teal Mode</Text>
          <Switch value={tealMode} onValueChange={() => handleThemeToggle("teal")} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Sunset Mode</Text>
          <Switch value={sunsetMode} onValueChange={() => handleThemeToggle("sunset")} />
        </View>

        <Text style={[styles.section, { color: sectionHeaderColor, marginTop: 30 }]}>Features</Text>
        <FeatureSwitch label="Push Notifications" theme={theme} />
        <FeatureSwitch label="Location Access" theme={theme} />
        <FeatureSwitch label="Sound" theme={theme} />
        <FeatureSwitch label="Auto Updates" theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
};

const FeatureSwitch = ({ label, theme }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <View style={styles.row}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <Switch
        value={enabled}
        onValueChange={() => {
          setEnabled(!enabled);
          if (!enabled) Alert.alert(`${label} Enabled`, `The ${label} feature is now active.`);
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: { fontSize: 28, fontWeight: "800", marginVertical: 20, textAlign: "center" },
  section: { fontSize: 20, fontWeight: "600", marginHorizontal: 20, marginBottom: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
  },
  label: { fontSize: 18, fontWeight: "500" },
});
