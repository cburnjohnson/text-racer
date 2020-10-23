import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ResultsScreen from './screens/ResultsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import GameState from './context/game/GameState';
import AuthState from './context/auth/AuthState';

const Stack = createStackNavigator();

export default function App() {
    return (
        <AuthState>
            <GameState>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Register">
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                        />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="Text Racer"
                            component={GameScreen}
                        />
                        <Stack.Screen
                            name="Results"
                            component={ResultsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </GameState>
        </AuthState>
    );
}
