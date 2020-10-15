import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import gameContext from '../context/game/gameContext';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import WordsPerMinute from '../components/game/WordsPerMinute';
import ResultsModal from '../components/game/ResultsModal';

export default function GameScreen({ navigation }) {
    const [gameStatus, setGameStatus] = useState(true);
    const [wpm, setWpm] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const {
        counter,
        text,
        startGame,
        textMatch,
        incrementGameCounter,
        inputValue,
        setInputValue
    } = useContext(gameContext);

    const fetchText = useCallback(async () => {
        const req = await fetch(
            'https://uselessfacts.jsph.pl/random.json?language=en'
        );
        const res = await req.json();
        // setGameText(res.text);
    });

    const resetGame = () => {
        setGameStatus(true);
        setModalVisible(false);
        setInputValue('');
        setWpm(0);
    };

    useEffect(() => {
        let gameCounter;
        if (gameStatus === false) {
            setModalVisible(true);
        } else {
            startGame();
            gameCounter = setInterval(() => incrementGameCounter(), 1000);
        }
        return () => {
            clearInterval(gameCounter);
        };
        // fetchText();
    }, [gameStatus]);

    return (
        <View style={styles.container}>
            <ResultsModal
                wpm={wpm}
                modalVisible={modalVisible}
                resetGame={resetGame}
                counter={counter}
            />
            <GameText text={text} textMatch={textMatch} />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 180 : 20}
                enabled={Platform.OS === 'ios' ? true : false}
            >
                <Text style={{ textAlign: 'center' }}>Time: {counter}</Text>
                <WordsPerMinute
                    inputValue={inputValue}
                    wpm={wpm}
                    setWpm={setWpm}
                    counter={counter}
                />
                <GameTextInput setGameStatus={setGameStatus} />
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
        paddingRight: 20
    }
});
