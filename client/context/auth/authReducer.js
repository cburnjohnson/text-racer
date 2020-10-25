import * as SecureStore from 'expo-secure-store';

import { REGISTER_SUCCESS } from '../types';

export default async (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            await SecureStore.setItemAsync('token', action.payload.token);
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
