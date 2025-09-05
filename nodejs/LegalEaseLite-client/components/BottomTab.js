// AppNavigation.js
import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur"; // <-- glassmorphism effect

import Dashboard from "../screens/Dashboard";
import Documents from "../screens/Documents";
import Appointments from "../screens/Appointments";
import Settings from "../screens/Settings";
import { useTheme } from "../contexts/ThemeContext";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <NavigationContainer
        theme={{ ...DefaultTheme, colors: { background: theme.background } }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              elevation: 6,
              backgroundColor: Platform.OS === "ios" ? "transparent" : theme.card,
              borderRadius: 30,
              height: 70,
              shadowColor: theme.shadow,
              shadowOpacity: 0.2,
              shadowRadius: 10,
              borderTopWidth: 0,
              overflow: "hidden",
            },
            tabBarBackground: () => (
              <BlurView
                intensity={70}
                tint={theme.isDark ? "dark" : "light"}
                style={StyleSheet.absoluteFill}
              />
            ),
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Dashboard") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Documents") {
                iconName = focused ? "document-text" : "document-text-outline";
              } else if (route.name === "Appointments") {
                iconName = focused ? "calendar" : "calendar-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons
                    name={iconName}
                    size={28}
                    color={focused ? theme.highlight1 : theme.text}
                    style={{ marginBottom: 3 }}
                  />
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: focused ? theme.highlight1 : "transparent",
                    }}
                  />
                </View>
              );
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Documents" component={Documents} />
          <Tab.Screen name="Appointments" component={Appointments} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
