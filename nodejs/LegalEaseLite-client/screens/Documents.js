import React, { useEffect, useState } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Alert 
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocuments, uploadDocument } from '../redux/documentsSlice';
import DocumentCard from '../components/DocumentCard';
import { useTheme } from '../contexts/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Documents = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.documents);
  const { theme } = useTheme();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, []);

  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setUploading(true);
      const res = await dispatch(uploadDocument({ file: result, title: result.name }));
      setUploading(false);
      if (res.meta.requestStatus === 'fulfilled') {
        Alert.alert('Success', 'Document uploaded successfully');
      } else {
        Alert.alert('Error', res.payload?.message || 'Upload failed');
      }
    }
  };

  return (
    <View style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <Text style={[styles.header, { color: theme.highlight1 }]}>📄 Documents</Text>

      {/* Upload Button */}
      <TouchableOpacity 
        style={[styles.uploadButton, { backgroundColor: theme.highlight2 }]}
        onPress={handleUpload}
        disabled={uploading}
      >
        <MaterialIcons name="file-upload" size={24} color="#fff" />
        <Text style={styles.uploadText}>{uploading ? 'Uploading...' : 'Upload Document'}</Text>
      </TouchableOpacity>

      {/* Document List */}
      <FlatList
        data={list}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <DocumentCard 
            document={item} 
            theme={theme} 
            style={{ marginBottom: 16, borderRadius: 20, shadowColor: theme.highlight1 }}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
        ListEmptyComponent={<Text style={[styles.emptyText, { color: theme.muted }]}>No documents yet.</Text>}
        refreshing={loading}
        onRefresh={() => dispatch(fetchDocuments())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, paddingTop: 20 },
  header: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 20 },
  uploadButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 18,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#800080',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  uploadText: { color: '#fff', fontWeight: '700', marginLeft: 8, fontSize: 16 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 40 },
});

export default Documents;
