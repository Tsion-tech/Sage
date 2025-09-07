import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppointmentCard = ({ appointment, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{appointment.title}</Text>
    <Text style={styles.date}>{new Date(appointment.date).toLocaleString()}</Text>
    <Text style={styles.client}>Client: {appointment.clientName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 15, borderRadius: 8, backgroundColor: '#f2f2f2', marginBottom: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
  date: { fontSize: 14, color: '#555' },
  client: { fontSize: 14, color: '#555' },
});

export default AppointmentCard;
