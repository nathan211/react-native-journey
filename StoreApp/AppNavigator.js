import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Category from './screens/Category';
import Categories from './screens/Categories';


const AppNavigator = createStackNavigator({
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    }
});

export default AppNavigator;