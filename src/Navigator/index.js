import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import SearchResultsScreen from '../Screens/SearchResultsScreen';
import SearchDetailScreen from '../Screens/SearchDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Results: {
      screen: SearchResultsScreen,
    },
    Detail: {
      screen: SearchDetailScreen,
    },
  },
  {
    initialRouteName: 'Search',
  },
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
