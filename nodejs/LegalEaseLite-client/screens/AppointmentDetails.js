import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../redux/appointmentsSlice';
import ChatBox from '../components/ChatBox';
import ReminderModal from '../components/ReminderModal';
import { useTheme } from '../contexts/ThemeContext';

const AppointmentDetails = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.appointments);
  const { theme } = useTheme();

  const appointment = list.find(a => a._id === id);

  useEffect(() => {
    if (!appointment) dispatch(fetchAppointments());
  }, []);

  if (!appointment)
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.loadingText, { color: theme.text }]}>Loading appointment...</Text>
      </View>
    );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Appointment Card */}
      <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.highlight1 }]}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>{appointment.title}</Text>
        <Text style={[styles.info, { color: theme.text }]}>
          Date: {new Date(appointment.date).toLocaleString()}
        </Text>
        <Text style={[styles.info, { color: theme.text }]}>Client: {appointment.clientName}</Text>
      </View>

      {/* Chat Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>💬 Chat</Text>
        <ChatBox appointmentId={id} />
      </View>

      {/* Reminder Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>🗓 Reminder</Text>
        <ReminderModal appointmentId={id} />
      </View>
    </View>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 6,
  },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  info: { fontSize: 16, marginBottom: 6 },

  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 12 },

  loadingText: { fontSize: 18, textAlign: 'center', marginTop: 50 },
});
