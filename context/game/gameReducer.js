import { INCREMENT_GAME_COUNTER, SET_INPUT_VALUE } from '../types';

export default (state, action) => {
    switch (action.type) {
        case INCREMENT_GAME_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            };
        default:
            return state;
    }
};
