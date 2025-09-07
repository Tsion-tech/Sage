import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DocumentCard = ({ document }) => {
  const handleOpen = () => {
    Linking.openURL(document.url);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleOpen}>
      <Text style={styles.title}>{document.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { padding: 15, borderRadius: 8, backgroundColor: '#e0e0e0', marginBottom: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
});

export default DocumentCard;
