import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function GameTextInput({
    inputValue,
    setInputValue,
    gameText,
    textMatch,
    setTextMatch,
    setGameStatus
}) {
    // after space check the last word
    useEffect(() => {
        if (inputValue === gameText) {
            setGameStatus(false);
        }

        inputValueLength = inputValue.split('').length;
        let currentGameText = gameText.substring(0, inputValueLength);

        if (currentGameText === inputValue) {
            setTextMatch(true);
        } else {
            setTextMatch(false);
        }

        if (inputValue === '') {
            setTextMatch(null);
        }
    }, [inputValue]);

    let inputValueLength;

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
                placeholder={'Type here...'}
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
