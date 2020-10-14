import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameText({ text, textMatch }) {
    return (
        <View>
            <Text
                style={
                    textMatch === null
                        ? styles.text
                        : textMatch === true
                        ? styles.textMatch
                        : textMatch === false
                        ? styles.textNoMatch
                        : styles.textInput
                }
            >
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    textMatch: {
        color: 'green'
    },
    textNoMatch: {
        color: 'red'
    }
});
