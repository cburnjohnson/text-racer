import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import { INCREMENT_COUNTER, START_GAME } from '../types';

const GameState = (props) => {
    const initialState = {
        counter: 0
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const startGame = () => {
        setInterval(function () {
            incrementCounter();
        }, 1000);
    };

    const incrementCounter = () => {
        dispatch({ type: INCREMENT_COUNTER });
    };

    return (
        <GameContext.Provider value={{ counter: state.counter, startGame }}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
