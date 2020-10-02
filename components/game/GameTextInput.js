import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function GameTextInput() {
    const [value, onChangeText] = React.useState('Type Here...');

    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
});
