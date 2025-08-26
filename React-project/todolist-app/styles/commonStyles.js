import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fbccf2ff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#8e44ad', textAlign: 'center' },
  screenTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#8e44ad', textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

  taskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  completedTask: { backgroundColor: '#f8d7ff' },

  
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: '#8e44ad',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkedBox: { backgroundColor: '#8e44ad' },
  checkmark: { color: '#fff', fontWeight: 'bold' },

  taskText: { fontSize: 16 },
  taskCompleted: { textDecorationLine: 'line-through', color: '#555' },

  addButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
