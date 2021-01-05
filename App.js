import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';

const API_KEY = '984d1dce34ea89c1cf26a4eef187b1c2';

class App extends React.Component {
  state = {
    isLoading: true,
  }

  getWeather = async(latitude, longitude) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const { data } = await axios.get(url);

    console.log(data);
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
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