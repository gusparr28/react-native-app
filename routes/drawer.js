import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../routes/homeStack';
import AboutStack from '../routes/aboutStack';

const RootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {
    return (
        <NavigationContainer>
            <RootDrawerNavigator.Navigator>
                <RootDrawerNavigator.Screen name="Home" component={HomeStack}></RootDrawerNavigator.Screen>
                <RootDrawerNavigator.Screen name="About" component={AboutStack}></RootDrawerNavigator.Screen>
            </RootDrawerNavigator.Navigator>
        </NavigationContainer>
    )
};
