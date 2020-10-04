import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';

export default function GameScreen() {
    const [text, setText] = useState('Random text');

    return (
        <View style={styles.container}>
            <GameText />
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
