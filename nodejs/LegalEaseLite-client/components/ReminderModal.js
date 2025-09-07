import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addReminder } from '../redux/appointmentsSlice';

const ReminderModal = ({ appointmentId }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [reminder, setReminder] = useState('');

  const handleAdd = () => {
    if (reminder.trim() === '') return;
    dispatch(addReminder({ appointmentId, reminder }));
    setReminder('');
    setVisible(false);
  };

  return (
    <View>
      <Button title="Add Reminder" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              placeholder="Enter reminder"
              value={reminder}
              onChangeText={setReminder}
            />
            <Button title="Add" onPress={handleAdd} />
            <Button title="Cancel" onPress={() => setVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  inner: { width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginBottom: 12 },
});

export default ReminderModal;
