import React from 'react'
import { Text } from 'react-native';

import defaultStyle from '../config/styles';

export default function AppText({ children, style }) {
    return (
        <Text style={[defaultStyle.text, style]}>{children}</Text>
    )
}

