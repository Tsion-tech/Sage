import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const Appointments = () => {
  const { theme } = useTheme();

  const [appointments] = useState([
    { id: "1", title: "Meeting with Lawyer 1", date: "2025-09-05", time: "10:00 AM" },
    { id: "2", title: "Meeting with Lawyer 2", date: "2025-09-06", time: "2:00 PM" },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // "chat" or "reminder"

  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const [reminderDate, setReminderDate] = useState("");

  const handleSelectTab = (appointment, tab) => {
    // toggle logic
    if (selectedAppointment?.id === appointment.id && activeTab === tab) {
      setSelectedAppointment(null);
      setActiveTab(null);
    } else {
      setSelectedAppointment(appointment);
      setActiveTab(tab);
    }
  };

  const sendMessage = () => {
    if (!newMessage || !selectedAppointment) return;
    const chatId = selectedAppointment.id;
    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), { text: newMessage, from: "client" }],
    }));
    setNewMessage("");
  };

  const setReminder = () => {
    if (!selectedAppointment || !reminderDate) return;
    alert(`Reminder set for ${selectedAppointment.title} at ${reminderDate}`);
    setReminderDate("");
  };

  const renderChat = () => {
    if (!selectedAppointment || activeTab !== "chat") return null;
    const chat = messages[selectedAppointment.id] || [];

    return (
      <View style={[styles.chatContainer, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
        <Text style={[styles.chatTitle, { color: theme.highlight1 }]}>Chat with Lawyer</Text>
        <ScrollView style={{ maxHeight: 150, marginVertical: 10 }}>
          {chat.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.message,
                {
                  alignSelf: msg.from === "client" ? "flex-end" : "flex-start",
                  backgroundColor: msg.from === "client" ? theme.highlight2 : "#ccc",
                },
              ]}
            >
              <Text style={{ color: msg.from === "client" ? "#fff" : "#000" }}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputRow}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type message..."
            style={[styles.input, { backgroundColor: theme.background, color: theme.text }]}
          />
          <TouchableOpacity style={[styles.sendButton, { backgroundColor: theme.highlight2 }]} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderReminder = () => {
    if (!selectedAppointment || activeTab !== "reminder") return null;
    return (
      <View style={[styles.reminderCard, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
        <Text style={[styles.reminderTitle, { color: theme.highlight1 }]}>
          🗓 Meeting with Lawyer: {selectedAppointment.title}
        </Text>
        <Text style={[styles.label, { color: theme.text }]}>Select Date & Time for Reminder:</Text>
        <TextInput
          value={reminderDate}
          onChangeText={setReminderDate}
          placeholder="YYYY-MM-DD HH:MM"
          style={[styles.reminderInput, { color: theme.text, borderColor: theme.highlight2 }]}
        />
        <TouchableOpacity style={[styles.reminderButton, { backgroundColor: theme.highlight2 }]} onPress={setReminder}>
          <Text style={styles.reminderButtonText}>Set Reminder</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAppointment = ({ item }) => (
    <View style={[styles.appointmentCard, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.appointmentTitle, { color: theme.highlight1 }]}>{item.title}</Text>
        <Text style={[styles.appointmentText, { color: theme.text }]}>{item.date}</Text>
        <Text style={[styles.appointmentText, { color: theme.text }]}>{item.time}</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: theme.highlight2 }]}
          onPress={() => handleSelectTab(item, "chat")}
        >
          <Text style={styles.smallButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: theme.highlight1, marginTop: 10 }]}
          onPress={() => handleSelectTab(item, "reminder")}
        >
          <Text style={[styles.smallButtonText, { color: "#fff" }]}>Set Reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.highlight1 }]}>Appointments</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {renderReminder()}
      {renderChat()}
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  appointmentCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  appointmentTitle: { fontSize: 18, fontWeight: "bold" },
  appointmentText: { fontSize: 14, marginTop: 4 },
  smallButton: { paddingVertical: 10, paddingHorizontal: 15, borderRadius: 12, alignItems: "center" },
  smallButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  reminderCard: {
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    width: "100%",
  },
  reminderTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  label: { fontSize: 14, marginBottom: 8 },
  reminderInput: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 14,
  },
  reminderButton: { paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  reminderButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  chatContainer: { padding: 20, borderRadius: 20, marginTop: 20, shadowOpacity: 0.3, shadowRadius: 15, elevation: 10 },
  chatTitle: { fontSize: 18, fontWeight: "bold" },
  message: { padding: 10, borderRadius: 12, marginBottom: 10, maxWidth: "70%" },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: { flex: 1, padding: 12, borderRadius: 12, borderWidth: 1, marginRight: 10 },
  sendButton: { paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, alignItems: "center" },
  sendText: { color: "#fff", fontWeight: "bold" },
});
