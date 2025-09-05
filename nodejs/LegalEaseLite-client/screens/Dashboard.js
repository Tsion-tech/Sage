import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

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

  const data = [
    { type: "cards" },
    ...appointments.map(item => ({ type: "appointment", ...item })),
    ...documents.map(item => ({ type: "document", ...item })),
  ];

  const renderItem = ({ item }) => {
    if (item.type === "cards") {
      return (
        <View style={styles.cardContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.card, { backgroundColor: theme.card }]}
              onPress={() => navigation.navigate("Documents")}
            >
              <Ionicons name="document-text-outline" size={36} color={theme.highlight2} />
              <Text style={[styles.cardText, { color: theme.highlight2 }]}>Documents</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, { backgroundColor: theme.card }]}
              onPress={() => navigation.navigate("Appointments")}
            >
              <MaterialIcons name="event-note" size={36} color={theme.highlight2} />
              <Text style={[styles.cardText, { color: theme.highlight2 }]}>Appointments</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centerRow}>
            <TouchableOpacity
              style={[styles.card, { backgroundColor: theme.card }]}
              onPress={() => navigation.navigate("Settings")}
            >
              <FontAwesome5 name="cogs" size={36} color={theme.highlight2} />
              <Text style={[styles.cardText, { color: theme.highlight2 }]}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (item.type === "appointment") {
      return (
        <View style={{ marginBottom: 12 }}>
          <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>Upcoming Appointments</Text>
          <TouchableOpacity
            style={[styles.listItem, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate("Appointments")}
          >
            <View>
              <Text style={[styles.listText, { color: theme.text }]}>{item.title}</Text>
              <Text style={{ color: theme.muted, marginTop: 2 }}>{item.date}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={theme.muted} />
          </TouchableOpacity>
        </View>
      );
    }

    if (item.type === "document") {
      return (
        <View style={{ marginBottom: 12 }}>
          <Text style={[styles.sectionTitle, { color: theme.highlight1 }]}>Recent Documents</Text>
          <TouchableOpacity
            style={[styles.listItem, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate("Documents")}
          >
            <View>
              <Text style={[styles.listText, { color: theme.text }]}>{item.name}</Text>
              <Text style={{ color: theme.muted, marginTop: 2 }}>Uploaded: {item.uploaded}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={theme.muted} />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.type}-${item.id || index}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 16 }}
        ListHeaderComponent={
          <Text style={[styles.dashboardTitle, { color: theme.highlight1 }]}>Dashboard</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  cardContainer: {
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  centerRow: {
    marginTop: 16,
    alignItems: "center",
  },
  card: {
    width: width / 2 - 24,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#d29cf2",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
    padding: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 15,
    shadowColor: "#d29cf2",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  listText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
