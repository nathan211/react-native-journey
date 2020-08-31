import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'; 

function screen({children, style}) {
    return (
       <SafeAreaView style={[styles.screen, style]}>
           {children}
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default screen;