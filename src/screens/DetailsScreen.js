
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Image source={{ uri: 'https://via.placeholder.com/400x300' }} style={styles.mapImage} />
        </TouchableOpacity>
      <Text style={styles.title}>전시 제목</Text>
      <Text style={styles.description}>전시 상세 설명입니다. 여기에 전시와 관련된 자세한 내용이 표시됩니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
  },
});

export default DetailsScreen;
