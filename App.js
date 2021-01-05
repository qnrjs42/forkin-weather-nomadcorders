import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';
import { API_KEY } from './key';
import Weather from './Weather';

class App extends React.Component {
  state = {
    isLoading: true,
  }

  getWeather = async(latitude, longitude) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);

    this.setState({
      isLoading: false,
      temp: data.main.temp,
    })

    console.log(data);
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
    } catch (err) {
      console.error(err);
      Alert.alert("Can't find you", "So Sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}

export default App;