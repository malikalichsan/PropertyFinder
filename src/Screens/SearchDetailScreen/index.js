'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class SearchDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    console.log('SearchDetail.render');

    const {params} = this.props.navigation.state;
    const res = params.item;

    return (
      <View style={styles.rowContainer}>
        <Image style={styles.thumb} source={{uri: res.img_url}} />

        <View style={styles.textContainer}>
          <Text style={styles.price}>{res.price_formatted}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {res.title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 300,
    height: 400,
    margin: 'auto',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
  },
  title: {
    fontSize: 20,
    color: '#656565',
  },
  rowContainer: {
    flexDirection: 'column',
    padding: 10,
  },
})
