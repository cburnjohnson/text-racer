import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput style={styles.textInput} />
            <Text>Password</Text>
            <TextInput style={styles.textInput} />
            <Text>Confirm Password</Text>
            <TextInput style={styles.textInput} />
            
            <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => Alert.alert('Registered')}
                    underlayColor="#fff">
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
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
})