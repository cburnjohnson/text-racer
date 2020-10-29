import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import setAuthToken from '../../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: null,
        isAuthenticated: null,
        user: null,
        error: null,
        loading: true
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        if (await SecureStore.getItemAsync('token')) {
            setAuthToken(await SecureStore.getItemAsync('token'));
        }

        try {
            const res = await axios.get('/api/auth');
            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post(
                'http://192.168.1.116:5000/api/users',
                formData,
                config
            );

            dispatch({ type: REGISTER_SUCCESS, payload: res.data });

            loadUser();
        } catch (err) {
            Alert.alert('err');
            dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                loading: state.loading,
                register,
                loadUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
