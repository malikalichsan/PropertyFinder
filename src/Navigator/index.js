import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import SearchResultsScreen from '../Screens/SearchResultsScreen';

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
  },
  {
    initialRouteName: 'Search',
  },
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
