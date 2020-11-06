import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

import GameState from './context/game/GameState';

const Stack = createStackNavigator();

export default function App() {
    return (
        <GameState>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Text Racer" component={GameScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GameState>
    );
}
