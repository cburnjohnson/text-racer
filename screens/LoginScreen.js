import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput style={styles.textInput} />
            <Text>Password</Text>
            <TextInput style={styles.textInput} />
        </View>
    )
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
    }
})