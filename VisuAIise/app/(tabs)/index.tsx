import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const [selectedOption, setSelectedOption] = useState('TRANSPORT');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.continueNavigation}>
          <Text style={styles.continueText}>Continue Navigation</Text>
          <Text style={styles.destinationText}>🏠 Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.startNavigation}>
          <Text style={styles.startText}>Start{'\n'}Navigation</Text>
          <View style={styles.navigationOptions}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'TRANSPORT' ? styles.selectedOption : styles.unselectedOption,
            ]}
            onPress={() => setSelectedOption('TRANSPORT')}
          >
              <Text style={styles.optionText}>TRANSPORT</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'WALK' ? styles.selectedOption : styles.unselectedOption,
            ]}
            onPress={() => setSelectedOption('WALK')}
          >
              <Text style={styles.optionText}>WALK</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  navigationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueNavigation: {
    backgroundColor: '#FFD700',
    width: '90%',
    height: '40%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  destinationText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  startNavigation: {
    backgroundColor: '#6A0DAD',
    width: '90%',
    height: '40%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  navigationOptions: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  optionButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#fff',
  },
  unselectedOption: {
    backgroundColor: 'black',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000',
  },
});
