import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BUTTON_COLOR = '#8B4513';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello! Let’s tackle your tasks together</Text>
      <Button
        title="Go to Tasks"
        color={BUTTON_COLOR}
        onPress={() => navigation.replace('Main')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20, color: BUTTON_COLOR },
});
