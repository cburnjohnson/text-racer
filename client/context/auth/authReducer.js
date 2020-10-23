import { AsyncStorage } from 'react-native';

import { REGISTER_SUCCESS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            AsyncStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        default:
            return state;
    }
};
