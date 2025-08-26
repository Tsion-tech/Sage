import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import styles from '../styles/commonStyles';

export default function HomeScreen({ tasks, navigate, toggleComplete, deleteTask }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleComplete={() => toggleComplete(item.id)}
            deleteTask={() => deleteTask(item.id)}
            editTask={() => navigate('edit', item)}
          />
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 50, color: '#666' }}>No tasks yet</Text>}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigate('add')}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
