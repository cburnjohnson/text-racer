import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';
import ResultsModal from '../components/game/ResultsModal';

export default function GameScreen({ navigation }) {
    const [gameText, setGameText] = useState('Test');
    const [inputValue, setInputValue] = useState('');
    const [textMatch, setTextMatch] = useState(null);
    const [time, setTime] = useState(0);
    const [gameStatus, setGameStatus] = useState(true);
    const [wpm, setWpm] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchText = useCallback(async () => {
        const req = await fetch(
            'https://uselessfacts.jsph.pl/random.json?language=en'
        );
        const res = await req.json();
        setGameText(res.text);
    });

    const resetGame = () => {
        setGameStatus(true);
        setModalVisible(false);
        setInputValue('');
        setWpm(0);
        setTime(0);
    };

    let timer;
    const startGame = () => {
        timer = setInterval(() => setTime(time => time + 1), 1000)
    }


    useEffect(() => {
        if (gameStatus === false) {
            setModalVisible(true);
        } else {
            startGame();
        }
        return () => {
            clearInterval(timer);
        }
        // fetchText();
    }, [gameStatus]);

   
    return (
        <View style={styles.container}>
            <ResultsModal
                wpm={wpm}
                modalVisible={modalVisible}
                time={time}
                resetGame={resetGame}
            />
            <GameText gameText={gameText} textMatch={textMatch} />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 180 : 20}
                enabled={Platform.OS === 'ios' ? true : false}
            >
                <Text style={{ textAlign: 'center' }}>Time: {time}</Text>
                <WordsPerMinute
                    inputValue={inputValue}
                    time={time}
                    wpm={wpm}
                    setWpm={setWpm}
                />
                <GameTextInput
                    gameText={gameText}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    textMatch={textMatch}
                    setTextMatch={setTextMatch}
                    setGameStatus={setGameStatus}
                />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
    },
});
