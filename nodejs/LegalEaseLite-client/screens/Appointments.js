import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";

const { width } = Dimensions.get("window");

const Appointments = () => {
  const { theme } = useTheme();

  const [appointments] = useState([
    { id: "1", title: "Meeting with Lawyer 1", date: "2025-09-05", time: "10:00 AM" },
    { id: "2", title: "Meeting with Lawyer 2", date: "2025-09-06", time: "2:00 PM" },
  ]);

  const [expandedAppointmentId, setExpandedAppointmentId] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // "chat" | "reminder"

  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  const handleSelectTab = (appointmentId, tab) => {
    if (expandedAppointmentId === appointmentId && activeTab === tab) {
      setExpandedAppointmentId(null);
      setActiveTab(null);
    } else {
      setExpandedAppointmentId(appointmentId);
      setActiveTab(tab);
    }
  };

  const sendMessage = () => {
    if (!newMessage || !expandedAppointmentId) return;
    setMessages((prev) => ({
      ...prev,
      [expandedAppointmentId]: [
        ...(prev[expandedAppointmentId] || []),
        { id: Date.now().toString(), text: newMessage, from: "client" },
      ],
    }));
    setNewMessage("");
  };

  const deleteLastMessage = () => {
    if (!expandedAppointmentId) return;
    const chat = messages[expandedAppointmentId] || [];
    if (!chat.length) return;

    const updated = [...chat];
    for (let i = updated.length - 1; i >= 0; i--) {
      if (updated[i].from === "client") {
        updated.splice(i, 1);
        break;
      }
    }
    setMessages((prev) => ({
      ...prev,
      [expandedAppointmentId]: updated,
    }));
  };

  const setReminder = (appointment) => {
    if (!expandedAppointmentId || !reminderDate) return;
    Alert.alert("Reminder Set", `Reminder for ${appointment.title} at ${reminderDate}`);
    setReminderDate("");
  };

  const renderChat = (appointment) => {
    if (expandedAppointmentId !== appointment.id || activeTab !== "chat") return null;
    const chat = messages[appointment.id] || [];

    return (
      <View style={[styles.cardInner, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>💬 Chat</Text>
        <FlatList
          data={chat.slice().reverse()}
          keyExtractor={(item) => item.id}
          style={{ maxHeight: 200 }}
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
              <Text
                style={{
                  color: item.from === "client" ? "#fff" : "#111",
                  fontSize: 15,
                }}
              >
                {item.text}
              </Text>
            </View>
          )}
        />
        <View style={[styles.inputRow, { justifyContent: "space-between" }]}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            placeholderTextColor="#888"
            style={[
              styles.input,
              { backgroundColor: theme.background, color: theme.text, flex: 1, marginRight: 8 },
            ]}
          />
          <TouchableOpacity
            style={[styles.sendButton, { backgroundColor: theme.highlight2 }]}
            onPress={sendMessage}
          >
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sendButton, { backgroundColor: theme.highlight1, marginLeft: 4 }]}
            onPress={deleteLastMessage}
          >
            <Text style={styles.sendText}>Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Collapse button */}
        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: theme.background, marginTop: 15 }]}
          onPress={() => {
            setExpandedAppointmentId(null);
            setActiveTab(null);
          }}
        >
          <Text style={[styles.mainButtonText, { color: theme.text }]}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderReminder = (appointment) => {
    if (expandedAppointmentId !== appointment.id || activeTab !== "reminder") return null;

    return (
      <View style={[styles.cardInner, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>🗓 Reminder</Text>
        <Text style={[styles.label, { color: theme.text }]}>Pick Date & Time</Text>
        <TextInput
          value={reminderDate}
          onChangeText={setReminderDate}
          placeholder="YYYY-MM-DD HH:MM"
          placeholderTextColor="#aaa"
          style={[styles.input, { borderColor: theme.highlight2, color: theme.text }]}
        />
        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: theme.highlight2 }]}
          onPress={() => setReminder(appointment)}
        >
          <Text style={styles.mainButtonText}>Set Reminder</Text>
        </TouchableOpacity>

        {/* Collapse button */}
        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: theme.background, marginTop: 15 }]}
          onPress={() => {
            setExpandedAppointmentId(null);
            setActiveTab(null);
          }}
        >
          <Text style={[styles.mainButtonText, { color: theme.text }]}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAppointment = ({ item }) => (
    <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.shadow }]}>
      <Text style={[styles.cardTitle, { color: theme.highlight1 }]}>{item.title}</Text>
      <Text style={[styles.cardSubtitle, { color: theme.text }]}>
        {item.date} | {item.time}
      </Text>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.highlight2 }]}
          onPress={() => handleSelectTab(item.id, "chat")}
        >
          <Text style={styles.actionText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: theme.highlight1 }]}
          onPress={() => handleSelectTab(item.id, "reminder")}
        >
          <Text style={styles.actionText}>Reminder</Text>
        </TouchableOpacity>
      </View>

      {renderChat(item)}
      {renderReminder(item)}
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>Appointments</Text>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={renderAppointment}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 30, fontWeight: "700", marginBottom: 20, letterSpacing: 0.5 },

  card: {
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
    width: "100%",
  },
  cardInner: {
    marginTop: 15,
    padding: 15,
    borderRadius: 18,
  },
  cardTitle: { fontSize: 20, fontWeight: "700", marginBottom: 6 },
  cardSubtitle: { fontSize: 15, opacity: 0.8, marginBottom: 14 },

  actionRow: { flexDirection: "row", justifyContent: "space-between" },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 14,
    alignItems: "center",
  },
  actionText: { color: "#fff", fontWeight: "600", fontSize: 15 },

  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 15 },
  label: { fontSize: 14, marginBottom: 8, opacity: 0.8 },

  input: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    fontSize: 15,
  },
  inputRow: { flexDirection: "row", alignItems: "center" },
  sendButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
  },
  sendText: { color: "#fff", fontWeight: "600" },

  message: {
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    maxWidth: width * 0.65,
  },

  mainButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  mainButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
