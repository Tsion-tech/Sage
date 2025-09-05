import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const { width } = Dimensions.get("window");

const Documents = () => {
  const { theme } = useTheme();
  const [documents, setDocuments] = useState([
    { id: "1", title: "Contract.pdf", description: "Signed contract" },
    { id: "2", title: "Agreement.docx", description: "Project agreement" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editDoc, setEditDoc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUri, setFileUri] = useState("");

  const openModal = (doc = null) => {
    if (doc) {
      setEditDoc(doc);
      setTitle(doc.title);
      setDescription(doc.description);
      setFileUri(doc.fileUri || "");
    } else {
      setEditDoc(null);
      setTitle("");
      setDescription("");
      setFileUri("");
    }
    setModalVisible(true);
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
      });

      if (result.type === "success") {
        setFileUri(result.uri);
        setTitle(result.name);
      }
    } catch (err) {
      Alert.alert("Error", "Failed to pick document.");
    }
  };

  const saveDocument = () => {
    if (!title.trim())
      return Alert.alert("Error", "Please select or enter a document title.");

    if (editDoc) {
      setDocuments(
        documents.map((doc) =>
          doc.id === editDoc.id ? { ...doc, title, description, fileUri } : doc
        )
      );
    } else {
      const newDoc = {
        id: Date.now().toString(),
        title,
        description,
        fileUri,
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
        { backgroundColor: theme.card, shadowColor: theme.highlight1 },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: theme.highlight1 }]}>
          {item.title}
        </Text>
        <Text style={[styles.description, { color: theme.muted }]}>
          {item.description}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => openModal(item)}>
          <MaterialIcons name="edit" size={24} color="#DAA520" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteDocument(item.id)}>
          <MaterialIcons name="delete" size={24} color="#B22222" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.highlight1 }]}>
          Documents
        </Text>
      </View>

      {/* Document List */}
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: theme.highlight2 }]}
        onPress={() => openModal()}
      >
        <MaterialIcons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Modal for Adding/Editing */}
      <Modal animationType="slide" transparent visible={modalVisible}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={[styles.modalContainer, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.highlight1 }]}>
              {editDoc ? "Edit Document" : "Add / Upload Document"}
            </Text>

            <TouchableOpacity
              onPress={pickDocument}
              style={[styles.pickButton, { backgroundColor: theme.highlight2 }]}
            >
              <Text style={styles.pickButtonText}>
                {fileUri ? "Change File" : "Select PDF/DOC"}
              </Text>
            </TouchableOpacity>

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
              style={[
                styles.input,
                { backgroundColor: theme.background, color: theme.text, height: 100 },
              ]}
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
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

export default Documents;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(200,200,200,0.3)",
    alignItems: "center",
  },
  headerText: { fontSize: 24, fontWeight: "bold" },

  card: {
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 5,
    borderWidth: Platform.OS === "web" ? 1 : 0,
    borderColor: "rgba(200,200,200,0.2)",
  },
  title: { fontSize: 17, fontWeight: "700" },
  description: { fontSize: 14, marginTop: 4 },
  buttons: { flexDirection: "row", width: 70, justifyContent: "space-between" },

  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 6,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: width * 0.9,
    borderRadius: 22,
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    padding: 14,
    borderRadius: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalBtn: {
    padding: 14,
    borderRadius: 14,
    flex: 1,
    marginHorizontal: 6,
    alignItems: "center",
  },
  modalBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  pickButton: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
  },
  pickButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
