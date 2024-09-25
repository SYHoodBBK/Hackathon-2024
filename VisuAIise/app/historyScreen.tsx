import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>History</Text>

      <ScrollView contentContainerStyle={styles.historyList}>
        <View style={styles.historyCard}>
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>Library</Text>
            <View style={styles.arrow} />
          </View>
        </View>

        <View style={styles.historyCard}>
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>Unimelb</Text>
            <View style={styles.arrow} />
          </View>
        </View>

        <View style={styles.historyCard}>
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>Swanston</Text>
            <View style={styles.arrow} />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.backButton}>
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
  historyList: {
    flexGrow: 1,
    alignItems: 'center',
  },
  historyCard: {
    backgroundColor: '#FFF7E7',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A0DAD',
  },
  arrow: {
    width: 30,
    height: 20,
    backgroundColor: '#6A0DAD',
    marginLeft: 10,
    borderRadius: 5,
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

export default HistoryScreen;
