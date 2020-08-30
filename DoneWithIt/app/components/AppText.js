import React from 'react'
import { Text, StyleSheet } from 'react-native'


export default function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        ...Platform.select({
            ios: {
                fontFamily: 'Avenir',
                fontSize: 20
            },
            android: {
                fontFamily: 'Roboto',
                fontSize: 18
            }
        })
    }
})

