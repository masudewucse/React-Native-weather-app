import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utility";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { primary, secondary, border } = colors;
interface DetailsProps {
  currentWeather: Array<any>;
  unit: string
}
export const Details: React.FC<DetailsProps> = ({ currentWeather, unit }) => {
  const {
    main: { feels_like, humidity,pressure },
    wind:{speed}
  } = currentWeather;

  const windspeed = unit === 'metric' ? `${Math.round(speed)} m/s`: `${Math.round(speed)} m/hour` 
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: border,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color={primary} />
            <View style={styles.weatherDetailsItem}>
              <Text>Feels like:</Text>
              <Text>{feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
        <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color={primary} />
            <View style={styles.weatherDetailsItem}>
              <Text>Humidity:</Text>
              <Text>{humidity}%</Text>
            </View>
          </View>
        </View>
      </View>


      <View style={{...styles.weatherDetailsRow,  borderTopColor: border, borderTopWidth:1}}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: border,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="weather-windy" size={30} color={primary} />
            <View style={styles.weatherDetailsItem}>
              <Text>WindSpeed:</Text>
              <Text>{windspeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
        <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={30} color={primary} />
            <View style={styles.weatherDetailsItem}>
              <Text>Pressure:</Text>
              <Text>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>    

    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    margin: 15,
    width: "85%",
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItem: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  //   textSecondary:{
  //       fontSize:15,
  //       color: secondary,
  //       fontWeight:700,
  //       margin: 7
  //   }
});
