import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigate = (screen, task = null) => {
    setSelectedTask(task);
    setCurrentScreen(screen);
  };

  const addTask = (title) => {
    const newTask = { id: Date.now().toString(), title, completed: false };
    setTasks(prev => [newTask, ...prev]);
    setCurrentScreen('home');
  };

  const editTask = (id, title) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, title } : t));
    setCurrentScreen('home');
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  if (currentScreen === 'add') return <AddTaskScreen addTask={addTask} goBack={() => setCurrentScreen('home')} />;
  if (currentScreen === 'edit') return <EditTaskScreen task={selectedTask} editTask={editTask} goBack={() => setCurrentScreen('home')} />;

  return (
    <HomeScreen
      tasks={tasks}
      navigate={navigate}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
  );
}
