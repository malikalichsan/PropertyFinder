import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  render() {
    return <Text style={styles.description}>HomeScreen</Text>;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
