import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Home from './screens/Home';
import Game from './screens/Game';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
