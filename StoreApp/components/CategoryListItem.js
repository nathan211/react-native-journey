import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import SkiiImage from '../assets/skiing.png';

export default function CategoryListItem(props){
    const { category } = props;
    return <TouchableOpacity activeOpacity={0.5} onPress={ () => { Alert.alert('clicked!') }}>
        <View style={style.container}>
            <Text style={style.title}>{category.name}</Text>
            <Image style={style.categoryImage} source={SkiiImage} />
        </View>
    </TouchableOpacity>;
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: 'red',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 30
    },  
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});