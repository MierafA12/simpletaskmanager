import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './Screens/WelcomeScreen';
import TaskListScreen from './Screens/TaskListScreen';
import AddTaskScreen from './Screens/AddTaskScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TasksTabs({ tasks, toggleCompleted, deleteTask, addTask }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#8B4513',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tasks') iconName = 'list';
          else if (route.name === 'Add Task') iconName = 'add-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Tasks"
        options={{ headerShown: false }}
      >
        {(props) => (
          <TaskListScreen
            {...props}
            tasks={tasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Add Task"
        options={{ headerShown: false }}
      >
        {(props) => <AddTaskScreen {...props} addTask={addTask} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
        Alert.alert('Tasks loaded', 'Your tasks were loaded from storage.');
      } else {
        setTasks([
          { id: '1', title: 'Buy groceries', completed: false },
          { id: '2', title: 'Read a book', completed: true },
        ]);
        Alert.alert('No saved tasks', 'Starting with default tasks.');
      }
    } catch (e) {
      console.error('Failed to load tasks from storage', e);
      Alert.alert('Error', 'Failed to load tasks from storage');
    }
  };
  loadTasks();
}, []);

useEffect(() => {
  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      Alert.alert('Tasks saved', 'Your tasks have been saved successfully.');
    } catch (e) {
      console.error('Failed to save tasks to storage', e);
      Alert.alert('Error', 'Failed to save tasks to storage');
    }
  };
  saveTasks();
}, [tasks]);

  const addTask = (title) => {
    if (!title.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), title: title.trim(), completed: false },
    ]);
  };

  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
        >
          {(props) => (
            <TasksTabs
              {...props}
              tasks={tasks}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
              addTask={addTask}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
