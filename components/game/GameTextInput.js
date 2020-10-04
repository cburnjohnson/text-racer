import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function GameTextInput({
    inputValue,
    setInputValue,
    gameText,
    textMatch,
    setTextMatch
}) {
    useEffect(() => {
        inputValueArr = inputValue.split(' ');
        for (let i = 0; i < inputValueArr.length; i++) {
            console.log(i);
            console.log(inputValueArr[i]);
            console.log(gameTextArr[i]);
            if (inputValueArr[i] === gameTextArr[i]) {
                setTextMatch(true);
            } else if (
                inputValueArr[i] !== gameTextArr[i] &&
                inputValueArr[i] !== ''
            ) {
                setTextMatch(false);
            }
        }
    }, [inputValue]);

    let inputValueArr;
    let gameTextArr = gameText.split(' ');

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
