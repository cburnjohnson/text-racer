import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameParagraph from '../components/game/GameParagraph';
import WordsPerMinute from '../components/game/WordsPerMinute';

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <GameParagraph />
            <View>
                <WordsPerMinute />
                <GameTextInput />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20
    }
});
