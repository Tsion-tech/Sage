import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../redux/appointmentsSlice';
import AppointmentCard from '../components/AppointmentCard';
import { useTheme } from '../contexts/ThemeContext';

const Appointments = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.appointments);
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.highlight1 }]}>Appointments</Text>

      <FlatList
        data={list}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
            <AppointmentCard
              appointment={item}
              onPress={() => navigation.navigate('AppointmentDetails', { id: item._id })}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.text }]}>
            No appointments available.
          </Text>
        }
        refreshing={loading}
        onRefresh={() => dispatch(fetchAppointments())}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 30, fontWeight: '700', marginBottom: 20, letterSpacing: 0.5 },

  card: {
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },

  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 50, opacity: 0.7 },
});
