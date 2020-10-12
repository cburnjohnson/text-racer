import { INCREMENT_COUNTER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: counter + 1
            };
        default:
            return state;
    }
};
