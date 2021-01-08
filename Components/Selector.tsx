import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface SelectorProps {
  unit: string;
  setUnit: Function;
}

export const Selector: React.FC<SelectorProps> = ({ unit, setUnit }) => {
  return (
    <View style={styles.selector}>
      <Picker selectedValue={unit} onValueChange={(item) => setUnit(item)} mode='dropdown'>
        <Picker.Item label="C°" value="metrics" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
        selector:{
            position:'absolute',
            ...Platform.select({
                ios:{
                    top: -20,
                },
                android:{
                    top:20
                }
            }),
           
            left:-50,
            height:50,
            width:100
        }
});
