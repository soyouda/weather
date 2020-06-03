import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "bf71336d7c9f3cbda6a39d054f2c3232";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data: {
      main: { temp }, 
      weather,
      name
    } 
  } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
    )
    this.setState({
      isLoading:false, 
      condition: weather[0].main, 
      temp,
      city: name
    })
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Send to API and get weather.
      //console.log(coords.latitude, coords.longitude);      
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you");
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, city } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} city={city} />
  }
}