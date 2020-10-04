import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function GameTextInput({
    inputValue,
    setInputValue,
    gameText,
    textMatch,
    setTextMatch
}) {
    return (
        <View>
            <TextInput
                style={
                    textMatch === null
                        ? styles.textInput
                        : textMatch === true
                        ? styles.textInputMatch
                        : textMatch === false
                        ? styles.textInputNoMatch
                        : styles.textInput
                }
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
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
    },
    textInputMatch: {
        height: 40,
        borderColor: 'green',
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    textInputNoMatch: {
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
});
