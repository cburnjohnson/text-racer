import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import gameContext from '../context/game/gameContext';

import GameTextInput from '../components/game/GameTextInput';
import GameText from '../components/game/GameText';
import ResultsModal from '../components/game/ResultsModal';

export default function GameScreen() {
    const {
        gameStatus,
        counter,
        startGame,
        incrementGameCounter,
        setGameStatus,
        setModalVisible
    } = useContext(gameContext);

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
    }, [gameStatus]);

    return (
        <View style={styles.container}>
            <ResultsModal />
            <GameText />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 180 : 20}
                enabled={Platform.OS === 'ios' ? true : false}
            >
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
        paddingRight: 20,
        backgroundColor: '#BDDDFF'
    }
});
