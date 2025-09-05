// components/BottomTab.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import Documents from '../screens/Documents';
import Appointments from '../screens/Appointments';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Documents') iconName = 'folder';
          else if (route.name === 'Appointments') iconName = 'calendar';
          else if (route.name === 'Settings') iconName = 'settings';
          
          return route.name === 'Appointments' ? (
            <MaterialIcons name={iconName} size={size} color={color} />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Appointments" component={Appointments} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
