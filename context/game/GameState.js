import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

import { INCREMENT_GAME_COUNTER, START_GAME } from '../types';

const GameState = (props) => {
    const initialState = {
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
            value={{ counter: state.counter, startGame, incrementGameCounter }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
