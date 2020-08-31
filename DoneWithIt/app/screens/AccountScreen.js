import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Nathan Smith"
                    subTitle="nvp21199@gmail.com"
                    image={require('../assets/fi.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;