import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const SavedRouteScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saved Route</Text>

      <ScrollView contentContainerStyle={styles.routeList}>
        <View style={styles.routeCard}>
          <View style={styles.routeItem}>
            <Text style={styles.routeText}>Library</Text>
            <View style={styles.arrow} />
            <Text style={styles.routeText}>Home</Text>
          </View>
        </View>

        <View style={styles.routeCard}>
          <View style={styles.routeItem}>
            <Text style={styles.routeText}>Home</Text>
            <View style={styles.arrow} />
            <Text style={styles.routeText}>Unimelb</Text>
          </View>
        </View>

        <View style={styles.routeCard}>
          <View style={styles.routeItem}>
            <Text style={styles.routeText}>Swanston</Text>
            <View style={styles.arrow} />
            <Text style={styles.routeText}>Home</Text>
          </View>
        </View>
      </ScrollView>

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
  routeList: {
    flexGrow: 1,
    alignItems: 'center',
  },
  routeCard: {
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
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A0DAD',
  },
  arrow: {
    width: 50,
    height: 20,
    backgroundColor: '#6A0DAD',
    marginHorizontal: 10,
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

export default SavedRouteScreen;
