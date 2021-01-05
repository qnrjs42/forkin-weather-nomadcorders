import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', '#d39d38'],
    title: 'Haze',
    subTitle: 'Haze sub',
  },
  "Thunderstorm": {
    iconName: 'weather-lighting',
    gradient: ['#373b44', '#4286f4'],
    title: 'Thunderstorm',
    subTitle: 'Thunderstorm sub',
  },
  "Drizzle": {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Drizzle',
    subTitle: 'Drizzle sub',
  },
  "Rain": {
    iconName: 'weather-rainy',
    gradient: ['#00c6fb', '#005bea'],
    title: 'Rain',
    subTitle: 'Rain sub',
  },
  "Snow": {
    iconName: 'weather-snowy',
    gradient: ['#7de2fc', '#b9b6e5'],
    title: 'Snow',
    subTitle: 'Snow sub',
  },
  "Atmosphere": {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Atmosphere',
    subTitle: 'Atmosphere sub',
  },
  "Clear": {
    iconName: 'weather-sunny',
    gradient: ['#ff7300', '#fef253'],
    title: 'Clear',
    subTitle: 'Clear sub',
  },
  "Clouds": {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Clouds',
    subTitle: 'Clouds sub',
  },
  "Mist": {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Mist',
    subTitle: 'Mist sub',
  },
  "Dust": {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Dust',
    subTitle: 'Dust sub',
  },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          size={96} 
          name={weatherOptions[condition].iconName} 
          color="white" 
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textCotainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(
    ["Thunderstorm", "Drizzle", "Rain", 
    "Snow", "Atmosphere", "Clear", "Clouds", "Haze",
    "Mist", "Dust"
  ]
  ).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10
  },
  subTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  textCotainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  }
})