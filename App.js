import React from 'react';
import * as Location from 'expo-location';

import Loading from './Loading';

class App extends React.Component {

  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}

export default App;