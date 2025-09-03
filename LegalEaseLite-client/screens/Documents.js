import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";

const Documents = () => {
  const { theme } = useTheme();
  const [documents, setDocuments] = useState([
    { id: "1", title: "Contract.pdf", description: "Signed contract" },
    { id: "2", title: "Agreement.docx", description: "Project agreement" }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editDoc, setEditDoc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openModal = (doc = null) => {
    if (doc) {
      setEditDoc(doc);
      setTitle(doc.title);
      setDescription(doc.description);
    } else {
      setEditDoc(null);
      setTitle("");
      setDescription("");
    }
    setModalVisible(true);
  };

  const saveDocument = () => {
    if (!title.trim()) return;

    if (editDoc) {
      setDocuments(
        documents.map((doc) =>
          doc.id === editDoc.id ? { ...doc, title, description } : doc
        )
      );
    } else {
      const newDoc = {
        id: Date.now().toString(),
        title,
        description
      };
      setDocuments([newDoc, ...documents]);
    }
    setModalVisible(false);
  };

  const deleteDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.highlight1 }
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>{item.title}</Text>
        <Text style={[styles.description, { color: theme.muted }]}>{item.description}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => openModal(item)}>
          <MaterialIcons name="edit" size={26} color="#DAA520" /> {/* classy gold */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteDocument(item.id)}>
          <MaterialIcons name="delete" size={26} color="#B22222" /> {/* classy crimson */}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.highlight1 }]}>Documents</Text>

      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: theme.highlight2 }]}
        onPress={() => openModal()}
      >
        <Text style={styles.addButtonText}>+ Add / Upload Document</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.highlight1 }]}>
              {editDoc ? "Edit Document" : "Add / Upload Document"}
            </Text>
            <ScrollView>
              <TextInput
                placeholder="Document Title"
                value={title}
                onChangeText={setTitle}
                style={[styles.input, { backgroundColor: theme.background, color: theme.text }]}
                placeholderTextColor={theme.muted}
              />
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={[styles.input, { backgroundColor: theme.background, color: theme.text, height: 100 }]}
                placeholderTextColor={theme.muted}
                multiline
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: "#B22222" }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: theme.highlight2 }]}
                  onPress={saveDocument}
                >
                  <Text style={styles.modalBtnText}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Documents;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  addButton: { padding: 16, borderRadius: 14, alignItems: "center", marginTop: 20 },
  addButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  card: {
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 6,
  },
  title: { fontSize: 18, fontWeight: "600" },
  description: { fontSize: 14, marginTop: 6 },
  buttons: { flexDirection: "row", width: 70, justifyContent: "space-between" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center" },
  modalContainer: { width: "90%", borderRadius: 20, padding: 20 },
  modalTitle: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  input: { padding: 14, borderRadius: 12, fontSize: 16, marginBottom: 15 },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  modalBtn: { padding: 14, borderRadius: 12, flex: 1, marginHorizontal: 5, alignItems: "center" },
  modalBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
