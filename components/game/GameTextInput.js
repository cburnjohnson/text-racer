import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function GameTextInput() {
    const [value, onChangeText] = React.useState('Type Here...');

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
        </View>
    );
}
