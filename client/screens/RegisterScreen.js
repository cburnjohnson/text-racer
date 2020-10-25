import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import authContext from '../context/auth/authContext';

export default function RegisterScreen() {
    const { register } = useContext(authContext);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const { username, email, password, password2 } = user;

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            Alert.alert('password doesnt match');
            return;
        } else {
            register({
                username,
                email,
                password
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={(username) => {
                    setUser({ ...user, username: username });
                }}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(password) => {
                    setUser({ ...user, password: password });
                }}
            />
            <Text>Confirm Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(password2) => {
                    setUser({ ...user, password2: password2 });
                }}
            />

            <TouchableOpacity
                style={styles.Btn}
                onPress={onSubmit}
                underlayColor="#fff"
            >
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 300
    },
    Btn: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 300,
        textAlign: 'center',
        marginTop: 15
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
