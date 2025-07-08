
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/800x600' }} style={styles.mapImage} />
      <View style={styles.congestionInfo}>
        <Text style={styles.congestionText}>혼잡도: 원활</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  congestionInfo: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  congestionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapScreen;
