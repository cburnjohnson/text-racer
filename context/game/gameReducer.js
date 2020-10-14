import { INCREMENT_GAME_COUNTER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case INCREMENT_GAME_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        default:
            return state;
    }
};
