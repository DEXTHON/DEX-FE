
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>내 정보</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyInfoScreen;
