import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BUTTON_COLOR = '#8B4513';

export default function TaskListScreen({ navigation, tasks, toggleCompleted, deleteTask }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const handleDelete = (id) => {
    Alert.alert(
      'Delete Task',
      'Do you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => deleteTask(id), style: 'destructive' },
      ]
    );
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskRow}>
      <TouchableOpacity onPress={() => toggleCompleted(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDelete(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color={BUTTON_COLOR} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.sectionTitle}>📝 Tasks</Text>
        {incompleteTasks.length === 0 ? (
          <Text style={styles.noTaskText}>No incomplete tasks</Text>
        ) : (
          <FlatList
            data={incompleteTasks}
            keyExtractor={(item) => item.id}
            renderItem={renderTaskItem}
            scrollEnabled={false}
          />
        )}


        <Text style={styles.sectionTitle}>✅ Completed</Text>
        {completedTasks.length === 0 ? (
          <Text style={styles.noTaskText}>No completed tasks</Text>
        ) : (
          <FlatList
            data={completedTasks}
            keyExtractor={(item) => item.id}
            renderItem={renderTaskItem}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButtonText: {
    color: BUTTON_COLOR,
    fontSize: 18,
    marginLeft: 8,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: BUTTON_COLOR,
  },

  noTaskText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  taskText: { fontSize: 18, color: '#333' },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
  deleteButton: {
    backgroundColor: BUTTON_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteButtonText: { color: 'white', fontWeight: 'bold' },
});
