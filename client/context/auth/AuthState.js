import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import { REGISTER_SUCCESS } from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({type: REGISTER_SUCCESS, payload: res.data})

            // loadUser();

        } catch (err) {
            dispatch({type: REGISTER_FAIL, payload: err.response.data.msg})
        }

    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                loading: state.loading,
                register,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;