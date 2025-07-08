
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const exhibitions = [
  { id: '1', title: '전시 1' },
  { id: '2', title: '전시 2' },
  { id: '3', title: '전시 3' },
];

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const filteredExhibitions = exhibitions.filter(exhibition =>
    exhibition.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="검색"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredExhibitions}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details')}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    margin: 16,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default SearchScreen;
