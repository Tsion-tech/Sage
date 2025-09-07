import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../redux/appointmentsSlice';

const ChatBox = ({ appointmentId }) => {
  const dispatch = useDispatch();
  const { chats } = useSelector(state => state.appointments);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;
    dispatch(sendMessage({ appointmentId, message }));
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats[appointmentId] || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.msg}>{item}</Text>}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={message}
          placeholder="Type a message..."
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 15, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginRight: 8 },
  msg: { padding: 6, backgroundColor: '#f0f0f0', borderRadius: 6, marginVertical: 2 },
});

export default ChatBox;
