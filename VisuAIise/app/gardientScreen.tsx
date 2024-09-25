import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const MyGuardianScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Guardian</Text>

      <View style={styles.guardianCard}>
        <Image
          source={{ uri: 'https://example.com/profile-image.jpg' }} // Replace with actual image URL or import an image locally
          style={styles.profileImage}
        />
        <View style={styles.guardianInfo}>
          <Text style={styles.guardianName}>Name</Text>
          <Text style={styles.guardianDetails}>John Smith</Text>
        </View>
        <TouchableOpacity style={styles.unlinkButton}>
          <Text style={styles.unlinkButtonText}>Unlink</Text>
        </TouchableOpacity>
      </View>

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
  guardianCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  guardianInfo: {
    flex: 1,
  },
  guardianName: {
    fontSize: 18,
    fontWeight: '600',
  },
  guardianDetails: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  unlinkButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  unlinkButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
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

export default MyGuardianScreen;
