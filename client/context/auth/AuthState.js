import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import { REGISTER_USER } from '../types';

const AuthState = (props) => {
    const initialState = {

    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register User
    const registerUser = (registerData) => {
        dispatch({type: REGISTER_USER, payload: registerData})
    }

    return (
        <AuthContext.Provider value={registerUser}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;