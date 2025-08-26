import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';

export default function EditTaskScreen({ task, editTask, goBack }) {
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    if (!title.trim()) return;
    editTask(task.id, title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#8e44ad' }]} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#e91e63' }]} onPress={goBack}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
