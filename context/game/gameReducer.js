import {
    INCREMENT_GAME_COUNTER,
    RESET_GAME,
    SET_GAME_STATUS,
    SET_GAME_TEXT,
    SET_INPUT_VALUE,
    SET_MODAL_VISIBLE,
    SET_TEXT_MATCH
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_GAME_TEXT:
            return {
                ...state,
                text: action.payload
            };
        case RESET_GAME:
            return {
                ...state,
                gameStatus: true,
                modalVisible: false,
                wpm: 0,
                inputValue: '',
                counter: 0
            };
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
        case SET_TEXT_MATCH:
            return {
                ...state,
                textMatch: action.payload
            };
        case SET_GAME_STATUS:
            return {
                ...state,
                gameStatus: action.payload
            };
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload
            };
        default:
            return state;
    }
};
