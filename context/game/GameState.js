import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import { INCREMENT_GAME_COUNTER, START_GAME, SET_INPUT_VALUE } from '../types';

const GameState = (props) => {
    const initialState = {
        text: 'Test',
        inputValue: '',
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

    return (
        <GameContext.Provider
            value={{
                text: state.text,
                counter: state.counter,
                inputValue: state.inputValue,
                startGame,
                incrementGameCounter,
                setInputValue
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
