import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const Settings = () => {
  const { theme, isDark, toggle } = useTheme();

  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);
  const [sound, setSound] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  const settingsData = [
    { label: "Dark Mode", value: isDark, onChange: toggle },
    { label: "Push Notifications", value: notifications, onChange: () => setNotifications(prev => !prev) },
    { label: "Location Access", value: location, onChange: () => setLocation(prev => !prev) },
    { label: "Sound", value: sound, onChange: () => setSound(prev => !prev) },
    { label: "Auto Updates", value: autoUpdate, onChange: () => setAutoUpdate(prev => !prev) },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>Settings</Text>
        {settingsData.map((setting, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={[styles.label, { color: theme.text }]}>{setting.label}</Text>
              <Switch
                value={setting.value}
                onValueChange={setting.onChange}
                thumbColor={setting.value ? theme.highlight2 : "#fff"}
              />
            </View>
            {index !== settingsData.length - 1 && (
              <View style={[styles.divider, { backgroundColor: theme.shadow }]} />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 25,
    borderRadius: 25,
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    marginVertical: 5,
    opacity: 0.2,
  },
});
