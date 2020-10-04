import React from 'react';
import { View, Text } from 'react-native';

export default function GameText({ gameText }) {
    return (
        <View>
            <Text>{gameText}</Text>
        </View>
    );
}
