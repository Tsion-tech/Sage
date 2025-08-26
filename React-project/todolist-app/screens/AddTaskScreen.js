import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';

export default function AddTaskScreen({ addTask, goBack }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#8e44ad' }]} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#e91e63' }]} onPress={goBack}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
