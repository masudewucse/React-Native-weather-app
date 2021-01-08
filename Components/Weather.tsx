import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../utility";

interface WeatherProps {
  currentWeather: Array<any>;
}

export const Weather: React.FC<WeatherProps> = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [weaterinfo],
    name,
  } = currentWeather;

  const iconUrl = `https://openweathermap.org/img/wn/${weaterinfo.icon}@4x.png`;

  return (
    <View style={styles.weainfo}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.image} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.description}>{weaterinfo.description}</Text>
      <Text style={styles.textSecondary}>{weaterinfo.main}</Text>
    </View>
  );
};

const { border, primary, secondary } = colors;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color:'blue',
    textTransform: "uppercase",
  },
  weainfo: {
    alignItems: "center",
  },
  description: {
    textTransform: "capitalize",
    color: "green",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: primary,
  },
  textSecondary: {
    fontSize: 20,
    color: secondary,
    fontWeight: "500",
    marginTop: 10,
  },
});
