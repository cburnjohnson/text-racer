import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import gameContext from '../../context/game/gameContext';

export default function GameText() {

    const {text, textMatch} = useContext(gameContext);

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
