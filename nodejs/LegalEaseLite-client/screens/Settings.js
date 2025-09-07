import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Switch, 
  ScrollView, 
  Dimensions, 
  Platform, 
  Alert 
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { theme, toggleDarkMode, toggleSound, toggleLocation, toggleAutoUpdate } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth > 500 ? 420 : '90%';
  const [hovered, setHovered] = useState(false);

  return (
    <View style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}>
        <Text style={[styles.header, { color: theme.highlight1 }]}>⚙️ Settings</Text>

        <View
          style={[styles.card, { width: cardWidth }, hovered && styles.cardHover]}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Text style={[styles.section, { color: theme.highlight1 }]}>Preferences</Text>

          <FeatureSwitch label="Dark Mode" value={theme.darkMode} onToggle={toggleDarkMode} theme={theme} />
          <FeatureSwitch label="Sound" value={theme.sound} onToggle={toggleSound} theme={theme} />
          <FeatureSwitch label="Location Access" value={theme.location} onToggle={toggleLocation} theme={theme} />
          <FeatureSwitch label="Auto Updates" value={theme.autoUpdate} onToggle={toggleAutoUpdate} theme={theme} />
        </View>
      </ScrollView>
    </View>
  );
};

const FeatureSwitch = ({ label, value, onToggle, theme }) => {
  const [enabled, setEnabled] = useState(value);

  const handleToggle = () => {
    setEnabled(!enabled);
    onToggle();
    if (!enabled) Alert.alert(`${label} Enabled`, `The ${label} feature is now active.`);
  };

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <Switch
        value={enabled}
        onValueChange={handleToggle}
        trackColor={{ false: '#ccc', true: '#A374FF' }}
        thumbColor={Platform.OS === 'android' ? (enabled ? '#6B1FFF' : '#fff') : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: { fontSize: 32, fontWeight: '700', marginVertical: 20, textAlign: 'center' },
  card: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    shadowColor: '#800080',
    shadowOpacity: 0.25,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    elevation: 15,
    width: '90%',
    transitionProperty: 'all',
    transitionDuration: '0.3s',
  },
  cardHover: { shadowOpacity: 0.35, shadowRadius: 30, transform: [{ scale: 1.02 }] },
  section: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'left' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#A374FF',
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9FF',
  },
  label: { fontSize: 18, fontWeight: '500' },
});

export default Settings;
