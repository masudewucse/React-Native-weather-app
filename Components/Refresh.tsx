import React from 'react'
import {Platform, View, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

interface RefreshProps{
    loadLocation: Function
}

export const  Refresh:React.FC<RefreshProps> = ({loadLocation}) =>{
    const reloadData = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
    return (
        <View style={styles.refresher}>
            <Ionicons onPress={loadLocation} name={reloadData} size={24} color="green" />
            </View>
        
    )
}

const styles = StyleSheet.create({
    refresher:{
        position:'absolute',
        top: 75,
        right:20
    }
})
