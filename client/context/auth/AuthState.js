import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types';

const AuthState = (props) => {
    const initialState = {
        token: AsyncStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null,
        loading: true
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log(formData);
        try {
            console.log('before firingg');
            const res = await axios.post(
                'http://192.168.1.116:5000/api/users',
                formData,
                config
            );

            dispatch({ type: REGISTER_SUCCESS, payload: res.data });

            // loadUser();
        } catch (err) {
            console.log(err);
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
                register
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
