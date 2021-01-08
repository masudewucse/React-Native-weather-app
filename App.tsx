import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import {Weather} from './Components/Weather';
import {Selector} from './Components/Selector';
import { Refresh } from "./Components/Refresh";
import {Details} from './Components/Details';

const API = "YOUR API KEY"; 
const REQ_URL = "http://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [error, setError] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<Array<any>>([]);
  const [units, setUnits] = useState<string>('metric');
  //const [loader, setLoader] = useState<boolean>(true);

  const loadLocation = async () => {
    setCurrentWeather([]);
    
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setError("Access to location is needed to run the App");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      //console.log(`latitude: ${latitude}  longitude: ${longitude}`);
      const API_REQ_URL = `${REQ_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${API}`;

      const response = await fetch(API_REQ_URL);
      const results = await response.json();

      if (response.ok) {
        //console.log(results);
        setCurrentWeather(results);
      } else {
        setError(results.message);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    loadLocation();
  }, [units]);

  //console.log("currentWeather", currentWeather);

  if (currentWeather.length != 0) {
    return (
      <View style={styles.container}>
        
        <StatusBar style="auto" />
        <View style={styles.main}>
         
          <Selector unit={units} setUnit = {setUnits} />
          <Refresh loadLocation={loadLocation}/>
          <Weather currentWeather = {currentWeather}/>
        </View>
        <Details currentWeather = {currentWeather} unit={units}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Refresh loadLocation={loadLocation}/>
        <Text>{error}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#acb45d",
    alignItems: "center",
    justifyContent: "center",
  },
  main:{
    justifyContent: 'center',
    flex:1
  }
});
