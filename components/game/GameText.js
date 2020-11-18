import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import gameContext from '../../context/game/gameContext';

export default function GameText() {
    const { text, textMatch } = useContext(gameContext);

    return (
        <View style={styles.gameTextContainer}>
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
    },
    gameTextContainer: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    }
});
