import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import {
    INCREMENT_GAME_COUNTER,
    START_GAME,
    SET_INPUT_VALUE,
    SET_TEXT_MATCH,
    SET_GAME_STATUS,
    SET_WPM,
    SET_MODAL_VISIBLE,
    RESET_GAME,
    SET_GAME_TEXT
} from '../types';

const GameState = (props) => {
    const initialState = {
        gameStatus: true,
        wpm: 0,
        text: 'Loading...',
        inputValue: '',
        textMatch: null,
        counter: 0,
        modalVisible: false
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const fetchText = async () => {
        try {
            const req = await fetch(
                'https://uselessfacts.jsph.pl/random.json?language=en'
            );
            const res = await req.json();
            dispatch({ type: SET_GAME_TEXT, payload: res.text });
        } catch (error) {
            console.log(error);
        }
    };

    const startGame = () => {
        fetchText();
        console.log('fires');
        dispatch({ type: START_GAME });
    };

    const resetGame = () => {
        dispatch({ type: RESET_GAME });
    };

    const incrementGameCounter = () => {
        dispatch({ type: INCREMENT_GAME_COUNTER });
    };

    const setInputValue = (input) => {
        dispatch({ type: SET_INPUT_VALUE, payload: input });
    };

    const setTextMatch = (doesTextMatch) => {
        dispatch({ type: SET_TEXT_MATCH, payload: doesTextMatch });
    };

    const setGameStatus = (gameStatus) => {
        dispatch({ type: SET_GAME_STATUS, payload: gameStatus });
    };

    const setWpm = (wpm) => {
        dispatch({ type: SET_WPM, payload: wpm });
    };

    const setModalVisible = (modalVisible) => {
        dispatch({ type: SET_MODAL_VISIBLE, action: modalVisible });
    };

    return (
        <GameContext.Provider
            value={{
                gameStatus: state.gameStatus,
                text: state.text,
                counter: state.counter,
                inputValue: state.inputValue,
                textMatch: state.textMatch,
                wpm: state.wpm,
                modalVisible: state.modalVisible,
                setModalVisible,
                setWpm,
                startGame,
                incrementGameCounter,
                setInputValue,
                setTextMatch,
                setGameStatus,
                resetGame,
                fetchText
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
