import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetails(props) {
    return (
        <View>
            <Image 
                style={styles.image}
                source={require('../assets/jacket.jpg')}
            />
            <View 
                style={styles.detailsContainer}>
                <AppText style={styles.title}>jacket for sale!</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View
                style={styles.userContainer} > 
                <ListItem 
                    image={require('../assets/fi.jpg')}
                    title="Nathan Smith"
                    subTitle="6 Listings"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        marginVertical: 10,
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },
    userContainer: {
        marginTop: 40
    }
})

export default ListingDetails;