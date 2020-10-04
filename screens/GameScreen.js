import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';

export default function GameScreen() {
    const [gameText, setGameText] = useState('Random text');
    const [inputValue, setInputValue] = useState('');
    const [textMatch, setTextMatch] = useState(null);

    return (
        <View style={styles.container}>
            <GameText gameText={gameText} textMatch={textMatch} />
            <View>
                <WordsPerMinute />
                <GameTextInput
                    gameText={gameText}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    textMatch={textMatch}
                    setTextMatch={setTextMatch}
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
