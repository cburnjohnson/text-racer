import * as SecureStore from 'expo-secure-store';

import { REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR } from '../types';

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
        case AUTH_ERROR:
            await SecureStore.deleteItemAsync('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload,
                loading: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
