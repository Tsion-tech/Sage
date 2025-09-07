import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';

const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Scale animation for the app title
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    // Check authentication
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('Dashboard');
      } else {
        navigation.replace('SignIn');
      }
    };
    checkAuth();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/mizan.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Center content */}
      <View style={styles.content}>
        <Animated.Text
          style={[styles.title, { color: theme.highlight1, transform: [{ scale: scaleAnim }] }]}
        >
          LegalEase
        </Animated.Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          A smart legal app for clients to connect with lawyers, book appointments, and manage cases easily.
        </Text>

        <ActivityIndicator
          size="large"
          color={theme.highlight2}
          style={{ marginTop: 30 }}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.text }]}>
          Empowering Clients • Powered by LegalEase
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 14,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
