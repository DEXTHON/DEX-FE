
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;

const recentExhibitions = [
  { id: '1', image: { uri: 'https://picsum.photos/seed/exhibition1/400/300' } },
  { id: '2', image: { uri: 'https://picsum.photos/seed/exhibition2/400/300' } },
  { id: '3', image: { uri: 'https://picsum.photos/seed/exhibition3/400/300' } },
];

const recommendedExhibitions = [
  { id: '1', title: '새로운 감각의 발견' },
  { id: '2', title: '빛과 색의 향연' },
  { id: '3', title: '미래주의 특별전' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity
                style={styles.searchBar}
                onPress={() => navigation.navigate('Search')}
            >
                <Text style={styles.searchBarText}>전시를 검색해보세요</Text>
            </TouchableOpacity>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>최근에 본 전시</Text>
                <FlatList
                data={recentExhibitions}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('NFT사진')}>
                        <Image source={item.image} style={styles.recentImage} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>이런 전시는 어떠신가요?</Text>
                <FlatList
                data={recommendedExhibitions}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.recommendationItemContainer} onPress={() => navigation.navigate('Details')}>
                        <View style={styles.recommendationItem}>
                            <Text style={styles.recommendationTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  searchBar: {
    margin: 16,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d6e4f0',
    alignItems: 'center',
  },
  searchBarText: {
    color: '#4a90e2',
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    marginLeft: 16,
    marginBottom: 15,
  },
  itemContainer: {
    width: width,
    alignItems: 'center',
  },
  recentImage: {
    width: ITEM_WIDTH,
    height: 220,
    borderRadius: 15,
  },
  recommendationItemContainer: {
    width: width,
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    alignItems: 'center',
  },
  recommendationItem: {
    width: ITEM_WIDTH,
    height: 120,
    backgroundColor: '#4a90e2',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  recommendationTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
