import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="about"
                component={About}
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='About' />
                    }
                }}>
            </Stack.Screen>
        </Stack.Navigator>
    )
};
