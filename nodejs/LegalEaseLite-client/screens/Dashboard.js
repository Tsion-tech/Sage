import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../redux/appointmentsSlice';
import AppointmentCard from '../components/AppointmentCard';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={list}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <AppointmentCard
            appointment={item}
            onPress={() => navigation.navigate('AppointmentDetails', { id: item._id })}
          />
        )}
        ListEmptyComponent={<Text>No appointments yet.</Text>}
        refreshing={loading}
        onRefresh={() => dispatch(fetchAppointments())}
      />
      <TouchableOpacity style={styles.docsButton} onPress={() => navigation.navigate('Documents')}>
        <Text style={styles.docsText}>Go to Documents</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.docsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  docsButton: { marginTop: 20, backgroundColor: '#007BFF', padding: 12, borderRadius: 8, alignItems: 'center' },
  settingsButton: { marginTop: 12, backgroundColor: '#6C757D', padding: 12, borderRadius: 8, alignItems: 'center' },
  docsText: { color: '#fff', fontWeight: 'bold' },
});

export default Dashboard;
