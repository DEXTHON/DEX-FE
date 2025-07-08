
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MapScreen from '../screens/MapScreen';
import MyInfoScreen from '../screens/MyInfoScreen';
import NftScreen from '../screens/NftScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4a90e2' }, headerTintColor: '#fff' }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ title: '전시 검색' }}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '상세 정보' }}/>
            <Stack.Screen name="Map" component={MapScreen} options={{ title: '전시장 지도' }}/>
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '내정보') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'NFT사진') {
            iconName = focused ? 'images' : 'images-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4a90e2',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="홈" component={HomeStack} />
      <Tab.Screen name="내정보" component={MyInfoScreen} />
      <Tab.Screen name="NFT사진" component={NftScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
