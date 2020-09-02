import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyle from '../config/styles';
 
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyle.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;