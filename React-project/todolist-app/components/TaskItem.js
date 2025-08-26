import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';

export default function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  return (
    <View style={[styles.taskItem, task.completed && styles.completedTask]}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleComplete}>
        <View style={[styles.checkbox, task.completed && styles.checkedBox]}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.taskText, task.completed && styles.taskCompleted]}>
          {task.title}
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity onPress={editTask}>
          <Text style={{ color: '#8e44ad', fontWeight: 'bold' }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTask}>
          <Text style={{ color: '#e91e63', fontWeight: 'bold' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
