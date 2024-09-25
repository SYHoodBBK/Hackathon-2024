import React from 'react';
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Settings</Text>
        
        <Link href="/gardientScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>My Guardians</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/historyScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/saveRouteScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Saved Route</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/deviceScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Device</Text>
          </TouchableOpacity>
        </Link>

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Language</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    width: '85%',
    height: 80,
    backgroundColor: '#6A0DAD',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#6A0DAD',
  },
});

export default SettingsScreen;
