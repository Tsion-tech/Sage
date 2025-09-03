import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Dashboard = ({ navigation }) => {
  const { theme } = useTheme();

  const appointments = [
    { id: "1", title: "Meeting with Lawyer", date: "2025-09-03" },
    { id: "2", title: "Court Session", date: "2025-09-05" },
  ];

  const documents = [
    { id: "1", name: "Contract.pdf", uploaded: "2025-08-30" },
    { id: "2", name: "CaseFile.docx", uploaded: "2025-08-25" },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background }}
      contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20 }}
    >
      <Text style={[styles.title, { color: theme.highlight1 }]}>Dashboard</Text>

      <View style={styles.cardRow}>
        <TouchableOpacity
          style={[styles.irregularCard, { backgroundColor: theme.card }]}
          onPress={() => navigation.navigate("Documents")}
        >
          <Ionicons name="document-text-outline" size={44} color={theme.highlight2} />
          <Text style={[styles.cardText, { color: theme.highlight2 }]}>Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.irregularCardAlt, { backgroundColor: theme.card }]}
          onPress={() => navigation.navigate("Appointments")}
        >
          <MaterialIcons name="event-note" size={44} color={theme.highlight2} />
          <Text style={[styles.cardText, { color: theme.highlight2 }]}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.irregularCard, { backgroundColor: theme.card }]}
          onPress={() => navigation.navigate("Settings")}
        >
          <FontAwesome5 name="cogs" size={42} color={theme.highlight2} />
          <Text style={[styles.cardText, { color: theme.highlight2 }]}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 50 }}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>
          Upcoming Appointments
        </Text>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.listItem, { backgroundColor: theme.card }]}
              onPress={() => navigation.navigate("Appointments")}
            >
              <View>
                <Text style={[styles.listText, { color: theme.text }]}>{item.title}</Text>
                <Text style={{ color: theme.muted, marginTop: 4 }}>{item.date}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={26} color={theme.muted} />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ marginTop: 40, marginBottom: 50 }}>
        <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>
          Recent Documents
        </Text>
        <FlatList
          data={documents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.listItem, { backgroundColor: theme.card }]}
              onPress={() => navigation.navigate("Documents")}
            >
              <View>
                <Text style={[styles.listText, { color: theme.text }]}>{item.name}</Text>
                <Text style={{ color: theme.muted, marginTop: 4 }}>
                  Uploaded: {item.uploaded}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={26} color={theme.muted} />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  irregularCard: {
    width: 400,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 40,
    padding: 18,
    marginHorizontal: 170, // Increased gap
    shadowColor: "#800080",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 12,
  },
  irregularCardAlt: {
    width: 400,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 15,
    padding: 18,
    marginHorizontal: 25, // Increased gap
    shadowColor: "#800080",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#800080",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  listText: { fontSize: 18, fontWeight: "500" },
});
