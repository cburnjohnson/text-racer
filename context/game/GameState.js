import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import {
    INCREMENT_GAME_COUNTER,
    START_GAME,
    SET_INPUT_VALUE,
    SET_TEXT_MATCH
} from '../types';

const GameState = (props) => {
    const initialState = {
        text: 'Test',
        inputValue: '',
        textMatch: null,
        counter: 0
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const startGame = () => {
        dispatch({ type: START_GAME });
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

    return (
        <GameContext.Provider
            value={{
                text: state.text,
                counter: state.counter,
                inputValue: state.inputValue,
                textMatch: state.textMatch,
                startGame,
                incrementGameCounter,
                setInputValue,
                setTextMatch
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
