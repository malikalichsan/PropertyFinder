'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

function urlForQueryAndPage (key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
  };

  data[key] = value;

  const querySting = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  console.log('https://api.nestoria.co.uk/api?' + querySting);

  return 'https://api.nestoria.co.uk/api?' + querySting;
}

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
    };
  }

  _onSearchTextChanged = (event) => {
    this.setState({searchString: event.nativeEvent.text});
    console.log(
      'Current: ' +
        this.state.searchString +
        ', Next: ' +
        event.nativeEvent.text,
    );
  };

  _executeQuery = (query) => {
    console.log(query);
    this.setState({isLoading: true});
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error,
        }),
      );
  };

  _handleResponse = (response) => {
    this.setState({isLoading: false, message: ''});
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigation.navigate('Results', {listings: response.listings});
    } else {
      this.setState({message: 'Location not recognized; please try again.'});
    }
  };

  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  render() {
    console.log('SearchScreen.render');

    const spinner = this.state.isLoading ? (
      <ActivityIndicator size={'large'} />
    ) : null;

    return (
      <View style={styles.container}>
        <Text style={styles.description}>Search for houses to buy!</Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            placeholder={'Search via name of postcode'}
            value={this.state.searchString}
            // onChange={() => {
            //   this._onSearchTextChanged();
            // }}
            onChange={this._onSearchTextChanged}
          />
          <Button onPress={this._onSearchPressed} color={'#48BBEC'} title={'Go'} />
        </View>
        <Image
          source={require('../../../Resources/house.png')}
          style={styles.image}
        />
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 8,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 5,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});
