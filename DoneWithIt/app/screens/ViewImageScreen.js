import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 70,
        left: 20
    },  
    deleteIcon: {
        position: 'absolute',
        top: 70,
        right: 20
    },  
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})