import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const DeviceScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Device</Text>

      <View style={styles.deviceCard}>
        <View style={styles.deviceOption}>
          <Text style={styles.deviceText}>Back Camera</Text>
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✔</Text>
          </View>
        </View>
        
        <View style={[styles.deviceOption, styles.disabledOption]}>
          <Text style={styles.deviceText}>Lens Camera</Text>
          <Text style={styles.disabledText}>Disconnected</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  deviceCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  deviceOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  deviceText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  checkmark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#6A0DAD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  disabledOption: {
    backgroundColor: '#f7f7f7',
  },
  disabledText: {
    fontSize: 16,
    color: '#bbb',
  },
  backButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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

export default DeviceScreen;
