import {
    INCREMENT_GAME_COUNTER,
    SET_GAME_STATUS,
    SET_INPUT_VALUE,
    SET_MODAL_VISIBLE,
    SET_TEXT_MATCH
} from '../types';

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
        case SET_TEXT_MATCH:
            return {
                ...state,
                textMatch: action.payload
            };
        case SET_GAME_STATUS:
            console.log(state.gameStatus);
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
