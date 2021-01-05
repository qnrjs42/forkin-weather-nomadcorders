import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

import Loading from './Loading';

class App extends React.Component {
  state = {
    isLoading: true,
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      
      this.setState({ isLoading: false });
    } catch (err) {
      console.error(err);
      Alert.alert("Can't find you", "So Sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;

    return isLoading ? <Loading /> : null;
  }
}

export default App;