import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'; 

function screen({children}) {
    return (
       <SafeAreaView style={styles.screen}>
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