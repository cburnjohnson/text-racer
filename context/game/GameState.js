import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import { INCREMENT_GAME_COUNTER, START_GAME } from '../types';

const GameState = (props) => {
    const initialState = {
        text: 'Test',
        counter: 0
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const startGame = () => {
        dispatch({ type: START_GAME });
    };

    const incrementGameCounter = () => {
        dispatch({ type: INCREMENT_GAME_COUNTER });
    };

    return (
        <GameContext.Provider
            value={{
                text: state.text,
                counter: state.counter,
                startGame,
                incrementGameCounter
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
