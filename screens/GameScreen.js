import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';

export default function GameScreen() {
    const [gameText, setGameText] = useState('Random text');
    const [inputValue, setInputValue] = useState('');
    const [textMatch, setTextMatch] = useState(null);
    const [time, setTime] = useState(0);
    const [gameStatus, setGameStatus] = useState(true);

    if (gameStatus) {
        setTimeout(() => {
            setTime(time + 1);
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <GameText gameText={gameText} textMatch={textMatch} />
            <View>
                <Text style={{ textAlign: 'center' }}>Time: {time}</Text>
                <WordsPerMinute inputValue={inputValue} time={time} />
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
