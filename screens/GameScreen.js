import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';

export default function GameScreen() {
    const [gameText, setGameText] = useState('Random text');
    const [inputValue, setInputValue] = useState('Type Here...');

    return (
        <View style={styles.container}>
            <GameText gameText={gameText} />
            <View>
                <WordsPerMinute />
                <GameTextInput
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
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
