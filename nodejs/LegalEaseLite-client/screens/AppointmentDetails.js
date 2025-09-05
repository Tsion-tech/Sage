import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const { width } = Dimensions.get("window");

const AppointmentDetails = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { appointment, tab } = route.params;

  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  const sendMessage = () => {
    if (!newMessage) return;
    setMessages((prev) => ({
      ...prev,
      [appointment.id]: [...(prev[appointment.id] || []), { id: Date.now().toString(), text: newMessage, from: "client" }],
    }));
    setNewMessage("");
  };

  const deleteLastMessage = () => {
    const chat = messages[appointment.id] || [];
    if (!chat.length) return;

    const updated = [...chat];
    for (let i = updated.length - 1; i >= 0; i--) {
      if (updated[i].from === "client") {
        updated.splice(i, 1);
        break;
      }
    }
    setMessages((prev) => ({ ...prev, [appointment.id]: updated }));
  };

  const setReminder = () => {
    if (!reminderDate) return;
    alert(`Reminder set for ${appointment.title} at ${reminderDate}`);
    setReminderDate("");
  };

  if (tab === "chat") {
    const chat = messages[appointment.id] || [];
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>{`💬 Chat: ${appointment.title}`}</Text>
        <FlatList
          data={chat}
          keyExtractor={(item) => item.id}
          inverted
          renderItem={({ item }) => (
            <View
              style={[
                styles.message,
                {
                  alignSelf: item.from === "client" ? "flex-end" : "flex-start",
                  backgroundColor: item.from === "client" ? theme.highlight2 : "#eee",
                },
              ]}
            >
              <Text style={{ color: item.from === "client" ? "#fff" : "#111", fontSize: 15 }}>{item.text}</Text>
            </View>
          )}
        />
        <View style={styles.inputRow}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            placeholderTextColor="#888"
            style={[styles.input, { backgroundColor: theme.background, color: theme.text, flex: 1, marginRight: 8 }]}
          />
          <TouchableOpacity style={[styles.sendButton, { backgroundColor: theme.highlight2 }]} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sendButton, { backgroundColor: theme.highlight1, marginLeft: 4 }]} onPress={deleteLastMessage}>
            <Text style={styles.sendText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (tab === "reminder") {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>{`🗓 Reminder: ${appointment.title}`}</Text>
        <TextInput
          value={reminderDate}
          onChangeText={setReminderDate}
          placeholder="YYYY-MM-DD HH:MM"
          placeholderTextColor="#aaa"
          style={[styles.input, { borderColor: theme.highlight2, color: theme.text }]}
        />
        <TouchableOpacity style={[styles.mainButton, { backgroundColor: theme.highlight2 }]} onPress={setReminder}>
          <Text style={styles.mainButtonText}>Set Reminder</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  input: { padding: 14, borderRadius: 14, borderWidth: 1, fontSize: 15, marginBottom: 14 },
  inputRow: { flexDirection: "row", alignItems: "center" },
  sendButton: { paddingVertical: 12, paddingHorizontal: 18, borderRadius: 14, alignItems: "center" },
  sendText: { color: "#fff", fontWeight: "600" },
  message: { padding: 12, borderRadius: 14, marginBottom: 10, maxWidth: width * 0.65 },
  mainButton: { paddingVertical: 14, borderRadius: 14, alignItems: "center", marginTop: 10 },
  mainButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
